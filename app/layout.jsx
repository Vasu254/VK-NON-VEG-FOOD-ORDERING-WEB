<<<<<<< HEAD
import { Outfit } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import StoreProvider from '@/app/StoreProvider';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata = {
  title: 'GoCart. - Shop smarter',
  description: 'GoCart. - Shop smarter',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased`}>
          <StoreProvider>
            <Toaster />
            {children}
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
=======
import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
    title: "GoCart. - Shop smarter",
    description: "GoCart. - Shop smarter",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${outfit.className} antialiased`}>
                <StoreProvider>
                    <Toaster />
                    {children}
                </StoreProvider>
            </body>
        </html>
    );
>>>>>>> cbb68b6b9d23b8b8b6cefd01c4f10f79fbfb7f8e
}
