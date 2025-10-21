# Quick Start Guide - Reis Hair & Beauty Website

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:5173

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 📋 Before You Deploy

### Update GitHub Username

Edit `package.json` line 6:

```json
"homepage": "https://YOUR-USERNAME.github.io/reis-hair-beauty"
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### Create GitHub Repository

1. Create new repo on GitHub named: `reis-hair-beauty`
2. Run these commands:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/reis-hair-beauty.git
git push -u origin main
npm run deploy
```

### Enable GitHub Pages

1. Go to repo Settings → Pages
2. Source: `gh-pages` branch
3. Save

Your site will be live at: `https://YOUR-USERNAME.github.io/reis-hair-beauty`

---

## ✅ What's Included

- ✨ Modern React + Vite setup
- 🎨 TailwindCSS styling
- 📱 Fully responsive design
- 🌊 Framer Motion animations
- 🗺️ Google Maps integration
- 📧 Contact form (mailto)
- 🖼️ Image gallery
- 🔍 SEO optimized
- 📱 Mobile-friendly navigation

---

## 📁 Project Structure

```
reis-hair-beauty/
├── src/
│   ├── components/     # Header, Footer
│   ├── pages/         # Home, Services, Gallery, About, Contact
│   ├── App.jsx        # Main app with routing
│   └── main.jsx       # Entry point
├── public/            # Static files
└── package.json       # Dependencies & scripts
```

---

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: { ... },  // Pink shades
  gold: { ... },     // Gold accents
}
```

### Update Content

- **Business info:** `src/components/Footer.jsx`
- **Services & prices:** `src/pages/Services.jsx`
- **Gallery images:** `src/pages/Gallery.jsx`
- **Team members:** `src/pages/About.jsx`
- **Contact info:** `src/pages/Contact.jsx`

### SEO Meta Tags

Edit `index.html` for title, description, and keywords.

---

## 🛠️ Useful Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run deploy`  | Deploy to GitHub Pages   |

---

## 📞 Need Help?

- Full instructions: See `README.md`
- Deployment guide: See `DEPLOYMENT.md`
- Email: reishairbeauty@gmail.com

---

**Ready to go live? Run:** `npm run deploy` 🚀
