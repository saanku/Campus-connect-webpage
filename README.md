# TOCH Connect

TOCH Connect is now being shaped as a website-first campus portal. The current root prototype is a responsive browser experience for students, clubs, admins, notes, events, marketplace listings, and campus updates.

The React Native mobile scaffold is still kept in `mobile/` so the website idea can later be converted into an app once the core web flow feels right.

## Stack

- Static HTML/CSS/JavaScript website prototype in `index.html`
- React Native CLI, TypeScript, React Navigation, Redux Toolkit, React Native Paper in `mobile/`
- API-ready boundaries for later Node.js, Express, MongoDB, JWT, Socket.IO, uploads, and notifications

## Apps

- `index.html` - website-first campus portal prototype
- `mobile/` - React Native app shell kept for later conversion

## Quick Start

Open `index.html` directly in a browser to preview the website prototype.

```bash
npm install
npm run start:web
```

The web script starts a simple local server at `http://localhost:5173`.

Mobile can still be run from a React Native-ready machine:

```bash
npm run start:mobile
npm run android
```

PowerShell may block `npm.ps1` on some Windows machines. Use `cmd /c npm install` or update the PowerShell execution policy for your development profile.

## Core Features

- Student signup with college email verification and OTP flow boundaries
- Login and signup screens prepared for JWT integration
- Unique TOCH Connect IDs like `TOCH-2026-0001`
- Dashboard, timetable, attendance, announcements, events, trending posts
- Community feed with photos, videos, likes, comments, shares, department filters
- Personal chat, department groups, clubs, typing indicators, read receipts
- Notes sharing with PDF upload, semester/subject filters, search and downloads
- Marketplace listings with seller chat, reports, approvals
- Event registration, QR check-in-ready model, certificates, galleries
- Student profiles with photo, skills, bio, badges, department, semester
- Admin panel UI for users, posts, events, marketplace reports, bans, and moderation
- Premium modules: AI study assistant boundary, lost and found, bus tracker, placement updates

## Website Direction

Build and validate the website first:

- Student portal dashboard
- Community feed and moderation flow
- Notes library with upload/search/download flows
- Event registration and QR check-in boundaries
- Marketplace listings and approval queue
- Profile, chat, announcements, and admin console

After the website flow is settled, reuse the same data model, service boundaries, and screen structure for the mobile app.

## Deployment

When backend work starts, add a Node.js/Express service behind a shared service boundary. MongoDB Atlas, object storage, Socket.IO, and Firebase Cloud Messaging can plug in without rewriting the product flow.

## Security Notes

- Hash passwords with bcrypt
- Store JWT secrets outside source control
- Use HTTPS in production
- Restrict admin routes with role checks
- Add cloud antivirus/file scanning before public upload release
- Use S3/Cloudinary/Firebase Storage for production media

## Testing

Mobile tests should cover navigation, reducers, and key screen states. Backend integration tests can be added when the API is introduced.
