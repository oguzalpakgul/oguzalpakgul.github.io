import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oğuzalp Akgül",
  description: "Oğuzalp Akgül personal website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={"min-h-screen font-sans max-w-2xl mx-auto p-4 "}>
        {children}

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
