import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./(Header)/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
