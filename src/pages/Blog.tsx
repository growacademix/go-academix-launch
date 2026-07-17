import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Blog | GO ACADEMIX — Allied Health School Operations</title>
        <meta
          name="description"
          content="Playbooks, buyer guides, and compliance tips for allied health school owners. Written by the team behind GO ACADEMIX."
        />
        <link rel="canonical" href="/blog" />
        <meta property="og:title" content="GO ACADEMIX Blog" />
        <meta property="og:url" content="/blog" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-16 border-b border-border pb-10">
            <p className="text-xs uppercase tracking-widest text-primary font-mono mb-4">
              The Journal
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Notes from running an allied health school
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Operations, compliance, and software takes from the team behind
              GO ACADEMIX and Allied Health Career Training.
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block group border border-border rounded-lg p-8 hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-muted-foreground mb-4">
                  <span className="text-primary">{post.category}</span>
                  <span>·</span>
                  <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">{post.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Read post <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 border border-border rounded-lg p-8 md:p-10 bg-muted/30">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                Need help marketing your CNA school?
              </h2>
              <p className="text-muted-foreground mb-6">
                We have built a significantly large and profitable allied health
                school. Book a free consultation and we will walk through what is
                actually working for us.
              </p>
              <Link
                to="/book-demo"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a marketing consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
