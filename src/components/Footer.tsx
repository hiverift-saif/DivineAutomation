import { MapPin, Phone, Mail } from 'lucide-react';
import logo from 'figma:asset/f31c3cdd424efa07f2d2acb7df354f9e7c3a30f2.png';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src={logo} 
              alt="Divine Automation Logo" 
              className="h-20 w-auto object-contain mb-4 rounded-lg"
            />
            <p className="text-gray-400 text-sm">
              Leading provider of turnkey industrial automation solutions with 40+ years of expertise in robotics, CNC, and process automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-blue-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'expertise'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavClick(page)}
                    className="text-gray-400 hover:text-white transition-colors text-sm capitalize"
                  >
                    {page === 'about' ? 'About Us' : page === 'contact' ? 'Contact Us' : page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-blue-400 mb-4">More</h3>
            <ul className="space-y-2">
              {['projects', 'gallery', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavClick(page)}
                    className="text-gray-400 hover:text-white transition-colors text-sm capitalize"
                  >
                    {page === 'contact' ? 'Contact Us' : page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-blue-400 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  20/4, Napco Gear Complex, Plot No.19, Mathura Road, Faridabad – 121004, Haryana
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:9810275986" className="text-gray-400 hover:text-white text-sm">
                  +91 9810275986
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:9873089753" className="text-gray-400 hover:text-white text-sm">
                  +91 9873089753
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@divineautomation.in" className="text-gray-400 hover:text-white text-sm">
                  info@divineautomation.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Divine Automation Pvt. Ltd. | All Rights Reserved | Designed by Khatu Shyam Technologies
          </p>
        </div>
      </div>
    </footer>
  );
}