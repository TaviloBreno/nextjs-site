import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import WhatsAppButton from '../components/WhatsAppButton';

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Imóvel Prime - Encontre seu imóvel dos sonhos",
  description: "A melhor plataforma para encontrar imóveis de qualidade. Casas, apartamentos e terrenos nas melhores localizações.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
