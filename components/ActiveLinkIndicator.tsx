'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

export default function ActiveLinkIndicator({slug}: {slug: string}) {
  const pathname = usePathname()
  return (
    <>
    {pathname === "/summary/" + slug && (
      <span className="text-red-500 font-bold ml-2 absolute">
        •
      </span>
    )}
    </>
  )
}
