import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Utilities/Navbar";

const inter = Inter({ subsets: ["latin"] });

// metadata untuk kebutuhan SEO
export const metadata = {
  title: "CuyAnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
