type RiskLevel = 'Rendah' | 'Rendah-Menengah' | 'Menengah' | 'Menengah-Tinggi' | 'Tinggi';

const riskMapping: Record<RiskLevel, number> = {
  'Rendah': 1,
  'Rendah-Menengah': 2,
  'Menengah': 3,
  'Menengah-Tinggi': 4,
  'Tinggi': 5
};

export const riskStyles = [
  {text: "Rendah", backgroundColor: "#0071c0", color: "#fff"},
  {text: "Rendah-Menengah", backgroundColor: "#00af50", color: "#fff"},
  {text: "Menengah", backgroundColor: "#00af50", color: "#000"},
  {text: "Menengah-Tinggi", backgroundColor: "#ffc000", color: "#000"},
  {text: "Tinggi", backgroundColor: "#fe0000", color: "#fff"},
]

// Matriks risiko berdasarkan gambar
const riskMatrix: RiskLevel[][] = [
  ['Rendah', 'Rendah', 'Rendah-Menengah', 'Menengah', 'Tinggi'],
  ['Rendah', 'Rendah-Menengah', 'Rendah-Menengah', 'Menengah-Tinggi', 'Tinggi'],
  ['Rendah', 'Rendah-Menengah', 'Menengah', 'Menengah-Tinggi', 'Tinggi'],
  ['Rendah', 'Rendah-Menengah', 'Menengah', 'Menengah-Tinggi', 'Tinggi'],
  ['Rendah', 'Rendah-Menengah', 'Menengah', 'Menengah-Tinggi', 'Tinggi']
];

export function getCurrentRisk(cof: number, pof: number): number {
  if (cof < 1 || cof > 5 || pof < 1 || pof > 5) {
    throw new Error("CoF dan PoF harus berada dalam rentang 1-5");
  }

  const riskLevel: RiskLevel = riskMatrix[5 - pof][cof - 1]; // karena index mulai dari 0 dan tabel dibalik pada sumbu y
  return riskMapping[riskLevel];
}
