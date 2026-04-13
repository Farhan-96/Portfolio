/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import askAiChatbotScreenshot from "../assets/ask-ai-chatbot.png";
import profileNestScreenshot from "../assets/profilenest.png";
import calAiAppScreenshot from "../assets/cal-ai-app.png";
import proteinTrackerScreenshot from "../assets/protein-tracker.png";
import loanCalculatorScreenshot from "../assets/loan-calculator.png";
import nextAfricanGenerationScreenshot from "../assets/next-african-generation.png";
import notigiftScreenshot from "../assets/notigift.png";
import trainifyScreenshot from "../assets/trainify.png";
import talyAppScreenshot from "../assets/taly-app.png";
import statisticsMathHelperScreenshot from "../assets/statistics-math-helper.png";
import noteGenieScreenshot from "../assets/note-genie.png";

export type ProjectEntry = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  screenshot?: string;
};

export const featuredProjects: ProjectEntry[] = [
  {
    title: "Ask-AI ChatBot",
    description:
      "AI-powered chatbot with authentication, image & link Q&A, OTP, calendar, and IAP integration.",
    tags: ["React Native", "AI Integration", "Node.js", "IAP"],
    link: "https://apps.apple.com/us/app/ai-chatbot-ai-writer-groo/id6748308805",
    screenshot: askAiChatbotScreenshot,
  },
  {
    title: "ProfileNest",
    description:
      "Cross-platform application featuring home screen widgets for both iOS and Android platforms.",
    tags: ["React Native", "iOS Widgets", "Android Widgets"],
    link: "https://apps.apple.com/us/app/profilenest-business-cards/id6743096135",
    screenshot: profileNestScreenshot,
  },
  {
    title: "Cal Ai App",
    description:
      "Calorie and health tracking mobile app with AI-assisted insights and personalized recommendations.",
    tags: ["React Native", "AI Integration", "HealthTech"],
    link: "https://apps.apple.com/us/app/cal-ai-app-calorie-tracker/id6757143072",
    screenshot: calAiAppScreenshot,
  },
  {
    title: "Protein Tracker",
    description:
      "Nutrition-focused mobile app for tracking protein intake and daily macro targets.",
    tags: ["React Native", "Health Tracking", "Analytics"],
    link: "https://apps.apple.com/us/app/protein-tracker-ai-scanner/id6758942494",
    screenshot: proteinTrackerScreenshot,
  },
  {
    title: "Loan Calculator",
    description:
      "Financial utility app for instant loan calculations, repayment planning, and monthly schedule insights.",
    tags: ["React Native", "FinTech", "Calculator"],
    link: "https://apps.apple.com/us/app/loan-calculator-emi-mortgage/id6758389503",
    screenshot: loanCalculatorScreenshot,
  },
  {
    title: "Next African Generation",
    description:
      "Community-driven mobile platform built for social impact, engagement, and educational growth.",
    tags: ["React Native", "Community", "Mobile App"],
    link: "https://apps.apple.com/us/app/next-african-generation/id6742995337",
    screenshot: nextAfricanGenerationScreenshot,
  },
  {
    title: "Notigift App",
    description:
      "Custom UI components, notifications, OTP, and In-App Purchases implementation.",
    tags: ["React Native", "Custom UI", "Push Notifications"],
    screenshot: notigiftScreenshot,
  },
  {
    title: "Kindraise App (Backend)",
    description:
      "Serverless backend architecture deployed using AWS Lambda and Docker for scalability.",
    tags: ["Node.js", "AWS Lambda", "Docker", "Serverless"],
  },
  {
    title: "DAF: Replica For Stuttering",
    description: "iOS-based FYP application designed to support speech fluency for stuttering therapy.",
    tags: ["iOS", "Speech Assistance", "FYP"],
  },
  {
    title: "Trainify Inc",
    description: "Fitness and training app focused on structured workout plans and user progress.",
    tags: ["React Native", "Fitness", "Mobile App"],
    screenshot: trainifyScreenshot,
  },
  {
    title: "Digital Quran",
    description: "Islamic mobile app offering digital Quran reading experience and quick navigation.",
    tags: ["React Native", "Islamic App", "Mobile App"],
  },
  {
    title: "Digital Tasbeeh",
    description: "Simple and accessible digital tasbeeh counter app for daily use.",
    tags: ["React Native", "Utility App", "Islamic App"],
  },
  {
    title: "Taly App",
    description: "Mobile application built for streamlined user tasks and daily activity workflows.",
    tags: ["React Native", "Productivity", "Mobile App"],
    screenshot: talyAppScreenshot,
  },
  {
    title: "Note Genie",
    description: "AI-enhanced note-taking application for organizing and managing notes efficiently.",
    tags: ["React Native", "AI Integration", "Productivity"],
    screenshot: noteGenieScreenshot,
  },
  {
    title: "Auction App",
    description:
      "Upcoming mobile app focused on live bidding, item discovery, and real-time auction participation.",
    tags: ["React Native", "Real-time", "E-commerce"],
  },
  {
    title: "Halaly App",
    description: "Faith-based utility application built around halal lifestyle use-cases.",
    tags: ["React Native", "Lifestyle", "Mobile App"],
  },
  {
    title: "Powered App",
    description: "Mobile platform delivering feature-rich user flows and scalable app architecture.",
    tags: ["React Native", "Mobile App", "Scalable Architecture"],
  },
  {
    title: "Staistic Math Helper",
    description: "Math helper application designed to support quick calculations and statistics learning.",
    tags: ["React Native", "Education", "Math"],
    link: "https://apps.apple.com/us/app/statistics-ai-the-math-solver/id6757214209",
    screenshot: statisticsMathHelperScreenshot,
  },
  {
    title: "Resumley Website",
    description: "Web application built with React.js for resume creation and profile presentation.",
    tags: ["React.js", "Web App", "Frontend"],
  },
  {
    title: "Mesob Store",
    description: "E-commerce-focused project with product browsing and scalable backend workflows.",
    tags: ["React Native", "E-commerce", "Node.js"],
  },
  {
    title: "Termatac",
    description: "React.js web project built with modern UI patterns and component-based architecture.",
    tags: ["React.js", "Web App", "Frontend"],
  },
];

export const certifications = [
  "AI Automation Certification – Zapier",
  "n8n Level 1 Certification",
  "JavaScript Basics – HackerRank",
  "Computer Basics – Al Noor",
] as const;
