import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./Navbar.css";
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Leetcode", href: "#leetcode" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Fixed: was screenY, should be scrollY
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3" : "py-10"
      )}
    >
      <div className="container flex items-center justify-center relative">

        {/* Desktop nav - centered */}
        <div className="hidden md:flex items-center gap-6 py-5 px-10 bg-white/30 dark:bg-neutral-900/40 dark:text-white backdrop-blur-lg rounded-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile nav button - positioned in corner */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn(
            "md:hidden fixed top-6 right-6 z-50 p-3 rounded-full",
            "bg-white/20 dark:bg-neutral-900/60 backdrop-blur-lg",
            "border border-white/20 dark:border-neutral-700/50",
            "text-foreground hover:bg-white/30 dark:hover:bg-neutral-800/70",
            "transition-all duration-300 shadow-lg",
            "hover:scale-110 active:scale-95",
            isScrolled && "top-4" // Move closer to top when scrolled
          )}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="relative">
            {/* Icon with rotation animation */}
            <Menu 
              size={20} 
              className={cn(
                "transition-all duration-300",
                isMenuOpen ? "rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
              )}
            />
            <X 
              size={20} 
              className={cn(
                "absolute top-0 left-0 transition-all duration-300",
                isMenuOpen ? "rotate-0 opacity-100 scale-100" : "rotate-90 opacity-0 scale-75"
              )}
            />
          </div>
        </button>

        {/* Mobile menu overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {/* Menu items with stagger animation */}
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-all duration-300",
                  "hover:scale-110 hover:translate-x-2 text-center py-2 px-4 rounded-lg",
                  "hover:bg-primary/10",
                  isMenuOpen 
                    ? "animate-in slide-in-from-right-5 fade-in" 
                    : "animate-out slide-out-to-right-5 fade-out"
                )}
                style={{
                  animationDelay: `${key * 100}ms`,
                  animationFillMode: 'both'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Close hint */}
          <div className="absolute bottom-10 text-center">
            
          </div>
        </div>

        {/* Tap to close overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  );
};