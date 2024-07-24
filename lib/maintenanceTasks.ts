'use server'

import prisma from "@/db"
import { z } from "zod"
import { getCurrentRisk } from "./risk"

const MaintenanceTaskSchema = z.object({
  proposedAction: z.string(),
  projPof: z.number(),
  projRisk: z.string(),
  assetProfileId: z.string(),
})

export async function createMaintenanceTask(data: Record<string, string>) {
  const { cof, projPof } = data

  const projRisk = getCurrentRisk(parseInt(cof), parseInt(projPof))

  const validatedFields = MaintenanceTaskSchema.safeParse({
    ...data,
    projRisk
  })

  console.log(validatedFields)

  if (!validatedFields.success) throw new Error(validatedFields.error.toString())

  await prisma.maintenanceTask.create({
    data: validatedFields.data
  })
}

export async function getMaintenanceTasks() {
  try {
    const maintenanceTasks =
      await prisma.maintenanceTask.findMany({
        orderBy: {
          createdAt: "desc",
        },
      })

    return maintenanceTasks
  } catch (error) {
    throw new Error("Error Loading Data")
  }
}

export async function getMaintenanceTaskById(id: number) {
  try {
    const maintenanceTask =
      await prisma.maintenanceTask.findUnique({
        where: { id },
      })

    if (!maintenanceTask) throw new Error("No Data Found")

    return maintenanceTask
  } catch (error) {
    throw new Error("Error Loading Data")
  }
}