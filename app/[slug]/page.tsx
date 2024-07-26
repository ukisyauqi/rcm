import { getDataWithSlug } from "@/lib/data"
import { useState } from "react"
export default function Page({ params }: { params: { slug: string } }) {
  const data = getDataWithSlug(params.slug)

  const firstCategory =
    data?.tables.filter((t) => t.title.includes("Category"))[0]?.title || ""

  // const headFlatten = data?.tables.map((t) => t.head.flat().flat())
  // const riskIndex = headFlatten?.map((h) => h.findIndex((d) => d.includes("Risk")))

  // console.log(headFlatten)
  // console.log(riskIndex)

  return (
    <>
      <div className="flex justify-around">
        {/* head info tabel*/}
        <table>
          <tbody>
            <tr>
              <td className="text-right font-bold py-2">Functional Group</td>
              <td className="px-2 text-center font-bold">:</td>
              <td>{data?.specs.functionalGroup}</td>
            </tr>
            <tr>
              <td className="text-right font-bold py-2">System</td>
              <td className="px-2 text-center font-bold">:</td>
              <td>{data?.specs.system}</td>
            </tr>
            <tr>
              <td className="text-right font-bold py-2">Subsystem</td>
              <td className="px-2 text-center font-bold">:</td>
              <td>{data?.specs.subsystem}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td className="text-right font-bold py-2">Equipment ID</td>
              <td className="px-2 text-center font-bold">:</td>
              <td>{data?.specs.equipmentID}</td>
            </tr>
            <tr>
              <td className="text-right font-bold py-2">Equipment Name</td>
              <td className="px-2 text-center font-bold">:</td>
              <td>{data?.specs.equipmentName}</td>
            </tr>
            <tr>
              <td className="text-right font-bold py-2">Drawing</td>
              <td className="px-2 text-center font-bold">:</td>
              <td>{data?.specs.drawing}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {data?.tables.map((d, i) => (
        <div key={i}>
          {d.title === firstCategory && (
            <h1
              className="my-8 border rounded-xl w-full p-4 text-center font-bold text-xl"
              style={{
                backgroundColor: "#ffe5f0",
                color: "#FF4191",
                borderColor: "#FF4191",
              }}
            >
              Summary of Maintenance Task
            </h1>
          )}
          <h1
            className="my-8 border rounded-xl w-full p-4 text-center font-bold text-xl"
            style={{
              backgroundColor: d.backgroundColor,
              color: d.borderColor,
              borderColor: d.borderColor,
            }}
          >
            {d.title}
          </h1>

          {/* table */}
          <div className="overflow-x-auto">
            <table className="w-[1500px]">
              {/* header */}
              <thead>
                {d.headRow == 1 ? (
                  <tr className="whitespace-nowrap">
                    {d.head.map((h, i) => (
                      <th className="p-1.5 font-normal" key={i}>
                        <div className="bg-base-100 p-2 px-6 rounded-lg border border-gray-300 text-center">
                          {h}
                        </div>
                      </th>
                    ))}
                  </tr>
                ) : (
                  d.headRow == 2 && (
                    <>
                      <tr className="whitespace-nowrap">
                        {d.head.map((h, i) =>
                          typeof h == "string" ? (
                            <>
                              <th
                                className="p-1.5 font-normal"
                                key={i}
                                rowSpan={2}
                              >
                                <div className="bg-base-100 p-2 px-6 rounded-lg border border-gray-300 h-24 flex items-center justify-center text-center">
                                  {h}
                                </div>
                              </th>
                            </>
                          ) : (
                            <>
                              <th
                                className="p-1.5 font-normal"
                                key={i}
                                colSpan={h[1].length}
                              >
                                <div className="bg-[#dee5ed] p-2 px-6 rounded-lg border border-gray-300 text-center">
                                  {h[0]}
                                </div>
                              </th>
                            </>
                          )
                        )}
                      </tr>
                      <tr className="whitespace-nowrap">
                        {d.head.map((h, i) => {
                          if (typeof h == "string") return false
                          else if (Array.isArray(h[1])) {
                            return h[1].map((subHead, i) => (
                              <th className="p-1.5 font-normal" key={i}>
                                <div className="bg-base-100 p-2 px-6 rounded-lg border border-gray-300 text-center">
                                  {subHead}
                                </div>
                              </th>
                            ))
                          }
                        })}
                      </tr>
                    </>
                  )
                )}
              </thead>

              <tbody className="text-center">
                {d.body.map((b, i) => (
                  <tr key={i} className="border-b">
                    {b.map((cell, j) => (
                      <td className="p-2" key={j}>
                        {typeof cell === "string" ? (
                          <>
                            {!isNaN(parseInt(cell)) &&
                            (typeof b[j + 1] == "object" &&
                            (b[j + 1] as any).type === "class") ||
                            (typeof b[j + 2] == "object" &&
                            (b[j + 2] as any).type === "class") ? (
                              <input
                                type="number"
                                defaultValue={parseInt(cell)}
                                className="w-10 relative left-4"
                              />
                            ) : (
                              <>
                                <p
                                  className={`${
                                    cell.length > 30 && "text-start"
                                  }`}
                                >
                                  {cell}
                                </p>
                              </>
                            )}
                          </>
                        ) : Array.isArray(cell) ? (
                          cell.map((subCell, k) => (
                            <p
                              key={k}
                              className={`
                                min-h-20 flex items-center
                                ${
                                  cell.find((c) => c.length > 30)
                                    ? "justify-start text-start"
                                    : "justify-center"
                                }
                              `}
                            >
                              {subCell}
                            </p>
                          ))
                        ) : (
                          typeof cell === "object" &&
                          (cell.type === "class" ? (
                            <RiskComp text={cell.text[0]} />
                          ) : cell.type === "number" ? (
                            <ol className="list-decimal text-left pl-8">
                              {cell.text.map((t, l) => (
                                <li key={l}>{t}</li>
                              ))}
                            </ol>
                          ) : (
                            cell.type === "dot" && (
                              <ul className="list-disc text-left pl-8">
                                {cell.text.map((t, l) => (
                                  <li key={l}>{t}</li>
                                ))}
                              </ul>
                            )
                          ))
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  )
}

function RiskComp({ text }: { text: string }) {
  return text === "Rendah-Menengah" ? (
    <div className="bg-[#1caf51] py-10 text-white rounded-lg font-semibold">
      {text}
    </div>
  ) : text === "Menengah" ? (
    <div className="bg-[#fddb20] py-10 rounded-lg font-semibold">{text}</div>
  ) : text === "Tinggi" ? (
    <div className="bg-[#fe0000] py-10 rounded-lg font-semibold text-white">
      {text}
    </div>
  ) : text === "Rendah" ? (
    <div className="bg-[#5071f3] py-10 rounded-lg text-white font-semibold">
      {text}
    </div>
  ) : (
    text === "Menengah-Tinggi" && (
      <div className="bg-[#fc8343] py-10 rounded-lg text-white font-semibold">
        {text}
      </div>
    )
  )
}
