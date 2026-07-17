import { useState, useEffect } from "react";
import { Phone, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PhoneLinkProps {
  number: string;
  label?: string;
  className?: string;
  iconClassName?: string;
}

export const PhoneLink = ({ number, label, className = "", iconClassName = "" }: PhoneLinkProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const check = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsMobile(check);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(true);
      toast({ title: "Phone number copied", description: number });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Could not copy", description: number, variant: "destructive" });
    }
  };

  const display = label || number;

  if (isMobile) {
    return (
      <a
        href={`tel:${number.replace(/\s/g, "")}`}
        className={`inline-flex items-center gap-2 hover:opacity-80 transition-opacity ${className}`}
      >
        <Phone className={`w-4 h-4 ${iconClassName}`} />
        <span>{display}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 hover:opacity-80 transition-opacity ${className}`}
      title="Copy phone number"
    >
      {copied ? <Check className={`w-4 h-4 ${iconClassName}`} /> : <Phone className={`w-4 h-4 ${iconClassName}`} />}
      <span>{display}</span>
    </button>
  );
};
