# Deployment Guide

This project uses:
- `hotel-booking-backend/` — Express backend deployed to Railway
- `frontend/` — guest React app deployed to Vercel
- `admin/` — admin React app deployed to Vercel

## Backend (Railway)

1. On Railway, create a new project and connect your GitHub repository.
2. Select `hotel-booking-backend` as the service root folder.
3. Railway should install dependencies automatically. If not, use:
   ```bash
   npm install
   ```
4. Set the production start command:
   ```bash
   npm start
   ```
5. Configure environment variables in Railway:
   - `DB_HOST`
   - `DB_PORT`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
   - `JWT_SECRET`
   - `SMTP_HOST` (optional)
   - `SMTP_PORT` (optional)
   - `SMTP_USER` (optional)
   - `SMTP_PASS` (optional)
   - `SMTP_FROM` (optional)
   - `STRIPE_SECRET_KEY` (optional)
   - `PORT` (Railway usually sets this automatically)
6. Use a Railway MySQL plugin or an external managed MySQL database.
7. After deployment, Railway will provide a backend URL like:
   ```text
   https://<your-railway-app>.up.railway.app
   ```

## Guest Frontend (Vercel)

1. On Vercel, create a new project and import the same GitHub repository.
2. Set the root directory to `frontend`.
3. Configure the build settings:
   - Build command: `npm run build`
   - Output directory: `build`
4. Add environment variables in Vercel:
   - `REACT_APP_API_URL` = `https://<your-railway-backend-url>`
   - `REACT_APP_STRIPE_PUBLISHABLE_KEY` = your Stripe publishable key (optional)
5. Deploy.

## Admin Frontend (Vercel)

1. Create a second Vercel project for the `admin` app.
2. Set the root directory to `admin`.
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `build`
4. Add environment variables in Vercel:
   - `REACT_APP_API_URL` = `https://<your-railway-backend-url>`
5. Deploy.

## Notes

- The frontend source was updated to use `process.env.REACT_APP_API_URL` instead of hardcoded `http://localhost:4000`.
- In Vercel, environment variables are injected at build time, so the production build will use the Railway backend URL.
- If you use Stripe payment integration, set both frontend and backend Stripe keys:
  - Frontend: `REACT_APP_STRIPE_PUBLISHABLE_KEY`
  - Backend: `STRIPE_SECRET_KEY`

## Local testing

For local development, keep `frontend/.env` as:
```env
REACT_APP_API_URL=http://localhost:4000
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_actual_stripe_publishable_key
```

Then run:
- Backend: `cd hotel-booking-backend && npm install && npm run dev`
- Frontend: `cd frontend && npm install && npm start`
- Admin: `cd admin && npm install && npm start`
