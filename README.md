# RISE - Intentional Growth Platform

**Build the identity you want — one intentional day at a time.**

RISE is a comprehensive habit tracking and goal achievement platform that combines daily habit logging, identity-based goal setting, AI-powered roadmaps, and social accountability to help users transform their vision into reality.

## 🌟 Core Concept

The philosophy behind RISE is simple yet powerful:

- Nothing great happens instantly - everything adds up over time
- We become what we repeatedly do
- Daily habits compound into our identity
- With intentional design, we can guarantee our vision

## 🎯 Key Features

### 1. **Daily Habits**

- Simple tick-style logging for daily habits (gym, reading, development, affirmations, etc.)
- Time-bound discipline (cannot log after midnight)
- Streak tracking and consistency metrics
- Morning-focused execution

### 2. **Identity & Goals**

- Identity-based goal setting inspired by Atomic Habits
- Short and long-term goal tracking
- Habit-to-goal mapping
- Progress milestones and checkpoints
- Transform from "I want to be" to "I am"

### 3. **AI-Powered Roadmaps**

- Custom roadmaps for multiple goals simultaneously
- Adaptive daily task generation
- Intelligent sequencing and prioritization
- Progress predictions and outcome forecasting
- Plans that evolve as you evolve

### 4. **Social Accountability**

- Friend networks for like-minded individuals
- Accountability groups focused on specific goals
- Progress sharing and collective motivation
- Community-driven growth

### 5. **AI Intelligence & Analytics**

- Predictive analytics for goal achievement
- Energy and productivity pattern recognition
- Personalized optimization suggestions
- Mathematical representation of progress
- Trend analysis and improvement recommendations

## 🚀 Future Vision

RISE aims to solve two fundamental problems:

1. **Lack of Roadmap**: Clear, personalized paths to achieve any goal
2. **Lack of Mentorship**: AI-matched mentorship connecting people with questions to those who've walked the path

## 🛠 Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Space Grotesk

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API base URL
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🔒 Security Features

- Email validation and sanitization
- Input length restrictions
- Request timeout protection (10 seconds)
- XSS prevention through proper escaping
- CORS-ready API integration
- Secure form handling with disabled states

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with nav/footer
│   ├── globals.css       # Global styles
│   ├── Navbar.tsx        # Navigation component
│   └── Footer.tsx        # Footer component
└── lib/
    ├── api/
    │   └── waitlist.ts   # Waitlist API integration
    └── config.ts         # App configuration
```

## 🎨 Landing Page Sections

1. **Hero** - Eye-catching headline with waitlist signup
2. **Philosophy** - Core concept explanation
3. **Three Pillars** - Habits, Goals, and AI features
4. **How It Works** - 4-step process
5. **Social Accountability** - Community features showcase
6. **AI Intelligence** - Smart analytics and insights
7. **Identity Transformation** - Track who you're becoming
8. **Future Vision** - Mentorship and community wisdom
9. **Differentiators** - What makes RISE unique
10. **Data Analytics** - Progress tracking and insights
11. **Final CTA** - Join the movement

## 🌐 Environment Variables

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

## 📝 API Integration

The frontend expects a backend API with the following endpoint:

```
POST /api/waitlist
Content-Type: application/json

{
  "email": "user@example.com"
}
```

## 🎯 Design Philosophy

- **Glass Morphism**: Modern frosted glass UI elements
- **Dark Theme**: Premium dark background with purple accents
- **Smooth Animations**: Framer Motion for engaging transitions
- **Responsive**: Mobile-first design approach
- **Accessibility**: Semantic HTML and proper ARIA labels

## 📊 Performance

- Static generation for optimal performance
- Optimized images with proper sizing
- Code splitting and lazy loading
- Fast build times with Turbopack

## 🤝 Contributing

This is a private project currently in development. For questions or feedback, please contact the team.

## 📄 License

All rights reserved © 2026 RISE

---

**Built with intention. Grow with purpose.**
