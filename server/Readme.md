# Backend Server Documentation

## Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Bcrypt for password hashing
- Google OAuth Integration

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Environment Variables
Create a `.env` file with:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
```

3. Start the server:
```bash
# Development mode
npm start

# Production mode
npm start
```

## License
MIT License
