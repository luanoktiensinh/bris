import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.scss';
import { ApolloWrapper } from "@/wrapper/ApolloWrapper";
import { Header } from "@/components/Header";
import { ReduxProvider } from "@/providers/reduxProvider";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../components/Footer").then(mod => mod.Footer));

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Briscoes",
  description: "Generated by create next app",
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" id="html-body">
      <body className={inter.className}>
        <ReduxProvider>
          <ApolloWrapper>
            <Header />
            {children}
            <Footer />
          </ApolloWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
