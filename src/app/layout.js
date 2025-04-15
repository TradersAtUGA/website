import Nav from "@/components/Nav";
import { macros } from "@/macros";
import { Geist, Geist_Mono } from "next/font/google";
// router
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Traders@UGA",
  description: "University of Georgia's premier Quantitative Finance Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <footer className="p-4 bg-backround shadow-md border-t border-solid border-gray-200 mt-8">
          <div className="flex justify-between items-center max-w-4xl mx-auto text-lg py-10">
            <div className="flex items-center gap-2">
              {macros.logo}
              <p className="text-center text-gray-200">
                © {new Date().getFullYear()} UGA Trading
              </p>
            </div>
            <div className="flex gap-4">
              {macros.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-gray-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
