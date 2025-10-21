# Complete Setup Instructions

## Reis Hair & Beauty Website - Full Setup Guide

Welcome! This guide will help you set up, customize, and deploy the Reis Hair & Beauty website.

---

## 📦 Initial Setup

### 1. Install Node.js

If you don't have Node.js installed:

- Download from [nodejs.org](https://nodejs.org/)
- Install version 16 or higher
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

### 2. Install Dependencies

Navigate to the project folder and run:

```bash
npm install
```

This installs:

- React & React DOM
- React Router (for navigation)
- TailwindCSS (for styling)
- Framer Motion (for animations)
- React Icons (for icons)
- Vite (build tool)
- gh-pages (for deployment)

### 3. Start Development Server

```bash
npm run dev
```

The site will open at: http://localhost:5173

---

## 🎨 Customization

### Update Business Information

#### 1. Contact Details

**File: `src/components/Footer.jsx`**

- Address
- Phone number
- Email
- Opening hours

**File: `src/pages/Contact.jsx`**

- Contact form email
- Google Maps embed URL
- Phone number
- Social media links

#### 2. Services & Pricing

**File: `src/pages/Services.jsx`**

Update the `serviceCategories` array with your actual services and prices:

```javascript
{
  name: 'Your Service Name',
  price: '£XX'
}
```

#### 3. Gallery Images

**File: `src/pages/Gallery.jsx`**

Replace Unsplash placeholder URLs with your own images:

1. Add your images to the `public` folder
2. Update the `images` array:

```javascript
{
  url: '/your-image.jpg',
  title: 'Image Title',
  category: 'Category'
}
```

#### 4. Team Members

**File: `src/pages/About.jsx`**

Update the `team` array with your staff:

```javascript
{
  name: 'Staff Name',
  role: 'Their Role',
  image: '/path-to-photo.jpg',
  specialty: 'Their Specialty'
}
```

#### 5. Google Maps

**File: `src/pages/Contact.jsx`**

To get your Google Maps embed URL:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address: "122 New North Road, Ilford, IG6 2XJ"
3. Click "Share"
4. Click "Embed a map"
5. Copy the `src` URL from the iframe
6. Replace the iframe `src` in Contact.jsx

#### 6. Social Media Links

Update Instagram and Facebook links in:

- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/pages/Gallery.jsx`

Replace:

```javascript
href = "https://instagram.com";
```

With your actual profile URLs:

```javascript
href = "https://instagram.com/yourprofile";
```

### Design Customization

#### Change Color Scheme

**File: `tailwind.config.js`**

The site uses two main color palettes:

1. **Primary (Pink)**: Used for buttons, links, accents
2. **Gold**: Used for secondary accents

Customize by editing the color values (50-900 scale):

```javascript
primary: {
  500: '#e05974', // Main pink color
  // Adjust other shades...
}
```

#### Update Typography

**File: `src/index.css`**

Change fonts by adding Google Fonts to `index.html` and updating CSS.

---

## 🚀 Deployment

### Option 1: GitHub Pages (Recommended)

#### Step 1: Update Configuration

**File: `package.json`**

Change line 6:

```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/reis-hair-beauty"
```

**File: `vite.config.js`**

The base is already set correctly:

```javascript
base: "/reis-hair-beauty/";
```

#### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click "+" → "New repository"
3. Name: `reis-hair-beauty`
4. Visibility: Public
5. Don't initialize with README
6. Click "Create repository"

#### Step 3: Push Your Code

In your project folder, run:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Link to GitHub (replace YOUR-GITHUB-USERNAME)
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/reis-hair-beauty.git

# Push
git branch -M main
git push -u origin main
```

#### Step 4: Deploy

```bash
npm run deploy
```

This automatically:

- Builds your site
- Creates a `gh-pages` branch
- Pushes the built site to GitHub

#### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" (left sidebar)
4. Under "Source":
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click "Save"

#### Step 6: Visit Your Site

After 2-5 minutes, your site will be live at:

```
https://YOUR-GITHUB-USERNAME.github.io/reis-hair-beauty
```

### Option 2: Netlify

1. Push your code to GitHub (Steps 2-3 above)
2. Go to [Netlify.com](https://www.netlify.com/)
3. Sign up/Login
4. Click "Add new site" → "Import an existing project"
5. Choose "GitHub"
6. Select your `reis-hair-beauty` repository
7. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
8. Click "Deploy site"

Your site will get a free subdomain like: `yoursite.netlify.app`

### Option 3: Vercel

1. Push your code to GitHub (Steps 2-3 above)
2. Go to [Vercel.com](https://vercel.com/)
3. Sign up/Login with GitHub
4. Click "Add New Project"
5. Import your `reis-hair-beauty` repository
6. Vercel auto-detects Vite settings
7. Click "Deploy"

Your site will get a free subdomain like: `yoursite.vercel.app`

---

## 🔧 Maintenance

### Update Content

After making changes:

```bash
# Save your changes
git add .
git commit -m "Updated services/gallery/etc"
git push

# Redeploy
npm run deploy
```

### Update Dependencies

Every few months:

```bash
npm update
```

### Check for Security Issues

```bash
npm audit
npm audit fix
```

---

## 📱 Testing

### Test Locally

```bash
npm run dev
```

Check:

- ✅ All pages load
- ✅ Navigation works
- ✅ Forms work
- ✅ Images load
- ✅ Responsive on mobile (use browser dev tools)

### Build Test

```bash
npm run build
npm run preview
```

Visit http://localhost:4173 to test the production build.

### Browser Testing

Test on:

- Chrome
- Firefox
- Safari (if on Mac)
- Mobile browsers

---

## 🆘 Troubleshooting

### Problem: npm install fails

**Solution:**

```bash
# Clear cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules

# Reinstall
npm install
```

### Problem: Blank page after deployment

**Solutions:**

1. Check `vite.config.js` - base should match repo name
2. Check browser console for errors
3. Verify `homepage` in `package.json` is correct
4. Try clearing browser cache

### Problem: Images not showing

**Solutions:**

1. Check image paths (use `/image.jpg` for public folder)
2. Verify images are in the `public` folder
3. Check browser console for 404 errors

### Problem: Routes not working on refresh

**Solution:**
The `.nojekyll` file should fix this. If not:

1. Ensure `.nojekyll` exists in `public` folder
2. Redeploy: `npm run deploy`

### Problem: Google Maps not loading

**Solutions:**

1. Check the embed URL is correct
2. Ensure you copied the entire iframe `src`
3. Check browser console for errors

---

## 📊 SEO Optimization

The site is already SEO-optimized with:

- ✅ Meta tags in `index.html`
- ✅ Semantic HTML
- ✅ Mobile-friendly design
- ✅ Fast loading with Vite

### Improve SEO Further:

1. **Add Google Analytics**

   - Get tracking ID from Google Analytics
   - Add to `index.html` in `<head>`

2. **Submit to Google Search Console**

   - Verify your site
   - Submit sitemap

3. **Add Schema Markup**

   - Add LocalBusiness schema to contact page

4. **Optimize Images**
   - Compress images before uploading
   - Use WebP format
   - Add alt text

---

## 📞 Support Resources

- **React Docs:** https://react.dev
- **Vite Docs:** https://vitejs.dev
- **TailwindCSS Docs:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion
- **GitHub Pages:** https://pages.github.com

---

## ✅ Launch Checklist

Before going live:

- [ ] Updated all placeholder text
- [ ] Added real business information
- [ ] Updated services and prices
- [ ] Added real gallery images
- [ ] Updated team member photos
- [ ] Configured Google Maps with correct location
- [ ] Added real social media links
- [ ] Updated contact email
- [ ] Tested contact form
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Updated SEO meta tags
- [ ] Tested in different browsers
- [ ] Updated GitHub username in config
- [ ] Deployed successfully
- [ ] GitHub Pages is enabled
- [ ] Verified live site works

---

## 🎉 You're All Set!

Your beautiful, modern website for Reis Hair & Beauty is ready to impress customers and attract new clients.

**Questions?** Email: reishairbeauty@gmail.com

**Good luck with your salon! 💇‍♀️✨**
