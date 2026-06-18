import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/ui/StatCard';
import { ChartCard } from '@/components/charts/ChartCard';
import { CardTable } from '@/components/ui/CardTable';
import { Badge } from '@/components/ui/Badge';
import { mockInvoices, mockPayments, financeStats, monthlyFinanceData } from '@/data/mockData';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Receipt, CreditCard, AlertCircle, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function FinanceDashboard() {
  return (
    <DashboardLayout title="Finance Overview" subtitle="Invoices, payments and financial reports">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard label="Outstanding" value={formatCurrency(financeStats.totalOutstanding)} trend="down" icon={AlertCircle} />
        <StatCard label="Paid This Month" value={formatCurrency(financeStats.paidThisMonth)} trend="up" icon={CreditCard} />
        <StatCard label="Pending Invoices" value={financeStats.pendingInvoices} icon={Receipt} />
        <StatCard label="Monthly Surplus" value={formatCurrency(financeStats.monthlySurplus)} trend="up" icon={TrendingUp} />
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <ChartCard title="Monthly Income vs Outgoing">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyFinanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#7A1F4D20" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(v) => formatCurrency(Number(v))} />
              <Legend />
              <Bar dataKey="income" fill="#E65A7A" radius={[8, 8, 0, 0]} name="Income" />
              <Bar dataKey="outgoing" fill="#A9D8F5" radius={[8, 8, 0, 0]} name="Outgoing" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <div>
          <h3 className="font-display text-xl text-berry mb-4">Recent Invoices</h3>
          <CardTable data={mockInvoices.slice(0, 5)} keyExtractor={(i) => i.id} columns={[
            { key: 'desc', header: 'Description', render: (i) => i.description },
            { key: 'amount', header: 'Amount', render: (i) => formatCurrency(i.amount) },
            { key: 'status', header: 'Status', render: (i) => <Badge variant={i.status === 'paid' ? 'success' : i.status === 'overdue' ? 'danger' : 'warning'}>{i.status}</Badge> },
          ]} />
        </div>
      </div>
    </DashboardLayout>
  );
}

function FinPage({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <DashboardLayout title={title} subtitle={subtitle}>{children}</DashboardLayout>;
}

export function FinanceInvoicesPage() {
  return (
    <FinPage title="Invoices" subtitle="All invoices">
      <CardTable data={mockInvoices} keyExtractor={(i) => i.id} columns={[
        { key: 'desc', header: 'Description', render: (i) => i.description },
        { key: 'amount', header: 'Amount', render: (i) => formatCurrency(i.amount) },
        { key: 'due', header: 'Due', render: (i) => formatDate(i.dueDate) },
        { key: 'type', header: 'Type', render: (i) => i.type.replace('_', ' ') },
        { key: 'status', header: 'Status', render: (i) => <Badge variant={i.status === 'paid' ? 'success' : i.status === 'overdue' ? 'danger' : 'warning'}>{i.status}</Badge> },
      ]} />
    </FinPage>
  );
}

export function FinancePaymentsPage() {
  return (
    <FinPage title="Payments" subtitle="Payment records">
      <CardTable data={mockPayments} keyExtractor={(p) => p.id} columns={[
        { key: 'amount', header: 'Amount', render: (p) => formatCurrency(p.amount) },
        { key: 'date', header: 'Date', render: (p) => formatDate(p.date) },
        { key: 'method', header: 'Method', render: (p) => p.method },
        { key: 'status', header: 'Status', render: (p) => <Badge variant="success">{p.status}</Badge> },
      ]} />
    </FinPage>
  );
}

export function FinanceParentFeesPage() {
  const fees = mockInvoices.filter(i => i.type === 'parent_fee');
  return (
    <FinPage title="Parent Fees" subtitle="Parent childcare invoices">
      <CardTable data={fees} keyExtractor={(i) => i.id} columns={[
        { key: 'desc', header: 'Description', render: (i) => i.description },
        { key: 'amount', header: 'Amount', render: (i) => formatCurrency(i.amount) },
        { key: 'due', header: 'Due', render: (i) => formatDate(i.dueDate) },
        { key: 'status', header: 'Status', render: (i) => <Badge variant={i.status === 'paid' ? 'success' : i.status === 'overdue' ? 'danger' : 'warning'}>{i.status}</Badge> },
      ]} />
    </FinPage>
  );
}

export function FinanceFacilityChargesPage() {
  const charges = mockInvoices.filter(i => i.type === 'facility_charge');
  return (
    <FinPage title="Facility Charges" subtitle="Childminder facility/service charges">
      <CardTable data={charges} keyExtractor={(i) => i.id} columns={[
        { key: 'desc', header: 'Description', render: (i) => i.description },
        { key: 'amount', header: 'Amount', render: (i) => formatCurrency(i.amount) },
        { key: 'due', header: 'Due', render: (i) => formatDate(i.dueDate) },
        { key: 'status', header: 'Status', render: (i) => <Badge variant={i.status === 'paid' ? 'success' : 'warning'}>{i.status}</Badge> },
      ]} />
    </FinPage>
  );
}

export function FinanceExpensesPage() {
  const expenses = mockInvoices.filter(i => i.type === 'expense');
  return (
    <FinPage title="Expenses" subtitle="Facility expenses">
      <CardTable data={expenses} keyExtractor={(i) => i.id} columns={[
        { key: 'desc', header: 'Description', render: (i) => i.description },
        { key: 'amount', header: 'Amount', render: (i) => formatCurrency(i.amount) },
        { key: 'due', header: 'Date', render: (i) => formatDate(i.dueDate) },
        { key: 'status', header: 'Status', render: (i) => <Badge variant="success">{i.status}</Badge> },
      ]} />
    </FinPage>
  );
}

export function FinanceReportsPage() {
  return (
    <FinPage title="Monthly Reports" subtitle="Financial summary reports">
      <ChartCard title="6-Month Financial Summary">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyFinanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#7A1F4D20" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(v) => formatCurrency(Number(v))} />
            <Legend />
            <Bar dataKey="income" fill="#E65A7A" radius={[8, 8, 0, 0]} />
            <Bar dataKey="outgoing" fill="#F4E1C9" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </FinPage>
  );
}
