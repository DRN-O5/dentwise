# Dentwise 🦷  
**AI Voice Assistant & Appointment Booking Platform**

Dentwise is a modern full-stack web application designed for dental clinics. It combines appointment scheduling, authentication, subscriptions, and an AI-powered voice assistant into a single seamless platform.

The app is built with scalability and real-world production use in mind, using modern tools from the Next.js ecosystem.

---

## ✨ Features

- Modern landing page with gradients and responsive design  
- Authentication using Clerk (Google, GitHub, Email & Password)
- Secure email verification using a 6-digit OTP
- Appointment booking system with a guided 3-step flow:
  - Select dentist
  - Choose service & time
  - Confirm booking
- Email notifications for appointment confirmations
- Admin dashboard for managing bookings and users
- AI Voice Assistant powered by Vapi (available on paid plans)
- Subscription system with Free + 2 Paid Plans
- Secure payments via Clerk Billing
- Automatic invoice generation and email delivery
- Smart subscription upgrades (users pay only the difference)
- PostgreSQL database for persistent storage
- Fast and efficient data fetching using TanStack Query

---

## 🛠 Tech Stack

### Frontend
- **Next.js (App Router)** – Server-side rendering and routing
- **TypeScript** – Type safety and maintainability
- **Tailwind CSS** – Utility-first styling
- **shadcn/ui** – Accessible UI components
- **TanStack Query** – Server state management and caching

### Backend
- **Next.js Server Actions** – Backend logic without a separate API
- **PostgreSQL** – Relational database
- **Prisma** – ORM for database access

### Authentication & Payments
- **Clerk** – Authentication, user management, and billing
- **Resend** – Transactional emails (verification, booking, invoices)

### AI
- **Vapi** – AI voice assistant for real-time voice interactions (Pro plans)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/dentwise.git
cd dentwise

### Install Dependencies
npm install

