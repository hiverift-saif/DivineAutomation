import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import Swal from 'sweetalert2';

interface ContactPageProps {
  setCurrentPage?: (page: string) => void;
}

export function ContactPage({ setCurrentPage }: ContactPageProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const payload = {
      fullName: form.name.value.trim(),
      companyName: form.company.value.trim() || "Not provided",
      emailAddress: form.email.value.trim(),
      phoneNumber: form.phone.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
      serviceInterest: form.service.value || "Not specified",
      formType: "devineautomation",
    };

    try {
      const response = await fetch(
        "https://cakistockmarket.com/makemytrade-api/api/v1/contact/devines-contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (response.ok && result.statusCode === 201) {
        Swal.fire({
          icon: "success",
          title: "Thank You!",
          html: `<strong>${payload.fullName}</strong>,<br/>Your message has been sent successfully.<br/>We'll get back to you very soon!`,
          confirmButtonColor: "#1e40af",
          timer: 6000,
          timerProgressBar: true,
          iconColor: "#1e40af",
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to Send",
          text: result.message || "Something went wrong. Please try again later.",
          confirmButtonColor: "#1e40af",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Unable to connect. Please check your internet and try again.",
        confirmButtonColor: "#1e40af",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 text-white overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1605434896704-336c825fe58e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29udHJvbCUyMHBhbmVsfGVufDF8fHx8MTc2MzA5OTc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/95" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
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
                      <h3 className="mb-2 font-semibold">Address</h3>
                      <p className="text-gray-600 text-sm">
                        Divine Automation Pvt. Ltd.<br />
                        <span className="text-blue-900">GST: 06AADCD0101H1ZG</span><br />
                        20/4, Plot No. 19, Napco Gear Complex,<br />
                        Mathura Road, Faridabad 121004<br />
                        Opp. to Sant Surdas Metro Station,<br />
                        Near Bhatia Crane, Sector 5<br />
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
                      <h3 className="mb-2 font-semibold">Phone</h3>
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
                      <h3 className="mb-2 font-semibold">Email</h3>
                      <a href="mailto:info@divineautomation.co.in" className="text-gray-600 text-sm hover:text-blue-900 block">
                        info@divineautomation.co.in
                      </a>
                      <a href="mailto:dmandal77@yahoo.com" className="text-gray-600 text-sm hover:text-blue-900 block">
                        dmandal77@yahoo.com
                      </a>
                      <a href="mailto:divineautomation@yahoo.com" className="text-gray-600 text-sm hover:text-blue-900 block">
                        divineautomation@yahoo.com
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
                      <h3 className="mb-2 font-semibold">Business Hours</h3>
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
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" placeholder="Enter your name" required disabled={loading} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" name="company" placeholder="Enter your company name" disabled={loading} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required disabled={loading} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXXXXXXX" required disabled={loading} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" name="subject" placeholder="What is this regarding?" required disabled={loading} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your automation requirements..."
                        className="min-h-[150px]"
                        required
                        disabled={loading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                        disabled={loading}
                      >
                        <option value="">Select a service</option>
                        <option value="Technical Feasibility Study">Technical Feasibility Study</option>
                        <option value="System Design & Engineering">System Design & Engineering</option>
                        <option value="Robotic Integration">Robotic Integration</option>
                        <option value="Special Purpose Machines">Special Purpose Machines</option>
                        <option value="Testing Systems">Testing Systems</option>
                        <option value="Assembly Automation">Assembly Automation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-blue-900 hover:bg-blue-800"
                      disabled={loading}
                    >
                      {loading ? "Sending Message..." : "Send Message"}
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
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3510.980849776774!2d77.31086357549087!3d28.359428575814906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIxJzMzLjkiTiA3N8KwMTgnNDguNCJF!5e0!3m2!1sen!2sin!4v1764318138041!5m2!1sen!2sin"
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
            <a href="mailto:info@divineautomation.co.in">
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