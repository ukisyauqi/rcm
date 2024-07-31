import React from "react"

export default function CAHead() {
  const heads = [
    { text: "Task", rowSpan: 2, colSpan: 1 },
    { text: "Task Type", rowSpan: 2, colSpan: 1 },
    { text: "Cause Number", rowSpan: 2, colSpan: 1 },
    { text: "Risk", rowSpan: 1, colSpan: 2 },
    { text: "Frequency", rowSpan: 2, colSpan: 1 },
    { text: "Procedure No.", rowSpan: 2, colSpan: 1 },
    { text: "Comments", rowSpan: 2, colSpan: 1 },
    { text: "Current", rowSpan: 1, colSpan: 1 },
    { text: "Projected", rowSpan: 1, colSpan: 1 },
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
            backgroundColor: n.colSpan === 2 ? "#dee5ed" : "",
          }}
        >
          {n.text}
        </div>
      ))}
    </>
  )
}
