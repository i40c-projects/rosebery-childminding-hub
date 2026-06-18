import { useState } from 'react';
import { Briefcase, Users, Building2, Receipt, CheckCircle } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';

export function BecomeChildminderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const required = ['name', 'email', 'phone', 'status', 'experience'];
    const missing = required.some((field) => !String(form.get(field) ?? '').trim());

    if (missing) {
      setError('Please complete the required fields so we can review your enquiry.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        ghostText="CHILDMINDERS"
        title="Run Your Own Childcare Business"
        subtitle="Rosebery offers independent childminders a professional hub — managed premises, admin support and a community of families."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl text-berry">Why Rosebery?</h2>
              <p className="mt-4 text-berry/70 leading-relaxed">
                As an independent childminder at Rosebery, you operate your own childcare business from professionally
                managed premises. You are not a staff member in a nursery hierarchy — you are an independent provider
                with the support of a shared facility.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Managed premises with Room 1, 2 and 3 allocation',
                  'Admin support for enquiries and registrations',
                  'Safety framework, risk assessments and compliance',
                  'Shared utilities, cleaning and resources',
                  'Optional assistant support for your group',
                  'Parent communication tools and dashboard access',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-berry/80">
                    <CheckCircle className="h-5 w-5 text-sage shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="glass rounded-[var(--radius-card)] p-8">
                <Briefcase className="h-8 w-8 text-rose mb-4" />
                <h3 className="font-display text-xl text-berry">Your Business, Our Hub</h3>
                <p className="mt-2 text-sm text-berry/70">Manage your own groups, parent relationships and daily care while Rosebery handles the premises.</p>
              </div>
              <div className="glass rounded-[var(--radius-card)] p-8">
                <Users className="h-8 w-8 text-rose mb-4" />
                <h3 className="font-display text-xl text-berry">Work Alone or With an Assistant</h3>
                <p className="mt-2 text-sm text-berry/70">Some childminders work independently; others employ their own assistant within their group.</p>
              </div>
              <div className="glass rounded-[var(--radius-card)] p-8">
                <Receipt className="h-8 w-8 text-rose mb-4" />
                <h3 className="font-display text-xl text-berry">Facility & Service Charges</h3>
                <p className="mt-2 text-sm text-berry/70">Charges cover room use, utilities, cleaning, admin support and shared services. Exact model subject to legal advice.</p>
              </div>
              <div className="glass rounded-[var(--radius-card)] p-8">
                <Building2 className="h-8 w-8 text-rose mb-4" />
                <h3 className="font-display text-xl text-berry">Flexible Room Allocation</h3>
                <p className="mt-2 text-sm text-berry/70">Rooms allocated based on group size, child age, ratios and availability.</p>
              </div>
            </div>
          </div>
          <div className="mt-16 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <div className="glass rounded-[var(--radius-card)] p-8">
              <h2 className="font-display text-3xl text-berry">Apply to Join the Hub</h2>
              <p className="mt-4 text-berry/70 leading-relaxed">
                Tell us about your childminding background, preferred working pattern and assistant needs.
                Rosebery will review applications against room availability, safeguarding requirements and legal setup.
              </p>
            </div>
            {submitted ? (
              <div className="glass rounded-[var(--radius-panel)] p-10 text-center">
                <CheckCircle className="h-14 w-14 text-sage mx-auto mb-4" />
                <h2 className="font-display text-3xl text-berry">Application Received</h2>
                <p className="mt-4 text-berry/70">
                  Thank you. Rosebery management will review your childminder enquiry and contact you about next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-[var(--radius-panel)] p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input name="name" label="Full Name" required />
                  <Input name="phone" label="Phone" type="tel" required />
                </div>
                <Input name="email" label="Email" type="email" required />
                <Select name="status" label="Current Status" required options={[
                  { value: '', label: 'Select...' },
                  { value: 'registered-childminder', label: 'Registered childminder' },
                  { value: 'in-progress', label: 'Registration in progress' },
                  { value: 'exploring', label: 'Exploring childminding' },
                ]} />
                <Select name="assistant" label="Assistant Plans" options={[
                  { value: 'alone', label: 'I plan to work alone' },
                  { value: 'assistant', label: 'I may work with an assistant' },
                  { value: 'unsure', label: 'Not sure yet' },
                ]} />
                <Textarea name="experience" label="Experience & Safeguarding Background" required placeholder="Tell us about your childcare experience, training, DBS status and preferred age groups." />
                <Textarea name="availability" label="Preferred Availability" placeholder="Days, hours, room needs or group size preferences." />
                {error && <p className="text-sm font-medium text-red-500">{error}</p>}
                <Button type="submit" size="lg" className="w-full">Submit Childminder Application</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
