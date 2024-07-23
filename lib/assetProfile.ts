import { PrismaClient } from "@prisma/client"
import { z } from "zod"

const prisma = new PrismaClient

const AssetProfileSchema = z.object({
  system: z.enum([
    "PROPELLER_DAN_SHAFTING",
    "DIESEL_ENGINE"
  ]),
  subsystem: z.enum([
    "PROPELLER",
    "SHAFTING",
    "COOLING_SYSTEM",
    "COMPRESSED_AIR_SYSTEM",
    "FUEL_OIL_SYSTEM",
    "LUBRICATING_OIL_SYSTEM"
  ]),
  subSubsystem: z.enum([
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
    "GEARBOX_LUBE_OIL_TRANSFER_SYSTEM"
  ]),
  equipmentId: z.string(),
  equipmentName: z.string(),
  drawing: z.string(),
})

export async function createAssetProfile(formData: FormData) {

  const validatedFields = AssetProfileSchema.safeParse({
    system: formData.get("system"),
    subsystem: formData.get("subsystem"),
    subSubsystem: formData.get("subsubsystem"),
    equipmentId: formData.get("equipmentId"),
    equipmentName: formData.get("equipmentName"),
    drawing: formData.get("drawing"),
  })

  if (!validatedFields.success) throw new Error(validatedFields.error.toString())

  await prisma.assetProfile.create({
    data: validatedFields.data
  })
}

export async function getAssetProfile() {
  try {
    const assetProfiles = await prisma.assetProfile.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })

    return assetProfiles
  } catch (error) {
    throw new Error("Error Loading Data") 
  }
}

export async function getAssetProfileById(id: string) {
  try {
    const assetProfile = await prisma.assetProfile.findUnique({
      where : { id }
    })

    if (!assetProfile) throw new Error("No Data Found")

    return assetProfile
  } catch (error) {
    throw new Error("Error Loading Data") 
  }
}