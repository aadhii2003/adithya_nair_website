# Portfolio Setup Guide

## ✅ Issues Fixed

1. **API Key Error** - Fixed environment variable access for Vite (changed from `process.env` to `import.meta.env`)
2. **Favicon 404** - Added SVG favicon with your initial "A"
3. **ChatBot Crash** - Temporarily disabled until API key is configured
4. **Tailwind CDN Warning** - Removed CDN, now using proper Tailwind CSS installation

## 🚀 Quick Start

### Step 1: Get Your Gemini API Key

1. Visit: **https://aistudio.google.com/app/apikey**
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the generated API key (starts with `AIzaSy...`)

### Step 2: Configure the API Key

1. Open the `.env.local` file in your project root
2. Replace `PLACEHOLDER_API_KEY` with your actual API key:
   ```env
   VITE_GEMINI_API_KEY=AIzaSy...your_actual_key_here
   ```
3. **Save the file**

### Step 3: Enable the ChatBot

1. Open `App.tsx`
2. Find lines 24-25 and uncomment the ChatBot:
   
   **Change from:**
   ```tsx
   {/* ChatBot temporarily disabled - Add your Gemini API key to .env file and uncomment */}
   {/* <ChatBot /> */}
   ```
   
   **Change to:**
   ```tsx
   <ChatBot />
   ```

### Step 4: Restart the Development Server

**IMPORTANT:** After adding the API key, you MUST restart your dev server:

```bash
# Stop the current server (press Ctrl+C in the terminal)
# Then restart:
npm run dev
```

## 🎉 You're Done!

Your portfolio should now be running without errors:
- ✅ No Tailwind CDN warning
- ✅ No API key error
- ✅ No favicon 404
- ✅ ChatBot working (after you add the API key)

## 📝 Notes

- The `.env.local` file is already in `.gitignore`, so your API key won't be committed to Git
- The `@tailwind` CSS warnings in your IDE are normal - they're PostCSS directives
- For production deployment, make sure to set the `VITE_GEMINI_API_KEY` environment variable in your hosting platform

## 🐛 Troubleshooting

**Still seeing blank screen?**
- Check browser console (F12) for errors
- Make sure you restarted the dev server after adding the API key

**ChatBot not responding?**
- Verify the API key is correct in `.env.local`
- Check that the variable name is exactly `VITE_GEMINI_API_KEY`
- Ensure you uncommented the `<ChatBot />` line in `App.tsx`

**Changes not reflecting?**
- Always restart the dev server after changing `.env` files
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

