import { Link } from 'react-router-dom';
import { Heart, Shield, Users, Building2 } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';

export function AboutPage() {
  return (
    <>
      <PageHero
        ghostText="ABOUT"
        title="Rooted in Community, Built for Families"
        subtitle="Rosebery Childminding Hub is a community childcare initiative operating under Liverpool Muslim Society."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl text-berry">Our Mission</h2>
              <p className="mt-4 text-berry/70 leading-relaxed">
                Rosebery exists to support families, nurture children and strengthen community. We are not a standard nursery —
                we are a facility-based childminding hub where independent childminders can operate professional childcare
                businesses within a managed, safe and supportive environment.
              </p>
              <p className="mt-4 text-berry/70 leading-relaxed">
                Liverpool Muslim Society provides the community governance framework. Rosebery management handles the practical
                running of the facility, while childminders maintain their independence as childcare providers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Heart, title: 'Community First', desc: 'Serving Liverpool families with warmth and trust.' },
                { icon: Shield, title: 'Safety Led', desc: 'Robust safeguarding, risk management and compliance.' },
                { icon: Users, title: 'Independent Providers', desc: 'Childminders run their own businesses with support.' },
                { icon: Building2, title: 'Managed Premises', desc: 'Professional facility management and shared resources.' },
              ].map((v) => (
                <div key={v.title} className="glass rounded-[var(--radius-card)] p-5">
                  <v.icon className="h-6 w-6 text-rose mb-3" />
                  <h3 className="font-display text-lg text-berry">{v.title}</h3>
                  <p className="mt-1 text-xs text-berry/60">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 glass rounded-[var(--radius-panel)] p-8 md:p-12">
            <h2 className="font-display text-3xl text-berry">Governance Structure</h2>
            <p className="mt-4 text-berry/70 max-w-3xl">
              Liverpool Muslim Society provides community governance and accountability. Rosebery Management handles
              day-to-day operations including admin, finance support, premises management and safety compliance.
              Independent childminders operate within this framework, following house rules and legal childcare requirements.
            </p>
            <Link to="/how-it-works" className="inline-block mt-6"><Button>See How It Works</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
