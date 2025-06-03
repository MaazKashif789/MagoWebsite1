// src/components/sections/Contact.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactImage from '../../assets/contact2.png';
import { Mail, MapPin, Phone, Globe } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: <MapPin className="inline mr-2 w-5 h-5" />, label: "ADDRESS:", value: "198 West 21th Street, Suite 721 New York NY 10016"
  },
  {
    icon: <Phone className="inline mr-2 w-5 h-5" />, label: "PHONE:", value: "+1235 2355 98"
  },
  {
    icon: <Mail className="inline mr-2 w-5 h-5" />, label: "EMAIL:", value: "info@yoursite.com"
  },
  {
    icon: <Globe className="inline mr-2 w-5 h-5" />, label: "WEBSITE:", value: "yoursite.com"
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-10 md:py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactImage})`,
          filter: "brightness(0.5)"
        }}
      />
      <div className="container mx-auto px-2 sm:px-4 relative z-10 ml-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Contact Info */}
          <div className="text-white space-y-6 md:pr-12 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact us</h2>
            <ul className="space-y-6">
              {CONTACT_INFO.map((item, idx) => (
                <li key={idx}>
                  <div className="text-base md:text-lg font-semibold mb-1">{item.icon}{item.label}</div>
                  <div className="text-sm md:text-base font-light pl-7">{item.value}</div>
                </li>
              ))}
            </ul>
          </div>
          {/* Right: Contact Form */}
          <div className="flex justify-center">
            <form className="w-full max-w-md bg-[var(--color-background-light)] rounded-xl shadow-2xl p-4 md:p-8 space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-primary)] mb-4 text-center">Get in touch</h3>
              <Input type="text" placeholder="Name" name="name" required className="text-[var(--color-text-dark)]" />
              <Input type="email" placeholder="Email" name="email" required className="text-[var(--color-text-dark)]" />
              <Input type="text" placeholder="Subject" name="subject" required className="text-[var(--color-text-dark)]" />
              <Textarea placeholder="Message" name="message" rows={4} required className="text-[var(--color-text-dark)]" />
              <Button type="submit" className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white text-base py-2 rounded shadow transition-colors">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;