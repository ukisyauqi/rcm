"use client"

import FormLayout from "@/components/layout/FormLayout"
import { createAssetProfile } from "@/lib/assetProfile"
import { createFmecaLanjutan, getFmecaLanjutanById } from "@/lib/fmecaLanjutan"
import { createFunctionalFailure } from "@/lib/functionalFailure"
import { createMaintenanceTask } from "@/lib/maintenanceTasks"
import { getCurrentRisk, riskStyles } from "@/lib/risk"
import Link from "next/link"
import { redirect, useRouter, useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"

export default function Page({ params }: { params: { id: string } }) {
  const [activeForm, setActiveForm] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})

  const searchParams = useSearchParams()

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
            min={1}
            max={5}
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

  const Preview = (
    heads: {
      text: string
      rowSpan: number
      colSpan: number
    }[],
    nextRoute: string
  ) => {
    const failureMode = searchParams.get("failureMode") || ""
    const cof = searchParams.get("cof") || "1"
    const recPof= searchParams.get("recPof") || "1"
    const currentRisk = searchParams.get("currentRisk") || "1"
    const riskStyle = riskStyles[parseInt(currentRisk) - 1]

    const values = Object.values(formData) as string[]
    const projRisk = getCurrentRisk(parseInt(cof), parseInt(formData.projPof || "1")).toString()


    values.unshift(
      failureMode,
      cof,
      recPof,
      currentRisk
    )
    values.push(projRisk)

    const handleSubmit = async () => {

      const data = {
        ...formData,
        projRisk,
        assetProfileId: params.id,
      }

      await createMaintenanceTask(data)
      router.push("/")
    }

    return (
      <>
        <h1
          className="my-8 border rounded-xl w-full p-4 text-center font-bold text-xl"
          style={{
            backgroundColor: "#f5eafa",
            color: "#912BBC",
            borderColor: "#912BBC",
          }}
        >
          Maintenance Task Selection
        </h1>

        <div
          className="grid gap-3 items-center"
          style={{ gridTemplateColumns: `repeat(8, auto)` }}
        >
          {heads.map((n, i) => (
            <div
              key={i}
              className="bg-base-100 p-2 px-6 rounded-lg border border-gray-300 h-full flex items-center justify-center"
              style={{
                gridRow: "span " + n.rowSpan,
                gridColumn: "span " + n.colSpan,
                backgroundColor: n.colSpan === 3 ? "#dee5ed" : "",
              }}
            >
              {n.text}
            </div>
          ))}

          <div>1</div>
          {values.map((v, i) =>
            i === 3 || i === 6 ? (
              <div
                key={i}
                className="text-center rounded-lg p-2"
                style={{
                  backgroundColor: riskStyle.backgroundColor,
                  color: riskStyle.color,
                }}
              >
                {riskStyle.text}
              </div>
            ) : (
              <div key={i}>{v}</div>
            )
          )}
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
    Form("Proposed Action", "proposedAction", "text"),
    Form("Proj PoF", "projPof", "number"),

    Preview(
      [
        { text: "No", rowSpan: 2, colSpan: 1 },
        { text: "Failure Mode", rowSpan: 2, colSpan: 1 },
        { text: "Risk Characterization", rowSpan: 1, colSpan: 3 },
        { text: "Task Selection", rowSpan: 1, colSpan: 3 },
        { text: "CoF", rowSpan: 1, colSpan: 1 },
        { text: "Rec PoF", rowSpan: 1, colSpan: 1 },
        { text: "Current Risk", rowSpan: 1, colSpan: 1 },
        { text: "Proposed Action (s)", rowSpan: 1, colSpan: 1 },
        { text: "Proj PoF", rowSpan: 1, colSpan: 1 },
        { text: "Proj Risk", rowSpan: 1, colSpan: 1 },
      ],
      "/"
    ),
  ]

  return <FormLayout>{forms[activeForm]}</FormLayout>
}
