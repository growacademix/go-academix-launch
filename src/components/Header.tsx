import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-goacademix-official.png.asset.json";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/advisorycouncil", label: "Advisory Council" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo.url} alt="GO ACADEMIX" className="h-16 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="default" className="rounded-full">
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
            <Button asChild variant="outline" size="default" className="rounded-full">
              <a href="https://app.goacademix.com">Login</a>
            </Button>
          </div>

          {/* Mobile nav */}
          <div className="flex sm:hidden items-center gap-2">
            <Button asChild size="sm" className="rounded-full">
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <a href="https://app.goacademix.com">Login</a>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="rounded-full"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] max-w-sm">
                <div className="flex flex-col h-full">
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 pb-6 border-b border-border"
                  >
                    <img src={logo.url} alt="GO ACADEMIX" className="h-12 w-auto" />
                  </Link>
                  <nav className="flex flex-col gap-1 py-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 px-2 border-b border-border/50"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pb-6">
                    <Button
                      asChild
                      size="lg"
                      className="w-full rounded-full"
                      onClick={() => setOpen(false)}
                    >
                      <Link to="/book-demo">Book a Demo</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
