/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Mid-Level React Native Developer",
    company: "Tovo Solution",
    period: "Jan 2025 – Present",
    description: [
      "Built and maintained cross-platform mobile applications with React Native and TypeScript.",
      "Integrated REST APIs, Firebase services, and backend workflows for production apps.",
      "Developed backend CRUD operations with Node.js, Express.js, and MongoDB.",
      "Implemented AI-powered workflows with OpenAI and Gemini APIs.",
      "Managed App Store and Play Store deployments, ASO, and cloud backend releases.",
    ],
  },
  {
    role: "Mid-Level React Native Developer (Part-Time)",
    company: "The Revolution Technologies Pvt Ltd",
    period: "Oct 2024 – Present",
    description: [
      "Developed mobile apps from Figma designs using React Native.",
      "Integrated Stripe payments, webhooks, and notification systems.",
      "Deployed backend services using AWS Lambda with Docker.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Smile Tech",
    period: "Jan 2022 – Dec 2024",
    description: [
      "Built and deployed cross-platform apps using React Native and Firebase.",
      "Integrated REST APIs and managed cloud backend services.",
      "Collaborated with design teams to implement pixel-perfect UIs.",
    ],
  },
];
