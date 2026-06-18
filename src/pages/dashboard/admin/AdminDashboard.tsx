import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/ui/StatCard';
import { CardTable } from '@/components/ui/CardTable';
import { Badge } from '@/components/ui/Badge';
import {
  mockUsers, mockParents, mockChildren, mockChildminders, mockRooms,
  mockRegistrations, mockDocuments, mockAnnouncements, mockVisitors, mockRiskAssessments,
} from '@/data/mockData';
import { Users, Baby, ClipboardList } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export function AdminDashboard() {
  return (
    <DashboardLayout title="Admin Control" subtitle="System management and oversight">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <StatCard label="Users" value={mockUsers.length} icon={Users} />
        <StatCard label="Parents" value={mockParents.length} icon={Users} />
        <StatCard label="Children" value={mockChildren.length} icon={Baby} />
        <StatCard label="Childminders" value={mockChildminders.length} icon={Users} />
        <StatCard label="Pending Registrations" value={mockRegistrations.filter(r => r.status === 'pending').length} icon={ClipboardList} />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-display text-xl text-berry mb-4">Recent Registrations</h3>
          <CardTable data={mockRegistrations.slice(0, 3)} keyExtractor={(r) => r.id} columns={[
            { key: 'name', header: 'Parent', render: (r) => r.parentName },
            { key: 'child', header: 'Child', render: (r) => r.childName },
            { key: 'status', header: 'Status', render: (r) => <Badge variant={r.status === 'approved' ? 'success' : r.status === 'pending' ? 'warning' : 'info'}>{r.status}</Badge> },
          ]} />
        </div>
        <div>
          <h3 className="font-display text-xl text-berry mb-4">Room Status</h3>
          <CardTable data={mockRooms} keyExtractor={(r) => r.id} columns={[
            { key: 'name', header: 'Room', render: (r) => r.name },
            { key: 'occ', header: 'Occupancy', render: (r) => `${r.currentOccupancy}/${r.capacity}` },
            { key: 'clean', header: 'Cleaning', render: (r) => <Badge variant={r.cleaningStatus === 'clean' ? 'success' : 'warning'}>{r.cleaningStatus}</Badge> },
          ]} />
        </div>
      </div>
    </DashboardLayout>
  );
}

function AdminModulePage({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <DashboardLayout title={title} subtitle={subtitle}>{children}</DashboardLayout>;
}

export function AdminUsersPage() {
  return (
    <AdminModulePage title="Users" subtitle="Manage system users">
      <CardTable data={mockUsers} keyExtractor={(u) => u.id} columns={[
        { key: 'name', header: 'Name', render: (u) => <span className="font-medium">{u.name}</span> },
        { key: 'email', header: 'Email', render: (u) => u.email },
        { key: 'role', header: 'Role', render: (u) => <Badge>{u.role}</Badge> },
      ]} />
    </AdminModulePage>
  );
}

export function AdminParentsPage() {
  return (
    <AdminModulePage title="Parents" subtitle="Registered parents and guardians">
      <CardTable data={mockParents} keyExtractor={(p) => p.id} columns={[
        { key: 'name', header: 'Name', render: (p) => p.name },
        { key: 'email', header: 'Email', render: (p) => p.email },
        { key: 'phone', header: 'Phone', render: (p) => p.phone },
        { key: 'children', header: 'Children', render: (p) => p.children.length },
      ]} />
    </AdminModulePage>
  );
}

export function AdminChildrenPage() {
  return (
    <AdminModulePage title="Children" subtitle="Enrolled children">
      <CardTable data={mockChildren} keyExtractor={(c) => c.id} columns={[
        { key: 'name', header: 'Name', render: (c) => `${c.firstName} ${c.lastName}` },
        { key: 'dob', header: 'DOB', render: (c) => formatDate(c.dateOfBirth) },
        { key: 'room', header: 'Room', render: (c) => c.roomId?.replace('r', 'Room ') ?? '—' },
        { key: 'allergies', header: 'Allergies', render: (c) => c.allergies?.length ? c.allergies.join(', ') : 'None' },
      ]} />
    </AdminModulePage>
  );
}

export function AdminChildmindersPage() {
  return (
    <AdminModulePage title="Childminders" subtitle="Independent providers">
      <CardTable data={mockChildminders} keyExtractor={(c) => c.id} columns={[
        { key: 'name', header: 'Name', render: (c) => c.name },
        { key: 'room', header: 'Room', render: (c) => c.roomId?.replace('r', 'Room ') ?? '—' },
        { key: 'children', header: 'Children', render: (c) => `${c.currentChildren}/${c.maxCapacity}` },
        { key: 'status', header: 'Status', render: (c) => <Badge variant="success">{c.status}</Badge> },
      ]} />
    </AdminModulePage>
  );
}

export function AdminRoomsPage() {
  return (
    <AdminModulePage title="Rooms" subtitle="Room allocation and status">
      <CardTable data={mockRooms} keyExtractor={(r) => r.id} columns={[
        { key: 'name', header: 'Room', render: (r) => r.name },
        { key: 'capacity', header: 'Capacity', render: (r) => `${r.currentOccupancy}/${r.capacity}` },
        { key: 'cleaning', header: 'Cleaning', render: (r) => <Badge variant={r.cleaningStatus === 'clean' ? 'success' : 'warning'}>{r.cleaningStatus}</Badge> },
        { key: 'risk', header: 'Risk', render: (r) => <Badge variant={r.riskStatus === 'low' ? 'success' : 'warning'}>{r.riskStatus}</Badge> },
      ]} />
    </AdminModulePage>
  );
}

export function AdminRegistrationsPage() {
  return (
    <AdminModulePage title="Registrations" subtitle="Pending and approved registrations">
      <CardTable data={mockRegistrations} keyExtractor={(r) => r.id} columns={[
        { key: 'parent', header: 'Parent', render: (r) => r.parentName },
        { key: 'child', header: 'Child', render: (r) => r.childName },
        { key: 'date', header: 'Submitted', render: (r) => formatDate(r.submittedDate) },
        { key: 'status', header: 'Status', render: (r) => <Badge variant={r.status === 'approved' ? 'success' : r.status === 'pending' ? 'warning' : 'info'}>{r.status}</Badge> },
      ]} />
    </AdminModulePage>
  );
}

export function AdminDocumentsPage() {
  return (
    <AdminModulePage title="Documents" subtitle="Compliance and safety documents">
      <CardTable data={mockDocuments} keyExtractor={(d) => d.id} columns={[
        { key: 'name', header: 'Document', render: (d) => d.name },
        { key: 'type', header: 'Type', render: (d) => d.type },
        { key: 'status', header: 'Status', render: (d) => <Badge variant={d.status === 'approved' ? 'success' : 'warning'}>{d.status}</Badge> },
        { key: 'expiry', header: 'Expiry', render: (d) => d.expiryDate ? formatDate(d.expiryDate) : '—' },
      ]} />
    </AdminModulePage>
  );
}

export function AdminAnnouncementsPage() {
  return (
    <AdminModulePage title="Announcements" subtitle="Manage announcements">
      <CardTable data={mockAnnouncements} keyExtractor={(a) => a.id} columns={[
        { key: 'title', header: 'Title', render: (a) => a.title },
        { key: 'author', header: 'Author', render: (a) => a.author },
        { key: 'date', header: 'Date', render: (a) => formatDate(a.date) },
        { key: 'audience', header: 'Audience', render: (a) => Array.isArray(a.audience) ? a.audience.join(', ') : a.audience },
      ]} />
    </AdminModulePage>
  );
}

export function AdminVisitorsPage() {
  return (
    <AdminModulePage title="Visitor Logs" subtitle="Track all visitors">
      <CardTable data={mockVisitors} keyExtractor={(v) => v.id} columns={[
        { key: 'name', header: 'Visitor', render: (v) => v.name },
        { key: 'purpose', header: 'Purpose', render: (v) => v.purpose },
        { key: 'checkIn', header: 'Check In', render: (v) => v.checkIn },
        { key: 'host', header: 'Host', render: (v) => v.host },
      ]} />
    </AdminModulePage>
  );
}

export function AdminRiskAssessmentsPage() {
  return (
    <AdminModulePage title="Risk Assessments" subtitle="Room safety reviews">
      <CardTable data={mockRiskAssessments} keyExtractor={(r) => r.id} columns={[
        { key: 'title', header: 'Assessment', render: (r) => r.title },
        { key: 'room', header: 'Room', render: (r) => r.roomId.replace('r', 'Room ') },
        { key: 'status', header: 'Status', render: (r) => <Badge variant={r.status === 'current' ? 'success' : 'warning'}>{r.status}</Badge> },
        { key: 'next', header: 'Next Review', render: (r) => formatDate(r.nextReview) },
      ]} />
    </AdminModulePage>
  );
}
