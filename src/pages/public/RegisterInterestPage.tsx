import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

export function RegisterInterestPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        ghostText="REGISTER"
        title="Register Your Interest"
        subtitle="Tell us about your family or your interest in joining Rosebery as a childminder. We'll be in touch."
        compact
      />
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="glass rounded-[var(--radius-panel)] p-12 text-center">
              <CheckCircle className="h-16 w-16 text-sage mx-auto mb-4" />
              <h2 className="font-display text-3xl text-berry">Interest Registered!</h2>
              <p className="mt-4 text-berry/70">Thank you for your interest in Rosebery. Our team will contact you within 5 working days.</p>
              <Link to="/register" className="inline-block mt-8"><Button>Complete Full Registration</Button></Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-[var(--radius-panel)] p-8 space-y-6">
              <Select label="I am registering as..." options={[
                { value: 'parent', label: 'Parent / Guardian' },
                { value: 'childminder', label: 'Prospective Childminder' },
              ]} required />
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="First Name" required />
                <Input label="Last Name" required />
              </div>
              <Input label="Email" type="email" required />
              <Input label="Phone" type="tel" required />
              <Input label="Child's Name (if parent)" />
              <Input label="Child's Age (if parent)" />
              <Select label="Preferred Sessions" options={[
                { value: 'full-time', label: 'Full Time (Mon-Fri)' },
                { value: 'part-time', label: 'Part Time' },
                { value: 'extended', label: 'Extended Hours' },
                { value: 'holiday', label: 'Holiday Care' },
              ]} />
              <Textarea label="Additional Notes" placeholder="Tell us about your needs..." />
              <Button type="submit" size="lg" className="w-full">Submit Interest</Button>
              <p className="text-center text-sm text-berry/60">
                Ready for full registration? <Link to="/register" className="text-rose font-semibold">Start registration form</Link>
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
