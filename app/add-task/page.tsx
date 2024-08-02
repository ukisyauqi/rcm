"use client"

import CAHead from "@/components/CAHead"
import FormItem from "@/components/FormItem"
import MTHead from "@/components/MTHead"
import Risk from "@/components/Risk"
import { checkDuplicateSlug } from "@/lib/assetRegister"
import {
  camelCaseToTitleCase,
  findDuplicateIndices,
  getObjValue,
  getObjValuesStartsWith,
  groupByIndices,
  isNumberString,
  normalCasetoKebabCase,
  removeDuplicate,
} from "@/lib/function"
import { getCurrentRisk } from "@/lib/risk"
import submitForm from "@/lib/submitForm"
import React, { useEffect, useState } from "react"
import { useFormStatus } from "react-dom"

export default function Page() {
  const [formIndex, setFormIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  // FORM Asset Profile (AP)
  const [AP, setAP] = useState({})
  function FormAP() {
    const formStructures = [
      {
        type: "select",
        name: "system",
        options: ["Propeller and Shafting", "Diesel Engine"],
        values: ["PROPELLER_DAN_SHAFTING", "DIESEL_ENGINE"],
      },
      {
        type: "select",
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
        name: "equipmentId",
      },
      {
        type: "text",
        name: "equipmentName",
      },
      {
        type: "text",
        name: "drawing",
      },
    ]

    return (
      <form
        className="space-y-6"
        onSubmit={async (e) => {
          e.preventDefault()
          const formElm = e.target as HTMLFormElement
          const data = Object.fromEntries(new FormData(formElm))
          const slug = normalCasetoKebabCase(
            getObjValuesStartsWith(data, "equipmentName")[0]
          )
          const isDuplicate = await checkDuplicateSlug(slug)
          if (isDuplicate) {
            alert(`Sudah ada Equipment Name yang sama.`)
          } else {
            setAP(data)
            setFormIndex(formIndex + 1)
          }
        }}
      >
        <div className="flex items-center gap-6">
          <label className="font-bold whitespace-nowrap text-left text-xl grow">
            Functional Group
          </label>
          <div className="input w-[300px] flex items-center text-sm">
            Propulsion Functional Group
          </div>
        </div>
        {formStructures.map((formStructure, i) => (
          <FormItem key={i} formStructure={formStructure} />
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

  function PreviewAP() {
    const values = Object.values(AP) as string[]
    values.unshift("Propulsion Functional Group")
    const heads = Object.keys(AP).map((v) => camelCaseToTitleCase(v))
    heads.unshift("Functional Group")
    return (
      <>
        <div className="grid grid-rows-4 grid-flow-col">
          {values.map((v, i) => (
            <div key={i} className="flex items-center">
              <p className="text-right font-bold py-2">
                {heads[i].split("-")[0]}
              </p>
              <p className="px-2 text-center font-bold">:</p>
              <p className="text-left mr-8">{v}</p>
            </div>
          ))}
        </div>
        <button
          className="btn btn-primary text-white w-full text-xl mt-10 mb-4"
          onClick={() => {
            setFormIndex(formIndex + 1)
          }}
        >
          Lanjut
        </button>
        <button
          className="btn btn-secondary text-primary w-full text-xl"
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
        >
          Kembali
        </button>
      </>
    )
  }

  // FORM Function Failure (FF)
  const [FF, setFF] = useState({})
  function FormFF() {
    const formStructures = [
      {
        type: "text",
        name: "functionStatement",
      },
      {
        type: "text",
        name: "functionType",
      },
      {
        type: "number",
        name: "number",
      },
      {
        type: "text",
        name: "functionalFailureStatement",
      },
    ]

    return (
      <>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault()
            const formElm = e.target as HTMLFormElement
            const data = Object.fromEntries(new FormData(formElm))
            setFF(data)
            setFormIndex(formIndex + 1)
          }}
        >
          {formStructures.map((formStructure, i) => (
            <FormItem key={i} formStructure={formStructure} />
          ))}
          <button
            type="submit"
            className="btn btn-primary text-white w-full text-xl"
          >
            Lanjut
          </button>
        </form>
        <button
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
          className="btn btn-secondary text-primary w-full text-xl mt-4"
        >
          Kembali
        </button>
      </>
    )
  }

  function PreviewFF() {
    let heads = Object.keys(FF).map((h) =>
      camelCaseToTitleCase(h.split("-")[0])
    )

    const values = groupByIndices(
      Object.values(FF),
      findDuplicateIndices(heads)
    )
    heads = removeDuplicate(heads)

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
          Function and Functional Failure
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
            <>
              {Array.isArray(v) ? (
                <div key={i}>
                  {v.map((subV, j) => (
                    <div key={j}>{subV}</div>
                  ))}
                </div>
              ) : (
                <div
                  className="whitespace-pre-wrap px-2"
                  style={v.length > 20 ? { textAlign: "left" } : {}}
                  key={i}
                >
                  {v}
                </div>
              )}
            </>
          ))}
        </div>
        <button
          className="btn btn-primary text-white w-full text-xl mt-10 mb-4"
          onClick={() => {
            setFormIndex(formIndex + 1)
          }}
        >
          Lanjut
        </button>
        <button
          className="btn btn-secondary text-primary w-full text-xl"
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
        >
          Kembali
        </button>
      </>
    )
  }

  // FORM FMECA (FM)
  const [FM, setFM] = useState({})
  function FormFM() {
    const formStructures = [
      {
        type: "text",
        name: "failureMode",
      },
      {
        type: "text",
        name: "causes",
      },
      {
        type: "number",
        name: "failureCharacteristic",
      },
      {
        type: "text",
        name: "localEffect",
      },
      {
        type: "text",
        name: "functionalFailure",
      },
    ]

    return (
      <>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault()
            const formElm = e.target as HTMLFormElement
            const data = Object.fromEntries(new FormData(formElm))
            setFM(data)
            setFormIndex(formIndex + 1)
          }}
        >
          {formStructures.map((formStructure, i) => (
            <FormItem key={i} formStructure={formStructure} />
          ))}
          <button
            type="submit"
            className="btn btn-primary text-white w-full text-xl"
          >
            Lanjut
          </button>
        </form>
        <button
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
          className="btn btn-secondary text-primary w-full text-xl mt-4"
        >
          Kembali
        </button>
      </>
    )
  }

  function PreviewFM() {
    let heads = Object.keys(FM).map((h) =>
      camelCaseToTitleCase(h.split("-")[0])
    )

    const values = groupByIndices(
      Object.values(FM),
      findDuplicateIndices(heads)
    )
    heads = removeDuplicate(heads)

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
            <>
              {Array.isArray(v) ? (
                <div key={i}>
                  {v.map((subV, j) => (
                    <div key={j}>{subV}</div>
                  ))}
                </div>
              ) : (
                <div
                  className="whitespace-pre-wrap px-2"
                  style={v.length > 20 ? { textAlign: "left" } : {}}
                  key={i}
                >
                  {v}
                </div>
              )}
            </>
          ))}
        </div>
        <button
          className="btn btn-primary text-white w-full text-xl mt-10 mb-4"
          onClick={() => {
            setFormIndex(formIndex + 1)
          }}
        >
          Lanjut
        </button>
        <button
          className="btn btn-secondary text-primary w-full text-xl"
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
        >
          Kembali
        </button>
      </>
    )
  }

  // FORM FMECA-Lanjutan (FL)
  const [FL, setFL] = useState({})
  function FormFL() {
    const formStructures = [
      {
        type: "text",
        name: "endEffect",
      },
      {
        type: "select",
        name: "cof",
        options: ["1", "2", "3", "4", "5"],
        values: ["1", "2", "3", "4", "5"],
      },
      {
        type: "select",
        name: "pof",
        options: ["1", "2", "3", "4", "5"],
        values: ["1", "2", "3", "4", "5"],
      },
      {
        type: "risk",
        name: "currentRisk",
      },
      {
        type: "text",
        name: "failureDetection",
      },
      {
        type: "text",
        name: "proposedBasicMNTC",
      },
    ]

    return (
      <>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault()
            const formElm = e.target as HTMLFormElement
            const data = Object.fromEntries(new FormData(formElm))
            setFL(data)
            setFormIndex(formIndex + 1)
          }}
        >
          {formStructures.map((formStructure, i) => (
            <FormItem key={i} formStructure={formStructure} />
          ))}
          <button
            type="submit"
            className="btn btn-primary text-white w-full text-xl"
          >
            Lanjut
          </button>
        </form>
        <button
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
          className="btn btn-secondary text-primary w-full text-xl mt-4"
        >
          Kembali
        </button>
      </>
    )
  }

  function PreviewFL() {
    let heads = Object.keys(FL).map((h) =>
      camelCaseToTitleCase(h.split("-")[0])
    )
    heads.unshift("Failure Mode")

    let values = groupByIndices(Object.values(FL), findDuplicateIndices(heads))
    values = [getObjValue(FM, "failureMode-0"), ...values]

    heads = removeDuplicate(heads)

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
          FMECA Lanjutan
        </h1>

        <div
          className={`grid gap-3 text-center items-center`}
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
            <>
              {Array.isArray(v) ? (
                <div key={i}>
                  {v.map((subV, j) => (
                    <div key={j}>{subV}</div>
                  ))}
                </div>
              ) : (
                <>
                  {v === "risk" ? (
                    <>
                      <Risk cof={values[i - 2]} pof={values[i - 1]} />
                    </>
                  ) : (
                    <>
                      <div
                        className="whitespace-pre-wrap px-2"
                        style={v.length > 20 ? { textAlign: "left" } : {}}
                        key={i}
                      >
                        {v}
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          ))}
        </div>
        <button
          className="btn btn-primary text-white w-full text-xl mt-10 mb-4"
          onClick={() => {
            setFormIndex(formIndex + 1)
            // console.log(FM)
          }}
        >
          Lanjut
        </button>
        <button
          className="btn btn-secondary text-primary w-full text-xl"
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
        >
          Kembali
        </button>
      </>
    )
  }

  // FORM Maintenance Task Selection (MT)
  const [MT, setMT] = useState({})
  function FormMT() {
    const formStructures = [
      {
        type: "text",
        name: "proposedActions",
      },
      {
        type: "select",
        name: "projPof",
        options: ["1", "2", "3", "4", "5"],
        values: ["1", "2", "3", "4", "5"],
      },
    ]

    return (
      <>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault()
            const formElm = e.target as HTMLFormElement
            const data = Object.fromEntries(new FormData(formElm))
            setMT(data)
            setFormIndex(formIndex + 1)
          }}
        >
          {formStructures.map((formStructure, i) => (
            <FormItem key={i} formStructure={formStructure} />
          ))}
          <button
            type="submit"
            className="btn btn-primary text-white w-full text-xl"
          >
            Lanjut
          </button>
        </form>
        <button
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
          className="btn btn-secondary text-primary w-full text-xl mt-4"
        >
          Kembali
        </button>
      </>
    )
  }

  function PreviewMT() {
    let heads = Object.keys(MT).map((h) =>
      camelCaseToTitleCase(h.split("-")[0])
    )
    let values = groupByIndices(Object.values(MT), findDuplicateIndices(heads))

    values = [
      getObjValue(FM, "failureMode-0"),
      getObjValue(FL, "cof"),
      getObjValue(FL, "pof"),
      "risk",
      ...values,
      "projRisk",
    ]

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
          className={`grid gap-3 text-center items-center`}
          style={{ gridTemplateColumns: `repeat(8, auto)` }}
        >
          <MTHead />

          <div>1</div>
          {values.map((v, i) => (
            <>
              {Array.isArray(v) ? (
                <div key={i}>
                  {v.map((subV, j) => (
                    <div key={j}>{subV}</div>
                  ))}
                </div>
              ) : (
                <>
                  {v === "risk" ? (
                    <>
                      <Risk cof={values[i - 2]} pof={values[i - 1]} />
                    </>
                  ) : v === "projRisk" ? (
                    <>
                      <Risk cof={values[i - 5]} pof={values[i - 1]} />
                    </>
                  ) : (
                    <>
                      <div
                        className="whitespace-pre-wrap px-2"
                        style={v.length > 20 ? { textAlign: "left" } : {}}
                        key={i}
                      >
                        {v}
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          ))}
        </div>
        <button
          className="btn btn-primary text-white w-full text-xl mt-10 mb-4"
          onClick={() => {
            setFormIndex(formIndex + 1)
          }}
        >
          Lanjut
        </button>
        <button
          className="btn btn-secondary text-primary w-full text-xl"
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
        >
          Kembali
        </button>
      </>
    )
  }

  // FORM Category A (CA)
  const [CA, setCA] = useState({})
  function FormCA() {
    const formStructures = [
      {
        type: "text",
        name: "task",
      },
      {
        type: "text",
        name: "taskType",
      },
      {
        type: "number",
        name: "causeNumber",
      },
      {
        type: "text",
        name: "frequency",
      },
      {
        type: "text",
        name: "procedurNo",
      },
      {
        type: "text",
        name: "comments",
      },
    ]

    return (
      <>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault()
            const formElm = e.target as HTMLFormElement
            const data = Object.fromEntries(new FormData(formElm))
            setCA(data)
            setFormIndex(formIndex + 1)
          }}
        >
          {formStructures.map((formStructure, i) => (
            <FormItem key={i} formStructure={formStructure} />
          ))}
          <button
            type="submit"
            className="btn btn-primary text-white w-full text-xl"
          >
            Lanjut
          </button>
        </form>
        <button
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
          className="btn btn-secondary text-primary w-full text-xl mt-4"
        >
          Kembali
        </button>
      </>
    )
  }

  function PreviewCA() {
    let heads = Object.keys(CA).map((h) =>
      camelCaseToTitleCase(h.split("-")[0])
    )
    let values = groupByIndices(Object.values(CA), findDuplicateIndices(heads))

    values = [
      ...values.slice(0, 3),
      `risk-${getObjValue(FL, "cof")}-${getObjValue(FL, "pof")}`,
      `risk-${getObjValue(FL, "cof")}-${getObjValue(MT, "projPof")}`,
      ...values.slice(3),
    ]

    return (
      <>
        <h1
          className="my-8 border rounded-xl w-full p-4 text-center font-bold text-xl"
          style={{
            backgroundColor: "#fee5f0",
            color: "#FF4191",
            borderColor: "#FF4191",
          }}
        >
          Summary of Maintenance Task
        </h1>
        <h1
          className="my-8 border rounded-xl w-full p-4 text-center font-bold text-xl"
          style={{
            backgroundColor: "#063265",
            color: "#ffffff",
            borderColor: "#063265",
          }}
        >
          Category A
        </h1>

        <div
          className={`grid gap-3 text-center items-center`}
          style={{ gridTemplateColumns: `repeat(8, auto)` }}
        >
          <CAHead />

          {values.map((v, i) => (
            <>
              {Array.isArray(v) ? (
                <div key={i}>
                  {v.map((subV, j) => (
                    <div key={j}>{subV}</div>
                  ))}
                </div>
              ) : (
                <>
                  {v === "risk" ? (
                    <>
                      <Risk cof={values[i - 2]} pof={values[i - 1]} />
                    </>
                  ) : v === "projRisk" ? (
                    <>
                      <Risk cof={values[i - 5]} pof={values[i - 1]} />
                    </>
                  ) : v.startsWith("risk") ? (
                    <>
                      <Risk cof={v.split("-")[1]} pof={v.split("-")[1]} />
                    </>
                  ) : (
                    <>
                      <div
                        className="whitespace-pre-wrap px-2"
                        style={v.length > 20 ? { textAlign: "left" } : {}}
                        key={i}
                      >
                        {v}
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          ))}
        </div>
        <button
          className="btn btn-primary text-white w-full text-xl mt-10 mb-4"
          onClick={() => {
            setFormIndex(formIndex + 1)
          }}
        >
          Lanjut
        </button>
        <button
          className="btn btn-secondary text-primary w-full text-xl"
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
        >
          Kembali
        </button>
      </>
    )
  }

  // FORM Category B (CB)
  const [CB, setCB] = useState({})
  function FormCB() {
    const formStructures = [
      {
        type: "text",
        name: "task",
      },
      {
        type: "text",
        name: "taskType",
      },
      {
        type: "number",
        name: "causeNumber",
      },
      {
        type: "text",
        name: "frequency",
      },
      {
        type: "text",
        name: "procedurNo",
      },
      {
        type: "text",
        name: "comments",
      },
    ]

    return (
      <>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault()
            const formElm = e.target as HTMLFormElement
            const data = Object.fromEntries(new FormData(formElm))
            setCB(data)
            setFormIndex(formIndex + 1)
          }}
        >
          {formStructures.map((formStructure, i) => (
            <FormItem key={i} formStructure={formStructure} />
          ))}
          <button
            type="submit"
            className="btn btn-primary text-white w-full text-xl"
          >
            Lanjut
          </button>
        </form>
        <button
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
          className="btn btn-secondary text-primary w-full text-xl mt-4"
        >
          Kembali
        </button>
      </>
    )
  }

  function PreviewCB() {
    let heads = Object.keys(CB).map((h) =>
      camelCaseToTitleCase(h.split("-")[0])
    )
    let values = groupByIndices(Object.values(CB), findDuplicateIndices(heads))

    values = [
      ...values.slice(0, 3),
      `risk-${getObjValue(FL, "cof")}-${getObjValue(FL, "pof")}`,
      `risk-${getObjValue(FL, "cof")}-${getObjValue(MT, "projPof")}`,
      ...values.slice(3),
    ]

    return (
      <>
        <h1
          className="my-8 border rounded-xl w-full p-4 text-center font-bold text-xl"
          style={{
            backgroundColor: "#fee5f0",
            color: "#FF4191",
            borderColor: "#FF4191",
          }}
        >
          Summary of Maintenance Task
        </h1>
        <h1
          className="my-8 border rounded-xl w-full p-4 text-center font-bold text-xl"
          style={{
            backgroundColor: "#063265",
            color: "#ffffff",
            borderColor: "#063265",
          }}
        >
          Category B
        </h1>

        <div
          className={`grid gap-3 text-center items-center`}
          style={{ gridTemplateColumns: `repeat(8, auto)` }}
        >
          <CAHead />

          {values.map((v, i) => (
            <>
              {Array.isArray(v) ? (
                <div key={i}>
                  {v.map((subV, j) => (
                    <div key={j}>{subV}</div>
                  ))}
                </div>
              ) : (
                <>
                  {v === "risk" ? (
                    <>
                      <Risk cof={values[i - 2]} pof={values[i - 1]} />
                    </>
                  ) : v === "projRisk" ? (
                    <>
                      <Risk cof={values[i - 5]} pof={values[i - 1]} />
                    </>
                  ) : v.startsWith("risk") ? (
                    <>
                      <Risk cof={v.split("-")[1]} pof={v.split("-")[1]} />
                    </>
                  ) : (
                    <>
                      <div
                        className="whitespace-pre-wrap px-2"
                        style={v.length > 20 ? { textAlign: "left" } : {}}
                        key={i}
                      >
                        {v}
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          ))}
        </div>
        <button
          className="btn btn-primary text-white w-full text-xl mt-10 mb-4"
          onClick={() => {
            setFormIndex(formIndex + 1)
          }}
        >
          Lanjut
        </button>
        <button
          className="btn btn-secondary text-primary w-full text-xl"
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
        >
          Kembali
        </button>
      </>
    )
  }

  // FORM Category C (CC)
  const [CC, setCC] = useState({})
  function FormCC() {
    const formStructures = [
      {
        type: "text",
        name: "task",
      },
      {
        type: "text",
        name: "taskType",
      },
      {
        type: "number",
        name: "causeNumber",
      },
      {
        type: "text",
        name: "frequency",
      },
      {
        type: "text",
        name: "procedurNo",
      },
      {
        type: "text",
        name: "comments",
      },
    ]

    return (
      <>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault()
            const formElm = e.target as HTMLFormElement
            const data = Object.fromEntries(new FormData(formElm))
            setCC(data)
            setFormIndex(formIndex + 1)
          }}
        >
          {formStructures.map((formStructure, i) => (
            <FormItem key={i} formStructure={formStructure} />
          ))}
          <button
            type="submit"
            className="btn btn-primary text-white w-full text-xl"
          >
            Lanjut
          </button>
        </form>
        <button
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
          className="btn btn-secondary text-primary w-full text-xl mt-4"
        >
          Kembali
        </button>
      </>
    )
  }

  function PreviewCC() {
    let heads = Object.keys(CC).map((h) =>
      camelCaseToTitleCase(h.split("-")[0])
    )
    let values = groupByIndices(Object.values(CC), findDuplicateIndices(heads))

    values = [
      ...values.slice(0, 3),
      `risk-${getObjValue(FL, "cof")}-${getObjValue(FL, "pof")}`,
      `risk-${getObjValue(FL, "cof")}-${getObjValue(MT, "projPof")}`,
      ...values.slice(3),
    ]

    return (
      <>
        <h1
          className="my-8 border rounded-xl w-full p-4 text-center font-bold text-xl"
          style={{
            backgroundColor: "#fee5f0",
            color: "#FF4191",
            borderColor: "#FF4191",
          }}
        >
          Summary of Maintenance Task
        </h1>
        <h1
          className="my-8 border rounded-xl w-full p-4 text-center font-bold text-xl"
          style={{
            backgroundColor: "#063265",
            color: "#ffffff",
            borderColor: "#063265",
          }}
        >
          Category C
        </h1>

        <div
          className={`grid gap-3 text-center items-center`}
          style={{ gridTemplateColumns: `repeat(8, auto)` }}
        >
          <CAHead />

          {values.map((v, i) => (
            <>
              {Array.isArray(v) ? (
                <div key={i}>
                  {v.map((subV, j) => (
                    <div key={j}>{subV}</div>
                  ))}
                </div>
              ) : (
                <>
                  {v === "risk" ? (
                    <>
                      <Risk cof={values[i - 2]} pof={values[i - 1]} />
                    </>
                  ) : v === "projRisk" ? (
                    <>
                      <Risk cof={values[i - 5]} pof={values[i - 1]} />
                    </>
                  ) : v.startsWith("risk") ? (
                    <>
                      <Risk cof={v.split("-")[1]} pof={v.split("-")[1]} />
                    </>
                  ) : (
                    <>
                      <div
                        className="whitespace-pre-wrap px-2"
                        style={v.length > 20 ? { textAlign: "left" } : {}}
                        key={i}
                      >
                        {v}
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          ))}
        </div>
        <button
          className="btn btn-primary text-white w-full text-xl mt-10 mb-4"
          onClick={() => {
            setLoading(true)
            submitForm({
              AP,
              FF,
              FM,
              FL,
              MT,
              CA,
              CB,
              CC,
            })
          }}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Lanjut"}
        </button>
        <button
          className="btn btn-secondary text-primary w-full text-xl"
          onClick={() => {
            setFormIndex(formIndex - 1)
          }}
        >
          Kembali
        </button>
      </>
    )
  }

  return [
    // assetProfile
    <div key={0}>
      <FormAP />
    </div>,
    <div key={1}>
      <PreviewAP />
    </div>,
    <div key={2}>
      <FormFF />
    </div>,
    <div key={3}>
      <PreviewFF />
    </div>,
    <div key={4}>
      <FormFM />
    </div>,
    <div key={5}>
      <PreviewFM />
    </div>,
    <div key={6}>
      <FormFL />
    </div>,
    <div key={7}>
      <PreviewFL />
    </div>,
    <div key={8}>
      <FormMT />
    </div>,
    <div key={9}>
      <PreviewMT />
    </div>,
    <div key={10}>
      <FormCA />
    </div>,
    <div key={11}>
      <PreviewCA />
    </div>,
    <div key={12}>
      <FormCB />
    </div>,
    <div key={13}>
      <PreviewCB />
    </div>,
    <div key={14}>
      <FormCC />
    </div>,
    <div key={15}>
      <PreviewCC />
    </div>,
  ][formIndex]
}
