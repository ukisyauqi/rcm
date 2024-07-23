import Image from "next/image"
import React from "react"

export default function Page() {
  return (
    <div className="h-screen w-screen flex-center fixed bg-[url('/bg.jpg')] top-0 left-0 z-50 image-center">
      <div className="relative">
        <div className="flex justify-center gap-8 mb-10 absolute left-1/2 -translate-x-1/2 -top-24">
          <Image src="/logo-its.png" alt="" width={65} height={64} />
          <Image src="/logo-dmom.png" alt="" width={153} height={64} />
        </div>
        <div className="bg-white rounded-lg border shadow flex flex-col items-center p-10">
          <h1 className="text-3xl font-semibold text-center mb-8">
            Apakah kamu sudah memiliki akun?
          </h1>
          <Image src="/img-login.png" alt="" width={321} height={320} />

          <button className="btn btn-primary text-white w-full mb-2 mt-8 text-lg font-semibold">
            Buat Akun
          </button>
          <button className="btn btn-secondary text-[#1e7cfd] w-full text-lg font-semibold">
            Masuk
          </button>
        </div>
      </div>
    </div>
  )
}
