import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/ui/StatCard';
import { ChartCard } from '@/components/charts/ChartCard';
import { CardTable } from '@/components/ui/CardTable';
import { Badge } from '@/components/ui/Badge';
import {
  managerStats, mockAttendance, mockRooms, mockChildren, mockIncidents,
  mockActivities, mockCleaningLogs, attendanceTrendData,
} from '@/data/mockData';
import { formatDate } from '@/lib/utils';
import { UserCheck, Building2, AlertTriangle, Wrench, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function ManagerDashboard() {
  return (
    <DashboardLayout title="Operations Overview" subtitle="Daily operations and facility management">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard label="Present Today" value={managerStats.presentToday} change={`${managerStats.absentToday} absent`} icon={UserCheck} />
        <StatCard label="Active Rooms" value={managerStats.roomsActive} icon={Building2} />
        <StatCard label="Open Incidents" value={managerStats.openIncidents} trend="down" icon={AlertTriangle} />
        <StatCard label="Maintenance Items" value={managerStats.maintenanceItems} icon={Wrench} />
        <StatCard label="Activities Logged" value={managerStats.activitiesLogged} icon={Activity} />
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <ChartCard title="Weekly Attendance Trend">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={attendanceTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#7A1F4D20" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="present" fill="#A7C7A3" radius={[8, 8, 0, 0]} name="Present" />
              <Bar dataKey="absent" fill="#E65A7A" radius={[8, 8, 0, 0]} name="Absent" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <div>
          <h3 className="font-display text-xl text-berry mb-4">Today's Attendance</h3>
          <CardTable data={mockAttendance} keyExtractor={(a) => a.id} columns={[
            { key: 'child', header: 'Child', render: (a) => mockChildren.find(c => c.id === a.childId)?.firstName ?? a.childId },
            { key: 'status', header: 'Status', render: (a) => <Badge variant={a.status === 'present' ? 'success' : a.status === 'late' ? 'warning' : 'danger'}>{a.status}</Badge> },
            { key: 'in', header: 'Check In', render: (a) => a.checkIn ?? '—' },
          ]} />
        </div>
      </div>
    </DashboardLayout>
  );
}

function MgrPage({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <DashboardLayout title={title} subtitle={subtitle}>{children}</DashboardLayout>;
}

export function ManagerAttendancePage() {
  return (
    <MgrPage title="Attendance" subtitle="Daily attendance records">
      <CardTable data={mockAttendance} keyExtractor={(a) => a.id} columns={[
        { key: 'child', header: 'Child', render: (a) => { const c = mockChildren.find(ch => ch.id === a.childId); return c ? `${c.firstName} ${c.lastName}` : a.childId; } },
        { key: 'date', header: 'Date', render: (a) => formatDate(a.date) },
        { key: 'in', header: 'Check In', render: (a) => a.checkIn ?? '—' },
        { key: 'out', header: 'Check Out', render: (a) => a.checkOut ?? '—' },
        { key: 'status', header: 'Status', render: (a) => <Badge variant={a.status === 'present' ? 'success' : 'warning'}>{a.status}</Badge> },
      ]} />
    </MgrPage>
  );
}

export function ManagerRoomsPage() {
  return (
    <MgrPage title="Room Allocation" subtitle="Current room status">
      <CardTable data={mockRooms} keyExtractor={(r) => r.id} columns={[
        { key: 'name', header: 'Room', render: (r) => r.name },
        { key: 'occ', header: 'Occupancy', render: (r) => `${r.currentOccupancy}/${r.capacity}` },
        { key: 'clean', header: 'Cleaning', render: (r) => <Badge variant={r.cleaningStatus === 'clean' ? 'success' : 'warning'}>{r.cleaningStatus}</Badge> },
        { key: 'risk', header: 'Risk', render: (r) => <Badge>{r.riskStatus}</Badge> },
      ]} />
    </MgrPage>
  );
}

export function ManagerGroupsPage() {
  const groups = mockChildren.reduce((acc, child) => {
    const key = child.childminderId ?? 'unassigned';
    if (!acc[key]) acc[key] = [];
    acc[key].push(child);
    return acc;
  }, {} as Record<string, typeof mockChildren>);

  return (
    <MgrPage title="Child Groups" subtitle="Groups by childminder">
      <div className="space-y-6">
        {Object.entries(groups).map(([cmId, children]) => (
          <div key={cmId} className="glass rounded-[var(--radius-card)] p-6">
            <h3 className="font-display text-lg text-berry mb-4">Group: {cmId.replace('cm', 'Childminder ')}</h3>
            <div className="flex flex-wrap gap-2">
              {children.map((c) => (
                <span key={c.id} className="rounded-full bg-rose/10 px-4 py-2 text-sm font-medium text-berry">{c.firstName} {c.lastName}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MgrPage>
  );
}

export function ManagerMaintenancePage() {
  const items = mockIncidents.filter(i => i.status !== 'resolved');
  return (
    <MgrPage title="Maintenance" subtitle="Open maintenance and equipment issues">
      <CardTable data={items.length ? items : mockIncidents} keyExtractor={(i) => i.id} columns={[
        { key: 'type', header: 'Type', render: (i) => i.type },
        { key: 'desc', header: 'Description', render: (i) => i.description },
        { key: 'room', header: 'Room', render: (i) => i.roomId?.replace('r', 'Room ') ?? '—' },
        { key: 'status', header: 'Status', render: (i) => <Badge variant={i.status === 'resolved' ? 'success' : 'warning'}>{i.status}</Badge> },
      ]} />
    </MgrPage>
  );
}

export function ManagerIncidentsPage() {
  return (
    <MgrPage title="Incidents" subtitle="Incident reports and tracking">
      <CardTable data={mockIncidents} keyExtractor={(i) => i.id} columns={[
        { key: 'date', header: 'Date', render: (i) => formatDate(i.date) },
        { key: 'type', header: 'Type', render: (i) => i.type },
        { key: 'desc', header: 'Description', render: (i) => i.description },
        { key: 'status', header: 'Status', render: (i) => <Badge variant={i.status === 'resolved' ? 'success' : 'warning'}>{i.status}</Badge> },
      ]} />
    </MgrPage>
  );
}

export function ManagerActivitiesPage() {
  return (
    <MgrPage title="Activities" subtitle="Logged activities across groups">
      <CardTable data={mockActivities} keyExtractor={(a) => a.id} columns={[
        { key: 'activity', header: 'Activity', render: (a) => a.activity },
        { key: 'child', header: 'Child', render: (a) => mockChildren.find(c => c.id === a.childId)?.firstName ?? a.childId },
        { key: 'by', header: 'Logged By', render: (a) => a.loggedBy },
        { key: 'date', header: 'Date', render: (a) => formatDate(a.date) },
      ]} />
    </MgrPage>
  );
}

export function ManagerCleaningPage() {
  return (
    <MgrPage title="Cleaning Logs" subtitle="Room cleaning schedule and history">
      <CardTable data={mockCleaningLogs} keyExtractor={(c) => c.id} columns={[
        { key: 'room', header: 'Room', render: (c) => c.roomId.replace('r', 'Room ') },
        { key: 'date', header: 'Date', render: (c) => formatDate(c.date) },
        { key: 'by', header: 'Cleaned By', render: (c) => c.cleanedBy },
        { key: 'status', header: 'Status', render: (c) => <Badge variant={c.status === 'completed' ? 'success' : 'warning'}>{c.status}</Badge> },
      ]} />
    </MgrPage>
  );
}
