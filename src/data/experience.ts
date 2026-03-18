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
    role: "Sr. React Native Developer",
    company: "Swam Tech",
    period: "Jan 2025 – Present",
    description: [
      "Developed cross-platform mobile apps using React Native & TypeScript.",
      "Built robust backend APIs with Node.js, Express.js, and MongoDB.",
      "Integrated AI services for chatbot-style mobile applications.",
      "Deployed applications to App Store, Play Store, and cloud environments.",
    ],
  },
  {
    role: "Sr. React Native Developer (Part-Time)",
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
