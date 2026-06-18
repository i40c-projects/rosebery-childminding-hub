import type {
  User,
  Child,
  Parent,
  Childminder,
  Room,
  Invoice,
  Payment,
  Announcement,
  AttendanceRecord,
  ActivityLog,
  MealLog,
  NapLog,
  DailyNote,
  Document,
  VisitorLog,
  Incident,
  RiskAssessment,
  CleaningLog,
  Registration,
} from '@/types';

export const mockUsers: User[] = [
  { id: 'u1', email: 'owner@rosebery.local', name: 'Ahmed Hassan', role: 'owner', phone: '0151 000 0001' },
  { id: 'u2', email: 'admin@rosebery.local', name: 'Fatima Ali', role: 'admin', phone: '0151 000 0002' },
  { id: 'u3', email: 'manager@rosebery.local', name: 'Yusuf Khan', role: 'manager', phone: '0151 000 0003' },
  { id: 'u4', email: 'finance@rosebery.local', name: 'Aisha Rahman', role: 'finance', phone: '0151 000 0004' },
  { id: 'u5', email: 'childminder@rosebery.local', name: 'Maryam Ibrahim', role: 'childminder', phone: '0151 000 0005' },
  { id: 'u6', email: 'assistant@rosebery.local', name: 'Sara Ahmed', role: 'assistant', phone: '0151 000 0006' },
  { id: 'u7', email: 'parent@rosebery.local', name: 'James Wilson', role: 'parent', phone: '0151 000 0007' },
];

export const mockRooms: Room[] = [
  { id: 'r1', name: 'Room 1', capacity: 12, currentOccupancy: 9, childminderId: 'cm1', cleaningStatus: 'clean', riskStatus: 'low', lastCleaned: '2026-06-18' },
  { id: 'r2', name: 'Room 2', capacity: 10, currentOccupancy: 7, childminderId: 'cm2', cleaningStatus: 'scheduled', riskStatus: 'low', lastCleaned: '2026-06-17' },
  { id: 'r3', name: 'Room 3', capacity: 8, currentOccupancy: 5, childminderId: 'cm3', cleaningStatus: 'clean', riskStatus: 'medium', lastCleaned: '2026-06-18' },
];

export const mockChildminders: Childminder[] = [
  { id: 'cm1', name: 'Maryam Ibrahim', email: 'maryam@rosebery.local', phone: '0151 111 0001', roomId: 'r1', assistantIds: ['as1'], maxCapacity: 12, currentChildren: 9, status: 'active' },
  { id: 'cm2', name: 'Khadija Noor', email: 'khadija@rosebery.local', phone: '0151 111 0002', roomId: 'r2', maxCapacity: 10, currentChildren: 7, status: 'active' },
  { id: 'cm3', name: 'Amina Farooq', email: 'amina@rosebery.local', phone: '0151 111 0003', roomId: 'r3', assistantIds: ['as2'], maxCapacity: 8, currentChildren: 5, status: 'active' },
];

export const mockParents: Parent[] = [
  { id: 'p1', name: 'James Wilson', email: 'parent@rosebery.local', phone: '0151 222 0001', address: '12 Smithdown Road, Liverpool L15 2HE', children: ['c1', 'c2'] },
  { id: 'p2', name: 'Emma Thompson', email: 'emma.t@email.com', phone: '0151 222 0002', address: '45 Penny Lane, Liverpool L18 1DQ', children: ['c3'] },
  { id: 'p3', name: 'Mohammed Patel', email: 'm.patel@email.com', phone: '0151 222 0003', address: '78 Lodge Lane, Liverpool L8 0QP', children: ['c4', 'c5'] },
];

export const mockChildren: Child[] = [
  { id: 'c1', firstName: 'Oliver', lastName: 'Wilson', dateOfBirth: '2022-03-15', parentId: 'p1', childminderId: 'cm1', roomId: 'r1', allergies: ['Peanuts'], emergencyContacts: [{ name: 'James Wilson', relationship: 'Father', phone: '0151 222 0001' }] },
  { id: 'c2', firstName: 'Sophie', lastName: 'Wilson', dateOfBirth: '2024-08-22', parentId: 'p1', childminderId: 'cm1', roomId: 'r1', allergies: [], emergencyContacts: [{ name: 'James Wilson', relationship: 'Father', phone: '0151 222 0001' }] },
  { id: 'c3', firstName: 'Lily', lastName: 'Thompson', dateOfBirth: '2023-01-10', parentId: 'p2', childminderId: 'cm2', roomId: 'r2', allergies: ['Dairy'], medicalNotes: 'Lactose intolerant', emergencyContacts: [{ name: 'Emma Thompson', relationship: 'Mother', phone: '0151 222 0002' }] },
  { id: 'c4', firstName: 'Yusuf', lastName: 'Patel', dateOfBirth: '2021-11-05', parentId: 'p3', childminderId: 'cm3', roomId: 'r3', allergies: [], emergencyContacts: [{ name: 'Mohammed Patel', relationship: 'Father', phone: '0151 222 0003' }] },
  { id: 'c5', firstName: 'Aisha', lastName: 'Patel', dateOfBirth: '2023-06-18', parentId: 'p3', childminderId: 'cm3', roomId: 'r3', allergies: [], emergencyContacts: [{ name: 'Mohammed Patel', relationship: 'Father', phone: '0151 222 0003' }] },
];

export const mockInvoices: Invoice[] = [
  { id: 'inv1', parentId: 'p1', amount: 850, status: 'paid', dueDate: '2026-06-01', description: 'June childcare fees - Oliver & Sophie', type: 'parent_fee' },
  { id: 'inv2', parentId: 'p2', amount: 520, status: 'pending', dueDate: '2026-06-25', description: 'June childcare fees - Lily', type: 'parent_fee' },
  { id: 'inv3', parentId: 'p3', amount: 680, status: 'overdue', dueDate: '2026-06-10', description: 'June childcare fees - Yusuf & Aisha', type: 'parent_fee' },
  { id: 'inv4', childminderId: 'cm1', amount: 450, status: 'paid', dueDate: '2026-06-05', description: 'May facility charge - Room 1', type: 'facility_charge' },
  { id: 'inv5', childminderId: 'cm2', amount: 380, status: 'pending', dueDate: '2026-06-20', description: 'May facility charge - Room 2', type: 'facility_charge' },
  { id: 'inv6', amount: 1200, status: 'paid', dueDate: '2026-06-01', description: 'Cleaning services - May', type: 'expense' },
  { id: 'inv7', amount: 890, status: 'paid', dueDate: '2026-06-01', description: 'Utilities - May', type: 'expense' },
];

export const mockPayments: Payment[] = [
  { id: 'pay1', invoiceId: 'inv1', amount: 850, date: '2026-06-02', method: 'Bank Transfer', status: 'completed' },
  { id: 'pay2', invoiceId: 'inv4', amount: 450, date: '2026-06-06', method: 'Direct Debit', status: 'completed' },
  { id: 'pay3', invoiceId: 'inv6', amount: 1200, date: '2026-06-03', method: 'Bank Transfer', status: 'completed' },
];

export const mockAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Welcome to Rosebery', content: 'We are delighted to welcome all families to our facility-based childminding hub. Please review our house rules and safety guidelines.', author: 'Fatima Ali', date: '2026-06-01', audience: 'all' },
  { id: 'a2', title: 'Room 2 Maintenance', content: 'Room 2 will undergo minor maintenance on Friday. Groups will be temporarily relocated.', author: 'Yusuf Khan', date: '2026-06-15', audience: ['manager', 'childminder', 'parent'], roomId: 'r2' },
  { id: 'a3', title: 'Summer Holiday Sessions', content: 'Holiday care sessions are now open for registration, subject to availability and setup approval.', author: 'Fatima Ali', date: '2026-06-10', audience: 'all' },
];

export const mockAttendance: AttendanceRecord[] = [
  { id: 'att1', childId: 'c1', date: '2026-06-18', checkIn: '08:15', checkOut: '16:30', status: 'present' },
  { id: 'att2', childId: 'c2', date: '2026-06-18', checkIn: '08:20', status: 'present' },
  { id: 'att3', childId: 'c3', date: '2026-06-18', checkIn: '08:45', status: 'present' },
  { id: 'att4', childId: 'c4', date: '2026-06-18', status: 'absent' },
  { id: 'att5', childId: 'c5', date: '2026-06-18', checkIn: '09:00', status: 'late' },
];

export const mockActivities: ActivityLog[] = [
  { id: 'act1', childId: 'c1', date: '2026-06-18', activity: 'Creative arts - painting', notes: 'Enjoyed mixing colours', loggedBy: 'Maryam Ibrahim' },
  { id: 'act2', childId: 'c2', date: '2026-06-18', activity: 'Story time', loggedBy: 'Sara Ahmed' },
  { id: 'act3', childId: 'c3', date: '2026-06-18', activity: 'Outdoor walk (local area)', notes: 'Short supervised walk nearby', loggedBy: 'Khadija Noor' },
];

export const mockMeals: MealLog[] = [
  { id: 'm1', childId: 'c1', date: '2026-06-18', mealType: 'breakfast', description: 'Porridge with fruit', notes: 'Ate well' },
  { id: 'm2', childId: 'c1', date: '2026-06-18', mealType: 'lunch', description: 'Chicken rice and vegetables' },
  { id: 'm3', childId: 'c2', date: '2026-06-18', mealType: 'snack', description: 'Apple slices and crackers' },
];

export const mockNaps: NapLog[] = [
  { id: 'n1', childId: 'c2', date: '2026-06-18', startTime: '12:30', endTime: '14:00', notes: 'Slept peacefully' },
  { id: 'n2', childId: 'c5', date: '2026-06-18', startTime: '13:00', endTime: '14:30' },
];

export const mockDailyNotes: DailyNote[] = [
  { id: 'dn1', childId: 'c1', date: '2026-06-18', content: 'Oliver had a wonderful day. Very engaged during group activities.', author: 'Maryam Ibrahim' },
  { id: 'dn2', childId: 'c3', date: '2026-06-18', content: 'Lily was a bit tired today but participated well in story time.', author: 'Khadija Noor' },
];

export const mockDocuments: Document[] = [
  { id: 'd1', name: 'DBS Certificate - Maryam Ibrahim', type: 'Compliance', uploadedBy: 'Maryam Ibrahim', date: '2026-01-15', status: 'approved', expiryDate: '2027-01-15' },
  { id: 'd2', name: 'Risk Assessment - Room 1', type: 'Safety', uploadedBy: 'Yusuf Khan', date: '2026-03-01', status: 'approved', expiryDate: '2026-09-01' },
  { id: 'd3', name: 'First Aid Certificate - Sara Ahmed', type: 'Compliance', uploadedBy: 'Sara Ahmed', date: '2025-11-20', status: 'pending', expiryDate: '2026-11-20' },
  { id: 'd4', name: 'Fire Safety Plan', type: 'Safety', uploadedBy: 'Fatima Ali', date: '2026-02-10', status: 'approved' },
];

export const mockVisitors: VisitorLog[] = [
  { id: 'v1', name: 'Dr. Sarah Jones', purpose: 'Health inspection', checkIn: '2026-06-17 10:00', checkOut: '2026-06-17 11:30', host: 'Yusuf Khan' },
  { id: 'v2', name: 'Ali Maintenance Ltd', purpose: 'HVAC repair - Room 2', checkIn: '2026-06-16 09:00', checkOut: '2026-06-16 12:00', host: 'Yusuf Khan' },
  { id: 'v3', name: 'Emma Thompson', purpose: 'Parent visit', checkIn: '2026-06-18 15:00', host: 'Khadija Noor' },
];

export const mockIncidents: Incident[] = [
  { id: 'i1', date: '2026-06-14', type: 'Minor bump', description: 'Child bumped head on low table. Ice pack applied, parent notified.', roomId: 'r1', reportedBy: 'Maryam Ibrahim', status: 'resolved' },
  { id: 'i2', date: '2026-06-10', type: 'Spill hazard', description: 'Water spill near entrance. Cleaned immediately.', roomId: 'r2', reportedBy: 'Sara Ahmed', status: 'resolved' },
  { id: 'i3', date: '2026-06-18', type: 'Equipment fault', description: 'Room 3 radiator making unusual noise. Maintenance requested.', roomId: 'r3', reportedBy: 'Amina Farooq', status: 'investigating' },
];

export const mockRiskAssessments: RiskAssessment[] = [
  { id: 'ra1', roomId: 'r1', title: 'General Room Safety', lastReviewed: '2026-03-01', nextReview: '2026-09-01', status: 'current', riskLevel: 'low' },
  { id: 'ra2', roomId: 'r2', title: 'General Room Safety', lastReviewed: '2026-03-01', nextReview: '2026-09-01', status: 'current', riskLevel: 'low' },
  { id: 'ra3', roomId: 'r3', title: 'Heating System Review', lastReviewed: '2026-01-15', nextReview: '2026-07-15', status: 'due', riskLevel: 'medium' },
];

export const mockCleaningLogs: CleaningLog[] = [
  { id: 'cl1', roomId: 'r1', date: '2026-06-18', cleanedBy: 'Clean Team A', tasks: ['Floor mop', 'Surface sanitise', 'Toy clean'], status: 'completed' },
  { id: 'cl2', roomId: 'r2', date: '2026-06-18', cleanedBy: 'Clean Team A', tasks: ['Floor mop', 'Surface sanitise'], status: 'scheduled' },
  { id: 'cl3', roomId: 'r3', date: '2026-06-17', cleanedBy: 'Clean Team B', tasks: ['Deep clean', 'Window clean'], status: 'completed' },
];

export const mockRegistrations: Registration[] = [
  { id: 'reg1', parentName: 'David Brown', parentEmail: 'd.brown@email.com', childName: 'Noah Brown', status: 'pending', submittedDate: '2026-06-17', preferredSessions: ['Mon-Fri AM', 'Extended'] },
  { id: 'reg2', parentName: 'Sarah Khan', parentEmail: 's.khan@email.com', childName: 'Zara Khan', status: 'approved', submittedDate: '2026-06-10', preferredSessions: ['Mon-Wed-Fri'] },
  { id: 'reg3', parentName: 'Tom Hughes', parentEmail: 't.hughes@email.com', childName: 'Grace Hughes', status: 'waitlist', submittedDate: '2026-06-05', preferredSessions: ['Tue-Thu'] },
];

export const revenueChartData = [
  { month: 'Jan', revenue: 12400, expenses: 8200 },
  { month: 'Feb', revenue: 13100, expenses: 8500 },
  { month: 'Mar', revenue: 12800, expenses: 8100 },
  { month: 'Apr', revenue: 13500, expenses: 8700 },
  { month: 'May', revenue: 14200, expenses: 8900 },
  { month: 'Jun', revenue: 14800, expenses: 9100 },
];

export const occupancyChartData = [
  { room: 'Room 1', occupancy: 75, capacity: 100 },
  { room: 'Room 2', occupancy: 70, capacity: 100 },
  { room: 'Room 3', occupancy: 62, capacity: 100 },
];

export const childminderPerformanceData = [
  { name: 'Maryam', children: 9, satisfaction: 96 },
  { name: 'Khadija', children: 7, satisfaction: 94 },
  { name: 'Amina', children: 5, satisfaction: 98 },
];

export const attendanceTrendData = [
  { day: 'Mon', present: 19, absent: 2 },
  { day: 'Tue', present: 20, absent: 1 },
  { day: 'Wed', present: 18, absent: 3 },
  { day: 'Thu', present: 21, absent: 0 },
  { day: 'Fri', present: 19, absent: 2 },
];

export const monthlyFinanceData = [
  { month: 'Jan', income: 12400, outgoing: 8200 },
  { month: 'Feb', income: 13100, outgoing: 8500 },
  { month: 'Mar', income: 12800, outgoing: 8100 },
  { month: 'Apr', income: 13500, outgoing: 8700 },
  { month: 'May', income: 14200, outgoing: 8900 },
  { month: 'Jun', income: 14800, outgoing: 9100 },
];

export const complianceAlerts = [
  { id: 'ca1', title: 'Risk Assessment Due', description: 'Room 3 heating system review due within 30 days', severity: 'medium', date: '2026-06-18' },
  { id: 'ca2', title: 'Document Pending', description: 'First Aid Certificate - Sara Ahmed awaiting approval', severity: 'low', date: '2026-06-17' },
  { id: 'ca3', title: 'Overdue Invoice', description: 'Patel family invoice overdue by 8 days', severity: 'high', date: '2026-06-18' },
];

export const ownerStats = {
  totalRevenue: 14800,
  totalExpenses: 9100,
  netSurplus: 5700,
  occupancyRate: 72,
  activeChildminders: 3,
  totalChildren: 21,
  complianceScore: 94,
};

export const managerStats = {
  presentToday: 19,
  absentToday: 2,
  roomsActive: 3,
  openIncidents: 1,
  maintenanceItems: 2,
  activitiesLogged: 12,
};

export const financeStats = {
  totalOutstanding: 1200,
  paidThisMonth: 12600,
  pendingInvoices: 3,
  overdueInvoices: 1,
  facilityChargesDue: 760,
  monthlySurplus: 5700,
};
