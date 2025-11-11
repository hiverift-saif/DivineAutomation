import { X, Send } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PopupForm({ isOpen, onClose }: PopupFormProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl text-white">Get Your Free Website Quote!</h3>
              <p className="text-white/90 mt-2">Tell us about your project and we'll get back to you within 24 hours</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
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
                  required
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
                  required
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
                  required
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
                  required
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
                <option>Manufacturing</option>
                <option>Technology / IT</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Type of Website Needed</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all">
                <option>Select website type</option>
                <option>Business/Corporate Website</option>
                <option>E-Commerce Website</option>
                <option>Landing Page</option>
                <option>Portfolio Website</option>
                <option>Custom Web Application</option>
                <option>Website Redesign</option>
                <option>Not Sure Yet</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Project Details</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none"
                placeholder="Describe your website requirements, features needed, timeline, budget, etc..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              SEND REQUEST
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}