import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const renderContent = (content: string) => {
  const blocks = content.trim().split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-semibold tracking-tight mt-10 mb-3">
          {trimmed.replace(/^###\s+/, "")}
        </h3>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-semibold tracking-tight mt-12 mb-4">
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").map((l) => l.replace(/^-\s+/, ""));
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 my-4 text-foreground/90">
          {items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-foreground/90 leading-relaxed my-4">
        {trimmed}
      </p>
    );
  });
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const url = `/blog/${post.slug}`;
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    keywords: post.keywords,
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{post.title} | GO ACADEMIX</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <article className="container mx-auto px-6 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>

          <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-muted-foreground mb-6">
            <span className="text-primary">{post.category}</span>
            <span>·</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-10 border-b border-border pb-8">
            By {post.author}
          </p>

          <div className="prose-lg">{renderContent(post.content)}</div>

          <div className="mt-16 border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-muted-foreground">
              Want to see how GO ACADEMIX runs a real school?
            </p>
            <Button asChild className="rounded-full">
              <Link to="/book-demo">Book a demo with Jocelyn</Link>
            </Button>
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-xs uppercase tracking-widest font-mono text-muted-foreground mb-6">
                Keep reading
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="group border border-border rounded-lg p-6 hover:border-primary transition-colors"
                  >
                    <p className="text-xs uppercase tracking-widest font-mono text-primary mb-2">
                      {p.category}
                    </p>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      Read <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
