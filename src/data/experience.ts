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
    role: "Senior React Native Developer",
    company: "Tovo Solution",
    period: "Jan 2025 – Present",
    description: [
      "Develop and maintain cross-platform mobile applications using React Native, Expo, TypeScript, and JavaScript for Android and iOS.",
      "Integrate REST APIs and third-party services to deliver scalable, production-ready mobile features.",
      "Build backend services and RESTful APIs using Node.js, Express.js, and MongoDB.",
      "Implement AI-powered application features using OpenAI and Google Gemini APIs.",
      "Manage application data and cloud services using Firebase Firestore, Realtime Database, and Cloud Storage.",
      "Design and maintain GitHub Actions workflows for CI/CD automation, streamlining development, build, and deployment processes.",
      "Manage Expo EAS Build and deployment workflows for Android and iOS applications.",
      "Publish and maintain production applications on Apple App Store and Google Play Store.",
      "Troubleshoot platform-specific Android and iOS issues and optimize application stability and performance.",
      "Use Cursor AI and ChatGPT Pro for AI-assisted development, debugging, refactoring, documentation, and productivity.",
    ],
  },
  {
    role: "Senior React Native Developer (Part-Time)",
    company: "The Revolution Technologies Pvt Ltd.",
    period: "Oct 2024 – Present",
    description: [
      "Develop and maintain cross-platform mobile applications using React Native and TypeScript.",
      "Translate Figma designs into responsive and pixel-accurate mobile interfaces.",
      "Integrate third-party APIs, Stripe webhooks, payment functionality, and push notification systems.",
      "Develop backend infrastructure using Node.js, Express.js, and MongoDB.",
      "Deploy backend services to AWS using Lambda functions and Docker containers.",
      "Perform code reviews, troubleshoot application issues, and collaborate with cross-functional teams to improve code quality.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Smile Tech.",
    period: "Jan 2022 – Dec 2024",
    description: [
      "Developed and maintained cross-platform React Native applications for Android and iOS using TypeScript.",
      "Integrated REST APIs and implemented application data management using Firebase services.",
      "Built and deployed backend services to support mobile application functionality.",
      "Published and maintained production applications on Apple App Store and Google Play Store.",
      "Performed App Store Optimization (ASO) and supported production release processes.",
      "Collaborated with team members to troubleshoot issues, deliver features, and meet project deadlines.",
    ],
  },
];
