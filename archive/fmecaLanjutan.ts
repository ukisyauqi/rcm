// 'use server'

// import prisma from "@/db"
// import { z } from "zod"
// import { getCurrentRisk } from "./risk"

// const FmecaLanjutanSchema = z.object({
//   endEffect: z.string(),
//   cof: z.number(),
//   recPof: z.number(),
//   currentRisk: z.string(),
//   failureDetection: z.string(),
//   mntc: z.string(),
//   assetProfileId: z.string(),
// })

// export async function createFmecaLanjutan(data: Record<string, string>) {

//   const validatedFields = FmecaLanjutanSchema.safeParse({
//     ...data,
//     cof: parseInt(data.cof),
//     recPof: parseInt(data.recPof),
//   })


//   if (!validatedFields.success) throw new Error(validatedFields.error.toString())

//   await prisma.fmecaLanjutan.create({
//     data: validatedFields.data
//   })
// }

// export async function getFmecaLanjutan() {
//   try {
//     const fmecaLanjutans =
//       await prisma.fmecaLanjutan.findMany({
//         orderBy: {
//           createdAt: "desc",
//         },
//       })

//     return fmecaLanjutans
//   } catch (error) {
//     throw new Error("Error Loading Data")
//   }
// }

// export async function getFmecaLanjutanById(id: number) {
//   try {
//     const fmecaLanjutan =
//       await prisma.fmecaLanjutan.findUnique({
//         where: { id },
//       })

//     if (!fmecaLanjutan) throw new Error("No Data Found")

//     return fmecaLanjutan
//   } catch (error) {
//     throw new Error("Error Loading Data")
//   }
// }