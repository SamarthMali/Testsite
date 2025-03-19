import './globals.css';
import { Inter, Golos_Text } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });
const golos = Golos_Text({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-golos',
});

export const metadata = {
  title: 'Test - AI-Powered Cloud Solutions',
  description: 'Transform your business with custom AI-driven software, scalable cloud platforms, and automation that works seamlessly.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${golos.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
