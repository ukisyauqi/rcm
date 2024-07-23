import { PrismaClient } from "@prisma/client"
import { z } from "zod"

const prisma = new PrismaClient

const FunctionalFailureSchema = z.object({
  functionStatement: z.string(),
  functionType: z.string(),
  number: z.number(),
  functionalFailureStatement: z.string(),
  assetProfileId: z.string()
})

export async function createFunctionalFailure(formData: FormData) {

  const validatedFields = FunctionalFailureSchema.safeParse({
    functionStatement: formData.get("functionStatement"),
    functionType: formData.get("functionType"),
    number: parseFloat(formData.get("functionStatement") as string),
    functionalFailureStatement: formData.get("functionalFailureStatement"),
    assetProfileId: formData.get("assetProfileId")
  })

  if (!validatedFields.success) throw new Error(validatedFields.error.toString())

  await prisma.functionAndFunctionalFailure.create({
    data: validatedFields.data
  })
}

export async function getFunctionalFailure() {
  try {
    const functionalFailures = await prisma.functionAndFunctionalFailure.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })

    return functionalFailures
  } catch (error) {
    throw new Error("Error Loading Data")
  }
}

export async function getFunctionalFailureById(id: number) {
  try {
    const functionalFailure = await prisma.functionAndFunctionalFailure.findUnique({
      where : { id }
    })

    if (!functionalFailure) throw new Error("No Data Found")

    return functionalFailure
  } catch (error) {
    throw new Error("Error Loading Data") 
  }
}