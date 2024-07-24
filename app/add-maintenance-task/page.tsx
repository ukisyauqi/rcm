"use client"
import FormLayout from "@/components/layout/FormLayout"
import { createAssetProfile } from "@/lib/assetProfile"
import React, { useState } from "react"
import assetProfile from "./_components/assetProfile"
import assetProfilePreview from "./_components/assetProfilePreview"

export default function Page() {
  const [activeForm, setActiveForm] = useState(0)
  const [formData, setFormData] = useState<any>({})

  function nextForm() {
    setActiveForm(activeForm + 1)
  }

  function prevForm() {
    setActiveForm(activeForm - 1)
  }

  const forms = [
    assetProfile(nextForm, setFormData),
    assetProfilePreview(formData, nextForm, prevForm),
  ]

  return <FormLayout>{forms[activeForm]}</FormLayout>
}
