import './globals.css';

import { ThemeProvider } from 'next-themes';

import type { Metadata } from 'next';

import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { extractRouterConfig } from 'uploadthing/server';

import { Toaster } from '@orbitkit/ui/toast';

import { fileRouter } from './api/uploadthing/core';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {/* @ts-expect-error bug i think */}
        <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
        <ThemeProvider attribute="class" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}