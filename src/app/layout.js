import { Footer, Header } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalytics from "./GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "Kursor - Your AI Copilot", template: "%s | Kursor" },
  description: "Chat with ChatGPT or Google Bard AI while surfing the web !!!",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

 <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}/>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
