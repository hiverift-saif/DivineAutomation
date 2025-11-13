import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ContactPageProps {
  setCurrentPage?: (page: string) => void;
}

export function ContactPage({ setCurrentPage }: ContactPageProps) {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 text-white overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNzYyODU4MTczfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/95" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-white mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team to discuss your automation requirements
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="mb-2">Address</h3>
                      <p className="text-gray-600 text-sm">
                        20/4, Napco Gear Complex,<br />
                        Plot No. 19, Mathura Road,<br />
                        Faridabad – 121004,<br />
                        Haryana, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="mb-2">Phone</h3>
                      <a href="tel:9810275986" className="text-gray-600 text-sm hover:text-blue-900 block">
                        +91 9810275986
                      </a>
                      <a href="tel:9873089753" className="text-gray-600 text-sm hover:text-blue-900 block">
                        +91 9873089753
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="mb-2">Email</h3>
                      <a href="mailto:info@divineautomation.in" className="text-gray-600 text-sm hover:text-blue-900">
                        info@divineautomation.in
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="mb-2">Business Hours</h3>
                      <p className="text-gray-600 text-sm">
                        Monday - Saturday<br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-blue-900 mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Enter your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Enter your company name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="+91 XXXXXXXXXX" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="What is this regarding?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your automation requirements..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select
                        id="service"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="feasibility">Technical Feasibility Study</option>
                        <option value="design">System Design & Engineering</option>
                        <option value="robotics">Robotic Integration</option>
                        <option value="spm">Special Purpose Machines</option>
                        <option value="testing">Testing Systems</option>
                        <option value="assembly">Assembly Automation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto bg-blue-900 hover:bg-blue-800">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-blue-900 mb-8">Find Us Here</h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative h-96 bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.123456789!2d77.3200000!3d28.4000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzAwLjAiTiA3N8KwMTknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Divine Automation Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our technical team is available to help you with urgent queries
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:9810275986">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +91 9810275986
              </Button>
            </a>
            <a href="mailto:info@divineautomation.in">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}