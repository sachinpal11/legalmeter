import { ReactNode } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/ui/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "LegalMeter India – Compliance Calculators",
  description:
    "India-specific legal and compliance calculators. GST, Professional Tax, Shop Act eligibility tools.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
