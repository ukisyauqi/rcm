import FormLayout from "@/components/layout/FormLayout"
import Image from "next/image"
import React from "react"

export default function Page() {
  return (
    <FormLayout>
      <div className="flex flex-col items-center">
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
    </FormLayout>
  )
}
