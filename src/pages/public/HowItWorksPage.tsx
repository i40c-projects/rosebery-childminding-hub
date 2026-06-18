import { Link } from 'react-router-dom';
import { Building2, UserCheck, Baby, Receipt } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { FlowDiagram, FloatingCard } from '@/components/ui/FlowDiagram';
import { Button } from '@/components/ui/Button';

export function HowItWorksPage() {
  return (
    <>
      <PageHero
        ghostText="HOW IT WORKS"
        title="The Facility-Based Childminding Model"
        subtitle="Rosebery is different from a standard nursery. Here's how our hub model works for everyone involved."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="glass rounded-[var(--radius-panel)] p-8 md:p-12">
            <h2 className="font-display text-3xl text-berry mb-8">Ownership & Governance</h2>
            <FlowDiagram steps={[
              { title: 'Liverpool Muslim Society', description: 'Community governance and accountability' },
              { title: 'Rosebery Management', description: 'Admin, finance support, premises and safety' },
              { title: 'Independent Childminders', description: 'Operate own childcare businesses from shared rooms' },
              { title: 'Children & Families', description: 'Receive quality care within a trusted framework' },
            ]} />
          </div>

          <div>
            <h2 className="font-display text-3xl text-berry mb-8">What Rosebery Manages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FloatingCard title="Premises & Rooms" description="Room 1, 2 and 3 — flexible allocation based on group size, age and capacity." icon={<Building2 className="h-7 w-7" />} />
              <FloatingCard title="Safety & Compliance" description="Risk assessments, visitor logs, cleaning schedules and emergency procedures." icon={<UserCheck className="h-7 w-7" />} delay={100} />
              <FloatingCard title="Admin & Enquiries" description="Registration coordination, announcements and parent communication support." icon={<Baby className="h-7 w-7" />} delay={200} />
              <FloatingCard title="Finance Support" description="Invoices, payment tracking, facility charges and reporting." icon={<Receipt className="h-7 w-7" />} delay={300} />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass rounded-[var(--radius-card)] p-8">
              <h3 className="font-display text-2xl text-berry">Childminder Model</h3>
              <p className="mt-4 text-berry/70 leading-relaxed">
                Childminders are independent providers, not standard nursery staff. Each manages their own childcare work,
                parent communication and assigned children. Some work alone; others may employ their own assistant.
                All follow Rosebery house rules and legal requirements.
              </p>
              <Link to="/become-a-childminder" className="inline-block mt-6"><Button variant="outline">Become a Childminder</Button></Link>
            </div>
            <div className="glass rounded-[var(--radius-card)] p-8">
              <h3 className="font-display text-2xl text-berry">Finance Models</h3>
              <p className="mt-4 text-berry/70 leading-relaxed">
                <strong>Model A:</strong> Parents pay childminders directly. Childminders pay Rosebery facility/service charges.<br /><br />
                <strong>Model B:</strong> Rosebery collects parent fees centrally, deducts facility charges and distributes to childminders.<br /><br />
                The exact model will depend on legal and accounting advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
