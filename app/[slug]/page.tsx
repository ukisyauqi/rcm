import { getDataWithSlug } from "@/lib/data"

export default function Page({ params }: { params: { slug: string } }) {
  const data = getDataWithSlug(params.slug)
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
          {d.title == "Category B" && (
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
                    {b.map((cell, i) => (
                      <td className="p-2" key={i}>
                        {typeof cell === "string" ? (
                          <p className={`${cell.length > 30 && "text-start"}`}>
                            {cell}
                          </p>
                        ) : Array.isArray(cell) ? (
                          cell.map((subCell, i) => (
                            <p
                              key={i}
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
                            cell.text[0] === "Rendah-Menengah" ? (
                              <div className="bg-[#1caf51] py-10 text-white rounded-lg font-semibold">
                                {cell.text[0]}
                              </div>
                            ) : cell.text[0] === "Menengah" ? (
                              <div className="bg-[#fddb20] py-10 rounded-lg font-semibold">
                                {cell.text[0]}
                              </div>
                            ) : (
                              cell.text[0] === "Rendah" && (
                                <div className="bg-[#5071f3] py-10 rounded-lg text-white font-semibold">
                                  {cell.text[0]}
                                </div>
                              )
                            )
                          ) : cell.type === "number" ? (
                            <ol className="list-decimal text-left pl-8">
                              {cell.text.map((t, i) => (
                                <li key={i}>{t}</li>
                              ))}
                            </ol>
                          ) : (
                            cell.type === "dot" && (
                              <ul className="list-disc text-left pl-8">
                                {cell.text.map((t, i) => (
                                  <li key={i}>{t}</li>
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
