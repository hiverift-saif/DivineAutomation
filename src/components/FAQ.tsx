import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How much does a website cost in India?',
      answer: 'Website costs vary based on complexity and features. A basic business website starts from ₹15,000, while e-commerce sites start from ₹35,000. We offer customized quotes based on your specific requirements. Call us at 8814930229 for a free consultation and detailed pricing.',
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'Most websites are completed within 7-14 days. Simple landing pages can be ready in 3-5 days, while complex e-commerce platforms may take 2-3 weeks. We work efficiently without compromising quality to get your website live as quickly as possible.',
    },
    {
      question: 'Will my website work on mobile phones?',
      answer: 'Absolutely! All our websites are fully responsive and mobile-optimized. With over 70% of Indian users browsing on mobile devices, we ensure your website looks perfect and functions flawlessly on all screen sizes - mobile, tablet, and desktop.',
    },
    {
      question: 'Do you provide website maintenance and support?',
      answer: 'Yes! We offer comprehensive maintenance packages including security updates, content updates, bug fixes, and technical support. Our team is available 24/7 to ensure your website runs smoothly and stays up-to-date.',
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Yes, we provide complete digital marketing services including SEO optimization, Google Ads, social media marketing, and content marketing. Every website we build is SEO-ready with proper structure, fast loading speeds, and optimized code to help you rank higher on Google.',
    },
    {
      question: 'What if I need changes after the website is live?',
      answer: 'We provide post-launch support and revisions. Minor changes are included in our maintenance package. For major redesigns or new features, we offer affordable rates for our existing clients. Your satisfaction is our priority!',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our web development services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
            >
              <button
                className="w-full p-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-xl ${openIndex === index ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transform transition-transform ${
                    openIndex === index ? 'rotate-180 text-purple-600' : 'text-gray-400'
                  }`}
                  size={24}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl">
          <p className="text-xl text-gray-700 mb-4">
            Still have questions?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:8814930229"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all"
            >
              Call us now: 8814930229
            </a>
            <a 
              href="https://wa.me/918814930229?text=Hi%2C%20I%20have%20some%20questions%20about%20your%20web%20development%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 hover:scale-105 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}