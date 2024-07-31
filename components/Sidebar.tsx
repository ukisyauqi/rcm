import {
  getRouteTypes,
  getSlugAtType,
  kebabToTitleCase,
  snakeToUpperCase,
} from "@/lib/data"
import { ChevronDown, LogOut } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { Suspense } from "react"
import Slugs from "./Slugs"
import { SignOutButton } from "./SignOutButton"

export default function Sidebar() {
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
          <Suspense>
            <Slugs />
          </Suspense>
        </div>
        {/* Table */}
        <Link
          href="/table"
        >
          <div className="flex items-center gap-2 font-semibold text-lg p-2 px-2 rounded-lg ml-6">
            <Image src="/icons/table-icon.svg" alt="" width={20} height={20} />
            <p>Table</p>
          </div>
        </Link>
        

        <Link
          href="/add-task"
          className="flex items-center gap-2.5 bg-blue-500 text-white ml-5 mt-2 mb-4 p-2 rounded-lg cursor-pointer w-48"
        >
          <div className="text-2xl font-light ml-2">+</div>
          <div className="text-left leading-5">
            Add Maintenance <br />
            Task
          </div>
        </Link>
        <div
          className=" hover:bg-gray-200 flex items-center gap-2.5 ml-5 mt-2 mb-4 pl-2 p-2 rounded-lg cursor-pointer w-48"
        >
          <LogOut /><SignOutButton/>
        </div>
      </div>
    </>
  )
}
