import { Announcement, ChatThread, Event, Listing, Note, Post, Student } from '../types/domain';

export const currentStudent: Student = {
  id: 'u1',
  connectId: 'TOCH-2026-0001',
  name: 'Aarav Menon',
  email: 'aarav.menon@toch.ac.in',
  department: 'Computer Science',
  semester: 5,
  avatar: 'AM',
  skills: ['React Native', 'UI Design', 'Node.js'],
  badges: ['Top Contributor', 'Event Volunteer', 'Notes Hero'],
  role: 'admin',
  attendance: 86,
};

export const students: Student[] = [
  currentStudent,
  {
    id: 'u2',
    connectId: 'TOCH-2026-0002',
    name: 'Diya Joseph',
    email: 'diya.joseph@toch.ac.in',
    department: 'Electronics',
    semester: 3,
    avatar: 'DJ',
    skills: ['Robotics', 'Poster Design'],
    badges: ['Club Lead'],
    role: 'student',
    attendance: 92,
  },
  {
    id: 'u3',
    connectId: 'TOCH-2026-0003',
    name: 'Nikhil Raj',
    email: 'nikhil.raj@toch.ac.in',
    department: 'Mechanical',
    semester: 7,
    avatar: 'NR',
    skills: ['CAD', 'Event Ops'],
    badges: ['Marketplace Trusted'],
    role: 'student',
    attendance: 79,
  },
];

export const posts: Post[] = [
  {
    id: 'p1',
    author: students[1],
    department: 'Electronics',
    body: 'Robotics club is opening registrations for the autonomous rover challenge. Teams of 4 can join today.',
    mediaType: 'photo',
    likes: 148,
    comments: 26,
    shares: 11,
    createdAt: '10 min',
    trending: true,
  },
  {
    id: 'p2',
    author: currentStudent,
    department: 'Computer Science',
    body: 'Uploaded DBMS module 4 notes with solved previous-year questions. Search DBMS in Notes.',
    likes: 93,
    comments: 14,
    shares: 18,
    createdAt: '42 min',
  },
];

export const announcements: Announcement[] = [
  { id: 'a1', title: 'Internal exam timetable published', audience: 'All students', priority: 'high', date: 'Today' },
  { id: 'a2', title: 'Placement drive orientation at 3 PM', audience: 'S6 and S8', priority: 'normal', date: 'Tomorrow' },
  { id: 'a3', title: 'College bus route B delayed by 12 min', audience: 'Transport', priority: 'normal', date: 'Live' },
];

export const events: Event[] = [
  { id: 'e1', title: 'HackSprint 2026', club: 'IEDC', date: 'Jul 18', venue: 'Innovation Lab', registered: 184, status: 'open' },
  { id: 'e2', title: 'Arts Club Night', club: 'Arts Club', date: 'Jul 22', venue: 'Auditorium', registered: 420, status: 'open' },
  { id: 'e3', title: 'NSS Blood Donation', club: 'NSS', date: 'Jul 25', venue: 'Main Block', registered: 96, status: 'checked-in' },
];

export const notes: Note[] = [
  { id: 'n1', title: 'DBMS Module 4 Complete Notes', subject: 'DBMS', semester: 5, downloads: 342, uploadedBy: 'Aarav' },
  { id: 'n2', title: 'Signals and Systems Short Notes', subject: 'Signals', semester: 3, downloads: 211, uploadedBy: 'Diya' },
  { id: 'n3', title: 'Thermodynamics Formula Sheet', subject: 'Thermodynamics', semester: 4, downloads: 187, uploadedBy: 'Nikhil' },
];

export const listings: Listing[] = [
  { id: 'm1', title: 'Discrete Mathematics Textbook', category: 'Books', price: '₹320', seller: 'Aarav', approved: true },
  { id: 'm2', title: 'Scientific Calculator FX-991EX', category: 'Electronics', price: '₹850', seller: 'Diya', approved: false },
  { id: 'm3', title: 'Study Table Lamp', category: 'Hostel', price: '₹450', seller: 'Nikhil', approved: true },
];

export const chats: ChatThread[] = [
  { id: 'c1', title: 'Diya Joseph', subtitle: 'Can you share the event poster?', unread: 2, typing: true },
  { id: 'c2', title: 'CSE Department S5', subtitle: 'Assignment deadline moved to Friday', unread: 7, group: true },
  { id: 'c3', title: 'IEDC Club', subtitle: 'HackSprint volunteers confirmed', unread: 0, group: true },
];
