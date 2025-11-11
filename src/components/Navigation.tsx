import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Our Services', 'Industries', 'Technologies', 'Career', 'Contact Us'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white">HR</span>
            </div>
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              HiveRift
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="tel:8814930229"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="tel:8814930229"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Now: 8814930229
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}