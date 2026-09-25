import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory data store for growth assessment bookings
const assessmentBookings = [];

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'LadderUp Business Growth Agency API Server',
    timestamp: new Date().toISOString()
  });
});

// API Get Services Catalog
app.get('/api/services', (req, res) => {
  res.json([
    {
      id: '01',
      title: 'GROWTH CONSULTING & STRATEGY',
      description: "WHETHER YOU'RE LOOKING TO EXPAND MARKET SHARE OR SCALE EXISTING OPERATIONS, WE BUILD A CLEAR GROWTH PLAN THAT ALIGNS WITH YOUR REVENUE GOALS.",
      hashtags: '#GROWTHSTRATEGY #REVENUESCALING'
    },
    {
      id: '02',
      title: 'MARKETING & SALES AUTOMATION',
      description: "WE DESIGN AND DEPLOY INTEGRATED MARKETING AND SALES PIPELINES THAT TURN LEADS INTO LOYAL CLIENTS — STREAMLINING ACQUISITION AND RETENTION.",
      hashtags: '#SCALEMARKETING #LEADGENERATION #AUTOMATEDSALES'
    },
    {
      id: '03',
      title: 'CUSTOM SYSTEMS & TECH INTEGRATIONS',
      description: "NEED SOMETHING TAILORED TO YOUR OPERATIONS? WE DEVELOP LIGHTWEIGHT TECH STACKS AND SYSTEM INTEGRATIONS TAILORED TO YOUR SPECIFIC WORKFLOWS.",
      hashtags: '#CUSTOMSYSTEMS #TECHINTEGRATION'
    },
    {
      id: '04',
      title: 'TEAM SCALING & LEADERSHIP ONBOARDING',
      description: "SUSTAINABLE GROWTH ONLY WORKS WHEN YOUR TEAM CAN EXECUTE. WE PROVIDE STRUCTURAL ONBOARDING, PLAYBOOKS, AND ONGOING SUPPORT TO FIT YOUR EXPANSION.",
      hashtags: '#TEAMLEADERSHIP #EXECUTIONPLAYBOOK'
    }
  ]);
});

// API Create Assessment Booking
app.post('/api/assessments', (req, res) => {
  const { name, email, company, service, date, time } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required fields.' });
  }

  const newBooking = {
    id: `growth_booking_${Date.now()}`,
    name,
    email,
    company: company || 'N/A',
    service: service || 'General Growth Clarity Call',
    date: date || '2026-09-15',
    time: time || '10:00 AM EST',
    createdAt: new Date().toISOString()
  };

  assessmentBookings.push(newBooking);
  console.log('New LadderUp Growth Assessment Booked:', newBooking);

  res.status(201).json({
    message: 'Growth assessment successfully booked!',
    booking: newBooking
  });
});

// API Get All Bookings (Admin)
app.get('/api/assessments', (req, res) => {
  res.json({
    total: assessmentBookings.length,
    bookings: assessmentBookings
  });
});

app.listen(PORT, () => {
  console.log(`🚀 LadderUp Growth Agency Backend API running on http://localhost:${PORT}`);
});
