import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MainFooter from "@/components/Mainfooter";
import { CookiesConsent } from "@/components/CookieConsent";


const geistSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AEA Limited | Way Above the Rest",
  description: "AEA is a trading arm of TransCentury PLC providing innovative solutions for Africa with a proven track record running over five-decades. The company was initially established primarily with a focus on the supply, manufacture and maintenance of industrial and domestic weighing equipment but over the years, AEA Limited has since diversified into other major sectors due to the strong aftermarket support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}
        className={`${geistSans.variable} antialiased bg-gray-100`}
      >
        {children}
        <MainFooter/>
        <CookiesConsent/>
      </body>
    </html>
  );
}
