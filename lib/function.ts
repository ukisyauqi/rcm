export function findDuplicateIndices(arr: string[]): number[][] {
  const elementIndices: { [key: string]: number[] } = {}
  const duplicateIndices: number[][] = []

  arr.forEach((element, index) => {
    if (element in elementIndices) {
      elementIndices[element].push(index)
    } else {
      elementIndices[element] = [index]
    }
  })

  for (const indices of Object.values(elementIndices)) {
    if (indices.length > 1) {
      duplicateIndices.push(indices)
    }
  }

  return duplicateIndices
}

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

export function groupByIndices(
  arr: string[],
  indices: number[][]
): (string | string[])[] {
  const result: (string | string[])[] = []
  const usedIndices = new Set<number>()

  // Create a map for group indices for easy lookup
  const groupMap = new Map<number, number[]>()
  indices.forEach((group) => {
    group.forEach((index) => {
      groupMap.set(index, group)
    })
  })

  // Iterate through the original array and build the result
  for (let i = 0; i < arr.length; i++) {
    if (usedIndices.has(i)) {
      continue // Skip indices that are already used in groups
    }

    if (groupMap.has(i)) {
      const group = groupMap.get(i)!
      if (!usedIndices.has(group[0])) {
        // Check if the group hasn't been added yet
        result.push(group.map((index) => arr[index]))
        group.forEach((index) => usedIndices.add(index))
      }
    } else {
      result.push(arr[i])
      usedIndices.add(i)
    }
  }

  return result
}

export function removeDuplicate(array: any[]): any[] {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; ) {
      if (array[i] === array[j]) {
        array.splice(j, 1)
      } else {
        j++
      }
    }
  }
  return array
}

export function camelCaseToTitleCase(camelCaseStr: string): string {
  const result = []
  let wordStart = 0

  for (let i = 1; i < camelCaseStr.length; i++) {
    if (
      camelCaseStr[i] === camelCaseStr[i].toUpperCase() && // Check if current char is uppercase
      (camelCaseStr[i - 1] === camelCaseStr[i - 1].toLowerCase() || // Previous char is lowercase
        (i < camelCaseStr.length - 1 &&
          camelCaseStr[i + 1] === camelCaseStr[i + 1].toLowerCase())) // Next char is lowercase
    ) {
      result.push(camelCaseStr.substring(wordStart, i))
      wordStart = i
    }
  }

  result.push(camelCaseStr.substring(wordStart))

  return result
    .map((word) => {
      if (word === word.toUpperCase()) {
        return word // Keep fully uppercase words as is
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(" ")
}

export function isNumberString(str: any): boolean {
  return typeof str === "string" && /\d/.test(str)
}

export function getObjValue(obj: object, key: string) {
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  const i = keys.findIndex((k) => k === key)
  return values[i] || ""
}

