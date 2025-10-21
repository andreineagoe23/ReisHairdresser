# Reis Hair & Beauty Website

A modern, mobile-friendly React website for Reis Hair & Beauty salon located in Ilford, UK.

## Features

- 🎨 Modern, clean design with TailwindCSS
- 📱 Fully responsive and mobile-friendly
- ✨ Smooth animations with Framer Motion
- 🗺️ Google Maps integration
- 📧 Contact form with Gmail integration
- 🖼️ Beautiful image gallery
- 📍 Complete service listings with prices
- 🔍 SEO optimized

## Business Information

**Name:** Reis Hair & Beauty  
**Address:** 122 New North Road, Ilford, IG6 2XJ, United Kingdom  
**Email:** reishairbeauty@gmail.com  
**Phone:** +44 20 1234 5678

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Icons:** React Icons
- **Deployment:** GitHub Pages

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd reis-hair-beauty
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Deployment to GitHub Pages

### First-time Setup

1. Update the `homepage` field in `package.json` with your GitHub username:

```json
"homepage": "https://<your-github-username>.github.io/reis-hair-beauty"
```

2. Create a new repository on GitHub called `reis-hair-beauty`

3. Initialize git and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-github-username>/reis-hair-beauty.git
git push -u origin main
```

### Deploy

Deploy your site to GitHub Pages with a single command:

```bash
npm run deploy
```

This will:

- Build your site
- Deploy to the `gh-pages` branch
- Make your site live at `https://<your-github-username>.github.io/reis-hair-beauty`

### Enable GitHub Pages

After your first deployment:

1. Go to your repository on GitHub
2. Click on **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

Your site will be live in a few minutes!

## Project Structure

```
reis-hair-beauty/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind configuration
```

## Pages

- **Home** - Hero section, features, testimonials, and CTA
- **Services** - Complete service listings with categories and prices
- **Gallery** - Image grid showcasing salon work
- **About** - Salon story, values, and team members
- **Contact** - Booking form, Google Maps, and contact information

## Customization

### Update Business Information

1. Contact details in `src/components/Footer.jsx`
2. Google Maps location in `src/pages/Contact.jsx`
3. SEO meta tags in `index.html`

### Update Colors

Edit `tailwind.config.js` to change the primary and gold color schemes.

### Add Real Images

Replace placeholder Unsplash images with your own photos:

- Hero images in `src/pages/Home.jsx`
- Gallery images in `src/pages/Gallery.jsx`
- Team photos in `src/pages/About.jsx`

### Update Services & Prices

Edit the service listings in `src/pages/Services.jsx`

## Contact Form

The contact form uses a `mailto:` link to open the user's default email client with pre-filled booking details. For a production deployment, consider integrating with:

- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Web3Forms](https://web3forms.com/)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Reis Hair & Beauty. All rights reserved.

## Support

For issues or questions, please contact: reishairbeauty@gmail.com
