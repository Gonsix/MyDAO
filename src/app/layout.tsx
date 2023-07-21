"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import {Sepolia} from "@thirdweb-dev/chains";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>

    </ThirdwebProvider>

  )
}
