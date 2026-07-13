# ResumeCraft AI

ResumeCraft AI is a full-stack MERN application that helps users create, manage, and optimize resumes with AI-powered suggestions and ATS (Applicant Tracking System) scoring. The platform includes user authentication, resume management, a professional dashboard, and a Premium Membership system for advanced features.

---

## 🚀 Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Encryption using bcrypt

### Dashboard
- ATS Score
- Resume Statistics
- Applications Tracker
- Interview Tracker
- Recent Activities
- AI Suggestions
- Premium Membership Card

### Resume Management
- Upload Resume
- Delete Resume
- View Resume
- Download PDF
- Resume History

### AI Features
- ATS Score Analysis
- Resume Improvement Suggestions
- Resume Analytics
- AI Resume Builder *(Premium)*
- AI Cover Letter Generator *(Premium)*

### Premium Features
- Unlimited Resume Uploads
- Premium Resume Templates
- DOCX Export
- Resume Analytics
- Remove Watermark
- Cloud Backup
- Interview Preparation
- Priority Support

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Bootstrap
- Axios
- React Router

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT
- bcrypt

---

## 📂 Project Structure

```
ResumeCraft-AI/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/ResumeCraft-AI.git
```

### Backend

```bash
cd backend

npm install

npm run dev
```

### Frontend

```bash
cd frontend

npm install

npm start
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Authentication

```
POST   /api/auth/register

POST   /api/auth/login
```

### User

```
GET    /api/users/profile

PUT    /api/users/profile/security
```

### Resume

```
POST   /api/resume/upload

GET    /api/resume

DELETE /api/resume/:id
```

### Dashboard

```
GET    /api/dashboard
```

---

## Premium Membership

The application supports two membership plans.

### Free

- Limited Resume Uploads
- Basic ATS Score
- PDF Download

### Premium

- Unlimited Resume Uploads
- AI Resume Builder
- AI Cover Letter Generator
- Premium Templates
- Resume Analytics
- DOCX Export
- Cloud Backup
- Interview Preparation
- Priority Support

---

## Future Enhancements

- Razorpay Integration
- Stripe Integration
- Email Notifications
- Resume Sharing
- Portfolio Generator
- Dark Mode
- AI Chat Assistant
- Job Recommendation System
- Interview Scheduler

---

## Security

- JWT Authentication
- Password Hashing
- Protected Routes
- Input Validation
- MongoDB Injection Protection
- Secure Environment Variables

---

## Author

**Soumya Ghosh**

BCA Student | MERN Stack Developer

---

## License

This project is licensed under the MIT License.
