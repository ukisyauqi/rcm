import Image from "next/image"
import React from "react"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-lvh flex-center bg-[url('/bg.jpg')] image-center pt-40 sm:pt-40 pb-10 px-10">
      <div className="relative">
        <div className="flex justify-center gap-8 mb-10 absolute left-1/2 -translate-x-1/2 -top-32 sm:-top-24">
          <Image src="/logo-its.png" alt="" width={65} height={64} />
          <Image src="/logo-dmom.png" alt="" width={153} height={64} />
        </div>
        <div className="px-2">
          <div className="bg-white rounded-lg border shadow p-6 sm:p-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
