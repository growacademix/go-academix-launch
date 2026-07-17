import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-goacademix-official.png.asset.json";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo.url} alt="GO ACADEMIX" className="h-16 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              Home
            </Link>
            <Link
              to="/advisorycouncil"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              Advisory Council
            </Link>
            <Link
              to="/team"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              Team
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              Blog
            </Link>
            <Button asChild size="default" className="rounded-full">
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
