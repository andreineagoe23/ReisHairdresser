# Deployment Guide for Reis Hair & Beauty Website

## Quick Deploy to GitHub Pages

### Prerequisites

- Node.js (v16 or higher)
- npm
- Git
- GitHub account

### Step-by-Step Instructions

#### 1. Prepare Your Repository

First, update the `homepage` field in `package.json`:

```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/reis-hair-beauty"
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Test Locally

Before deploying, test your site locally:

```bash
npm run dev
```

Visit `http://localhost:5173` to verify everything works.

#### 4. Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `reis-hair-beauty`
5. Choose "Public"
6. Don't initialize with README (we already have one)
7. Click "Create repository"

#### 5. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Reis Hair & Beauty website"

# Add remote (replace YOUR-GITHUB-USERNAME)
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/reis-hair-beauty.git

# Push to main branch
git branch -M main
git push -u origin main
```

#### 6. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:

- Build your production site
- Create/update the `gh-pages` branch
- Push the built files to GitHub Pages

#### 7. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" in the left sidebar
4. Under "Source":
   - Branch: select `gh-pages`
   - Folder: select `/ (root)`
5. Click "Save"

#### 8. Access Your Live Site

Your site will be available at:

```
https://YOUR-GITHUB-USERNAME.github.io/reis-hair-beauty
```

It may take 2-5 minutes for the site to be live after the first deployment.

---

## Update and Redeploy

Whenever you make changes:

```bash
# Make your changes
# ...

# Commit changes
git add .
git commit -m "Description of changes"
git push

# Deploy updated version
npm run deploy
```

---

## Custom Domain (Optional)

To use a custom domain like `www.reishairbeauty.com`:

### 1. Update package.json

Change the homepage:

```json
"homepage": "https://www.reishairbeauty.com"
```

### 2. Add CNAME file

Create `public/CNAME` with your domain:

```
www.reishairbeauty.com
```

### 3. Configure DNS

Add these DNS records at your domain registrar:

**For apex domain (reishairbeauty.com):**

```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**

```
Type: CNAME
Name: www
Value: YOUR-GITHUB-USERNAME.github.io
```

### 4. Enable HTTPS in GitHub Settings

1. Go to repository Settings → Pages
2. Check "Enforce HTTPS"

DNS changes can take 24-48 hours to propagate.

---

## Alternative Deployment Options

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

---

## Troubleshooting

### Issue: Blank page after deployment

**Solution:** Check that `base` in `vite.config.js` matches your repo name:

```js
base: "/reis-hair-beauty/";
```

### Issue: Routes not working (404 on refresh)

**Solution:** The `.nojekyll` file should prevent this. If it persists, add a `404.html` that redirects to `index.html`.

### Issue: Deployment failed

**Solutions:**

- Make sure you have committed all changes
- Check that `gh-pages` package is installed
- Verify your GitHub token/permissions
- Try: `npm run build` locally first to check for errors

### Issue: Images not loading

**Solution:** Make sure image paths are correct and images are in the `public` folder or properly imported in components.

---

## Support

For deployment issues:

- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Check [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- Review build logs in your terminal

For site issues:

- Check browser console for errors
- Test in different browsers
- Verify all dependencies are installed

---

## Post-Deployment Checklist

✅ Site loads correctly at GitHub Pages URL  
✅ All pages are accessible (Home, Services, Gallery, About, Contact)  
✅ Navigation works on all pages  
✅ Contact form opens email client  
✅ Google Maps loads correctly  
✅ Social media links work  
✅ Mobile responsive design works  
✅ Images load properly  
✅ No console errors

---

**Need help?** Contact: reishairbeauty@gmail.com
