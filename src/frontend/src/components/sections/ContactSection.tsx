import { useState } from 'react';
import { Section } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { ContactForm } from '../contact/ContactForm';
import { BrandButton } from '../shared/BrandButton';
import { openWhatsApp } from '../../utils/whatsapp';
import { Phone, Mail, MapPin } from 'lucide-react';
import { DevSubmissionsPanel } from '../contact/DevSubmissionsPanel';

export function ContactSection() {
  const [showDevPanel, setShowDevPanel] = useState(
    typeof window !== 'undefined' && window.location.search.includes('dev=true')
  );

  return (
    <Section id="contact" className="bg-cream">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 text-center">
          Get In <span className="text-red">Touch</span>
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <p className="text-center text-black/70 text-lg mb-12 max-w-2xl mx-auto">
          Have questions or ready to place an order? We're here to help.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <Reveal delay={300}>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-black/80 hover:text-red transition-colors group"
                >
                  <div className="w-12 h-12 bg-red/10 rounded-full flex items-center justify-center group-hover:bg-red/20 transition-colors">
                    <Phone className="w-5 h-5 text-red" />
                  </div>
                  <div>
                    <p className="text-sm text-black/60">Phone</p>
                    <p className="font-semibold">+91 98765 43210</p>
                  </div>
                </a>

                <a
                  href="mailto:info@spicelux.com"
                  className="flex items-center gap-3 text-black/80 hover:text-red transition-colors group"
                >
                  <div className="w-12 h-12 bg-red/10 rounded-full flex items-center justify-center group-hover:bg-red/20 transition-colors">
                    <Mail className="w-5 h-5 text-red" />
                  </div>
                  <div>
                    <p className="text-sm text-black/60">Email</p>
                    <p className="font-semibold">info@spicelux.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-black/80">
                  <div className="w-12 h-12 bg-red/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-red" />
                  </div>
                  <div>
                    <p className="text-sm text-black/60">Location</p>
                    <p className="font-semibold">Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <BrandButton variant="gold" className="w-full" onClick={() => openWhatsApp()}>
                Order Now via WhatsApp
              </BrandButton>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-none overflow-hidden border-2 border-red/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2008427.8648849!2d74.85252!3d10.8505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Spice Lux Location - Kerala, India"
              />
            </div>
          </div>
        </Reveal>

        {/* Contact Form */}
        <Reveal delay={400}>
          <ContactForm />
        </Reveal>
      </div>

      {/* Dev Panel */}
      {showDevPanel && <DevSubmissionsPanel />}
    </Section>
  );
}
