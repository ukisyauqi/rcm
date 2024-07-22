"use client"

import { BookText, ChevronDown, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

export default function Sidebar() {
  const routes = [
    [
      "/boss-propeller",
      "/hull-cap",
      "/propeller-shaft",
      "/propeller",
      "/stern-tube",
    ],
    [
      "/coupling-1",
      "/coupling-2",
      "/intermediet-shaft-1",
      "/intermediet-shaft-2",
      "/intermediet-bearing-1",
      "/intermediet-bearing-2",
    ],
  ]

  const titles = [
    [
      "Boss Propeller",
      "Hull Cap",
      "Propeller Shaft",
      "Propeller",
      "Stern Tube",
    ],
    [
      "Coupling 1",
      "Coupling 2",
      "Intermediet Shaft 1",
      "Intermediet Shaft 2",
      "Intermediet Bearing 1",
      "Intermediet Bearing 2",
    ],
  ]

  const pathname = usePathname()

  return (
    <>
      <div className="collapse pl-1">
        <input type="checkbox" />
        <div className="collapse-title pr-0">
          <div className="bg-[#e7f2ff] flex items-center text-blue-500 gap-2 font-semibold text-lg py-2 px-4 rounded-lg w-fit">
            <Image
              src="/icons/summary-icon.svg"
              alt=""
              width={20}
              height={20}
            />
            <p>Summary</p>
            <ChevronDown />
          </div>
        </div>
        <div className="collapse-content pt-2 space-y-6 pl-8">
          <p className="font-semibold text-lg">A. PROPELLER</p>
          <div className="ml-3 font-semibold text-sm text-gray-500 space-y-8 flex flex-col">
            {routes[0].map((l, i) => (
              <Link href={l} key={i}>
                {titles[0][i]}
                {pathname === l && (
                  <span className="text-red-500 font-bold ml-4 absolute">•</span>
                )}
              </Link>
            ))}
          </div>

          <p className="font-semibold text-lg">B. SHAFTING</p>
          <div className="ml-3 font-semibold text-sm text-gray-500 space-y-8 flex flex-col">
            {routes[1].map((l, i) => (
              <Link href={l} key={i}>
                {titles[1][i]}
                {pathname === l && (
                  <span className="text-red-500 font-bold ml-4 absolute">•</span>
                )}
              </Link>
            ))}
          </div>
        </div>
        {/* Table */}
        <div className="flex items-center gap-2 font-semibold text-lg p-2 px-2 rounded-lg ml-4">
          <Image src="/icons/table-icon.svg" alt="" width={20} height={20} />
          <p>Table</p>
        </div>
      </div>
    </>
  )
}
