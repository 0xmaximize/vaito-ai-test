import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-primary/30 hover:bg-primary/10">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border-primary/30">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`cursor-pointer ${language === "en" ? "bg-primary/20" : ""}`}
        >
          <span className="mr-2">🇬🇧</span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("id")}
          className={`cursor-pointer ${language === "id" ? "bg-primary/20" : ""}`}
        >
          <span className="mr-2">🇮🇩</span>
          Bahasa Indonesia
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("zh")}
          className={`cursor-pointer ${language === "zh" ? "bg-primary/20" : ""}`}
        >
          <span className="mr-2">🇨🇳</span>
          中文
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("ko")}
          className={`cursor-pointer ${language === "ko" ? "bg-primary/20" : ""}`}
        >
          <span className="mr-2">🇰🇷</span>
          한국어
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("ru")}
          className={`cursor-pointer ${language === "ru" ? "bg-primary/20" : ""}`}
        >
          <span className="mr-2">🇷🇺</span>
          Русский
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("ar")}
          className={`cursor-pointer ${language === "ar" ? "bg-primary/20" : ""}`}
        >
          <span className="mr-2">🇸🇦</span>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
