export async function extraerEmbeddings(buffer) {
  // Simula un embedding fijo (para pruebas)
  return [0.1, 0.2, 0.3]
}

export function distancia(a, b) {
  // Distancia Euclídea simple (para pruebas)
  return Math.sqrt(a.reduce((sum, val, i) => sum + (val - b[i]) ** 2, 0))
}
