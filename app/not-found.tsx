'use client'

import { useRouter } from "next/navigation";


export default function NotFound() {
  const router = useRouter()
  setInterval(() => {
    router.push("/")
  }, 5000);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-6xl font-bold">404</div>
      <div className="text-2xl mt-4">Page Not Found</div>
      <div className="mt-2 text-gray-500">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </div>
    </div>
  )
}
