export interface UserProfile {
  uid: string;
  email: string | null;
  phone: string | null;
  displayName: string | null;
  role: 'user' | 'admin';
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

export interface RegistrationRequest {
  id: string;
  name: string;
  phone: string;
  email?: string;
  aadhaarUrl: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  rejectionReason?: string;
}

export interface UserData extends UserProfile {
  pgId?: string;
  pgName?: string;
  roomNumber?: string;
  roomType?: string;
  rent?: number;
  joinDate?: Date;
  dueDate?: Date;
  paymentHistory?: Payment[];
}

export interface Payment {
  id: string;
  amount: number;
  date: Date;
  month: string;
  status: 'paid' | 'pending' | 'overdue';
  paymentMethod?: string;
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  createdAt: Date;
  createdBy: string;
  targetUsers?: string[]; // Empty array means all users
}

export interface PGStats {
  id: string;
  name: string;
  totalBeds: number;
  occupiedBeds: number;
  vacantBeds: number;
  location: string;
}

export interface BillingRecord {
  id: string;
  userId: string;
  userName: string;
  pgName: string;
  roomType: string;
  amount: number;
  dueDate: Date;
  paidDate?: Date;
  status: 'paid' | 'due' | 'delayed';
  month: string;
}
