import Image from "next/image"
import React from "react"
import logoIts from "@/public/logo-its.png"
import logoDmom from "@/public/logo-dmom.png"

export default function FormLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen w-screen flex-center fixed bg-[url('/bg.jpg')] top-0 left-0 z-50 image-center">
      <div className="relative">
        <div className="flex justify-center gap-8 mb-10 absolute left-1/2 -translate-x-1/2 -top-24">
          <Image src={logoIts} alt="" width={65} height={64} />
          <Image src={logoDmom} alt="" width={153} height={64} />
        </div>
        <div className="px-2">
          <div className="bg-white rounded-lg border shadow p-10 min-w-[30rem]">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
