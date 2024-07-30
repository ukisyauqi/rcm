import { auth, signIn } from "@/auth"
import FormLayout from "@/components/layout/FormLayout"
import Image from "next/image"
import { redirect } from "next/navigation"
import React from "react"

export default async function Page() {
  const session = await auth()
  if (session) redirect("/form")
  return (
    <FormLayout>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Apakah kamu sudah memiliki akun?
        </h1>
        <Image src="/img-login.png" alt="" width={321} height={320} />

        <form
          action={async () => {
            "use server"
            await signIn()
          }}
          className="w-full"
        >
          <button type="submit" className="btn btn-primary text-white w-full text-lg font-semibold">Sign in</button>
        </form>
      </div>
    </FormLayout>
  )
}
