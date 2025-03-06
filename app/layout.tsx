import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/ui/navigation";

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
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}