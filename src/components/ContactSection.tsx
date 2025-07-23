import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">Get In Touch</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey with The Bustlers? Let's discuss how we can help transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <Card className="border-none bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl font-medium">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Input
                      name="service"
                      placeholder="Service Interest"
                      value={formData.service}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 sm:space-y-8">
            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-white">
                    📧
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm sm:text-base">hello@thebustlers.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-white">
                    📱
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-muted-foreground text-sm sm:text-base">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-white">
                    🌐
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Serving Global Markets</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 border-none bg-card/50 backdrop-blur">
              <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Why Choose The Bustlers?</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Expert team with proven track record
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Tailored solutions for underserved markets
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Sustainable growth strategies
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  24/7 support and consultation
                </li>
              </ul>
            </Card>

            <Button variant="outline" size="lg" className="w-full">
              <span className="mr-2">💬</span>
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;