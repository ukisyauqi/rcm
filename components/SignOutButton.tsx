import { signOut } from "@/auth"
import { redirect } from "next/navigation"

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/login" })
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
}