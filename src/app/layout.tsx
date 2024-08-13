import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Sider from "./components/sider/Sider";
import Play from "./components/play/Play";
import Search from "./components/search/Search";
import { Suspense } from "react";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hung MP3",
  description: "Hung MP3: Stream and listen to music online ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-[#292929]`}>
        <div className="container mx-auto">
          <div className="flex items-start">
            <div className="w-[280px]">
              <Sider />
            </div>
            <div className="ml-[20px] flex-1">
              <Suspense fallback={<>Loading...</>}>
                <Search />
                <main className="mt-[30px] mb-[120px]">
                  {children}
                </main>
              </Suspense>
            </div>
          </div>
        </div>
        <Play />
      </body>
    </html>
  );
}
