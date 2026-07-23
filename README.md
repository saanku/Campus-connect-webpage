# Campus Connect

Canpus Connect is a website-first campus social portal. The current root prototype is an Instagram-style campus web experience with login, feed posts, stories, messages, anonymous community chat, student/admin access modes, events, notes, and profile panels.

The React Native mobile scaffold is still kept in `mobile/` for later conversion.

## Stack

- Static HTML/CSS/JavaScript website prototype in `index.html`
- React Native CLI, TypeScript, React Navigation, Redux Toolkit, React Native Paper in `mobile/`
- API-ready boundaries for later Node.js, Express, MongoDB, JWT, Socket.IO, uploads, and notifications

## Quick Start

Open `index.html` directly in a browser, or run:

```bash
npm install
npm run start:web
```

The web script starts a local server at `http://localhost:5173`.

## Core Website Features

- Login-first student/admin account flow
- Campus social feed with image posts, likes, comments, shares, and saves
- Stories row for student, club, placement, and department updates
- Messages section with private threads
- Anonymous community chat with anonymous group creation
- Student-facing notes, events, marketplace, and profile surfaces
- Hidden admin control center for staff workflows

## Mobile Later

Mobile can still be run from a React Native-ready machine:

```bash
npm run start:mobile
npm run android
```

## Security Notes

- Hash passwords with bcrypt
- Store JWT secrets outside source control
- Use HTTPS in production
- Restrict admin routes with role checks
- Add file scanning before public upload release
- Use S3/Cloudinary/Firebase Storage for production media
