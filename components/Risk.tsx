import { isNumberString } from "@/lib/function"
import { getCurrentRisk, riskStyles } from "@/lib/risk"
import React from "react"

export default function Risk({ cof, pof }: { cof: any; pof: any }) {

  if (!isNumberString(cof) && !isNumberString(pof)) return

  const riskIndex = getCurrentRisk(parseInt(cof), parseInt(pof))

  const risk = riskStyles[riskIndex-1]
  return (
    <div
      className="p-4 rounded-lg"
      style={{
        backgroundColor: risk.backgroundColor,
        color: risk.color,
      }}
    >
      {risk.text}
    </div>
  );
}
