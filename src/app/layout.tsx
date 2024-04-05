import { Poppins as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RegisterLink, LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const houseCheck = false
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
