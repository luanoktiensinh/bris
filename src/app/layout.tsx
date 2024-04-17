import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.scss';
import { ApolloWrapper } from "@/wrapper/ApolloWrapper";
import { Header } from "@/components/Header";
import { ReduxProvider } from "@/providers/reduxProvider";

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
          </ApolloWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
