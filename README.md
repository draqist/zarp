# 📦 ZAP – README

## 🚀 Project Overview

The **ZAP** is a proof-of-concept delivery coordination platform designed for the Obafemi Awolowo University campus and its surrounding areas.
It aims to **reduce delivery delays, lower costs for vendors, and increase earning opportunities** by onboarding **both private and public transport operators** into a shared logistics network.

Vendors can quickly request deliveries, and transporters whose routes align with the delivery destination can accept and fulfill the order. This creates a **dynamic, decentralized logistics system** without requiring expensive fleet management infrastructure.

---

## 🎯 Value Proposition

* **For Vendors** – Deliver goods faster without waiting for bulk orders.
* **For Transporters** – Earn extra income by delivering goods along their existing routes.
* **For Customers** – Receive orders faster and at lower costs.

---

## 📌 MVP Scope

Since this is an MVP with **one frontend dev and one backend dev**, the scope is intentionally lean but functional.

### ✅ Core MVP Features

1. **User Authentication** (Supabase Auth)

   * Vendor registration/login
   * Transporter registration/login
2. **Vendor Dashboard**

   * Create new delivery requests
   * View delivery status
3. **Transporter Dashboard**

   * View available delivery requests
   * Accept deliveries along their route
4. **Order Management**

   * Real-time order status updates (e.g., Pending → Accepted → Delivered)
5. **Basic Notifications**

   * Email or in-app notifications when orders are accepted
6. **Location Handling**

   * Pickup and drop-off addresses (manual entry for MVP, map integration later)

---

## 🛠 Recommended Tech Stack

Since backend experience is minimal, we’ll use **Supabase** as the backend-as-a-service provider.

| Layer              | Technology                         | Reason                                                            |
| ------------------ | ---------------------------------- | ----------------------------------------------------------------- |
| **Frontend**       | Next.js + TypeScript + TailwindCSS | Familiar tech, fast dev, SSR/ISR support                          |
| **UI Components**  | ShadCN/UI                          | Prebuilt, customizable components                                 |
| **Backend**        | Supabase                           | Handles authentication, database, and APIs without custom backend |
| **Database**       | Supabase Postgres                  | Relational DB with real-time updates                              |
| **Hosting**        | Vercel                             | Quick deploy for Next.js                                          |
| **Image Handling** | Supabase Storage                   | Vendor logos, proof-of-delivery images                            |

---

## 📂 Suggested Folder Structure

```plaintext
oau-logistics/
│
├── public/               # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/
│   │   ├── index.tsx      # Landing page
│   │   ├── dashboard/     # Vendor & transporter dashboards
│   ├── lib/               # Supabase client & helpers
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript types
│   ├── hooks/             # Custom hooks
│
├── .env.local             # Environment variables
├── package.json
├── README.md
```

---

## ⚙️ Setup Instructions

1️⃣ **Clone the Repository**

```bash
git clone https://github.com/yourusername/oau-logistics.git
cd oau-logistics
```

2️⃣ **Install Dependencies**

```bash
npm install
```

3️⃣ **Set Up Supabase**

* Create a [Supabase](https://supabase.com) project
* Copy your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` into `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

4️⃣ **Run Development Server**

```bash
npm run dev
```

Visit `http://localhost:3000`

5️⃣ **Deploy**

* Push code to GitHub
* Connect repo to Vercel
* Add environment variables in Vercel settings
* Deploy 🚀

---

## 📍 Deployment Strategy for MVP

* **Phase 1**: Test on OAU campus with 3–5 vendors and 5–10 transporters
* **Phase 2**: Expand to nearby towns (Ife main city)
* **Phase 3**: Introduce payment processing & geolocation

---

## 📅 Future Roadmap

* ✅ Real-time tracking (Google Maps API)
* ✅ Payment gateway (Paystack/Flutterwave)
* ✅ Rating & review system for transporters
* ✅ AI-powered route optimization
* ✅ Fleet management for bigger vendors
* ✅ Integration with logistics partners (FedEx, DHL)
