import { mixGetSlugAtType } from "@/lib/assetRegister"
import {
  getRouteTypes,
  getSlugAtType,
  kebabToTitleCase,
  snakeToUpperCase,
} from "@/lib/data"
import Link from "next/link"
import React from "react"
import ActiveLinkIndicator from "./ActiveLinkIndicator"

export default async function Slugs() {
  const routeTypes = getRouteTypes()

  const slugs: { [key: string]: string[] } = {}

  for (const t of routeTypes) {
    slugs[t] = await mixGetSlugAtType(t)
  }

  return (
    <>
      {routeTypes.map((type, i) => (
        <div key={i} className="space-y-6">
          <p className="font-semibold text-lg max-w-40">
            {String.fromCharCode(65 + i)}. {snakeToUpperCase(type)}
          </p>
          <div className="ml-3 font-semibold text-sm text-gray-500 space-y-8 flex flex-col">
            {slugs[type].map((slug, j) => (
              <Link href={slug} key={j}>
                {kebabToTitleCase(slug)}
                <ActiveLinkIndicator slug={slug} />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
