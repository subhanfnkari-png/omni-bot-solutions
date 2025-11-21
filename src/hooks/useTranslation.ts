import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: string, options?: { returnObjects?: boolean }): any => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return options?.returnObjects ? undefined : key;
      }
    }
    
    if (options?.returnObjects) {
      return value;
    }
    
    return typeof value === "string" ? value : key;
  };
  
  return { t, language };
};

