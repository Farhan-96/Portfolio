/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { StaticImageData } from "next/image";
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
import transcript24Screenshot from "../assets/transcript-24.png";
import pngToPdfScreenshot from "../assets/png-to-pdf.png";

export type ProjectEntry = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  screenshot?: StaticImageData;
};

export const featuredProjects: ProjectEntry[] = [
  {
    title: "E-Commerce REST API",
    description:
      "Personal REST API for an e-commerce platform covering products, users, and orders — with MongoDB, CRUD endpoints, request validation, and structured REST responses.",
    tags: ["Python", "FastAPI", "MongoDB", "REST API"],
  },
  {
    title: "Winnabit",
    description:
      "Production-ready cross-platform app with REST APIs, Firebase, push notifications, secure auth, and Android Health Connect for step tracking. CI/CD via GitHub Actions and Expo EAS Build & Submit.",
    tags: ["React Native", "Expo", "TypeScript", "Firebase", "Health Connect"],
  },
  {
    title: "ProfileNest",
    description:
      "Digital business networking app published on the Apple App Store — responsive UIs, REST APIs for profile management, and Firebase services optimized for production.",
    tags: ["React Native", "Firebase", "App Store"],
    link: "https://apps.apple.com/us/app/profilenest-business-cards/id6743096135",
    screenshot: profileNestScreenshot,
  },
  {
    title: "Cal AI",
    description:
      "AI-powered calorie tracking application with OpenAI integration for intelligent nutrition features, reusable UI components, and optimized responsiveness.",
    tags: ["React Native", "OpenAI", "HealthTech"],
    screenshot: calAiAppScreenshot,
  },
  {
    title: "LoanBuddy (Loan Calculator)",
    description:
      "Mobile loan calculator with intuitive financial calculation features, responsive UI, and reusable components — published for mobile platforms.",
    tags: ["React Native", "FinTech", "Calculator"],
    screenshot: loanCalculatorScreenshot,
  },
  {
    title: "AI ChatBot",
    description:
      "AI chatbot application powered by OpenAI APIs with conversational UI, real-time AI responses, and a focus on performance and smooth user experience.",
    tags: ["React Native", "OpenAI", "AI Integration"],
    screenshot: askAiChatbotScreenshot,
  },
  {
    title: "Transcript24",
    description:
      "AI-powered web application that converts video and audio into text transcripts using OpenAI APIs — Next.js frontend with backend APIs for transcript generation.",
    tags: ["Next.js", "Node.js", "OpenAI"],
    link: "https://transcript-247.vercel.app/",
    screenshot: transcript24Screenshot,
  },
  {
    title: "PNG to PDF Converter",
    description:
      "Web application for converting PNG images into PDF documents — Next.js frontend with Node.js and Express.js backend services.",
    tags: ["Next.js", "Node.js", "Express.js"],
    link: "https://png-to-pdf-frontend.vercel.app/",
    screenshot: pngToPdfScreenshot,
  },
  {
    title: "Next African Generation",
    description:
      "Published community-driven mobile platform for social impact, engagement, and educational growth.",
    tags: ["React Native", "Community", "App Store"],
    link: "https://apps.apple.com/us/app/next-african-generation/id6742995337",
    screenshot: nextAfricanGenerationScreenshot,
  },
  {
    title: "Protein Tracker",
    description:
      "Nutrition-focused mobile app for tracking protein intake and daily macro targets.",
    tags: ["React Native", "Health Tracking", "Analytics"],
    screenshot: proteinTrackerScreenshot,
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
    description:
      "Final Year Project — iOS application designed to support speech fluency for stuttering therapy (BS Information Technology).",
    tags: ["iOS", "Speech Assistance", "Academic Project"],
  },
  {
    title: "Trainify Inc",
    description:
      "Fitness and training app focused on structured workout plans and user progress.",
    tags: ["React Native", "Fitness", "Mobile App"],
    screenshot: trainifyScreenshot,
  },
  {
    title: "Digital Quran",
    description:
      "Islamic mobile app offering digital Quran reading experience and quick navigation.",
    tags: ["React Native", "Islamic App", "Mobile App"],
  },
  {
    title: "Digital Tasbeeh",
    description:
      "Simple and accessible digital tasbeeh counter app for daily use.",
    tags: ["React Native", "Utility App", "Islamic App"],
  },
  {
    title: "Taly App",
    description:
      "Mobile application built for streamlined user tasks and daily activity workflows.",
    tags: ["React Native", "Productivity", "Mobile App"],
    screenshot: talyAppScreenshot,
  },
  {
    title: "Note Genie",
    description:
      "AI-enhanced note-taking application for organizing and managing notes efficiently.",
    tags: ["React Native", "AI Integration", "Productivity"],
    screenshot: noteGenieScreenshot,
  },
  {
    title: "Halaly App",
    description:
      "Faith-based utility application built around halal lifestyle use-cases.",
    tags: ["React Native", "Lifestyle", "Mobile App"],
  },
  {
    title: "Mesob Store",
    description:
      "E-commerce-focused project with product browsing and scalable backend workflows.",
    tags: ["React Native", "E-commerce", "Node.js"],
  },
  {
    title: "Statistics Math Helper",
    description:
      "Math helper application designed to support quick calculations and statistics learning.",
    tags: ["React Native", "Education", "Math"],
    link: "https://apps.apple.com/us/app/statistics-ai-the-math-solver/id6757214209",
    screenshot: statisticsMathHelperScreenshot,
  },
];

export const certifications = [
  "JavaScript Basics – HackerRank (August 2023)",
  "Basic Computer Course – Al Noor Computer Academy (March 2011 – June 2011)",
] as const;
