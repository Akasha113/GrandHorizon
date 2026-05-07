# Hotel Booking Backend (Express + MySQL)

A ready-to-run backend for a Hotel Booking System that supports:

- Auth (register/login with JWT)
- Rooms (list/get)
- Bookings (availability check, create, list my bookings)
- Reviews (post after a completed stay)
- Contact Us (store message and optionally email via SMTP)
- (Optional) Stripe payment intent endpoint

## Quick Start

1. Install dependencies
```bash
npm install
```

2. Create the database and tables
- Start MySQL (e.g., via XAMPP / MariaDB)
- Create DB and tables using the provided SQL:

```bash
cp .env.example .env
# edit .env to match your MySQL
npm run db:sync
```

3. Seed an admin account
```bash
npm run seed
```
Default admin:
- email: admin@hotel.com
- password: Admin@123

4. Run the server
```bash
npm run dev
```

Server defaults to http://localhost:4000

## ENV
See `.env.example` for configuration.

## Endpoints (base: /api)
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/rooms`
- `GET /api/rooms/:id`
- `POST /api/bookings` (auth)
- `GET /api/bookings/my` (auth)
- `PATCH /api/bookings/:id/status` (admin)
- `POST /api/reviews` (auth)
- `GET /api/reviews/room/:roomId`
- `POST /api/contact`
- `POST /api/payments/create-intent` (auth, optional)

## Database
Run the SQL in `db/schema.sql` to create all tables.