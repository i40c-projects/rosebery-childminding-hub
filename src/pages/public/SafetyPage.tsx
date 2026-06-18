import { Shield, Lock, HeartPulse, Sparkles, AlertTriangle, FileCheck } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';

export function SafetyPage() {
  return (
    <>
      <PageHero
        ghostText="SAFE SPACE"
        title="Safety Is at Our Core"
        subtitle="Rosebery maintains a comprehensive safety framework covering safeguarding, access control, cleaning, first aid and emergency procedures."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Safeguarding', desc: 'Robust safeguarding policies, DBS checks and staff training for all childminders and assistants.' },
              { icon: Lock, title: 'Secure Access', desc: 'Controlled entry, visitor logs and sign-in procedures for all visitors to the premises.' },
              { icon: FileCheck, title: 'Risk Assessments', desc: 'Regular room risk assessments reviewed and updated on schedule.' },
              { icon: HeartPulse, title: 'First Aid', desc: 'First aid planning and trained personnel on site during operating hours.' },
              { icon: Sparkles, title: 'Cleaning Logs', desc: 'Daily cleaning schedules tracked and logged for all rooms and shared areas.' },
              { icon: AlertTriangle, title: 'Emergency Procedures', desc: 'Clear emergency protocols, incident reporting and parent notification procedures.' },
            ].map((item) => (
              <div key={item.title} className="glass rounded-[var(--radius-card)] p-8 hover-lift">
                <item.icon className="h-10 w-10 text-sage mb-4" />
                <h3 className="font-display text-xl text-berry">{item.title}</h3>
                <p className="mt-3 text-sm text-berry/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 glass rounded-[var(--radius-panel)] p-8 md:p-12 border-l-4 border-sage">
            <h2 className="font-display text-2xl text-berry">Important Note on Outdoor Space</h2>
            <p className="mt-4 text-berry/70 max-w-3xl">
              An outdoor play area is not currently confirmed as part of the Rosebery premises. Any future outdoor provision
              would be subject to premises setup and approval. Supervised local walks may be arranged by individual childminders
              where appropriate and with parent consent.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
