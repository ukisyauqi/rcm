"use client"
import FormLayout from "@/components/layout/FormLayout"
import { createAssetProfile } from "@/lib/assetProfile"
import { createFunctionalFailure } from "@/lib/functionalFailure"
import Link from "next/link"
import { redirect } from "next/navigation"
import React, { useState } from "react"

export default function Page({ params }: { params: { id: string } }) {
  const [activeForm, setActiveForm] = useState(0)
  const [formData, setFormData] = useState<any>({})

  const forms = [
    FunctionStatement(setActiveForm, setFormData),
    FunctionType(setActiveForm, setFormData),
    Number(setActiveForm, setFormData),
    FunctionalFailureStatement(setActiveForm, setFormData),
    Preview(formData, setActiveForm, params.id),
  ]

  return <FormLayout>{forms[activeForm]}</FormLayout>
}

function Preview(
  formData: Record<string, string>,
  setActiveForm: React.Dispatch<React.SetStateAction<number>>,
  assetProfileId: string
) {
  const heads = [
    "No",
    "Function Statement",
    "Function Type",
    "No",
    "Functional Failure Statement",
  ]
  const values = Object.values(formData)
  values.unshift("1")

  const handleSubmit = async () => {
    await createFunctionalFailure({
      ...formData,
      assetProfileId: assetProfileId,
    })
    redirect("/add-maintenance-task/fmeca/" + assetProfileId)
  }

  return (
    <>
      <h1
        className="my-8 border rounded-xl w-full p-4 text-center font-bold text-xl"
        style={{
          backgroundColor: "#e6fef1",
          color: "#00B14F",
          borderColor: "#00B14F",
        }}
      >
        Summary of Maintenance Task
      </h1>

      <div className={`grid grid-cols-[repeat(${values.length},auto)] gap-3`}>
        {heads.map((n, i) => (
          <div
            key={i}
            className="bg-base-100 p-2 px-6 rounded-lg border border-gray-300 text-center"
          >
            {n}
          </div>
        ))}

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

function FunctionStatement(
  setActiveForm: React.Dispatch<React.SetStateAction<number>>,
  setFormData: React.Dispatch<any>
) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formElm = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(formElm))

    formElm.reset()

    setFormData(data)

    setActiveForm((prev) => prev + 1)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="text-left font-bold text-2xl mb-6">
          Function Statement
        </h1>
        <input
          type="text"
          placeholder="Isi dengan text..."
          className="input w-full mb-9"
          name="functionStatement"
          required
        />
        <button
          type="submit"
          className="btn btn-primary text-white w-full text-xl mb-4"
        >
          Lanjut
        </button>
      </form>
      <Link
        href="/add-maintenance-task/asset-profile"
        className="btn btn-secondary text-primary w-full text-xl"
      >
        Kembali
      </Link>
    </>
  )
}

function FunctionType(
  setActiveForm: React.Dispatch<React.SetStateAction<number>>,
  setFormData: React.Dispatch<any>
) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formElm = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(formElm))

    formElm.reset()

    setFormData((prev: any) => ({ ...prev, ...data }))

    setActiveForm((prev) => prev + 1)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="text-left font-bold text-2xl mb-6">Function Type</h1>
        <input
          type="text"
          placeholder="Isi dengan text..."
          className="input w-full mb-9"
          name="functionType"
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

function Number(
  setActiveForm: React.Dispatch<React.SetStateAction<number>>,
  setFormData: React.Dispatch<any>
) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formElm = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(formElm))

    formElm.reset()

    setFormData((prev: any) => ({ ...prev, ...data }))

    setActiveForm((prev) => prev + 1)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="text-left font-bold text-2xl mb-6">Number</h1>
        <input
          type="number"
          placeholder="Isi dengan nomor..."
          className="input w-full mb-9"
          name="number"
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

function FunctionalFailureStatement(
  setActiveForm: React.Dispatch<React.SetStateAction<number>>,
  setFormData: React.Dispatch<any>
) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formElm = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(formElm))

    formElm.reset()

    setFormData((prev: any) => ({ ...prev, ...data }))

    setActiveForm((prev) => prev + 1)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="text-left font-bold text-2xl mb-6">
          Functional Failure Statement
        </h1>
        <input
          type="text"
          placeholder="Isi dengan text..."
          className="input w-full mb-9"
          name="functionalFailureStatement"
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
