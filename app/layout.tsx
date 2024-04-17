import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'seaci.me',
  description:
    'welcome to visit seaci.me, a collection of several small features, some front-end demos and learning notes on a personal website! ',
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body></body>
    </html>
  );
}
