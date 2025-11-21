import { useState, useEffect, useRef } from "react";
import { X, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BlackFridayBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    // Check if banner was dismissed in localStorage
    const dismissed = localStorage.getItem("blackfriday-banner-dismissed");
    if (!dismissed) {
      setIsVisible(true);
      // Set initial height immediately
      document.documentElement.style.setProperty('--banner-height', '44px');
    } else {
      document.documentElement.style.setProperty('--banner-height', '0px');
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("blackfriday-banner-dismissed", "true");
  };

  useEffect(() => {
    if (isVisible && bannerRef.current) {
      // Measure actual banner height
      const updateHeight = () => {
        if (bannerRef.current) {
          // Use requestAnimationFrame to ensure DOM is fully rendered
          requestAnimationFrame(() => {
            if (bannerRef.current) {
              const height = bannerRef.current.offsetHeight;
              document.documentElement.style.setProperty('--banner-height', `${height}px`);
            }
          });
        }
      };
      
      // Initial measurement with small delay to ensure DOM is ready
      const timeoutId = setTimeout(updateHeight, 0);
      
      // Update on resize
      window.addEventListener('resize', updateHeight);
      
      // Use ResizeObserver for more accurate measurements
      const resizeObserver = new ResizeObserver(() => {
        updateHeight();
      });
      resizeObserver.observe(bannerRef.current);
      
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', updateHeight);
        resizeObserver.disconnect();
      };
    } else {
      document.documentElement.style.setProperty('--banner-height', '0px');
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      ref={bannerRef}
      className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] border-b border-[#ffd700]/20 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-2.5 sm:py-3 relative min-h-[44px]">
          {/* Decorative sparkle icons */}
          <Sparkles className="w-4 h-4 text-[#ffd700] animate-pulse hidden sm:block flex-shrink-0" />
          
          {/* Main content - Mobile: 2 lines max, Desktop: single line */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-3 text-center max-w-full px-8 sm:px-0">
            {/* Line 1: Black Friday + Discount */}
            <div className="flex items-center gap-1.5 sm:gap-2 justify-center flex-wrap sm:flex-nowrap">
              <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider whitespace-nowrap">
                {language === "it" ? "Black Friday" : "Black Friday"}
              </span>
              <span className="text-sm sm:text-lg font-bold text-[#ffd700] whitespace-nowrap">
                {language === "it" ? "50% DI SCONTO" : "50% OFF"}
              </span>
            </div>
            
            {/* Line 2: Additional info */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                {language === "it" ? "su tutti i piani" : "on all plans"}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 hidden md:inline whitespace-nowrap">
                {language === "it" ? "• Offerta limitata" : "• Limited time offer"}
              </span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/10 transition-colors group flex-shrink-0"
            aria-label={language === "it" ? "Chiudi" : "Close"}
          >
            <X className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffd700]/5 to-transparent animate-shimmer pointer-events-none" />
    </div>
  );
};

export default BlackFridayBanner;

