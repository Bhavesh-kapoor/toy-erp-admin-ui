import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/common/Sidebar";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

export const metadata: Metadata = {
  title: "Makaan | Admin Panel",
  description: "To control the content of the admin panel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
      >
        <AuthProvider>
          <div className="flex">
            <Sidebar />
            <div className="flex-1">
              <Navbar />
              <main>{children}</main>
              <div id="modal-root"></div>
              <ToastContainer
                rtl={false}
                autoClose={2000}
                newestOnTop={true}
                position="top-right"
                hideProgressBar={false}
              />
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
