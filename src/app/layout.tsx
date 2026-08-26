import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farhan Fareed",
  description:
    "Senior React Native Developer and Mobile Application Engineer — cross-platform Android & iOS apps with Expo, TypeScript, AI integrations, and Python/FastAPI backend skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
