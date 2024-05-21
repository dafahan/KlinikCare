import type { Metadata } from "next";
import { headers } from "next/headers";
import { Poppins } from "next/font/google";
import TransitionProvider from "./transitionProvider";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Klinik Care",
  description: "Klinik management apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const isLandingPage = activePath === '/';
  
  return (
    <html lang="en">
      <body className={`${poppins.className} flex w-full min-h-screen flex-col`}>
          <TransitionProvider>{children}</TransitionProvider>
        </body>
    </html>
  );
}
