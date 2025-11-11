import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const services = [
    'Custom Website Design & Development',
    'Mobile App Development',
    'MVP Development & Testing',
    'UI/UX Design & Prototyping',
    'Brand Identity Design',
    'Blockchain Solutions',
    'E-commerce Development',
    'API Development & Integration',
    'Digital Marketing',
    'SEO & Content Marketing',
    'Email Marketing Automation',
    'Landing Page Design',
    'Mobile App UI Design',
    'Cloud Migration Services',
    'DevOps & Automation',
    'Database Management',
    'Business Analytics & Reporting',
    'Operations Consultancy',
    'Virtual Assistant Services',
    'Maintenance & Support',
  ];

  const industries = [
    'Banking & Financial Services',
    'Capital Markets',
    'Healthcare & Life Sciences',
    'Education & E-Learning',
    'Energy & Utilities',
    'Communications & Media',
    'Consumer Goods',
    'Manufacturing',
    'Retail & E-commerce',
    'Travel & Hospitality',
    'Insurance',
    'High-Tech',
    'Life Sciences',
    'Public Services',
  ];

  const quickLinks = [
    'Home',
    'About Us',
    'All Services',
    'Technologies',
    'Career',
    'Contact Us',
    'Book Consultation',
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span>HR</span>
              </div>
              <span className="text-2xl">HiveRift</span>
            </div>
            <p className="text-gray-300">
              Transforming business challenges into growth opportunities with our 3T Pillar - Talent, Tailored, Trust.
            </p>
            <p className="text-gray-300">
              India's No. 1 Web Development Company - Creating stunning websites that drive business growth.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@hiverift.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={18} />
                info@hiverift.com
              </a>
              <a href="tel:+918814930229" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} />
                +91-88-1493-0229
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p>New Delhi, New Rohtak Rd, Ratan Nagar, Karol Bagh, Delhi, 110005</p>
                  <p className="mt-1">265 Freure drive Cambridge ON N1S 0C1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 10).map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries We Serve */}
          <div>
            <h3 className="text-xl mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Industries We Serve
            </h3>
            <ul className="space-y-2">
              {industries.slice(0, 10).map((industry, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Support */}
          <div>
            <h3 className="text-xl mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Legal & Support
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Support</a></li>
            </ul>

            <div className="mt-4 space-y-1 text-sm text-gray-400">
              <p>Support: support@hiverift.com</p>
              <p>Legal: legal@hiverift.com</p>
              <p>Privacy: privacy@hiverift.com</p>
              <p>Business: business@hiverift.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 HiveRift | All Rights Reserved
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <span>|</span>
              <a href="https://hiverift.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.hiverift.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}