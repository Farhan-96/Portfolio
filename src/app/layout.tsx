import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farhan Fareed | Portfolio",
  description:
    "Professional portfolio of Farhan Fareed — React Native and Next.js developer specializing in AI-integrated mobile and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children} </body>
    </html>
  );
}
