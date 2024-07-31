"use client"
import FormLayout from "@/components/layout/FormLayout"
import { createAssetProfile } from "@/lib/assetProfile"
import { redirect } from "next/navigation"
import React, { useState } from "react"

export default function Page() {
  const [activeForm, setActiveForm] = useState(0)
  const [formData, setFormData] = useState<any>({})

  const forms = [
    AssetProfile(setActiveForm, setFormData),
    AssetProfilePreview(formData, setActiveForm),
  ]

  return <FormLayout>{forms[activeForm]}</FormLayout>
}

function AssetProfile(
  setActiveForm: React.Dispatch<React.SetStateAction<number>>,
  setFormData: React.Dispatch<React.SetStateAction<{}>>
) {
  const formStructure = [
    {
      type: "select",
      label: "System",
      name: "system",
      options: ["Propeller and Shafting", "Diesel Engine"],
      values: ["PROPELLER_DAN_SHAFTING", "DIESEL_ENGINE"],
    },
    {
      type: "select",
      label: "Subsystem",
      name: "subsystem",
      options: [
        "Propeller",
        "Shafting",
        "Cooling System",
        "Compressed Air System",
        "Fuel Oil System",
        "Lubricating Oil System",
      ],
      values: [
        "PROPELLER",
        "SHAFTING",
        "COOLING_SYSTEM",
        "COMPRESSED_AIR_SYSTEM",
        "FUEL_OIL_SYSTEM",
        "LUBRICATING_OIL_SYSTEM",
      ],
    },
    {
      type: "select",
      label: "Sub-Subsystem",
      name: "subSubsystem",
      options: [
        "Main Engine Open Loop System",
        "Main Engine Close Loop System",
        "Auxiliary Engine System",
        "Emergency Generator System",
        "Air Handling Unit System",
        "Starting Main Engine",
        "Fuel Oil Transfer System",
        "Fuel Oil Supply System",
        "Fuel Oil Supply System Aux. Engine",
        "Main Lubricating Oil System",
        "Lub. Oil Purifiying System",
        "Gearbox Lube Oil Transfer System",
      ],
      values: [
        "MAIN_ENGINE_OPEN_LOOP_SYSTEM",
        "MAIN_ENGINE_OPEN_CLOSE_SYSTEM",
        "AUXILIARY_ENGINE_SYSTEM",
        "EMERGENCY_GENERATOR_SYSTEM",
        "AIR_HANDLING_UNIT_SYSTEM",
        "STARTING_MAIN_ENGINE",
        "FUEL_OIL_TRANSFER_SYSTEM",
        "FUEL_OIL_SUPPLY_SYSTEM",
        "FUEL_OIL_SUPPLY_SYSTEM_AUX_ENGINE",
        "MAIN_LUBRICATING_OIL_SYSTEM",
        "LUBRICATING_OIL_PURIFYING_SYSTEM",
        "GEARBOX_LUBE_OIL_TRANSFER_SYSTEM",
      ],
    },
    {
      type: "text",
      label: "Equipment ID",
      name: "equipmentId",
      options: [],
      values: [],
    },
    {
      type: "text",
      label: "Equipment Name",
      name: "equipmentName",
      options: [],
      values: [],
    },
    {
      type: "text",
      label: "Drawing",
      name: "drawing",
      options: [],
      values: [],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formElm = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(formElm))

    setFormData(data)

    setActiveForm((prev) => prev + 1)
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex items-center gap-6">
        <label className="font-bold whitespace-nowrap text-left text-xl grow">
          Functional Group
        </label>
        <div className="input w-[300px] flex items-center text-sm">
          Propulsion Functional Group
        </div>
      </div>
      {formStructure.map((f, i) => (
        <div key={i} className="flex items-center gap-6">
          {f.type === "text" && (
            <>
              <label className="font-bold whitespace-nowrap text-left text-xl grow">
                {f.label}
              </label>
              <input
                type="text"
                placeholder="Isi..."
                className="input w-[300px]"
                name={f.name}
                required
              />
            </>
          )}
          {f.type === "select" && (
            <>
              <label className="font-bold whitespace-nowrap text-left text-xl grow">
                {f.label}
              </label>
              <select
                className="select w-[300px]"
                defaultValue={f.options[0]}
                name={f.name}
                required
              >
                {f.options.map((o, j) => (
                  <option key={j} value={f.values[j]}>
                    {o}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="btn btn-primary text-white w-full text-xl"
      >
        Lanjut
      </button>
    </form>
  )
}

function AssetProfilePreview(
  formData: any,
  setActiveForm: React.Dispatch<React.SetStateAction<number>>
) {
  return (
    <>
      <div className="flex gap-20">
        <table>
          <tbody>
            <tr>
              <td className="text-right font-bold py-2">Functional Group</td>
              <td className="px-2 text-center font-bold">:</td>
              <td className="text-left">Functional Group</td>
            </tr>
            <tr>
              <td className="text-right font-bold py-2">System</td>
              <td className="px-2 text-center font-bold">:</td>
              <td className="text-left">{formData.system}</td>
            </tr>
            <tr>
              <td className="text-right font-bold py-2">Subsystem</td>
              <td className="px-2 text-center font-bold">:</td>
              <td className="text-left">{formData.subsystem}</td>
            </tr>
            <tr>
              <td className="text-right font-bold py-2">Subsystem</td>
              <td className="px-2 text-center font-bold">:</td>
              <td className="text-left">{formData.subSubsystem}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td className="text-right font-bold py-2">Equipment ID</td>
              <td className="px-2 text-center font-bold">:</td>
              <td className="text-left min-w-24">{formData.equipmentId}</td>
            </tr>
            <tr>
              <td className="text-right font-bold py-2">Equipment Name</td>
              <td className="px-2 text-center font-bold">:</td>
              <td className="text-left min-w-24">{formData.equipmentName}</td>
            </tr>
            <tr>
              <td className="text-right font-bold py-2">Drawing</td>
              <td className="px-2 text-center font-bold">:</td>
              <td className="text-left min-w-24">{formData.drawing}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-primary text-white w-full text-xl mt-10 mb-4"
        onClick={async () => {
          await createAssetProfile(formData)
        }}
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
