import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="GO ACADEMIX Logo" className="h-12 w-auto" />
          </div>
          <Button size="lg" className="shadow-md">
            Request Early Access
          </Button>
        </div>
      </div>
    </header>
  );
};
