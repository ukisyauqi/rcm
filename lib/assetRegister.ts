"use server"

import { Prisma, PrismaClient, Subsystem } from "@prisma/client"
import { z } from "zod"

const prisma = new PrismaClient()

const ContentItemSchema = z.object({
  type: z.string().optional(),
  text: z.array(z.string()).optional(),
})

const TableBodyItemSchema = z.union([
  z.string(),
  z.number(),
  ContentItemSchema,
  z.array(z.string()),
])

const TableSchema = z.object({
  title: z.string(),
  backgroundColor: z.string(),
  borderColor: z.string(),
  headRow: z.number(),
  head: z.array(z.union([z.string(), z.array(z.string())])),
  body: z.array(z.array(TableBodyItemSchema)),
})

const AssetRegisterSchema = z.object({
  slug: z.string(),
  type: z.string(),
  specs: z.object({
    functionalGroup: z.string(),
    system: z.string(),
    subsystem: z.string(),
    equipmentID: z.string(),
    equipmentName: z.string(),
    drawing: z.string(),
  }),
  tables: z.array(TableSchema),
})

export async function createFmeca(data: Record<string, object>) {
  const validatedFields = AssetRegisterSchema.safeParse({
    specs: data.specs as Prisma.JsonObject,
    tables: data.tables as Prisma.JsonArray,
    ...data,
  })

  console.log(validatedFields)

  if (!validatedFields.success)
    throw new Error(validatedFields.error.toString())

  await prisma.assetRegister.create({
    data: validatedFields.data,
  })
}

export async function getAssetRegister() {
  try {
    const assetRegisters = await prisma.assetRegister.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return assetRegisters
  } catch (error) {
    throw new Error("Error Loading Data")
  }
}

export async function getAssetRegisterBySlug(slug: string) {
  try {
    const assetRegister = await prisma.assetRegister.findUnique({
      where: { slug },
    })

    if (!assetRegister) throw new Error("No Data Found")

    return assetRegister
  } catch (error) {
    throw new Error("Error Loading Data")
  }
}