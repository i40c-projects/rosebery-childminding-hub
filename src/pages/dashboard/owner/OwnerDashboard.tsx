import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/ui/StatCard';
import { ChartCard } from '@/components/charts/ChartCard';
import { Badge } from '@/components/ui/Badge';
import { CardTable } from '@/components/ui/CardTable';
import {
  ownerStats, revenueChartData, occupancyChartData, childminderPerformanceData,
  complianceAlerts, mockInvoices, mockPayments,
} from '@/data/mockData';
import { formatCurrency } from '@/lib/utils';
import { DollarSign, TrendingUp, Users, Shield, AlertTriangle, Heart, FileText } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';

export function OwnerDashboard() {
  return (
    <DashboardLayout title="Owner Overview" subtitle="High-level analytics and LMS reporting">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard label="Monthly Revenue" value={formatCurrency(ownerStats.totalRevenue)} change="+4.2% vs last month" trend="up" icon={DollarSign} />
        <StatCard label="Net Surplus" value={formatCurrency(ownerStats.netSurplus)} change="After facility costs" trend="up" icon={TrendingUp} />
        <StatCard label="Occupancy Rate" value={`${ownerStats.occupancyRate}%`} change="21 children enrolled" trend="neutral" icon={Users} />
        <StatCard label="Compliance Score" value={`${ownerStats.complianceScore}%`} change="2 items need attention" trend="down" icon={Shield} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <ChartCard title="Revenue vs Expenses" subtitle="Monthly trend">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#7A1F4D20" />
              <XAxis dataKey="month" stroke="#7A1F4D" fontSize={12} />
              <YAxis stroke="#7A1F4D" fontSize={12} />
              <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
              <Legend />
              <Bar dataKey="revenue" fill="#E65A7A" radius={[8, 8, 0, 0]} name="Revenue" />
              <Bar dataKey="expenses" fill="#A9D8F5" radius={[8, 8, 0, 0]} name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Room Occupancy" subtitle="Current utilisation">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={occupancyChartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#7A1F4D20" />
              <XAxis type="number" domain={[0, 100]} stroke="#7A1F4D" fontSize={12} />
              <YAxis dataKey="room" type="category" stroke="#7A1F4D" fontSize={12} width={60} />
              <Tooltip />
              <Bar dataKey="occupancy" fill="#A7C7A3" radius={[0, 8, 8, 0]} name="Occupancy %" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <ChartCard title="Childminder Performance" subtitle="Children & satisfaction">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={childminderPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#7A1F4D20" />
              <XAxis dataKey="name" stroke="#7A1F4D" fontSize={12} />
              <YAxis stroke="#7A1F4D" fontSize={12} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="children" stroke="#E65A7A" strokeWidth={2} name="Children" />
              <Line type="monotone" dataKey="satisfaction" stroke="#7A1F4D" strokeWidth={2} name="Satisfaction %" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
        <div>
          <h3 className="font-display text-xl text-berry mb-4 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-rose" /> Compliance Alerts</h3>
          <div className="space-y-3">
            {complianceAlerts.map((alert) => (
              <div key={alert.id} className="glass rounded-2xl p-4 flex items-start gap-3">
                <Badge variant={alert.severity === 'high' ? 'danger' : alert.severity === 'medium' ? 'warning' : 'info'}>{alert.severity}</Badge>
                <div>
                  <p className="font-semibold text-berry">{alert.title}</p>
                  <p className="text-sm text-berry/60 mt-1">{alert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-display text-xl text-berry mb-4">Recent Invoices</h3>
          <CardTable data={mockInvoices.slice(0, 4)} keyExtractor={(i) => i.id} columns={[
            { key: 'desc', header: 'Description', render: (i) => <span className="font-medium text-berry">{i.description}</span> },
            { key: 'amount', header: 'Amount', render: (i) => formatCurrency(i.amount) },
            { key: 'status', header: 'Status', render: (i) => <Badge variant={i.status === 'paid' ? 'success' : i.status === 'overdue' ? 'danger' : 'warning'}>{i.status}</Badge> },
          ]} />
        </div>
        <div>
          <h3 className="font-display text-xl text-berry mb-4">Recent Payments</h3>
          <CardTable data={mockPayments} keyExtractor={(p) => p.id} columns={[
            { key: 'amount', header: 'Amount', render: (p) => <span className="font-medium text-berry">{formatCurrency(p.amount)}</span> },
            { key: 'method', header: 'Method', render: (p) => p.method },
            { key: 'status', header: 'Status', render: (p) => <Badge variant="success">{p.status}</Badge> },
          ]} />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-[var(--radius-card)] p-6">
          <Heart className="h-8 w-8 text-rose mb-4" />
          <h3 className="font-display text-xl text-berry">Community Impact Summary</h3>
          <p className="mt-3 text-sm text-berry/70 leading-relaxed">
            {ownerStats.totalChildren} children supported through {ownerStats.activeChildminders} independent childminders,
            with managed premises, parent enquiry support and shared safety procedures contributing to local family resilience.
          </p>
        </div>
        <div className="glass rounded-[var(--radius-card)] p-6">
          <FileText className="h-8 w-8 text-rose mb-4" />
          <h3 className="font-display text-xl text-berry">LMS Reporting Summary</h3>
          <p className="mt-3 text-sm text-berry/70 leading-relaxed">
            Monthly reporting is prepared for Liverpool Muslim Society covering occupancy, invoices, payments,
            facility costs, compliance status and community benefit indicators.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export function OwnerReportsPage() {
  return (
    <DashboardLayout title="Reports" subtitle="Financial and operational reports">
      <ChartCard title="6-Month Financial Summary">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#7A1F4D20" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#E65A7A" radius={[8, 8, 0, 0]} />
            <Bar dataKey="expenses" fill="#F4E1C9" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </DashboardLayout>
  );
}

export function OwnerCompliancePage() {
  return (
    <DashboardLayout title="Compliance" subtitle="Risk assessments, documents and alerts">
      <CardTable
        data={complianceAlerts}
        keyExtractor={(a) => a.id}
        columns={[
          { key: 'title', header: 'Alert', render: (a) => <span className="font-medium text-berry">{a.title}</span> },
          { key: 'desc', header: 'Description', render: (a) => <span className="text-sm text-berry/70">{a.description}</span> },
          { key: 'severity', header: 'Severity', render: (a) => <Badge variant={a.severity === 'high' ? 'danger' : 'warning'}>{a.severity}</Badge> },
          { key: 'date', header: 'Date', render: (a) => a.date },
        ]}
      />
    </DashboardLayout>
  );
}
