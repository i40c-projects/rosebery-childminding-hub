import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, Building2, FileText, Megaphone, ClipboardList,
  Calendar, Wrench, AlertTriangle, Activity, Receipt, CreditCard, Wallet,
  Baby, UserCheck, Utensils, Moon, MessageSquare, Settings, LogOut,
  Bell, Menu, X, ChevronDown, Shield, Sparkles, BarChart3, BookOpen,
} from 'lucide-react';
import { cn, getInitials } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { ROLE_GHOST_TEXT, ROLE_LABELS, type UserRole } from '@/types';
import { GhostTitle } from '@/components/ui/GhostTitle';
import { GrainOverlay } from '@/components/ui/GrainOverlay';

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
}

const roleNavItems: Record<UserRole, NavItem[]> = {
  owner: [
    { label: 'Overview', path: '/dashboard/owner', icon: LayoutDashboard },
    { label: 'Reports', path: '/dashboard/owner/reports', icon: BarChart3 },
    { label: 'Compliance', path: '/dashboard/owner/compliance', icon: Shield },
  ],
  admin: [
    { label: 'Overview', path: '/dashboard/admin', icon: LayoutDashboard },
    { label: 'Users', path: '/dashboard/admin/users', icon: Users },
    { label: 'Parents', path: '/dashboard/admin/parents', icon: Users },
    { label: 'Children', path: '/dashboard/admin/children', icon: Baby },
    { label: 'Childminders', path: '/dashboard/admin/childminders', icon: UserCheck },
    { label: 'Rooms', path: '/dashboard/admin/rooms', icon: Building2 },
    { label: 'Registrations', path: '/dashboard/admin/registrations', icon: ClipboardList },
    { label: 'Documents', path: '/dashboard/admin/documents', icon: FileText },
    { label: 'Announcements', path: '/dashboard/admin/announcements', icon: Megaphone },
    { label: 'Visitors', path: '/dashboard/admin/visitors', icon: Users },
    { label: 'Risk Assessments', path: '/dashboard/admin/risk-assessments', icon: Shield },
  ],
  manager: [
    { label: 'Overview', path: '/dashboard/manager', icon: LayoutDashboard },
    { label: 'Attendance', path: '/dashboard/manager/attendance', icon: Calendar },
    { label: 'Rooms', path: '/dashboard/manager/rooms', icon: Building2 },
    { label: 'Groups', path: '/dashboard/manager/groups', icon: Users },
    { label: 'Maintenance', path: '/dashboard/manager/maintenance', icon: Wrench },
    { label: 'Incidents', path: '/dashboard/manager/incidents', icon: AlertTriangle },
    { label: 'Activities', path: '/dashboard/manager/activities', icon: Activity },
    { label: 'Cleaning', path: '/dashboard/manager/cleaning', icon: Sparkles },
  ],
  finance: [
    { label: 'Overview', path: '/dashboard/finance', icon: LayoutDashboard },
    { label: 'Invoices', path: '/dashboard/finance/invoices', icon: Receipt },
    { label: 'Payments', path: '/dashboard/finance/payments', icon: CreditCard },
    { label: 'Parent Fees', path: '/dashboard/finance/parent-fees', icon: Wallet },
    { label: 'Facility Charges', path: '/dashboard/finance/facility-charges', icon: Building2 },
    { label: 'Expenses', path: '/dashboard/finance/expenses', icon: Receipt },
    { label: 'Reports', path: '/dashboard/finance/reports', icon: BarChart3 },
  ],
  childminder: [
    { label: 'My Groups', path: '/dashboard/childminder', icon: LayoutDashboard },
    { label: 'Children', path: '/dashboard/childminder/children', icon: Baby },
    { label: 'Attendance', path: '/dashboard/childminder/attendance', icon: Calendar },
    { label: 'Activities', path: '/dashboard/childminder/activities', icon: Activity },
    { label: 'Meals', path: '/dashboard/childminder/meals', icon: Utensils },
    { label: 'Naps', path: '/dashboard/childminder/naps', icon: Moon },
    { label: 'Daily Notes', path: '/dashboard/childminder/notes', icon: BookOpen },
    { label: 'Messages', path: '/dashboard/childminder/messages', icon: MessageSquare },
    { label: 'Announcements', path: '/dashboard/childminder/announcements', icon: Megaphone },
    { label: 'Assistants', path: '/dashboard/childminder/assistants', icon: UserCheck },
  ],
  assistant: [
    { label: 'Overview', path: '/dashboard/assistant', icon: LayoutDashboard },
    { label: 'Attendance', path: '/dashboard/assistant/attendance', icon: Calendar },
    { label: 'Activities', path: '/dashboard/assistant/activities', icon: Activity },
    { label: 'Meals', path: '/dashboard/assistant/meals', icon: Utensils },
    { label: 'Daily Notes', path: '/dashboard/assistant/notes', icon: BookOpen },
  ],
  parent: [
    { label: 'My Child', path: '/dashboard/parent', icon: LayoutDashboard },
    { label: 'Attendance', path: '/dashboard/parent/attendance', icon: Calendar },
    { label: 'Daily Updates', path: '/dashboard/parent/updates', icon: Activity },
    { label: 'Invoices', path: '/dashboard/parent/invoices', icon: Receipt },
    { label: 'Payments', path: '/dashboard/parent/payments', icon: CreditCard },
    { label: 'Announcements', path: '/dashboard/parent/announcements', icon: Megaphone },
    { label: 'Messages', path: '/dashboard/parent/messages', icon: MessageSquare },
    { label: 'Emergency Contacts', path: '/dashboard/parent/emergency', icon: AlertTriangle },
    { label: 'Documents', path: '/dashboard/parent/documents', icon: FileText },
  ],
};

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  if (!user) return null;

  const navItems = roleNavItems[user.role];
  const ghostText = ROLE_GHOST_TEXT[user.role];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-cream">
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-berry/40 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={cn(
        'fixed inset-y-0 left-0 z-50 w-72 border-r border-white/45 bg-white/62 backdrop-blur-2xl shadow-2xl shadow-berry/10 transform transition-slow lg:translate-x-0 lg:static',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-5 border-b border-white/45">
            <Link to="/" className="flex items-center gap-3 text-berry">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl gradient-rose text-white shadow-lg shadow-rose/20">
                <span className="font-display text-lg">R</span>
              </span>
              <span className="font-display text-xl">Rosebery</span>
            </Link>
            <button className="lg:hidden p-2 rounded-xl hover:bg-white/60 transition-smooth" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="px-4 py-4">
            <RoleBadge role={user.role} />
          </div>
          <nav className="flex-1 overflow-y-auto scrollbar-thin px-3 py-2 space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-smooth',
                    isActive
                      ? 'bg-white/85 text-rose shadow-md shadow-rose/10 ring-1 ring-white/70'
                      : 'text-berry/68 hover:bg-white/65 hover:text-berry'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-white/45 p-4">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-berry/70 hover:bg-white/70 hover:text-rose transition-smooth"
            >
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col min-w-0">
        <header className="sticky top-0 z-30 border-b border-white/45 bg-cream/72 px-4 py-3.5 shadow-sm shadow-berry/5 backdrop-blur-2xl sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="lg:hidden rounded-2xl bg-white/60 p-2 shadow-sm ring-1 ring-white/70 hover:bg-white/85 transition-smooth" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-6 w-6 text-berry" />
              </button>
              <div>
                <h1 className="font-display text-xl sm:text-2xl text-berry leading-none">{title}</h1>
                {subtitle && <p className="mt-1 hidden text-sm text-berry/60 sm:block">{subtitle}</p>}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <button
                  onClick={() => { setNotificationsOpen(!notificationsOpen); setProfileOpen(false); }}
                  className="relative rounded-2xl bg-white/45 p-2.5 shadow-sm ring-1 ring-white/60 hover:bg-white/80 transition-smooth"
                >
                  <Bell className="h-5 w-5 text-berry" />
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose" />
                </button>
                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] glass rounded-2xl p-4 shadow-xl z-50">
                    <h3 className="font-semibold text-berry mb-3">Notifications</h3>
                    <div className="space-y-3 text-sm">
                      <div className="rounded-xl bg-rose/5 p-3">
                        <p className="font-medium text-berry">Room 2 Maintenance</p>
                        <p className="text-berry/60 mt-1">Scheduled for Friday</p>
                      </div>
                      <div className="rounded-xl bg-sky/10 p-3">
                        <p className="font-medium text-berry">New registration</p>
                        <p className="text-berry/60 mt-1">David Brown submitted interest</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => { setProfileOpen(!profileOpen); setNotificationsOpen(false); }}
                  className="flex items-center gap-2 rounded-2xl bg-white/45 px-2.5 py-2 shadow-sm ring-1 ring-white/60 hover:bg-white/80 transition-smooth"
                >
                  <div className="h-9 w-9 rounded-full gradient-rose flex items-center justify-center text-white text-sm font-bold">
                    {getInitials(user.name)}
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-berry">{user.name}</span>
                  <ChevronDown className="h-4 w-4 text-berry/50" />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-56 glass rounded-2xl p-2 shadow-xl z-50">
                    <div className="px-3 py-2 border-b border-berry/10">
                      <p className="font-medium text-berry">{user.name}</p>
                      <p className="text-xs text-berry/60">{user.email}</p>
                    </div>
                    <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-berry hover:bg-berry/5">
                      <Settings className="h-4 w-4" /> Settings
                    </button>
                    <button onClick={handleLogout} className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-rose hover:bg-rose/5">
                      <LogOut className="h-4 w-4" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="relative flex-1 overflow-auto p-4 sm:p-6 lg:p-8 xl:p-10">
          <GhostTitle text={ghostText} className="!top-24 opacity-30" />
          <GrainOverlay opacity={0.03} />
          <div className="relative z-10 mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}

function RoleBadge({ role }: { role: UserRole }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold text-berry shadow-sm ring-1 ring-white/70">
      {ROLE_LABELS[role]} Portal
    </span>
  );
}
