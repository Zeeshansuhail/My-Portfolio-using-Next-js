import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import FloatingWhatsAppButton from "@/components/floating_bar"; // Adjust the path to your component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zeeshan Suhail Portfolio",
  description: "My professional portfolio and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
        
        {/* Floating WhatsApp Button */}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}