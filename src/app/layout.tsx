import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Dominic Rozario — Full Stack Developer & System Architect",
  description:
    "Personal portfolio of Dominic Rozario, Full Stack Developer Intern at Bala Labs. Specializing in modern web applications, backend architecture, APIs, and high-performance interactive experiences.",
  keywords: [
    "Dominic Rozario",
    "Full Stack Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Dominic Rozario" }],
  openGraph: {
    title: "Dominic Rozario — Full Stack Developer",
    description: "Building Digital Experiences with Code & Creativity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-400 min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Subtle matrix grid background layer */}
        <div className="fixed inset-0 matrix-grid pointer-events-none z-0 opacity-40" />

        {/* Global ambient background glows */}
        <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none z-0" />
        <div className="fixed top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none z-0" />

        {/* Floating Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10 flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
