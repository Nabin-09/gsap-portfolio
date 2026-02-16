import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
export const bebasNeue = localFont({
  src : [
    {
      path : './fonts/BebasNeue-Regular.ttf',
      weight : '400',
      style : 'normal',
    }
  ],
  display : 'swap',
  variable : '--font-bebasNeue'
})
export const pally = localFont({
  src : [
    {
      path : './fonts/Pally-Regular.ttf',
      weight : '400',
      style : 'normal',
    }
  ],
  display : 'swap',
  
})

export const metadata: Metadata = {
  title: "Nabin-SH",
  description: "Portfolio that displays my skills , experience and educaiton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${pally.className} antialiased`}
      >
        <Header/>
        <main className="min-h-svh">
            {children}
        </main>
        {children}
      </body>
    </html>
  );
}
