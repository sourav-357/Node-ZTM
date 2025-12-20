# 🎨 NASA Mission Control - Frontend

Modern React application with a futuristic sci-fi interface for managing space mission launches.

## 📋 Overview

This frontend provides an intuitive user experience for scheduling and managing interstellar space missions. It features real-time data synchronization, smooth animations, and responsive design. Built with React hooks, custom components, and optimized performance.

## ✨ Features

- **Launch Scheduling** - Intuitive form for scheduling new missions
- **Upcoming Launches** - View and manage scheduled launches with abort functionality
- **Launch History** - Browse past missions with success/failure indicators
- **Real-time Updates** - Automatic data refresh after actions
- **Sound Effects** - Immersive audio feedback for user interactions
- **Responsive Design** - Optimized for all screen sizes
- **Performance Optimized** - Memoization and efficient re-renders

## 🛠 Tech Stack

- **React 17** - UI library with hooks
- **React Router** - Client-side routing
- **Arwes** - Sci-fi UI component library
- **React Scripts** - Build tooling and dev server
- **Custom Hooks** - Reusable stateful logic

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn package manager
- Backend API running on `http://localhost:8000`

### Installation

1. **Navigate to client directory**
```bash
cd client
```

2. **Install dependencies**
```bash
npm install
```

### Configuration

**API URL Configuration**

The frontend connects to the backend API. Update if needed:

**File:** `src/hooks/requests.js`
```javascript
const API_URL = 'http://localhost:8000'; // Change if backend runs on different port
```

### Running

**Development mode:**
```bash
npm start
```
Starts development server on `http://localhost:3000` with:
- Hot module replacement
- Fast refresh
- Source maps
- Error overlay

**Production build:**
```bash
npm run build
```
Creates optimized production build in `../server/public` directory.

**Build features:**
- Minified JavaScript and CSS
- Optimized assets
- Tree shaking
- Code splitting

## 📄 Pages

### Launch Page (`/` or `/launch`)

**Purpose:** Schedule new mission launches

**Features:**
- Date picker (min: today, max: 2040)
- Mission name input
- Rocket type input (default: "Explorer IS1")
- Planet selector dropdown
- Form validation
- Loading state during submission

**Form Fields:**
- Launch Date (required)
- Mission Name (required)
- Rocket Type (required, has default)
- Destination Planet (required, from API)

### Upcoming Launches (`/upcoming`)

**Purpose:** View and manage scheduled launches

**Features:**
- Table displaying all upcoming launches
- Abort functionality (✖ button)
- Flight number, date, mission, rocket, destination
- Warning message about aborting

**Actions:**
- Click ✖ to abort a launch
- Automatic refresh after abort

### Launch History (`/history`)

**Purpose:** View past mission launches

**Features:**
- Table displaying all past launches
- Success/failure indicators (color-coded)
- Flight number, date, mission, rocket, customers
- Read-only view

## 🧩 Components

### Header
Navigation component with NASA Mission Control branding, navigation links, and animated transitions.

### Footer
Simple footer with educational disclaimer.

### Centered
Container component that centers content with max-width and responsive margins.

### Clickable
Wrapper component that adds click sound effects to interactive elements.

## 🎣 Custom Hooks

### `usePlanets()`

Fetches and returns habitable planets from the API.

**Usage:**
```javascript
const planets = usePlanets();
```

**Returns:** Array of planet objects
```javascript
[
  { keplerName: "Kepler-442 b" },
  { keplerName: "Kepler-62 f" }
]
```

**Features:**
- Automatic fetching on mount
- Memoized to prevent unnecessary re-renders
- Error handling built-in

### `useLaunches(onSuccessSound, onAbortSound, onFailureSound)`

Manages launches state and provides operations.

**Parameters:**
- `onSuccessSound` - Function to call on successful launch
- `onAbortSound` - Function to call on successful abort
- `onFailureSound` - Function to call on errors

**Returns:**
```javascript
{
  launches,           // Array of all launches
  isPendingLaunch,    // Boolean for loading state
  submitLaunch,       // Function to submit new launch
  abortLaunch         // Function to abort a launch
}
```

**Usage:**
```javascript
const { launches, isPendingLaunch, submitLaunch, abortLaunch } = useLaunches(
  onSuccessSound,
  onAbortSound,
  onFailureSound
);
```

## 🔌 API Integration

### API Functions

Located in `src/hooks/requests.js`:

- `httpGetPlanets()` - GET /planets
- `httpGetLaunches()` - GET /launches
- `httpSubmitLaunch(launch)` - POST /launches
- `httpAbortLaunch(id)` - DELETE /launches/:id

### Error Handling

- Network errors are caught and handled gracefully
- Failed requests show appropriate feedback
- Loading states prevent duplicate submissions

## 🎨 Styling

### Arwes UI Library

The app uses Arwes for a consistent sci-fi theme:
- Space-themed backgrounds
- Animated borders and frames
- Futuristic typography
- Smooth transitions

### Custom Styles

CSS-in-JS using Arwes's `withStyles` HOC:
- Component-level styles
- Responsive breakpoints
- Theme integration

### Theme Configuration

Defined in `src/settings.js`:
- Color scheme
- Typography
- Responsive breakpoints
- Resource paths

## 🔊 Sound Effects

Sound effects enhance user experience:
- **Click** - Button and link interactions
- **Success** - Successful launch submission
- **Abort** - Launch abortion
- **Warning** - Error states

**Configuration:** `src/settings.js`

**Note:** Sounds require user interaction due to browser autoplay policies.

## ⚡ Performance Optimizations

### Memoization
- `useMemo` for expensive computations (table rows, dropdown options)
- `useCallback` for function references
- Prevents unnecessary re-renders

### Efficient Updates
- State updates only when needed
- Proper dependency arrays in hooks
- Optimized re-render cycles

## 📁 Project Structure

```
client/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── index.js                # React entry point
│   ├── App.js                   # Root component with providers
│   ├── settings.js              # Theme, sounds, and resources config
│   ├── components/
│   │   ├── Header.js            # Navigation header with links
│   │   ├── Footer.js            # Footer with disclaimer
│   │   ├── Centered.js          # Centered container component
│   │   └── Clickable.js         # Clickable wrapper with sound
│   ├── pages/
│   │   ├── AppLayout.js         # Main layout with routing
│   │   ├── Launch.js            # Launch scheduling form
│   │   ├── Upcoming.js         # Upcoming launches table
│   │   └── History.js           # Launch history table
│   └── hooks/
│       ├── usePlanets.js        # Hook to fetch planets
│       ├── useLaunches.js       # Hook to manage launches
│       └── requests.js          # API request functions
└── package.json
```

## 🐛 Troubleshooting

### API Connection Issues
**Problem:** Frontend can't connect to backend

**Solutions:**
- Verify backend is running on port 8000
- Check CORS settings in backend
- Verify API_URL in `requests.js`
- Check browser console for errors

### Build Errors
**Problem:** `npm run build` fails

**Solutions:**
- Clear `node_modules` and reinstall
- Check for syntax errors
- Verify all dependencies are installed
- Check Node.js version compatibility

### Styling Issues
**Problem:** Styles not applying correctly

**Solutions:**
- Clear browser cache
- Verify Arwes is properly installed
- Check theme configuration
- Inspect element for CSS conflicts

## 📱 Responsive Design

The app is responsive with breakpoints:
- **Small:** < 600px (mobile)
- **Medium:** 600px - 800px (tablet)
- **Large:** > 800px (desktop)

Features adapt to screen size:
- Navigation menu adjusts
- Tables become scrollable
- Layout adapts to viewport

## 📝 Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests (if configured)
- `npm run eject` - Eject from Create React App (irreversible)

## 📚 Dependencies

**Production:** react, react-dom, react-router-dom, arwes  
**Development:** react-scripts, cross-env

## 🎓 Key Learnings

This frontend demonstrates:
- React hooks patterns
- Custom hooks creation
- Form handling and validation
- API integration
- State management
- Performance optimization
- Component composition
- Responsive design

---

**Built with modern React patterns and best practices**
