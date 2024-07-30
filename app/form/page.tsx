"use client"
import FormLayout from "@/components/layout/FormLayout"
import useQueryParams from "@/hooks/useQueryParams"
import React, { useState } from "react"

export default function Page() {
  const [activeForm, setActiveForm] = useState(0)
  const { updateQP, getAllQP, getQP } = useQueryParams()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formElm = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(formElm))

    updateQP(data)

    setActiveForm(activeForm + 1)
  }

  function Form1AssetProfile() {
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

  const forms = [
    <div key={1}>asd</div>,
    <div key={2}>asd</div>,
    <div key={3}>asd</div>,
  ]

  return <FormLayout>{forms[activeForm]}</FormLayout>
}
