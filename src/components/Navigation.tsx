import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import FunnelModal from "@/components/funnel/FunnelModal";
import logo from "@/assets/sodlogo.png";

const Navigation = () => {
  const [funnelOpen, setFunnelOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const menuItems = [
    { label: t("navigation.solutions"), href: "#outcomes" },
    { label: t("navigation.howItWorks"), href: "#video" },
    { label: t("navigation.industries"), href: "#industries" },
    { label: t("navigation.pricing"), href: "#pricing" },
    { label: t("navigation.faq"), href: "#faq" },
  ];

  const handleLanguageSwitch = (lang: "it" | "en") => {
    setLanguage(lang);
  };

  const LanguageSwitcher = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="font-medium hover:text-primary transition-colors gap-1 h-8 px-2"
        >
          {language.toUpperCase()}
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[60px]">
        <DropdownMenuItem
          onClick={() => handleLanguageSwitch(language === "it" ? "en" : "it")}
          className="cursor-pointer"
        >
          {language === "it" ? "EN" : "IT"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="SpuntaBot Logo" 
                className="w-10 h-10 rounded-xl object-contain"
              />
              <span className="text-xl font-bold text-foreground">SpuntaBot</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Language Switcher & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <Button 
                size="default"
                className="shadow-warm hover:scale-105 transition-transform"
                onClick={() => setFunnelOpen(true)}
              >
                {t("navigation.startNow")}
              </Button>
            </div>

            {/* Mobile: Language Switcher & Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-border animate-fade-in">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button 
                  size="default"
                  className="w-full shadow-warm"
                  onClick={() => {
                    setFunnelOpen(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  {t("navigation.startNow")}
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <FunnelModal open={funnelOpen} onOpenChange={setFunnelOpen} />
    </>
  );
};

export default Navigation;
