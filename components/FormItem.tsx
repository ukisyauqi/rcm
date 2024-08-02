import { camelToTitleCase } from "@/lib/data"
import { camelCaseToTitleCase } from "@/lib/function"
import React, { useEffect, useState } from "react"

export default function FormItem({
  formStructure,
}: {
  formStructure: {
    type: string
    name: string
    options?: string[]
    values?: string[]
  }
}) {
  const [totalRows, setTotalRows] = useState(1)

  return (
    <div
      className="gap-2 sm:gap-6 group pr-10 -mr-10"
      style={
        formStructure.type === "risk"
          ? { display: "none" }
          : { display: "flex" }
      }
    >
      <label className="font-bold whitespace-nowrap text-left text-xl grow mt-2">
        {camelCaseToTitleCase(formStructure.name)}
      </label>
      <div className="flex flex-col gap-2">
        {formStructure.type === "text" && (
          <>
            {Array.from({ length: totalRows }).map((_, j) => (
              <input
                key={j}
                type="text"
                placeholder="Isi dengan text..."
                className="input w-[18rem]"
                name={formStructure.name + "-" + j}
                required
              />
            ))}
          </>
        )}
        {formStructure.type === "number" && (
          <>
            {Array.from({ length: totalRows }).map((_, j) => (
              <input
                key={j}
                type="number"
                placeholder="Isi dengan nomor..."
                className="input w-[18rem]"
                name={formStructure.name + "-" + j}
                step={0.1}
                required
              />
            ))}
          </>
        )}
        {formStructure.type === "select" && (
          <>
            <select
              className="select w-[18rem]"
              defaultValue={formStructure.options && formStructure.options[0]}
              name={formStructure.name}
              required
            >
              {formStructure.options &&
                formStructure.options.map((o, j) => (
                  <option
                    key={j}
                    value={formStructure.values && formStructure.values[j]}
                  >
                    {o}
                  </option>
                ))}
            </select>
          </>
        )}
        {formStructure.type === "risk" && (
          <>
            <input
              type="text"
              placeholder="Isi dengan text..."
              className="input w-[18rem]"
              name={formStructure.name}
              defaultValue="risk"
              hidden
              required
            />
          </>
        )}
      {formStructure.type !== "select" && (
        <div className="hidden group-hover:block absolute right-1 pr-2 pl-3 pt-[5px]">
          <div
            className="btn btn-sm btn-ghost rounded-full btn-primary text-xl font-bold size-10 flex items-center"
            onClick={() => {
              setTotalRows(totalRows + 1)
            }}
          >
            +
          </div>
        </div>
      )}
      </div>
    </div>
  )
}
