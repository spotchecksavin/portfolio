# GitHub Pages Deployment Guide

Your portfolio is now configured for automatic deployment to GitHub Pages!

## 📋 Setup Instructions

### Step 1: Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - Leave other settings as default

### Step 3: Deploy
Choose one of these methods:

#### **Option A: Automatic Deployment (Recommended)**
The GitHub Actions workflow will automatically:
- Build your project
- Deploy to GitHub Pages
- Whenever you push to `main` or `master` branch

Simply push your changes:
```bash
git push origin main
```

#### **Option B: Manual Deployment
```bash
npm run deploy
```

This uses gh-pages to build and publish to the `gh-pages` branch.

## 🌐 Access Your Site
Once deployed, your portfolio will be available at:
```
https://spotchecksavin.github.io/portfolio/
```

## 📝 What Was Configured

✅ **vite.config.ts** - Added `/portfolio/` base path
✅ **package.json** - Added homepage URL and deploy script
✅ **.github/workflows/deploy.yml** - GitHub Actions CI/CD pipeline
✅ **gh-pages dependency** - For automated deployments

## 🔄 Workflow Details

The GitHub Actions workflow:
- Triggers on push to `main` or `master` branch
- Installs dependencies with `npm ci`
- Builds the project with `npm run build`
- Deploys to GitHub Pages automatically
- Takes ~2-3 minutes to complete

## 📊 Monitor Deployment

1. Go to your repository
2. Click **Actions** tab
3. See all deployment runs and their status
4. Click on a run to see detailed logs

## ⚙️ Troubleshooting

**Issue: Workflow fails to build**
- Check the Actions tab for error logs
- Ensure package.json has all required dependencies

**Issue: Site shows 404 errors**
- Verify the base path in vite.config.ts is `/portfolio/`
- Clear browser cache
- Wait 5 minutes for GitHub Pages to update

**Issue: Styles not loading**
- Check that the base path is correctly set
- Clear the `dist` folder: `rm -rf dist`
- Rebuild: `npm run build`

## 🚀 Next Steps

1. Push your changes to main/master branch
2. Check the Actions tab for deployment status
3. Visit `https://spotchecksavin.github.io/portfolio/` in your browser

Your portfolio is now live on GitHub Pages! 🎉
