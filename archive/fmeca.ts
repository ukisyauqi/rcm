// "use server"

// import { PrismaClient } from "@prisma/client"
// import { z } from "zod"

// const prisma = new PrismaClient()

// const FcemaSchema = z.object({
//   failureMode: z.string(),
//   causes: z.string(),
//   failureCharacteristic: z.string(),
//   localEffect: z.string(),
//   functionalFailure: z.string(),
//   assetProfileId: z.string(),
// })

// export async function createFmeca(data: Record<string, string>) {
//   const validatedFields = FcemaSchema.safeParse({
//     ...data,
//   })

//   console.log(validatedFields)

//   if (!validatedFields.success)
//     throw new Error(validatedFields.error.toString())

//   await prisma.fmeca.create({
//     data: validatedFields.data,
//   })
// }

// export async function getFmeca() {
//   try {
//     const fmecas = await prisma.fmeca.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     })

//     return fmecas
//   } catch (error) {
//     throw new Error("Error Loading Data")
//   }
// }

// export async function getFmecaById(id: number) {
//   try {
//     const fmeca = await prisma.fmeca.findUnique({
//       where: { id },
//     })

//     if (!fmeca) throw new Error("No Data Found")

//     return fmeca
//   } catch (error) {
//     throw new Error("Error Loading Data")
//   }
// }
