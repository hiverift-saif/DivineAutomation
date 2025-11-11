import { Send, Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact-us" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4">
            Let's Build Your Website
          </h2>
          <p className="text-xl text-gray-600">
            Get a Free Consultation & Quote for Your Project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Request a Free Quote
            </h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will contact you within 24 hours with a detailed proposal.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Industry</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all">
                  <option>Select your industry</option>
                  <option>E-Commerce / Online Store</option>
                  <option>Restaurant / Food Business</option>
                  <option>Real Estate</option>
                  <option>Healthcare / Medical</option>
                  <option>Education / Coaching</option>
                  <option>Professional Services</option>
                  <option>Technology / IT</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Type of Website</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all">
                  <option>Select website type</option>
                  <option>Business/Corporate Website</option>
                  <option>E-Commerce Website</option>
                  <option>Landing Page</option>
                  <option>Portfolio Website</option>
                  <option>Custom Web Application</option>
                  <option>Website Redesign</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Project Details</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your website requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://wa.me/918814930229?text=Hi%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20project', '_blank');
                }}
              >
                SEND REQUEST VIA WHATSAPP
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Get in touch
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Ready to take your business online? Contact India's #1 web development company today and let's create something amazing together!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg mb-2">Phone</h4>
                  <p className="text-gray-600">+91 8814930229</p>
                  <p className="text-gray-600">011 71367194</p>
                  <p className="text-sm text-gray-500 mt-1">Service 24*7</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg mb-2">Email</h4>
                  <p className="text-gray-600">info@hiverift.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg mb-2">Location</h4>
                  <p className="text-gray-600">New Rohtak Rd, Ratan Nagar, Karol Bagh</p>
                  <p className="text-gray-600">New Delhi, Delhi, 110005</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}