@echo off
title Foresight Associates - Deploy to Vercel
echo ====================================================
echo  FORESIGHT ASSOCIATES - VERCEL ONE-CLICK DEPLOY
echo ====================================================
echo.
echo Step 1: Building unified CSS bundle (assets/css/style.css)...
node build-css.js
echo.
echo Step 2: Deploying to Vercel Production...
echo (If this is your first time, Vercel will prompt you to log in in your browser)
echo.
npx -y vercel --prod
echo.
echo ====================================================
echo  DEPLOYMENT COMPLETE!
echo  Your website is now live worldwide on Vercel with all CSS styles loaded!
echo ====================================================
pause
