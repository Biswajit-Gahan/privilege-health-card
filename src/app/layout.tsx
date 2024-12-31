import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import MainWrapper from '@/app/main-wrapper/main-wrapper';

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Privilege Health Cards',
    default: 'Privilege Health Cards',
  },
  description: 'Privilege health cards.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${interSans.variable}`}>
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
