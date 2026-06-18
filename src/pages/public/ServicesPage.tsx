import { Link } from 'react-router-dom';
import { Clock, Sun, Moon, Calendar, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';

const services = [
  { icon: Sun, title: 'Early Years Care', desc: 'Quality early years provision for young children, subject to setup and approval.', tag: 'Subject to setup' },
  { icon: Clock, title: 'Extended Care Sessions', desc: 'Flexible extended hours to support working families, depending on availability.', tag: 'Flexible' },
  { icon: Calendar, title: 'After-School Care', desc: 'After-school sessions planned as part of the service offering.', tag: 'Planned' },
  { icon: Sparkles, title: 'Holiday Care', desc: 'Holiday sessions available depending on childminder availability and premises setup.', tag: 'Subject to availability' },
  { icon: Moon, title: 'Rest & Routine Support', desc: 'Structured rest periods, meal times and daily routines within each group.', tag: 'Included' },
];

export function ServicesPage() {
  return (
    <>
      <PageHero
        ghostText="SERVICES"
        title="Flexible Childcare Sessions"
        subtitle="Rosebery offers a range of session types subject to setup, approval and childminder availability."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="glass rounded-[var(--radius-card)] p-8 hover-lift">
                <s.icon className="h-10 w-10 text-rose mb-4" />
                <span className="inline-block rounded-full bg-sage/30 px-3 py-1 text-xs font-semibold text-berry mb-3">{s.tag}</span>
                <h3 className="font-display text-2xl text-berry">{s.title}</h3>
                <p className="mt-3 text-berry/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 glass rounded-[var(--radius-panel)] p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl text-berry">Shared Facility Services</h2>
            <p className="mt-4 text-berry/70 max-w-2xl mx-auto">
              All sessions include access to managed premises, safety framework, cleaning, utilities,
              shared resources and admin support. Food and snack provision may be included where agreed.
            </p>
            <Link to="/register-interest" className="inline-block mt-8"><Button size="lg">Register Your Interest</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
