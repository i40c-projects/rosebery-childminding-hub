import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CardTable } from '@/components/ui/CardTable';
import { Badge } from '@/components/ui/Badge';
import { mockAttendance, mockActivities, mockMeals, mockDailyNotes, mockChildren } from '@/data/mockData';
import { formatDate } from '@/lib/utils';

const ASSIGNED_CHILDMINDER = 'cm1';
const assignedChildren = mockChildren.filter(c => c.childminderId === ASSIGNED_CHILDMINDER);

export function AssistantDashboard() {
  return (
    <DashboardLayout title="Assistant Overview" subtitle="Limited access — attendance, activities, meals and notes">
      <div className="glass rounded-[var(--radius-card)] p-6 mb-8 border-l-4 border-sky">
        <p className="text-sm text-berry/70">You have limited permissions as an assistant. You can log attendance, activities, meals and daily notes for assigned children only.</p>
      </div>
      <h3 className="font-display text-xl text-berry mb-4">Assigned Children</h3>
      <CardTable data={assignedChildren} keyExtractor={(c) => c.id} columns={[
        { key: 'name', header: 'Name', render: (c) => `${c.firstName} ${c.lastName}` },
        { key: 'allergies', header: 'Allergies', render: (c) => c.allergies?.join(', ') || 'None' },
      ]} />
    </DashboardLayout>
  );
}

function AsstPage({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <DashboardLayout title={title} subtitle={subtitle}>{children}</DashboardLayout>;
}

export function AssistantAttendancePage() {
  const records = mockAttendance.filter(a => assignedChildren.some(c => c.id === a.childId));
  return (
    <AsstPage title="Attendance" subtitle="Log attendance for assigned children">
      <CardTable data={records} keyExtractor={(a) => a.id} columns={[
        { key: 'child', header: 'Child', render: (a) => assignedChildren.find(c => c.id === a.childId)?.firstName },
        { key: 'in', header: 'Check In', render: (a) => a.checkIn ?? '—' },
        { key: 'status', header: 'Status', render: (a) => <Badge variant="success">{a.status}</Badge> },
      ]} />
    </AsstPage>
  );
}

export function AssistantActivitiesPage() {
  const acts = mockActivities.filter(a => assignedChildren.some(c => c.id === a.childId));
  return (
    <AsstPage title="Activities" subtitle="Log activities">
      <CardTable data={acts} keyExtractor={(a) => a.id} columns={[
        { key: 'activity', header: 'Activity', render: (a) => a.activity },
        { key: 'child', header: 'Child', render: (a) => assignedChildren.find(c => c.id === a.childId)?.firstName },
      ]} />
    </AsstPage>
  );
}

export function AssistantMealsPage() {
  const meals = mockMeals.filter(m => assignedChildren.some(c => c.id === m.childId));
  return (
    <AsstPage title="Meals" subtitle="Log meals">
      <CardTable data={meals} keyExtractor={(m) => m.id} columns={[
        { key: 'child', header: 'Child', render: (m) => assignedChildren.find(c => c.id === m.childId)?.firstName },
        { key: 'type', header: 'Meal', render: (m) => m.mealType },
        { key: 'desc', header: 'Description', render: (m) => m.description },
      ]} />
    </AsstPage>
  );
}

export function AssistantNotesPage() {
  const notes = mockDailyNotes.filter(n => assignedChildren.some(c => c.id === n.childId));
  return (
    <AsstPage title="Daily Notes" subtitle="Write daily notes">
      <CardTable data={notes} keyExtractor={(n) => n.id} columns={[
        { key: 'child', header: 'Child', render: (n) => assignedChildren.find(c => c.id === n.childId)?.firstName },
        { key: 'content', header: 'Note', render: (n) => n.content },
        { key: 'date', header: 'Date', render: (n) => formatDate(n.date) },
      ]} />
    </AsstPage>
  );
}
