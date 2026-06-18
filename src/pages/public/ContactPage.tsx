import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        ghostText="START HERE"
        title="Get in Touch"
        subtitle="Have a question about Rosebery? We'd love to hear from parents, childminders and community members."
        compact
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              {[
                { icon: MapPin, label: 'Location', value: 'Liverpool Muslim Society community premises, Liverpool (address TBC)' },
                { icon: Mail, label: 'Email', value: 'enquiries@rosebery.local' },
                { icon: Phone, label: 'Phone', value: '0151 XXX XXXX' },
              ].map((item) => (
                <div key={item.label} className="glass rounded-2xl p-6 flex gap-4">
                  <item.icon className="h-6 w-6 text-rose shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase text-berry/50">{item.label}</p>
                    <p className="mt-1 text-berry">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="glass rounded-[var(--radius-panel)] p-12 text-center">
                  <Send className="h-12 w-12 text-rose mx-auto mb-4" />
                  <h2 className="font-display text-3xl text-berry">Message Sent!</h2>
                  <p className="mt-4 text-berry/70">Thank you for contacting Rosebery. We'll respond within 2 working days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-[var(--radius-panel)] p-8 space-y-6">
                  <h2 className="font-display text-2xl text-berry">Send an Enquiry</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input label="First Name" required />
                    <Input label="Last Name" required />
                  </div>
                  <Input label="Email" type="email" required />
                  <Input label="Phone" type="tel" />
                  <Select label="I am a..." options={[
                    { value: 'parent', label: 'Parent / Guardian' },
                    { value: 'childminder', label: 'Prospective Childminder' },
                    { value: 'community', label: 'Community Member' },
                    { value: 'other', label: 'Other' },
                  ]} />
                  <Textarea label="Message" required placeholder="Tell us how we can help..." />
                  <Button type="submit" size="lg">Send Message</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
