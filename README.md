# Dentwise 🦷  
**AI Voice Assistant & Appointment Booking Platform**

Dentwise is a modern full-stack web application designed for dental clinics.  
It combines appointment scheduling, authentication, subscriptions, and an AI-powered voice assistant into a single seamless platform.

The application is built using modern web technologies with a strong focus on scalability, performance, and real-world production use.

---

## ✨ Features

- Modern landing page with gradients and responsive UI  
- Authentication via Clerk (Google, GitHub, Email & Password)  
- Email verification using a secure 6-digit OTP  
- Appointment booking system  
- 3-step booking flow (Dentist → Service & Time → Confirmation)  
- Email notifications for appointment confirmations  
- Admin dashboard for managing appointments  
- AI Voice Assistant powered by Vapi (Pro plans only)  
- Subscription system with Free and Paid plans  
- Secure payments via Clerk Billing  
- Automatic invoice generation and email delivery  
- Smart subscription upgrades (users pay only the difference)  
- PostgreSQL database for persistent storage  
- Fast data fetching and caching using TanStack Query  

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack Query

### Backend
- Next.js Server Actions
- PostgreSQL
- Prisma ORM

### Authentication & Payments
- Clerk for authentication and subscriptions
- Resend for transactional emails

### AI
- Vapi for real-time AI voice interactions

---

src/
├─ app/ # App Router pages and layouts
├─ components/ # Reusable UI components
├─ lib/
│ ├─ actions/ # Server actions (appointments, users, billing)
│ ├─ prisma.ts # Prisma client
│ └─ utils.ts # Shared helpers
├─ hooks/ # Custom React hooks
└─ styles/ # Global styles

prisma/
├─ schema.prisma # Database schema
└─ migrations/ # Prisma migrations

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dentwise.git
cd dentwise
```
### 2. Install dependencies

```bash
npm install
```
### 3. Environment variables

Create a `.env` file and add:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/dentwise

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key

RESEND_API_KEY=your_key
VAPI_API_KEY=your_key

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Database setup

Run Prisma migrations and generate the client:

```bash
npx prisma migrate dev
npx prisma generate
```

### 5. Start the development server

```bash
npm run dev
```
## 📂 Project Structure (High Level)

