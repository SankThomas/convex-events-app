import { Geist } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./convexclientprovider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Full Stack Event Notification Application",
  description:
    "Full Stack Event Notification Appliation using NextJs and Convex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <ConvexClientProvider>
          <Toaster />
          <Header />
          <div className="pt-20">{children}</div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
