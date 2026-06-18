import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/ui/StatCard';
import { CardTable } from '@/components/ui/CardTable';
import { Badge } from '@/components/ui/Badge';
import {
  mockChildren, mockParents, mockAttendance, mockActivities, mockMeals,
  mockDailyNotes, mockInvoices, mockPayments, mockAnnouncements, mockDocuments,
} from '@/data/mockData';
import { formatCurrency, formatDate, calculateAge } from '@/lib/utils';
import { Baby, Calendar, Receipt, Activity } from 'lucide-react';

const PARENT_ID = 'p1';
const myChildren = mockChildren.filter(c => c.parentId === PARENT_ID);
const parent = mockParents.find(p => p.id === PARENT_ID)!;
const myInvoices = mockInvoices.filter(i => i.parentId === PARENT_ID);

export function ParentDashboard() {
  return (
    <DashboardLayout title="My Child" subtitle={`Welcome, ${parent.name}`}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard label="My Children" value={myChildren.length} icon={Baby} />
        <StatCard label="Present Today" value={mockAttendance.filter(a => myChildren.some(c => c.id === a.childId) && a.status === 'present').length} icon={Calendar} />
        <StatCard label="Outstanding" value={formatCurrency(myInvoices.filter(i => i.status !== 'paid').reduce((s, i) => s + i.amount, 0))} icon={Receipt} />
        <StatCard label="Updates Today" value={mockDailyNotes.filter(n => myChildren.some(c => c.id === n.childId)).length} icon={Activity} />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {myChildren.map((child) => (
          <div key={child.id} className="glass rounded-[var(--radius-card)] p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-2xl gradient-rose flex items-center justify-center text-white font-display text-2xl">
                {child.firstName[0]}
              </div>
              <div>
                <h3 className="font-display text-2xl text-berry">{child.firstName} {child.lastName}</h3>
                <p className="text-sm text-berry/60">Age {calculateAge(child.dateOfBirth)} • {child.roomId?.replace('r', 'Room ')}</p>
              </div>
            </div>
            {child.allergies && child.allergies.length > 0 && (
              <Badge variant="warning" className="mb-3">Allergies: {child.allergies.join(', ')}</Badge>
            )}
            <p className="text-sm text-berry/70">
              {mockDailyNotes.find(n => n.childId === child.id)?.content ?? 'No updates today yet.'}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

function ParentPage({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <DashboardLayout title={title} subtitle={subtitle}>{children}</DashboardLayout>;
}

export function ParentAttendancePage() {
  const records = mockAttendance.filter(a => myChildren.some(c => c.id === a.childId));
  return (
    <ParentPage title="Attendance" subtitle="Your children's attendance">
      <CardTable data={records} keyExtractor={(a) => a.id} columns={[
        { key: 'child', header: 'Child', render: (a) => myChildren.find(c => c.id === a.childId)?.firstName },
        { key: 'date', header: 'Date', render: (a) => formatDate(a.date) },
        { key: 'in', header: 'Check In', render: (a) => a.checkIn ?? '—' },
        { key: 'status', header: 'Status', render: (a) => <Badge variant={a.status === 'present' ? 'success' : 'warning'}>{a.status}</Badge> },
      ]} />
    </ParentPage>
  );
}

export function ParentUpdatesPage() {
  const updates = [
    ...mockActivities.filter(a => myChildren.some(c => c.id === a.childId)).map(a => ({ type: 'Activity', child: myChildren.find(c => c.id === a.childId)?.firstName, content: a.activity, date: a.date })),
    ...mockMeals.filter(m => myChildren.some(c => c.id === m.childId)).map(m => ({ type: 'Meal', child: myChildren.find(c => c.id === m.childId)?.firstName, content: `${m.mealType}: ${m.description}`, date: m.date })),
    ...mockDailyNotes.filter(n => myChildren.some(c => c.id === n.childId)).map(n => ({ type: 'Note', child: myChildren.find(c => c.id === n.childId)?.firstName, content: n.content, date: n.date })),
  ];
  return (
    <ParentPage title="Daily Updates" subtitle="Activities, meals and notes">
      <div className="space-y-4">
        {updates.map((u, i) => (
          <div key={i} className="glass rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge>{u.type}</Badge>
              <span className="text-sm font-medium text-berry">{u.child}</span>
              <span className="text-xs text-berry/50">{formatDate(u.date)}</span>
            </div>
            <p className="text-sm text-berry/70">{u.content}</p>
          </div>
        ))}
      </div>
    </ParentPage>
  );
}

export function ParentInvoicesPage() {
  return (
    <ParentPage title="Invoices" subtitle="Your invoices">
      <CardTable data={myInvoices} keyExtractor={(i) => i.id} columns={[
        { key: 'desc', header: 'Description', render: (i) => i.description },
        { key: 'amount', header: 'Amount', render: (i) => formatCurrency(i.amount) },
        { key: 'due', header: 'Due', render: (i) => formatDate(i.dueDate) },
        { key: 'status', header: 'Status', render: (i) => <Badge variant={i.status === 'paid' ? 'success' : i.status === 'overdue' ? 'danger' : 'warning'}>{i.status}</Badge> },
      ]} />
    </ParentPage>
  );
}

export function ParentPaymentsPage() {
  return (
    <ParentPage title="Payment History" subtitle="Your payments">
      <CardTable data={mockPayments} keyExtractor={(p) => p.id} columns={[
        { key: 'amount', header: 'Amount', render: (p) => formatCurrency(p.amount) },
        { key: 'date', header: 'Date', render: (p) => formatDate(p.date) },
        { key: 'method', header: 'Method', render: (p) => p.method },
        { key: 'status', header: 'Status', render: (p) => <Badge variant="success">{p.status}</Badge> },
      ]} />
    </ParentPage>
  );
}

export function ParentAnnouncementsPage() {
  return (
    <ParentPage title="Announcements" subtitle="Hub announcements">
      <CardTable data={mockAnnouncements} keyExtractor={(a) => a.id} columns={[
        { key: 'title', header: 'Title', render: (a) => a.title },
        { key: 'content', header: 'Content', render: (a) => a.content.slice(0, 100) + '...' },
        { key: 'date', header: 'Date', render: (a) => formatDate(a.date) },
      ]} />
    </ParentPage>
  );
}

export function ParentMessagesPage() {
  return (
    <ParentPage title="Messages" subtitle="Contact your childminder">
      <div className="glass rounded-[var(--radius-card)] p-8 text-center text-berry/60">
        <p>Message centre ready for Supabase integration.</p>
      </div>
    </ParentPage>
  );
}

export function ParentEmergencyPage() {
  return (
    <ParentPage title="Emergency & Medical" subtitle="Emergency contacts, allergies and medical notes">
      <div className="space-y-4">
        {myChildren.map((child) => (
          <div key={child.id} className="glass rounded-2xl p-6">
            <h3 className="font-display text-xl text-berry">{child.firstName} {child.lastName}</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase text-berry/50">Allergies</p>
                <p className="mt-1 text-sm text-berry/75">{child.allergies?.length ? child.allergies.join(', ') : 'None recorded'}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-berry/50">Medical Notes</p>
                <p className="mt-1 text-sm text-berry/75">{child.medicalNotes ?? 'None recorded'}</p>
              </div>
            </div>
            <div className="mt-5 border-t border-berry/10 pt-4">
              <p className="text-xs font-semibold uppercase text-berry/50">Emergency Contacts</p>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {(child.emergencyContacts ?? []).map((contact, i) => (
                  <div key={`${child.id}-${i}`} className="rounded-2xl bg-white/50 p-4">
                    <p className="font-semibold text-berry">{contact.name}</p>
                    <p className="text-sm text-berry/60">{contact.relationship}</p>
                    <p className="mt-2 text-rose font-medium">{contact.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ParentPage>
  );
}

export function ParentDocumentsPage() {
  return (
    <ParentPage title="Documents" subtitle="Shared documents">
      <CardTable data={mockDocuments.filter(d => d.type !== 'Compliance')} keyExtractor={(d) => d.id} columns={[
        { key: 'name', header: 'Document', render: (d) => d.name },
        { key: 'type', header: 'Type', render: (d) => d.type },
        { key: 'date', header: 'Date', render: (d) => formatDate(d.date) },
      ]} />
    </ParentPage>
  );
}
