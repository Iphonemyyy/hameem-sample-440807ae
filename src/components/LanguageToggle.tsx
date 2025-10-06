import { Languages } from "lucide-react";
import { Button } from "./ui/button";

interface LanguageToggleProps {
  isArabic: boolean;
  onToggle: () => void;
}

export const LanguageToggle = ({ isArabic, onToggle }: LanguageToggleProps) => {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="sm"
      className="gap-2 border-primary hover:bg-primary/20"
    >
      <Languages className="h-4 w-4" />
      {isArabic ? "EN" : "AR"}
    </Button>
  );
};
