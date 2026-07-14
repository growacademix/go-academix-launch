import logo from "@/assets/logo-goacademix-official.png.asset.json";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-accent/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src={logo.url} alt="GO ACADEMIX" className="h-10 w-auto" />
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} GO ACADEMIX. Transforming healthcare education.
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
