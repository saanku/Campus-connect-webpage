# TOCH Connect Mobile

Frontend-first React Native CLI app for the TOCH Connect Android launch.

## Run

```bash
cd mobile
npm install
npm start
npm run android
```

This folder contains the TypeScript app source and React Native configuration. If native Android folders are not present yet, initialize them with React Native CLI and keep this `src/`, `App.tsx`, and config set.

## Built Screens

- Login, signup, forgot password, OTP verification
- Home dashboard with TOCH Connect ID, timetable-ready widgets, attendance, announcements, quick actions
- Community feed with posts, media actions, likes, comments, shares, department filters
- Real-time chat-ready inbox with groups, typing indicators, read receipts UI
- Notes sharing with semester filters, subject action, PDF upload/download UI
- Marketplace with categories, seller chat, approval state
- Events with registration, QR check-in, certificates, gallery actions
- Student profile with photo action, skills, bio-ready layout, badges, attendance
- Admin panel with announcements, users, post moderation, marketplace approvals

## Backend Later

Connect API calls through `src/services/api.ts`. The mock data in `src/data/mockData.ts` is intentionally isolated so it can be replaced by Node.js, Express, MongoDB, JWT, Socket.IO, and push notification services later.
