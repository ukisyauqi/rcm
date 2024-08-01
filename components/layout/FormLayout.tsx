import Image from "next/image"
import React from "react"

export default function FormLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen w-screen flex-center fixed bg-[url('/bg.jpg')] top-0 left-0 z-50 image-center">
      <div className="relative">
        <div className="flex justify-center gap-8 mb-10 absolute left-1/2 -translate-x-1/2 -top-24">
          <div className="bg-[url('/logo-its.png')] w-[65px] h-[64px]"></div>
          <div className="bg-[url('/logo-dmom.png')] w-[153px] h-[64px]"></div>
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
