import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
<section id="contact" className="scroll-mt-20 pt-4 pb-20 px-4 relative bg-secondary/30">
<div className="absolute inset-0 opacity-40 blur-3xl pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.25),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.20),transparent_60%)]" />

<div className="container mx-auto max-w-5xl">
  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
    Get In <span className="text-primary">Touch</span>
  </h2>

  <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-2 mb-6">
  Thanks for stopping by! My inbox is always open. I would love to hear from you!
  
</p>

  {/* TWO-COLUMN LAYOUT */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 items-start">
    {/* LEFT COLUMN – GLOW PANEL */}
    <div className="relative p-2 md:pt-4 text-left">
    {/* Soft glowing background */}
      <div className="absolute inset-0 blur-3xl opacity-20 bg-primary/30 rounded-2xl pointer-events-none" />

      <div className="relative space-y-6">
        {/* Header */}
        <div className="space-y-3">
  <h3 className="text-2xl font-semibold">Contact Information</h3>
<div className="h-[2px] w-96 bg-gradient-to-r from-primary/50 to-transparent" />
  </div>
       
        {/* Contact Items */}
        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10 border border-primary/30 shadow-[0_0_12px_rgba(236,72,153,0.35)]">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">
                Email
              </h4>
              <a
                href="mailto:peyton.butler@gmail.com"
                className="hover:text-primary transition-colors"
              >
                peyton.butler@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10 border border-primary/30 shadow-[0_0_12px_rgba(236,72,153,0.35)]">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">
                Phone
              </h4>
              <a
                href="tel:+17706953271"
                className="hover:text-primary transition-colors"
              >
                +1 (770) 695-3271
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10 border border-primary/30 shadow-[0_0_12px_rgba(236,72,153,0.35)]">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">
                Location
              </h4>
              <p>Denver, CO, USA</p>
            </div>
          </div>
        </div>

        {/* Divider */}

        {/* Social Icons */}
        
      </div>
    </div>

    {/* RIGHT COLUMN – FORM */}
    <div className="bg-card/80 border border-border/60 p-6 rounded-xl shadow-xs">
      <h3 className="text-2xl font-semibold mb-6 text-left">Send a Message</h3>

      <form className="space-y-6 text-left" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
            placeholder="Howdy!"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "cosmic-button w-full flex items-center justify-center gap-2"
          )}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send size={16} />
        </button>
      </form>
    </div>
  </div>
</div>


    </section>
  );
};
