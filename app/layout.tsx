import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/ui/navigation";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from "react";
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oboxia - Votre Offre Sur-Mesure',
  description: 'Configurez votre offre Oboxia sur mesure',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}