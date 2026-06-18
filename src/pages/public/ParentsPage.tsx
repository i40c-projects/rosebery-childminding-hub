import { Link } from 'react-router-dom';
import { FileText, MessageSquare, CreditCard, Baby, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { FlowDiagram } from '@/components/ui/FlowDiagram';
import { Button } from '@/components/ui/Button';

export function ParentsPage() {
  return (
    <>
      <PageHero
        ghostText="PARENT JOURNEY"
        title="A Clear Path for Families"
        subtitle="From your first enquiry to daily updates and payments — Rosebery guides you every step of the way."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <FlowDiagram steps={[
              { title: 'Register Interest', description: 'Tell us about your family and childcare needs' },
              { title: 'Complete Registration', description: 'Child details, medical info, emergency contacts' },
              { title: 'Availability Check', description: 'We review room and childminder capacity' },
              { title: 'Childminder Matching', description: 'Matched to the right group and provider' },
              { title: 'Agreement & Fees', description: 'Clear fee structure and session confirmation' },
              { title: 'Start & Stay Connected', description: 'Daily updates, invoices and parent portal' },
            ]} />
            <div className="space-y-6">
              {[
                { icon: FileText, title: 'Registration', desc: 'Multi-step form covering parent details, child information, allergies and consent.' },
                { icon: MessageSquare, title: 'Communication', desc: 'Daily notes, announcements and direct messaging with your childminder.' },
                { icon: CreditCard, title: 'Payments', desc: 'Clear invoices, payment history and outstanding balance tracking.' },
                { icon: Baby, title: 'Child Records', desc: 'Attendance, activities, meals and development updates in your portal.' },
              ].map((item) => (
                <div key={item.title} className="glass rounded-2xl p-6 flex gap-4 hover-lift">
                  <item.icon className="h-8 w-8 text-rose shrink-0" />
                  <div>
                    <h3 className="font-display text-xl text-berry">{item.title}</h3>
                    <p className="mt-1 text-sm text-berry/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 flex flex-wrap gap-4 justify-center">
            <Link to="/register"><Button size="lg">Start Registration <ArrowRight className="h-5 w-5" /></Button></Link>
            <Link to="/register-interest"><Button variant="outline" size="lg">Register Interest First</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
