
import React, { useState } from 'react';
import { Menu, X, Footprints } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-3">
              <img 
                src="../assets/mltLogo.png" 
                alt="Maha Laxmi Trading Logo" 
                className="h-20 w-auto"
              />
              <span className="text-xl font-bold text-construction-darkBlue hidden sm:inline-block">Maha Laxmi Trading</span>
            </a>
          </div>
          
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <a href="#home" className="text-construction-darkBlue hover:text-construction-orange font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-construction-darkBlue hover:text-construction-orange font-medium transition-colors">
              About
            </a>
            <a href="#products" className="text-construction-darkBlue hover:text-construction-orange font-medium transition-colors">
              Products
            </a>
            <a href="#testimonials" className="text-construction-darkBlue hover:text-construction-orange font-medium transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-construction-darkBlue hover:text-construction-orange font-medium transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-construction-darkBlue">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-x-0 top-20 z-50 bg-white px-6 py-4 shadow-md md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-4">
          <a href="#home" onClick={toggleMenu} className="text-construction-darkBlue hover:text-construction-orange font-medium py-2 transition-colors">
            Home
          </a>
          <a href="#about" onClick={toggleMenu} className="text-construction-darkBlue hover:text-construction-orange font-medium py-2 transition-colors">
            About
          </a>
          <a href="#products" onClick={toggleMenu} className="text-construction-darkBlue hover:text-construction-orange font-medium py-2 transition-colors">
            Products
          </a>
          <a href="#testimonials" onClick={toggleMenu} className="text-construction-darkBlue hover:text-construction-orange font-medium py-2 transition-colors">
            Testimonials
          </a>
          <a href="#contact" onClick={toggleMenu} className="text-construction-darkBlue hover:text-construction-orange font-medium py-2 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
