import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";



export const metadata: Metadata = {
  title: "Quick-cv.net",
  description: "Your favorite ",
};

const montserrat = Montserrat({subsets: ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
