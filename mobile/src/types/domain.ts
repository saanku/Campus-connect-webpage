export type Role = 'student' | 'admin';

export type Student = {
  id: string;
  connectId: string;
  name: string;
  email: string;
  department: string;
  semester: number;
  avatar: string;
  skills: string[];
  badges: string[];
  role: Role;
  attendance: number;
};

export type Post = {
  id: string;
  author: Student;
  department: string;
  body: string;
  mediaType?: 'photo' | 'video';
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
  trending?: boolean;
};

export type Announcement = {
  id: string;
  title: string;
  audience: string;
  priority: 'normal' | 'high';
  date: string;
};

export type Event = {
  id: string;
  title: string;
  club: string;
  date: string;
  venue: string;
  registered: number;
  status: 'open' | 'checked-in' | 'closed';
};

export type Note = {
  id: string;
  title: string;
  subject: string;
  semester: number;
  downloads: number;
  uploadedBy: string;
};

export type Listing = {
  id: string;
  title: string;
  category: 'Books' | 'Electronics' | 'Hostel';
  price: string;
  seller: string;
  approved: boolean;
};

export type ChatThread = {
  id: string;
  title: string;
  subtitle: string;
  unread: number;
  typing?: boolean;
  group?: boolean;
};
