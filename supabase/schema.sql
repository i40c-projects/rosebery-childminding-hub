-- Rosebery Childminding Hub - Supabase Schema
-- Run this in your Supabase SQL editor to set up the database

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Custom types
CREATE TYPE user_role AS ENUM (
  'owner', 'admin', 'manager', 'finance', 'childminder', 'assistant', 'parent'
);

CREATE TYPE invoice_status AS ENUM ('paid', 'pending', 'overdue');
CREATE TYPE invoice_type AS ENUM ('parent_fee', 'facility_charge', 'expense');
CREATE TYPE payment_status AS ENUM ('completed', 'pending', 'failed');
CREATE TYPE registration_status AS ENUM ('pending', 'approved', 'waitlist', 'rejected');
CREATE TYPE attendance_status AS ENUM ('present', 'absent', 'late');
CREATE TYPE cleaning_status AS ENUM ('clean', 'scheduled', 'in-progress');
CREATE TYPE risk_level AS ENUM ('low', 'medium', 'high');
CREATE TYPE document_status AS ENUM ('approved', 'pending', 'expired');
CREATE TYPE incident_status AS ENUM ('open', 'resolved', 'investigating');
CREATE TYPE childminder_status AS ENUM ('active', 'pending', 'inactive');
CREATE TYPE meal_type AS ENUM ('breakfast', 'lunch', 'snack', 'dinner');

-- Profiles (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  role user_role NOT NULL DEFAULT 'parent',
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Rooms
CREATE TABLE rooms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  capacity INTEGER NOT NULL DEFAULT 10,
  current_occupancy INTEGER DEFAULT 0,
  childminder_id UUID REFERENCES profiles(id),
  cleaning_status cleaning_status DEFAULT 'clean',
  risk_status risk_level DEFAULT 'low',
  last_cleaned DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Childminders (extended profile info)
CREATE TABLE childminders (
  id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  room_id UUID REFERENCES rooms(id),
  max_capacity INTEGER DEFAULT 10,
  current_children INTEGER DEFAULT 0,
  status childminder_status DEFAULT 'pending',
  facility_charge_rate DECIMAL(10,2),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Assistant assignments
CREATE TABLE assistant_assignments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  assistant_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  childminder_id UUID REFERENCES childminders(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(assistant_id, childminder_id)
);

-- Parents
CREATE TABLE parents (
  id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Children
CREATE TABLE children (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  gender TEXT,
  parent_id UUID REFERENCES parents(id) ON DELETE CASCADE,
  childminder_id UUID REFERENCES childminders(id),
  room_id UUID REFERENCES rooms(id),
  allergies TEXT[],
  medical_notes TEXT,
  dietary_requirements TEXT,
  medications TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Emergency contacts
CREATE TABLE emergency_contacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  relationship TEXT NOT NULL,
  phone TEXT NOT NULL,
  is_primary BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Registrations
CREATE TABLE registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  parent_name TEXT NOT NULL,
  parent_email TEXT NOT NULL,
  parent_phone TEXT,
  child_name TEXT NOT NULL,
  child_dob DATE,
  status registration_status DEFAULT 'pending',
  preferred_sessions TEXT[],
  medical_info JSONB,
  emergency_contacts JSONB,
  consent JSONB,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  reviewed_by UUID REFERENCES profiles(id),
  reviewed_at TIMESTAMPTZ
);

-- Attendance
CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  check_in TIME,
  check_out TIME,
  status attendance_status DEFAULT 'present',
  logged_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(child_id, date)
);

-- Activity logs
CREATE TABLE activity_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  activity TEXT NOT NULL,
  notes TEXT,
  logged_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Meal logs
CREATE TABLE meal_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  meal_type meal_type NOT NULL,
  description TEXT NOT NULL,
  notes TEXT,
  logged_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Nap logs
CREATE TABLE nap_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME,
  notes TEXT,
  logged_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Daily notes
CREATE TABLE daily_notes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Invoices
CREATE TABLE invoices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  parent_id UUID REFERENCES parents(id),
  childminder_id UUID REFERENCES childminders(id),
  amount DECIMAL(10,2) NOT NULL,
  status invoice_status DEFAULT 'pending',
  due_date DATE NOT NULL,
  description TEXT NOT NULL,
  type invoice_type NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Payments
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  invoice_id UUID REFERENCES invoices(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  payment_date DATE NOT NULL,
  method TEXT NOT NULL,
  status payment_status DEFAULT 'completed',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Announcements
CREATE TABLE announcements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES profiles(id),
  audience TEXT[] DEFAULT ARRAY['all'],
  room_id UUID REFERENCES rooms(id),
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Documents
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  file_url TEXT,
  uploaded_by UUID REFERENCES profiles(id),
  status document_status DEFAULT 'pending',
  expiry_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Visitor logs
CREATE TABLE visitor_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  visitor_name TEXT NOT NULL,
  purpose TEXT NOT NULL,
  check_in TIMESTAMPTZ NOT NULL,
  check_out TIMESTAMPTZ,
  host_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Incidents
CREATE TABLE incidents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL,
  incident_type TEXT NOT NULL,
  description TEXT NOT NULL,
  room_id UUID REFERENCES rooms(id),
  reported_by UUID REFERENCES profiles(id),
  status incident_status DEFAULT 'open',
  resolution_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Risk assessments
CREATE TABLE risk_assessments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  last_reviewed DATE NOT NULL,
  next_review DATE NOT NULL,
  risk_level risk_level DEFAULT 'low',
  assessment_data JSONB,
  reviewed_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Cleaning logs
CREATE TABLE cleaning_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  cleaned_by TEXT NOT NULL,
  tasks TEXT[] NOT NULL,
  status TEXT DEFAULT 'completed',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_id UUID REFERENCES profiles(id),
  recipient_id UUID REFERENCES profiles(id),
  subject TEXT,
  content TEXT NOT NULL,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE children ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_notes ENABLE ROW LEVEL SECURITY;

-- Profiles: users can read their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Admin/owner full access policies (example)
CREATE POLICY "Admins full access profiles" ON profiles
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin', 'owner'))
  );

-- Children: parents see own children
CREATE POLICY "Parents view own children" ON children
  FOR SELECT USING (
    parent_id IN (SELECT id FROM parents WHERE id = auth.uid())
    OR EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin', 'manager', 'childminder', 'owner'))
  );

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Indexes
CREATE INDEX idx_children_parent ON children(parent_id);
CREATE INDEX idx_children_childminder ON children(childminder_id);
CREATE INDEX idx_attendance_child_date ON attendance(child_id, date);
CREATE INDEX idx_invoices_parent ON invoices(parent_id);
CREATE INDEX idx_invoices_status ON invoices(status);
CREATE INDEX idx_registrations_status ON registrations(status);
