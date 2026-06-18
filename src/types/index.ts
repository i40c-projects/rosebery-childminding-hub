export type UserRole =
  | 'owner'
  | 'admin'
  | 'manager'
  | 'finance'
  | 'childminder'
  | 'assistant'
  | 'parent';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
}

export interface Child {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  parentId: string;
  childminderId?: string;
  roomId?: string;
  allergies?: string[];
  medicalNotes?: string;
  emergencyContacts?: EmergencyContact[];
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

export interface Parent {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  children: string[];
}

export interface Childminder {
  id: string;
  name: string;
  email: string;
  phone: string;
  roomId?: string;
  assistantIds?: string[];
  maxCapacity: number;
  currentChildren: number;
  status: 'active' | 'pending' | 'inactive';
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
  currentOccupancy: number;
  childminderId?: string;
  cleaningStatus: 'clean' | 'scheduled' | 'in-progress';
  riskStatus: 'low' | 'medium' | 'high';
  lastCleaned?: string;
}

export interface Invoice {
  id: string;
  parentId?: string;
  childminderId?: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  dueDate: string;
  description: string;
  type: 'parent_fee' | 'facility_charge' | 'expense';
}

export interface Payment {
  id: string;
  invoiceId: string;
  amount: number;
  date: string;
  method: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  audience: UserRole[] | 'all';
  roomId?: string;
}

export interface AttendanceRecord {
  id: string;
  childId: string;
  date: string;
  checkIn?: string;
  checkOut?: string;
  status: 'present' | 'absent' | 'late';
}

export interface ActivityLog {
  id: string;
  childId: string;
  date: string;
  activity: string;
  notes?: string;
  loggedBy: string;
}

export interface MealLog {
  id: string;
  childId: string;
  date: string;
  mealType: 'breakfast' | 'lunch' | 'snack' | 'dinner';
  description: string;
  notes?: string;
}

export interface NapLog {
  id: string;
  childId: string;
  date: string;
  startTime: string;
  endTime?: string;
  notes?: string;
}

export interface DailyNote {
  id: string;
  childId: string;
  date: string;
  content: string;
  author: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  uploadedBy: string;
  date: string;
  status: 'approved' | 'pending' | 'expired';
  expiryDate?: string;
}

export interface VisitorLog {
  id: string;
  name: string;
  purpose: string;
  checkIn: string;
  checkOut?: string;
  host: string;
}

export interface Incident {
  id: string;
  date: string;
  type: string;
  description: string;
  roomId?: string;
  reportedBy: string;
  status: 'open' | 'resolved' | 'investigating';
}

export interface RiskAssessment {
  id: string;
  roomId: string;
  title: string;
  lastReviewed: string;
  nextReview: string;
  status: 'current' | 'due' | 'overdue';
  riskLevel: 'low' | 'medium' | 'high';
}

export interface CleaningLog {
  id: string;
  roomId: string;
  date: string;
  cleanedBy: string;
  tasks: string[];
  status: 'completed' | 'scheduled';
}

export interface Registration {
  id: string;
  parentName: string;
  parentEmail: string;
  childName: string;
  status: 'pending' | 'approved' | 'waitlist' | 'rejected';
  submittedDate: string;
  preferredSessions: string[];
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

export interface DashboardStat {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: string;
}

export interface RegistrationFormData {
  parent: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
  };
  child: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
  };
  medical: {
    allergies: string;
    medicalConditions: string;
    medications: string;
    dietaryRequirements: string;
  };
  emergencyContacts: EmergencyContact[];
  consent: {
    dataProcessing: boolean;
    photoConsent: boolean;
    emergencyTreatment: boolean;
    termsAccepted: boolean;
  };
  sessions: {
    preferredDays: string[];
    sessionType: string;
    startDate: string;
    notes: string;
  };
}

export const ROLE_LABELS: Record<UserRole, string> = {
  owner: 'Owner',
  admin: 'Admin',
  manager: 'Manager',
  finance: 'Finance',
  childminder: 'Childminder',
  assistant: 'Assistant',
  parent: 'Parent',
};

export const ROLE_DASHBOARD_PATH: Record<UserRole, string> = {
  owner: '/dashboard/owner',
  admin: '/dashboard/admin',
  manager: '/dashboard/manager',
  finance: '/dashboard/finance',
  childminder: '/dashboard/childminder',
  assistant: '/dashboard/assistant',
  parent: '/dashboard/parent',
};

export const ROLE_GHOST_TEXT: Record<UserRole, string> = {
  owner: 'ANALYTICS',
  admin: 'CONTROL',
  manager: 'OVERVIEW',
  finance: 'FINANCE',
  childminder: 'MY GROUPS',
  assistant: 'ASSIST',
  parent: 'MY CHILD',
};
