# New Hope Vet Website

A professional, end-to-end veterinary clinic website built with React and Vanilla CSS.

## Features
- **Responsive Design:** Mobile-friendly layout using CSS Grid and Flexbox.
- **Dynamic Services:** Easily manageable service sections.
- **Appointment Booking:** Functional form with localStorage persistence and WhatsApp integration.
- **WhatsApp Integration:** Floating button for instant communication.
- **GoDaddy Ready:** Includes `.htaccess` for Apache SPA routing.

## Tech Stack
- React 18
- Vite
- Lucide React (Icons)
- Vanilla CSS (Custom styling)

## Quick Start
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Upload the contents of the `dist` folder to your GoDaddy `public_html` directory.
3. Ensure the `.htaccess` file from the `public` folder is also uploaded to the root.
