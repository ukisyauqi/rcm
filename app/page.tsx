import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default function Home() {
  redirect("/form")
}
