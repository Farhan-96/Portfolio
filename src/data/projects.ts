/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ProjectEntry = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export const featuredProjects: ProjectEntry[] = [
  {
    title: "Ask-AI-All ChatBot",
    description:
      "AI-powered chatbot with authentication, image & link Q&A, OTP, calendar, and IAP integration.",
    tags: ["React Native", "AI Integration", "Node.js", "IAP"],
  },
  {
    title: "Profile Nest App",
    description:
      "Cross-platform application featuring home screen widgets for both iOS and Android platforms.",
    tags: ["React Native", "iOS Widgets", "Android Widgets"],
  },
  {
    title: "Notigift App",
    description:
      "Custom UI components, notifications, OTP, and In-App Purchases implementation.",
    tags: ["React Native", "Custom UI", "Push Notifications"],
  },
  {
    title: "Kindraise App (Backend)",
    description:
      "Serverless backend architecture deployed using AWS Lambda and Docker for scalability.",
    tags: ["Node.js", "AWS Lambda", "Docker", "Serverless"],
  },
];

export const certifications = [
  "AI Automation Certification – Zapier",
  "n8n Level 1 Certification",
  "JavaScript Basics – HackerRank",
  "Computer Basics – Al Noor",
] as const;
