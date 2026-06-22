import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

// Public pages
import { HomePage } from '@/pages/public/HomePage';
import { AboutPage } from '@/pages/public/AboutPage';
import { HowItWorksPage } from '@/pages/public/HowItWorksPage';
import { ServicesPage } from '@/pages/public/ServicesPage';
import { ParentsPage } from '@/pages/public/ParentsPage';
import { BecomeChildminderPage } from '@/pages/public/BecomeChildminderPage';
import { SafetyPage } from '@/pages/public/SafetyPage';
import { ContactPage } from '@/pages/public/ContactPage';
import { LoginPage } from '@/pages/public/LoginPage';
import { RegisterInterestPage } from '@/pages/public/RegisterInterestPage';
import { RegistrationPage } from '@/pages/registration/RegistrationPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

// Owner
import { OwnerDashboard, OwnerReportsPage, OwnerCompliancePage } from '@/pages/dashboard/owner/OwnerDashboard';

// Admin
import {
  AdminDashboard, AdminUsersPage, AdminParentsPage, AdminChildrenPage,
  AdminChildmindersPage, AdminRoomsPage, AdminRegistrationsPage,
  AdminDocumentsPage, AdminAnnouncementsPage, AdminVisitorsPage, AdminRiskAssessmentsPage,
} from '@/pages/dashboard/admin/AdminDashboard';

// Manager
import {
  ManagerDashboard, ManagerAttendancePage, ManagerRoomsPage, ManagerGroupsPage,
  ManagerMaintenancePage, ManagerIncidentsPage, ManagerActivitiesPage, ManagerCleaningPage,
} from '@/pages/dashboard/manager/ManagerDashboard';

// Finance
import {
  FinanceDashboard, FinanceInvoicesPage, FinancePaymentsPage, FinanceParentFeesPage,
  FinanceFacilityChargesPage, FinanceExpensesPage, FinanceReportsPage,
} from '@/pages/dashboard/finance/FinanceDashboard';

// Childminder
import {
  ChildminderDashboard, ChildminderChildrenPage, ChildminderAttendancePage,
  ChildminderActivitiesPage, ChildminderMealsPage, ChildminderNapsPage,
  ChildminderNotesPage, ChildminderMessagesPage, ChildminderAnnouncementsPage, ChildminderAssistantsPage,
} from '@/pages/dashboard/childminder/ChildminderDashboard';

// Assistant
import {
  AssistantDashboard, AssistantAttendancePage, AssistantActivitiesPage,
  AssistantMealsPage, AssistantNotesPage,
} from '@/pages/dashboard/assistant/AssistantDashboard';

// Parent
import {
  ParentDashboard, ParentAttendancePage, ParentUpdatesPage, ParentInvoicesPage,
  ParentPaymentsPage, ParentAnnouncementsPage, ParentMessagesPage,
  ParentEmergencyPage, ParentDocumentsPage,
} from '@/pages/dashboard/parent/ParentDashboard';

import { useAuth } from '@/context/AuthContext';

function DashboardRedirect() {
  const { isAuthenticated, dashboardPath } = useAuth();
  return <Navigate to={isAuthenticated ? dashboardPath : '/login'} replace />;
}

export function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="parents" element={<ParentsPage />} />
        <Route path="become-a-childminder" element={<BecomeChildminderPage />} />
        <Route path="safety" element={<SafetyPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="register-interest" element={<RegisterInterestPage />} />
        <Route path="register" element={<RegistrationPage />} />
      </Route>

      <Route path="login" element={<LoginPage />} />

      {/* Owner */}
      <Route path="dashboard/owner" element={<ProtectedRoute allowedRoles={['owner']}><OwnerDashboard /></ProtectedRoute>} />
      <Route path="dashboard/owner/reports" element={<ProtectedRoute allowedRoles={['owner']}><OwnerReportsPage /></ProtectedRoute>} />
      <Route path="dashboard/owner/compliance" element={<ProtectedRoute allowedRoles={['owner']}><OwnerCompliancePage /></ProtectedRoute>} />

      {/* Admin */}
      <Route path="dashboard/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
      <Route path="dashboard/admin/users" element={<ProtectedRoute allowedRoles={['admin']}><AdminUsersPage /></ProtectedRoute>} />
      <Route path="dashboard/admin/parents" element={<ProtectedRoute allowedRoles={['admin']}><AdminParentsPage /></ProtectedRoute>} />
      <Route path="dashboard/admin/children" element={<ProtectedRoute allowedRoles={['admin']}><AdminChildrenPage /></ProtectedRoute>} />
      <Route path="dashboard/admin/childminders" element={<ProtectedRoute allowedRoles={['admin']}><AdminChildmindersPage /></ProtectedRoute>} />
      <Route path="dashboard/admin/rooms" element={<ProtectedRoute allowedRoles={['admin']}><AdminRoomsPage /></ProtectedRoute>} />
      <Route path="dashboard/admin/registrations" element={<ProtectedRoute allowedRoles={['admin']}><AdminRegistrationsPage /></ProtectedRoute>} />
      <Route path="dashboard/admin/documents" element={<ProtectedRoute allowedRoles={['admin']}><AdminDocumentsPage /></ProtectedRoute>} />
      <Route path="dashboard/admin/announcements" element={<ProtectedRoute allowedRoles={['admin']}><AdminAnnouncementsPage /></ProtectedRoute>} />
      <Route path="dashboard/admin/visitors" element={<ProtectedRoute allowedRoles={['admin']}><AdminVisitorsPage /></ProtectedRoute>} />
      <Route path="dashboard/admin/risk-assessments" element={<ProtectedRoute allowedRoles={['admin']}><AdminRiskAssessmentsPage /></ProtectedRoute>} />

      {/* Manager */}
      <Route path="dashboard/manager" element={<ProtectedRoute allowedRoles={['manager']}><ManagerDashboard /></ProtectedRoute>} />
      <Route path="dashboard/manager/attendance" element={<ProtectedRoute allowedRoles={['manager']}><ManagerAttendancePage /></ProtectedRoute>} />
      <Route path="dashboard/manager/rooms" element={<ProtectedRoute allowedRoles={['manager']}><ManagerRoomsPage /></ProtectedRoute>} />
      <Route path="dashboard/manager/groups" element={<ProtectedRoute allowedRoles={['manager']}><ManagerGroupsPage /></ProtectedRoute>} />
      <Route path="dashboard/manager/maintenance" element={<ProtectedRoute allowedRoles={['manager']}><ManagerMaintenancePage /></ProtectedRoute>} />
      <Route path="dashboard/manager/incidents" element={<ProtectedRoute allowedRoles={['manager']}><ManagerIncidentsPage /></ProtectedRoute>} />
      <Route path="dashboard/manager/activities" element={<ProtectedRoute allowedRoles={['manager']}><ManagerActivitiesPage /></ProtectedRoute>} />
      <Route path="dashboard/manager/cleaning" element={<ProtectedRoute allowedRoles={['manager']}><ManagerCleaningPage /></ProtectedRoute>} />

      {/* Finance */}
      <Route path="dashboard/finance" element={<ProtectedRoute allowedRoles={['finance']}><FinanceDashboard /></ProtectedRoute>} />
      <Route path="dashboard/finance/invoices" element={<ProtectedRoute allowedRoles={['finance']}><FinanceInvoicesPage /></ProtectedRoute>} />
      <Route path="dashboard/finance/payments" element={<ProtectedRoute allowedRoles={['finance']}><FinancePaymentsPage /></ProtectedRoute>} />
      <Route path="dashboard/finance/parent-fees" element={<ProtectedRoute allowedRoles={['finance']}><FinanceParentFeesPage /></ProtectedRoute>} />
      <Route path="dashboard/finance/facility-charges" element={<ProtectedRoute allowedRoles={['finance']}><FinanceFacilityChargesPage /></ProtectedRoute>} />
      <Route path="dashboard/finance/expenses" element={<ProtectedRoute allowedRoles={['finance']}><FinanceExpensesPage /></ProtectedRoute>} />
      <Route path="dashboard/finance/reports" element={<ProtectedRoute allowedRoles={['finance']}><FinanceReportsPage /></ProtectedRoute>} />

      {/* Childminder */}
      <Route path="dashboard/childminder" element={<ProtectedRoute allowedRoles={['childminder']}><ChildminderDashboard /></ProtectedRoute>} />
      <Route path="dashboard/childminder/children" element={<ProtectedRoute allowedRoles={['childminder']}><ChildminderChildrenPage /></ProtectedRoute>} />
      <Route path="dashboard/childminder/attendance" element={<ProtectedRoute allowedRoles={['childminder']}><ChildminderAttendancePage /></ProtectedRoute>} />
      <Route path="dashboard/childminder/activities" element={<ProtectedRoute allowedRoles={['childminder']}><ChildminderActivitiesPage /></ProtectedRoute>} />
      <Route path="dashboard/childminder/meals" element={<ProtectedRoute allowedRoles={['childminder']}><ChildminderMealsPage /></ProtectedRoute>} />
      <Route path="dashboard/childminder/naps" element={<ProtectedRoute allowedRoles={['childminder']}><ChildminderNapsPage /></ProtectedRoute>} />
      <Route path="dashboard/childminder/notes" element={<ProtectedRoute allowedRoles={['childminder']}><ChildminderNotesPage /></ProtectedRoute>} />
      <Route path="dashboard/childminder/messages" element={<ProtectedRoute allowedRoles={['childminder']}><ChildminderMessagesPage /></ProtectedRoute>} />
      <Route path="dashboard/childminder/announcements" element={<ProtectedRoute allowedRoles={['childminder']}><ChildminderAnnouncementsPage /></ProtectedRoute>} />
      <Route path="dashboard/childminder/assistants" element={<ProtectedRoute allowedRoles={['childminder']}><ChildminderAssistantsPage /></ProtectedRoute>} />

      {/* Assistant */}
      <Route path="dashboard/assistant" element={<ProtectedRoute allowedRoles={['assistant']}><AssistantDashboard /></ProtectedRoute>} />
      <Route path="dashboard/assistant/attendance" element={<ProtectedRoute allowedRoles={['assistant']}><AssistantAttendancePage /></ProtectedRoute>} />
      <Route path="dashboard/assistant/activities" element={<ProtectedRoute allowedRoles={['assistant']}><AssistantActivitiesPage /></ProtectedRoute>} />
      <Route path="dashboard/assistant/meals" element={<ProtectedRoute allowedRoles={['assistant']}><AssistantMealsPage /></ProtectedRoute>} />
      <Route path="dashboard/assistant/notes" element={<ProtectedRoute allowedRoles={['assistant']}><AssistantNotesPage /></ProtectedRoute>} />

      {/* Parent */}
      <Route path="dashboard/parent" element={<ProtectedRoute allowedRoles={['parent']}><ParentDashboard /></ProtectedRoute>} />
      <Route path="dashboard/parent/attendance" element={<ProtectedRoute allowedRoles={['parent']}><ParentAttendancePage /></ProtectedRoute>} />
      <Route path="dashboard/parent/updates" element={<ProtectedRoute allowedRoles={['parent']}><ParentUpdatesPage /></ProtectedRoute>} />
      <Route path="dashboard/parent/invoices" element={<ProtectedRoute allowedRoles={['parent']}><ParentInvoicesPage /></ProtectedRoute>} />
      <Route path="dashboard/parent/payments" element={<ProtectedRoute allowedRoles={['parent']}><ParentPaymentsPage /></ProtectedRoute>} />
      <Route path="dashboard/parent/announcements" element={<ProtectedRoute allowedRoles={['parent']}><ParentAnnouncementsPage /></ProtectedRoute>} />
      <Route path="dashboard/parent/messages" element={<ProtectedRoute allowedRoles={['parent']}><ParentMessagesPage /></ProtectedRoute>} />
      <Route path="dashboard/parent/emergency" element={<ProtectedRoute allowedRoles={['parent']}><ParentEmergencyPage /></ProtectedRoute>} />
      <Route path="dashboard/parent/documents" element={<ProtectedRoute allowedRoles={['parent']}><ParentDocumentsPage /></ProtectedRoute>} />

      <Route path="dashboard" element={<DashboardRedirect />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
