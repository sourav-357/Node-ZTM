# 🚀 NASA Mission Control API - Backend

RESTful API server built with Node.js and Express, featuring MongoDB integration and CSV data processing.

## 📋 Overview

This backend API provides endpoints for managing space mission launches. It handles data persistence, business logic, and serves both API endpoints and static frontend files. Built with scalability and maintainability in mind.

## ✨ Features

- RESTful API design following industry best practices
- MongoDB integration with Mongoose ODM
- CSV data processing with streaming parser
- Auto-incrementing flight numbers
- Input validation and comprehensive error handling
- CORS configuration for cross-origin requests
- Static file serving for production builds

## 🛠 Tech Stack

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling
- **csv-parse** - Efficient CSV file parsing
- **cors** - Cross-origin resource sharing middleware

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB Atlas account or local MongoDB instance
- npm or yarn package manager

### Installation

1. **Navigate to server directory**
```bash
cd server
```

2. **Install dependencies**
```bash
npm install
```

### Configuration

#### Environment Variables

Create a `.env` file (optional) or set environment variables:

```env
PORT=8000
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/database
NODE_ENV=development
```

**Default values:**
- `PORT`: 8000
- `MONGO_URL`: Uses hardcoded connection string in `server.js`

#### MongoDB Setup

1. **Create MongoDB Atlas cluster** (recommended) or use local MongoDB
2. **Get connection string** from MongoDB Atlas dashboard
3. **Update connection string** in `src/server.js` or set `MONGO_URL` environment variable

**Connection string format:**
```
mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```

### Running

**Development mode (with auto-reload):**
```bash
npm run watch
```
Uses nodemon to automatically restart on file changes.

**Production mode:**
```bash
npm start
```
Starts the server on the configured port (default: 8000).

## 📡 API Endpoints

### Base URL
```
http://localhost:8000
```

### Planets Endpoints

#### `GET /planets`
Retrieve all habitable planets.

**Response:** `200 OK`
```json
[
  {
    "keplerName": "Kepler-442 b"
  },
  {
    "keplerName": "Kepler-62 f"
  }
]
```

### Launches Endpoints

#### `GET /launches`
Retrieve all launches (upcoming and past), sorted by flight number.

**Response:** `200 OK`
```json
[
  {
    "flightNumber": 100,
    "launchDate": "2030-12-27T00:00:00.000Z",
    "mission": "Kepler Exploration X",
    "rocket": "Explorer IS1",
    "target": "Kepler-442 b",
    "customers": ["Zero to Mastery", "NASA"],
    "upcoming": true,
    "success": true
  }
]
```

#### `POST /launches`
Create a new launch.

**Request Body:**
```json
{
  "mission": "Mission Name",
  "rocket": "Rocket Type",
  "launchDate": "2024-12-31",
  "target": "Kepler-442 b"
}
```

**Response:** `201 Created`
```json
{
  "flightNumber": 101,
  "launchDate": "2024-12-31T00:00:00.000Z",
  "mission": "Mission Name",
  "rocket": "Rocket Type",
  "target": "Kepler-442 b",
  "customers": ["Zero to Mastery", "NASA"],
  "upcoming": true,
  "success": true
}
```

**Error Responses:**
- `400 Bad Request` - Missing required fields or invalid date
- `500 Internal Server Error` - Database or server error

#### `DELETE /launches/:id`
Abort a launch by flight number.

**Parameters:**
- `id` (number) - Flight number of the launch to abort

**Response:** `200 OK`
```json
{
  "ok": true
}
```

**Error Responses:**
- `404 Not Found` - Launch doesn't exist
- `400 Bad Request` - Launch couldn't be aborted

## 🗄️ Database Models

### Planet Schema
```javascript
{
  keplerName: {
    type: String,
    required: true
  }
}
```

### Launch Schema
```javascript
{
  flightNumber: {
    type: Number,
    required: true
  },
  launchDate: {
    type: Date,
    required: true
  },
  mission: {
    type: String,
    required: true
  },
  rocket: {
    type: String,
    required: true
  },
  target: {
    type: String,
    required: true
  },
  customers: [String],
  upcoming: {
    type: Boolean,
    required: true,
    default: true
  },
  success: {
    type: Boolean,
    required: true,
    default: true
  }
}
```

## 📁 Project Structure

```
server/
├── src/
│   ├── server.js              # HTTP server setup & MongoDB connection
│   ├── app.js                 # Express app configuration & middleware
│   ├── models/
│   │   ├── planets.model.js   # Planets business logic & CSV loading
│   │   ├── planets.mongo.js   # Planets MongoDB schema
│   │   ├── launches.model.js # Launches business logic
│   │   └── launches.mongo.js # Launches MongoDB schema
│   └── routes/
│       ├── planets/
│       │   ├── planets.router.js      # Planets route definitions
│       │   └── planets.controller.js # Planets request handlers
│       └── launches/
│           ├── launches.router.js    # Launches route definitions
│           └── launches.controller.js # Launches request handlers
├── data/
│   └── kepler_data.csv        # NASA Kepler exoplanet dataset
├── public/                    # Built React frontend (generated)
└── package.json
```

## 🔄 Data Flow

### Server Startup Sequence
1. **Connect to MongoDB** - Establishes database connection
2. **Load Planets Data** - Parses CSV and saves habitable planets (only if DB is empty)
3. **Start HTTP Server** - Begins listening on configured port

### CSV Processing
1. **Check Database** - Verifies if planets already exist
2. **Stream CSV File** - Reads file in chunks for memory efficiency
3. **Filter Habitable Planets** - Applies scientific criteria
4. **Upsert to Database** - Saves planets (prevents duplicates)

### Launch Creation Flow
1. **Validate Input** - Checks required fields and date validity
2. **Get Latest Flight Number** - Queries database for highest number
3. **Increment Flight Number** - Assigns next sequential number
4. **Set Default Values** - Adds customers, upcoming, success flags
5. **Save to Database** - Persists launch with upsert operation

## 🧪 Testing

### Manual Testing with cURL

**Get all planets:**
```bash
curl http://localhost:8000/planets
```

**Get all launches:**
```bash
curl http://localhost:8000/launches
```

**Create a launch:**
```bash
curl -X POST http://localhost:8000/launches \
  -H "Content-Type: application/json" \
  -d '{
    "mission": "Test Mission",
    "rocket": "Test Rocket",
    "launchDate": "2024-12-31",
    "target": "Kepler-442 b"
  }'
```

**Abort a launch:**
```bash
curl -X DELETE http://localhost:8000/launches/100
```

## 🐛 Troubleshooting

### MongoDB Connection Issues
**Problem:** `MongoDB connection error`

**Solutions:**
- Verify connection string format
- Check network connectivity
- Ensure MongoDB Atlas IP whitelist includes your IP
- Verify credentials are correct

### Port Already in Use
**Problem:** `EADDRINUSE: address already in use`

**Solutions:**
- Change PORT in environment variable
- Kill process: `lsof -ti:8000 | xargs kill`
- Use different port

### CSV Not Loading
**Problem:** Planets not appearing in database

**Solutions:**
- Check if CSV file exists at `server/data/kepler_data.csv`
- Verify file permissions
- Check console for error messages
- Ensure database is empty (or clear planets collection)

## 📊 Performance Considerations

- **Streaming CSV Parser** - Handles large files efficiently
- **Database Indexes** - Consider adding indexes for frequently queried fields
- **Connection Pooling** - Mongoose handles connection pooling automatically
- **Query Optimization** - Using `.select()` to limit returned fields

## 📝 Scripts

- `npm start` - Start production server
- `npm run watch` - Start development server with auto-reload
- `npm test` - Run tests (if configured)

## 📚 Dependencies

**Production:** express, mongoose, cors, csv-parse  
**Development:** nodemon, jest

## 🔮 Future Enhancements

- [ ] Add pagination for launches endpoint
- [ ] Implement caching layer (Redis)
- [ ] Add API rate limiting
- [ ] Implement authentication/authorization
- [ ] Add request logging and monitoring
- [ ] Write unit and integration tests
- [ ] Add API documentation with Swagger

---

**Built with production best practices**
