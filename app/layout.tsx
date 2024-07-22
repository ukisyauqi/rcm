import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/Sidebar"
import { Menu } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Button open navbar */}
              <label
                htmlFor="my-drawer-2"
                className="btn drawer-button lg:hidden fixed top-4 left-4 bg-white"
              >
                <Menu />
              </label>

              {/* Page Content */}
              <div className="bg-white rounded-2xl mt-10 p-8 shadow border mx-2 lg:mx-8 min-w-[1000px]">
                {children}
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu text-base-content min-h-screen lg:pt-10 bg-base-100 px-0">
                {/* Sidebar content here */}

                <Sidebar />
              </ul>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
