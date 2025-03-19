'use client';
import { useState, useRef, memo } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BsDatabase, BsCloud, BsPhone, BsGear } from 'react-icons/bs';

// Move data outside component to prevent recreating on each render
const mainServices = [
  {
    icon: <BsDatabase className="w-6 h-6 text-[#4C6FFF]" />,
    title: "Data & AI",
    path: "/services/data-ai",
    isHighlighted: true
  },
  {
    icon: <BsCloud className="w-6 h-6" />,
    title: "Cloud Transformation",
    path: "/services/cloud"
  },
  {
    icon: <BsPhone className="w-6 h-6" />,
    title: "Mobile & Web Development",
    path: "/services/development"
  },
  {
    icon: <BsGear className="w-6 h-6" />,
    title: "Enterprise Platform Adoption",
    path: "/services/enterprise"
  }
];

const solutions = [
  {
    title: "Predictive Analytics & AI Automation",
    path: "/solutions/predictive-analytics"
  },
  {
    title: "AI Enablement & Integration",
    path: "/solutions/ai-enablement"
  },
  {
    title: "Data Engineering & Warehousing",
    path: "/solutions/data-engineering"
  },
  {
    title: "Reporting & MIS",
    path: "/solutions/reporting"
  }
];

const navLinks = [
  {
    title: 'Home',
    path: '/',
    isActive: true,
  },
  {
    title: 'Services',
    path: '/services',
    hasDropdown: true,
  },
  {
    title: 'Solutions',
    path: '/solutions',
    hasDropdown: true,
  },
  {
    title: 'Industries & Insights',
    path: '/industries',
    hasDropdown: true,
  },
  {
    title: 'Test for Startups',
    path: '/startups',
  },
  {
    title: 'Company',
    path: '/company',
    hasDropdown: true,
  },
  {
    title: 'Contact Us',
    path: '/contact',
  },
];

// Memoized link component for performance
const NavLink = memo(({ link, children }) => (
  <Link
    href={link.path}
    className={`flex items-center text-[15px] px-4 py-2 transition-colors font-medium
      ${link.isActive ? 'text-[#4C6FFF]' : 'text-gray-300 hover:text-white'}`}
    aria-expanded={link.hasDropdown ? "false" : undefined}
    aria-haspopup={link.hasDropdown ? "true" : undefined}
  >
    {link.title}
    {children}
  </Link>
));

NavLink.displayName = 'NavLink';

// Memoized service link component for performance
const ServiceLink = memo(({ item, idx }) => (
  <Link
    key={idx}
    href={item.path}
    className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors group/item"
  >
    <div className={`flex-shrink-0 ${item.isHighlighted ? 'text-[#4C6FFF]' : 'text-gray-600 group-hover/item:text-[#4C6FFF]'}`}>
      {item.icon}
    </div>
    <span className={`text-[15px] font-medium ${item.isHighlighted ? 'text-[#4C6FFF]' : 'text-gray-800'}`}>
      {item.title}
    </span>
  </Link>
));

ServiceLink.displayName = 'ServiceLink';

// Memoized solution link component for performance
const SolutionLink = memo(({ item, idx }) => (
  <Link
    key={idx}
    href={item.path}
    className="block px-5 py-3 hover:bg-gray-50 transition-colors"
  >
    <span className="text-[15px] font-medium text-gray-800">
      {item.title}
    </span>
  </Link>
));

SolutionLink.displayName = 'SolutionLink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="w-full px-4 pt-4 fixed top-0 z-50">
      <nav 
        ref={navRef} 
        className="w-full bg-[#1A1A1A] rounded-[15px] border border-gray-800/50"
        aria-label="Main Navigation"
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center" aria-label="Homepage">
                <div className="flex items-center gap-2">
                  <div className="text-[#4C6FFF] text-4xl font-bold transform -translate-y-[2px]">T</div>
                  <div className="text-white text-xl font-medium tracking-tight">Test</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center" role="menubar">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group" role="none">
                  {link.title === 'Services' ? (
                    <button 
                      className="flex items-center text-[15px] px-4 py-2 transition-colors font-medium text-gray-300 hover:text-white"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      {link.title}
                      <FiChevronDown className="ml-1 h-4 w-4 opacity-75" aria-hidden="true" />
                    </button>
                  ) : (
                    <NavLink link={link}>
                      {link.hasDropdown && (
                        <FiChevronDown className="ml-1 h-4 w-4 opacity-75" aria-hidden="true" />
                      )}
                    </NavLink>
                  )}

                  {/* Mega Dropdown Menu for Services */}
                  {link.title === 'Services' && (
                    <div 
                      className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 w-[1020px] mt-4 -translate-x-1/2" 
                      style={{ left: '50%' }}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="services-menu"
                    >
                      <div className="relative">
                        {/* Triangle Pointer */}
                        <div className="absolute -top-2 left-[50%] -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 shadow-lg" aria-hidden="true"></div>
                        
                        {/* Dropdown Content */}
                        <div className="relative bg-white rounded-[20px] shadow-2xl overflow-hidden">
                          <div className="flex">
                            {/* Left Column - Main Services */}
                            <div className="py-6 w-[340px] border-r border-gray-100/50" role="group" aria-label="Main Services">
                              {mainServices.map((item, idx) => (
                                <ServiceLink key={idx} item={item} idx={idx} />
                              ))}
                            </div>

                            {/* Middle Column - Solutions */}
                            <div className="py-6 w-[340px] border-r border-gray-100/50" role="group" aria-label="Solutions">
                              {solutions.map((item, idx) => (
                                <SolutionLink key={idx} item={item} idx={idx} />
                              ))}
                            </div>

                            {/* Right Column - Placeholder */}
                            <div className="py-6 w-[340px]" role="complementary" aria-label="Featured content">
                              <div className="mx-5 h-[200px] bg-gray-50 rounded-lg flex flex-col justify-end p-6">
                                <p className="text-gray-500">Placeholder text / blog title</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
                aria-expanded={isMenuOpen ? "true" : "false"}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
              >
                {isMenuOpen ? (
                  <RiCloseLine className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <RiMenu3Line className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          id="mobile-menu"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <div key={index} role="none">
                {link.title === 'Services' ? (
                  <button
                    className="flex items-center justify-between w-full text-sm px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(true)}
                    aria-expanded={isMenuOpen ? "true" : "false"}
                    aria-haspopup="true"
                  >
                    {link.title}
                    <FiChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                ) : (
                  <Link
                    href={link.path}
                    className={`flex items-center justify-between text-sm px-3 py-2 rounded-md transition-colors font-medium
                      ${link.isActive ? 'text-[#4C6FFF] bg-blue-900/10' : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}
                    role="menuitem"
                  >
                    {link.title}
                    {link.hasDropdown && <FiChevronDown className="h-4 w-4" aria-hidden="true" />}
                  </Link>
                )}
                
                {link.title === 'Services' && isMenuOpen && (
                  <div className="pl-4 mt-1 space-y-1" role="menu" aria-orientation="vertical" aria-label="Services submenu">
                    {mainServices.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.path}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md"
                        role="menuitem"
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    ))}
                    {solutions.map((item, idx) => (
                      <Link
                        key={`sol-${idx}`}
                        href={item.path}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md"
                        role="menuitem"
                      >
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(Navbar); 