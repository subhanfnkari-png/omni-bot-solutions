import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Language = "it" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "spuntabot-language";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine language from URL path
  const getLanguageFromPath = (): Language => {
    if (location.pathname.startsWith("/en")) {
      return "en";
    }
    return "it";
  };

  const [language, setLanguageState] = useState<Language>(() => {
    // First check URL
    const pathLang = getLanguageFromPath();
    if (pathLang) return pathLang;
    
    // Then check localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "it" || stored === "en") {
      return stored;
    }
    
    // Default to Italian
    return "it";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    
    // Update URL path
    const currentPath = location.pathname;
    const hash = location.hash;
    
    if (lang === "en") {
      // Switch to English
      if (!currentPath.startsWith("/en")) {
        navigate(`/en${currentPath === "/" ? "" : currentPath}${hash}`);
      }
    } else {
      // Switch to Italian (root)
      if (currentPath.startsWith("/en")) {
        const pathWithoutLang = currentPath.replace("/en", "") || "/";
        navigate(`${pathWithoutLang}${hash}`);
      }
    }
  };

  // Sync language with URL changes
  useEffect(() => {
    const pathLang = getLanguageFromPath();
    if (pathLang !== language) {
      setLanguageState(pathLang);
      localStorage.setItem(STORAGE_KEY, pathLang);
    }
  }, [location.pathname, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

