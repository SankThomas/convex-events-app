import { Geist } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./convexclientprovider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "./authprovider";

const geist = Geist({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Full Stack Event Notification Application",
  description:
    "Full Stack Event Notification Appliation using NextJs and Convex",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`${geist.className} antialiased`}>
          <ConvexClientProvider>
            <Toaster />
            <div>{children}</div>
          </ConvexClientProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
