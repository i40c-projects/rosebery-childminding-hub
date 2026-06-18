import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/ui/StatCard';
import { CardTable } from '@/components/ui/CardTable';
import { Badge } from '@/components/ui/Badge';
import {
  mockChildren, mockAttendance, mockActivities, mockMeals, mockNaps,
  mockDailyNotes, mockAnnouncements,
} from '@/data/mockData';
import { formatDate } from '@/lib/utils';
import { Baby, Calendar, Activity, BookOpen } from 'lucide-react';

const MY_CHILDMINDER_ID = 'cm1';
const myChildren = mockChildren.filter(c => c.childminderId === MY_CHILDMINDER_ID);

export function ChildminderDashboard() {
  return (
    <DashboardLayout title="My Groups" subtitle="Your children and daily overview">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard label="My Children" value={myChildren.length} icon={Baby} />
        <StatCard label="Present Today" value={mockAttendance.filter(a => myChildren.some(c => c.id === a.childId) && a.status === 'present').length} icon={Calendar} />
        <StatCard label="Activities Today" value={mockActivities.filter(a => myChildren.some(c => c.id === a.childId)).length} icon={Activity} />
        <StatCard label="Notes Pending" value={1} icon={BookOpen} />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-display text-xl text-berry mb-4">My Children</h3>
          <CardTable data={myChildren} keyExtractor={(c) => c.id} columns={[
            { key: 'name', header: 'Name', render: (c) => `${c.firstName} ${c.lastName}` },
            { key: 'room', header: 'Room', render: (c) => c.roomId?.replace('r', 'Room ') ?? '—' },
            { key: 'allergies', header: 'Allergies', render: (c) => c.allergies?.length ? c.allergies.join(', ') : 'None' },
          ]} />
        </div>
        <div>
          <h3 className="font-display text-xl text-berry mb-4">Latest Announcements</h3>
          <div className="space-y-3">
            {mockAnnouncements.slice(0, 2).map((a) => (
              <div key={a.id} className="glass rounded-2xl p-4">
                <p className="font-semibold text-berry">{a.title}</p>
                <p className="text-sm text-berry/60 mt-1">{a.content.slice(0, 100)}...</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function CMPage({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <DashboardLayout title={title} subtitle={subtitle}>{children}</DashboardLayout>;
}

export function ChildminderChildrenPage() {
  return (
    <CMPage title="Children" subtitle="Your assigned children">
      <CardTable data={myChildren} keyExtractor={(c) => c.id} columns={[
        { key: 'name', header: 'Name', render: (c) => `${c.firstName} ${c.lastName}` },
        { key: 'dob', header: 'DOB', render: (c) => formatDate(c.dateOfBirth) },
        { key: 'allergies', header: 'Allergies', render: (c) => c.allergies?.join(', ') || 'None' },
        { key: 'medical', header: 'Medical', render: (c) => c.medicalNotes ?? '—' },
      ]} />
    </CMPage>
  );
}

export function ChildminderAttendancePage() {
  const records = mockAttendance.filter(a => myChildren.some(c => c.id === a.childId));
  return (
    <CMPage title="Attendance" subtitle="Daily attendance">
      <CardTable data={records} keyExtractor={(a) => a.id} columns={[
        { key: 'child', header: 'Child', render: (a) => myChildren.find(c => c.id === a.childId)?.firstName },
        { key: 'in', header: 'Check In', render: (a) => a.checkIn ?? '—' },
        { key: 'out', header: 'Check Out', render: (a) => a.checkOut ?? '—' },
        { key: 'status', header: 'Status', render: (a) => <Badge variant={a.status === 'present' ? 'success' : 'warning'}>{a.status}</Badge> },
      ]} />
    </CMPage>
  );
}

export function ChildminderActivitiesPage() {
  const acts = mockActivities.filter(a => myChildren.some(c => c.id === a.childId));
  return (
    <CMPage title="Activities" subtitle="Activity logs">
      <CardTable data={acts} keyExtractor={(a) => a.id} columns={[
        { key: 'activity', header: 'Activity', render: (a) => a.activity },
        { key: 'child', header: 'Child', render: (a) => myChildren.find(c => c.id === a.childId)?.firstName },
        { key: 'notes', header: 'Notes', render: (a) => a.notes ?? '—' },
      ]} />
    </CMPage>
  );
}

export function ChildminderMealsPage() {
  const meals = mockMeals.filter(m => myChildren.some(c => c.id === m.childId));
  return (
    <CMPage title="Meal Logs" subtitle="Meal records">
      <CardTable data={meals} keyExtractor={(m) => m.id} columns={[
        { key: 'child', header: 'Child', render: (m) => myChildren.find(c => c.id === m.childId)?.firstName },
        { key: 'type', header: 'Meal', render: (m) => m.mealType },
        { key: 'desc', header: 'Description', render: (m) => m.description },
        { key: 'notes', header: 'Notes', render: (m) => m.notes ?? '—' },
      ]} />
    </CMPage>
  );
}

export function ChildminderNapsPage() {
  const naps = mockNaps.filter(n => myChildren.some(c => c.id === n.childId));
  return (
    <CMPage title="Nap Logs" subtitle="Rest periods">
      <CardTable data={naps} keyExtractor={(n) => n.id} columns={[
        { key: 'child', header: 'Child', render: (n) => myChildren.find(c => c.id === n.childId)?.firstName },
        { key: 'start', header: 'Start', render: (n) => n.startTime },
        { key: 'end', header: 'End', render: (n) => n.endTime ?? '—' },
        { key: 'notes', header: 'Notes', render: (n) => n.notes ?? '—' },
      ]} />
    </CMPage>
  );
}

export function ChildminderNotesPage() {
  const notes = mockDailyNotes.filter(n => myChildren.some(c => c.id === n.childId));
  return (
    <CMPage title="Daily Notes" subtitle="Parent updates">
      <CardTable data={notes} keyExtractor={(n) => n.id} columns={[
        { key: 'child', header: 'Child', render: (n) => myChildren.find(c => c.id === n.childId)?.firstName },
        { key: 'content', header: 'Note', render: (n) => n.content },
        { key: 'date', header: 'Date', render: (n) => formatDate(n.date) },
      ]} />
    </CMPage>
  );
}

export function ChildminderMessagesPage() {
  return (
    <CMPage title="Messages" subtitle="Parent communication">
      <div className="glass rounded-[var(--radius-card)] p-8 text-center text-berry/60">
        <p>Message centre ready for Supabase integration.</p>
        <p className="mt-2 text-sm">Connect your Supabase project to enable real-time messaging.</p>
      </div>
    </CMPage>
  );
}

export function ChildminderAnnouncementsPage() {
  return (
    <CMPage title="Announcements" subtitle="Hub announcements">
      <CardTable data={mockAnnouncements} keyExtractor={(a) => a.id} columns={[
        { key: 'title', header: 'Title', render: (a) => a.title },
        { key: 'content', header: 'Content', render: (a) => a.content.slice(0, 80) + '...' },
        { key: 'date', header: 'Date', render: (a) => formatDate(a.date) },
      ]} />
    </CMPage>
  );
}

export function ChildminderAssistantsPage() {
  return (
    <CMPage title="Assistants" subtitle="Manage your assistant">
      <div className="glass rounded-[var(--radius-card)] p-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full gradient-rose flex items-center justify-center text-white font-bold">SA</div>
          <div>
            <p className="font-semibold text-berry">Sara Ahmed</p>
            <p className="text-sm text-berry/60">assistant@rosebery.local</p>
            <Badge variant="success" className="mt-2">Active</Badge>
          </div>
        </div>
      </div>
    </CMPage>
  );
}
