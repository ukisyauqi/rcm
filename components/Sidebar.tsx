"use client"

import {
  getRouteTypes,
  getSlugAtType,
  kebabToTitleCase,
  snakeToUpperCase,
} from "@/lib/data"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

export default function Sidebar() {
  const pathname = usePathname()
  const routeType = getRouteTypes()

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
          {routeType.map((type, i) => (
            <div key={i} className="space-y-6">
              <p className="font-semibold text-lg max-w-40">
                {String.fromCharCode(65 + i)}. {snakeToUpperCase(type)}
              </p>
              <div className="ml-3 font-semibold text-sm text-gray-500 space-y-8 flex flex-col">
                {getSlugAtType(type).map((slug, j) => (
                  <Link href={slug} key={j}>
                    {kebabToTitleCase(slug)}
                    {pathname === "/" + slug && (
                      <span className="text-red-500 font-bold ml-2 absolute">
                        •
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Table */}
        <div className="flex items-center gap-2 font-semibold text-lg p-2 px-2 rounded-lg ml-6">
          <Image src="/icons/table-icon.svg" alt="" width={20} height={20} />
          <p>Table</p>
        </div>

        <Link
          href="/add-maintenance-task"
          className="flex items-center gap-2.5 bg-blue-500 text-white ml-5 mt-2 mb-4 p-2 rounded-lg cursor-pointer w-48"
        >
          <div className="text-2xl font-light ml-2">+</div>
          <div className="text-left leading-5">
            Add Maintenance <br />
            Task
          </div>
        </Link>
      </div>
    </>
  )
}
