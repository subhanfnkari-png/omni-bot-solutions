import logo from "@/assets/sodlogo.png";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="SpuntaBot Logo" 
                className="w-10 h-10 rounded-xl object-contain"
              />
              <span className="text-xl font-bold">SpuntaBot</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {t("footer.description")}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("footer.product")}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#outcomes" className="hover:text-primary transition-colors">{t("footer.solutions")}</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">{t("footer.pricing")}</a></li>
              <li><a href="#industries" className="hover:text-primary transition-colors">{t("footer.industries")}</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">{t("footer.faq")}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t("footer.aboutUs")}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t("footer.contact")}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t("footer.privacyPolicy")}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t("footer.termsOfService")}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} SpuntaBot. {t("footer.allRightsReserved")}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
