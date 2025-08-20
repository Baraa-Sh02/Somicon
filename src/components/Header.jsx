import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import '../styles/components/Header.css';

const Header = ({ isScrolled, data, activePage, handleNavClick, isMenuOpen, setIsMenuOpen, toggleTheme, toggleLanguage, theme, activePageIndex }) => {
    // Check if we're on home page (index 0)
    const isHomePage = activePageIndex === 0;
    
    // Header background logic:
    // - On home page: transparent when not scrolled, solid when scrolled
    // - On other pages: always solid background
    const headerClass = `header ${
        (isScrolled || isMenuOpen || !isHomePage) ? 'header--solid' : 'header--transparent'
    }`;
    
    // Text color logic:
    // - On home page when not scrolled: white text for better contrast against background image
    // - On other pages or when scrolled: normal dark/light theme colors
    const textColorClass = isHomePage && !isScrolled && !isMenuOpen 
        ? 'text-white drop-shadow-lg' 
        : 'text-gray-900 dark:text-stone-300';
    
    const navLinksKeys = [0, 1, 2, 3, 4]; // Use indices instead of page names
    
    return (
        <header className={headerClass}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex-shrink-0">
                        <button 
                            className="header__brand group"
                            onClick={() => handleNavClick(0)}
                        >
                             <span className="header__brand-title">{data.companyName}</span>
                             <span className="text-4xl animate-pulse-slow">{data.flag}</span>
                        </button>
                    </div>

                    <nav className="header__nav">
                        {navLinksKeys.map(key => (
                            <button 
                                key={key} 
                                onClick={() => handleNavClick(key)}
                                className={`header__nav-link ${
                                    activePage === data.navLinks[key]
                                        ? 'header__nav-link--active'
                                        : textColorClass
                                }`}
                            >
                                {data.navLinks[key]}
                            </button>
                        ))}
                    </nav>

                    <div className="header__controls">
                        <button 
                            onClick={toggleLanguage} 
                            className={`header__control text-xl font-semibold ${
                                isHomePage && !isScrolled && !isMenuOpen 
                                    ? 'text-white drop-shadow-lg hover:bg-white/20' 
                                    : 'text-gray-900 dark:text-stone-400'
                            }`}
                        >
                            {data.lang === 'en' ? 'AR' : 'EN'}
                        </button>
                        <button 
                            onClick={toggleTheme} 
                            className={`header__control ${
                                isHomePage && !isScrolled && !isMenuOpen 
                                    ? 'text-white drop-shadow-lg hover:bg-white/20' 
                                    : 'text-gray-900 dark:text-stone-400'
                            }`}
                        >
                            {theme === 'light' ? <Moon size={28} /> : <Sun size={28} />}
                        </button>
                        <div className="md:hidden">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                                className={`p-3 hover:text-red-600 dark:hover:text-red-500 transition-all duration-300 hover:scale-110 ${
                                    isHomePage && !isScrolled && !isMenuOpen 
                                        ? 'text-white drop-shadow-lg' 
                                        : 'text-gray-900 dark:text-stone-400'
                                }`}
                            >
                                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="header__mobile-menu animate-fade-in-down">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinksKeys.map(key => (
                            <button 
                                key={key} 
                                onClick={() => handleNavClick(key)}
                                className={`header__mobile-link ${activePage === data.navLinks[key] ? 'bg-red-600 text-white shadow-lg' : 'text-gray-800 dark:text-stone-300 hover:bg-gray-100 dark:hover:bg-stone-800 hover:text-red-600 dark:hover:text-red-500'}`}
                            >
                                {data.navLinks[key]}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header; 