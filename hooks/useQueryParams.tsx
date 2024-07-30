"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

// URL Query Params / Search Params
export default function useQueryParams() {
  const urlParams = new URLSearchParams(useSearchParams())
  const router = useRouter()
  const pathname = usePathname()

  // updateQP({key1: value1, key2: value2})
  function updateQP (data: Object) {
    const keys = Object.keys(data)
    const values = Object.values(data)

    keys.forEach((key, index) => {
      urlParams.set(key, values[index])
    })
    router.push(pathname + "?" + urlParams)
  }

  // getQP("key1") -> "value1"
  function getQP (param: string) {
    return urlParams.get(param) || ""
  }

  // return [{"key1": "value1"}, {"key2": "value2"}]
  function getAllQP () {
    const res = []
    for (const [key, value] of urlParams.entries() as any) {
      res.push({[key]: value})
    }
    return res
  }

  return { updateQP, getQP, getAllQP}
}
