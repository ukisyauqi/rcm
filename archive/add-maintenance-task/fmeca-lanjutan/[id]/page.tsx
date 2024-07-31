"use client"

import FormLayout from "@/components/layout/FormLayout"
import { createAssetProfile } from "@/lib/assetProfile"
import { createFmecaLanjutan } from "@/lib/fmecaLanjutan"
import { createFunctionalFailure } from "@/lib/functionalFailure"
import { getCurrentRisk, riskStyles } from "@/lib/risk"
import Link from "next/link"
import { redirect, useRouter, useSearchParams } from "next/navigation"
import React, { useState } from "react"

export default function Page({ params }: { params: { id: string } }) {
  const [activeForm, setActiveForm] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})

  const searchParams = useSearchParams()
  const failureMode = searchParams.get("failureMode") || ""

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

  const FormRadio = (
    title: string,
    inputName: string,
    values: string[],
    labels: string[]
  ) => {
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
          <h1 className="text-left font-bold text-2xl mb-5">{title}</h1>
          <div className="flex justify-evenly items-center mb-7">
            {values.map((value, i) => (
              <div key={i} className="flex items-center text-xl">
                <input
                  type="radio"
                  name={inputName}
                  value={value}
                  className="size-4 mr-3 cursor-pointer"
                  required
                />
                <label>{labels[i]}</label>
              </div>
            ))}
          </div>
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
    const { cof, recPof } = formData

    const currentRisk = getCurrentRisk(
      parseInt(cof) || 1,
      parseInt(recPof) || 1
    )

    const riskStyle = riskStyles[currentRisk - 1]

    const data = {
      endEffect: formData.endEffect,
      cof: formData.cof,
      recPof: formData.recPof,
      currentRisk: currentRisk.toString(),
      failureDetection: formData.failureDetection,
      mntc: formData.mntc,
      assetProfileId: formData.assetProfileId,
    }

    const values = Object.values(data) as string[]
    values.unshift(failureMode || "")

    const handleSubmit = async () => {
      await createFmecaLanjutan({
        ...data,
        assetProfileId: params.id,
      })
      router.push("/add-maintenance-task/maintenance-task-selection/" + params.id + "?" + (new URLSearchParams({...data, failureMode: failureMode})).toString())
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
          FMECA (lanjutan)
        </h1>

        <div
          className="grid gap-3 items-center"
          style={{ gridTemplateColumns: `repeat(${values.length}, auto)` }}
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
          {values.map((v, i) =>
            i === 4 ? (
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
    Form("End Effect", "endEffect", "text"),
    FormRadio(
      "CoF",
      "cof",
      ["1", "2", "3", "4", "5"],
      ["1", "2", "3", "4", "5"]
    ),
    FormRadio(
      "Rec PoF",
      "recPof",
      ["1", "2", "3", "4", "5"],
      ["1", "2", "3", "4", "5"]
    ),
    Form("Failure Detection/Corrective Measures", "failureDetection", "text"),
    Form("Proposed Basic MNTC", "mntc", "text"),

    Preview(
      [
        "Failure Mode",
        "End Effect",
        "CoF",
        "PoF",
        "Current Risk",
        "Failure Detection",
        "Proporsed Basic MNTC",
      ],
      "/add-maintenance-task/maintenance-task-selection/" + params.id
    ),
  ]

  return <FormLayout>{forms[activeForm]}</FormLayout>
}
