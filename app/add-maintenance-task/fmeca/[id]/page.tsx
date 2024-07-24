"use client"

import FormLayout from "@/components/layout/FormLayout"
import { createAssetProfile } from "@/lib/assetProfile"
import { createFmeca } from "@/lib/fmeca"
import { createFunctionalFailure } from "@/lib/functionalFailure"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
import React, { useState } from "react"

export default function Page({ params }: { params: { id: string } }) {
  const [activeForm, setActiveForm] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})

  const router = useRouter()

  const Form = (title: string, inputName: string, inputType: string) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()

      const formElm = e.target as HTMLFormElement
      const data = Object.fromEntries(new FormData(formElm)) as Record<
        string,
        string
      >

      formElm.reset()

      setFormData({ ...formData, ...data })

      setActiveForm((prev) => prev + 1)
    }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <h1 className="text-left font-bold text-2xl mb-6">{title}</h1>
          <input
            type={inputType}
            placeholder={
              inputType === "number"
                ? "Isi dengan angka..."
                : "Isi dengan text..."
            }
            className="input w-full mb-9"
            name={inputName}
            required
          />
          <button
            type="submit"
            className="btn btn-primary text-white w-full text-xl mb-4"
          >
            Lanjut
          </button>
        </form>
        <button
          onClick={() => setActiveForm((prev) => prev - 1)}
          className="btn btn-secondary text-primary w-full text-xl"
        >
          Kembali
        </button>
      </>
    )
  }

  const Preview = (heads: string[], nextRoute: string) => {
    const values = Object.values(formData)

    const handleSubmit = async () => {
      console.log(formData)
      await createFmeca({
        ...formData,
        assetProfileId: params.id,
      })
      router.push(nextRoute)
    }

    return (
      <>
        <h1
          className="my-8 border rounded-xl w-full p-4 text-center font-bold text-xl"
          style={{
            backgroundColor: "#feefe5",
            color: "#EB5B00",
            borderColor: "#EB5B00",
          }}
        >
          FMECA
        </h1>

        <div
          className={`grid gap-3`}
          style={{ gridTemplateColumns: `repeat(${values.length + 1}, auto)` }}
        >
          <div className="bg-base-100 p-2 px-6 rounded-lg border border-gray-300 text-center">
            No
          </div>
          {heads.map((n, i) => (
            <div
              key={i}
              className="bg-base-100 p-2 px-6 rounded-lg border border-gray-300 text-center"
            >
              {n}
            </div>
          ))}

          <div>1</div>
          {values.map((v, i) => (
            <div key={i}>{v}</div>
          ))}
        </div>
        <button
          className="btn btn-primary text-white w-full text-xl mt-10 mb-4"
          onClick={handleSubmit}
        >
          Lanjut
        </button>
        <button
          className="btn btn-secondary text-primary w-full text-xl"
          onClick={() => {
            setActiveForm((prev) => prev - 1)
          }}
        >
          Kembali
        </button>
      </>
    )
  }

  const forms = [
    Form("Failure Mode", "failureMode", "text"),
    Form("Causes", "causes", "text"),
    Form("Failure Characteristic", "failureCharacteristic", "text"),
    Form("Local Effect", "localEffect", "text"),
    Form("Functional Failure", "functionalFailure", "text"),
    Preview(
      [
        "Failure Mode",
        "Causes",
        "Failure Characteristic",
        "Local Effect",
        "Functional Failure",
      ],
      "/add-maintenance-task/fmeca-lanjutan/" + params.id + "?" + (new URLSearchParams({failureMode: formData.failureMode})).toString()
    ),
  ]

  return <FormLayout>{forms[activeForm]}</FormLayout>
}
