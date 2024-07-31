import React from "react"

export default function MTHead() {
  const heads = [
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
  ]
  return (
    <>
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
    </>
  )
}
