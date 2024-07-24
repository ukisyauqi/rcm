import { createAssetProfile } from "@/lib/assetProfile"
import React from "react"

export default function assetProfilePreview(
  formData: any,
  nextForm: () => void,
  prevForm: () => void
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
          nextForm()
        }}
      >
        Lanjut
      </button>
      <button
        className="btn btn-secondary text-primary w-full text-xl"
        onClick={prevForm}
      >
        Kembali
      </button>
    </>
  )
}
