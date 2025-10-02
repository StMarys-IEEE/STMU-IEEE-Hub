# 🚀 GitHub Pages Deployment Guide

## Prerequisites

✅ **Already Configured:**
- `gh-pages` package installed
- `homepage` field added to package.json
- `predeploy` and `deploy` scripts configured
- Vite config set with correct base path

## 📋 Deployment Steps

### 1. **Build and Deploy**
```bash
# Navigate to website directory
cd website

# Deploy to GitHub Pages (runs build automatically)
npm run deploy
```

### 2. **Configure GitHub Pages**

After running `npm run deploy`, go to your GitHub repository:

1. **Navigate to Settings**:
   - Go to `https://github.com/StMarys-IEEE/STMU-IEEE-Hub`
   - Click **Settings** tab

2. **Configure Pages**:
   - Scroll down to **Pages** section (left sidebar)
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages`
   - **Folder**: Select `/ (root)`
   - Click **Save**

3. **Wait for Deployment**:
   - GitHub will show a green checkmark when ready
   - Usually takes 2-5 minutes

### 3. **Access Your Live Site**

🌐 **Your website will be live at:**
```
https://StMarys-IEEE.github.io/STMU-IEEE-Hub
```

## 🔄 Future Updates

To update the website after making changes:

```bash
# 1. Make your code changes
# 2. Test locally
npm run dev

# 3. Deploy updates
npm run deploy
```

The `predeploy` script will automatically:
- Build the project (`npm run build`)
- Push the `dist/` folder to `gh-pages` branch
- Trigger GitHub Pages to update

## 🛠️ Technical Details

### Package.json Configuration:
```json
{
  "homepage": "https://StMarys-IEEE.github.io/STMU-IEEE-Hub",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Vite Configuration:
```typescript
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/STMU-IEEE-Hub/' : '/',
  build: {
    outDir: 'dist',
  }
})
```

## 🚨 Troubleshooting

### Common Issues:

1. **404 Error on Refresh**:
   - GitHub Pages doesn't support client-side routing by default
   - Users should bookmark the main URL, not direct page URLs

2. **Assets Not Loading**:
   - Ensure all asset paths start with `/STMU-IEEE-Hub/` in production
   - Check browser console for 404 errors

3. **Changes Not Showing**:
   - Clear browser cache (Ctrl+F5)
   - Check GitHub Actions tab for build status
   - Wait 5-10 minutes for CDN propagation

### Manual Deployment Check:
```bash
# Check if gh-pages branch exists
git branch -a

# View deployment history
npm run deploy -- --verbose
```

## ✅ Success Checklist

After deployment, verify:

- [ ] Site loads at `https://StMarys-IEEE.github.io/STMU-IEEE-Hub`
- [ ] All pages navigate correctly
- [ ] Images and logos display properly
- [ ] Dark/light theme toggle works
- [ ] Projects load from GitHub API
- [ ] Member profiles display correctly
- [ ] Contact forms and links work

## 🔗 Quick Links

- **Live Site**: https://StMarys-IEEE.github.io/STMU-IEEE-Hub
- **Repository**: https://github.com/StMarys-IEEE/STMU-IEEE-Hub
- **GitHub Pages Settings**: https://github.com/StMarys-IEEE/STMU-IEEE-Hub/settings/pages

---

**Need help?** Contact the current webmaster or create an issue in the repository.
