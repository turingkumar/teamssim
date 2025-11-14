# Teams Simulator - AssistBot & Luna

A Microsoft Teams-style chat simulator with two specialized bots:
- **AssistBot** - General virtual assistant for project management, tasks, calendar, and documents
- **Luna** - R&D formulation specialist for lab work, formulas, ingredients, and compliance

## 🚀 Quick Start

### 1. Project Setup

Create your project directory and set up the file structure:

```bash
mkdir teams-simulator
cd teams-simulator
```

### 2. File Structure

Organize your files like this:

```
teams-simulator/
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── TeamsSimulator.jsx
    └── index.css
```

### 3. Place the Files

From your downloads, place files as follows:

- Root directory files (no prefix): `package.json`, `vercel.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `.gitignore`, `index.html`
- Create a `src/` folder
- Files with `src-` prefix go in the `src/` folder (remove the `src-` prefix):
  - `src-main.jsx` → `src/main.jsx`
  - `src-App.jsx` → `src/App.jsx`
  - `src-TeamsSimulator.jsx` → `src/TeamsSimulator.jsx`
  - `src-index.css` → `src/index.css`

### 4. Install Dependencies

```bash
npm install
```

### 5. Run Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to see your app!

## 📦 Deploy to Vercel

### Method 1: Using Git + Vercel Dashboard (Recommended)

1. **Initialize Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/teams-simulator.git
   git push -u origin main
   ```

3. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! 🎉

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🤖 Using the Bots

### AssistBot Features:
- 📊 Project status and management
- ✅ Task tracking and to-dos
- 📅 Calendar and meeting scheduling
- 📄 Document search
- 💼 Team updates

**Try asking:**
- "What's my project status?"
- "Show me my tasks"
- "What meetings do I have?"

### Luna (R&D Formulator) Features:
- 🧪 Formula search and retrieval
- 📋 Ingredient database and compatibility
- ⚖️ Regulatory compliance checking
- 🔬 Stability testing data
- 📊 Batch records and scaling
- 📚 Literature and research search
- 🔧 Lab equipment availability

**Try asking:**
- "Search for moisturizer formulas"
- "Tell me about hyaluronic acid"
- "Check regulatory compliance"
- "Show stability test results"
- "Is the HPLC available?"

## 🎨 Customization

Edit `src/TeamsSimulator.jsx` to:
- Add more bots
- Customize bot responses
- Add new skills
- Modify the UI theme
- Change bot colors and icons

## 🛠️ Technologies

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vercel** - Hosting

## 📝 License

MIT

## 🐛 Troubleshooting

**Build fails on Vercel?**
- Check that all dependencies are in `package.json`
- Verify `vercel.json` is in the root directory
- Ensure build command is `npm run build`

**Styling not working?**
- Make sure Tailwind is configured correctly
- Check that `@tailwind` directives are in `src/index.css`

**404 errors?**
- Confirm `vercel.json` has the rewrite rules
- Check that output directory is set to `dist`

---

Made with ❤️ for R&D teams and productivity enthusiasts
