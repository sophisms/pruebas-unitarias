const suma = (a,b) => {
  return a + b;
}

const valores = [
  {a:0, b:0, result: 1},
  {a:1, b:3, result: 3},
  {a:-3, b:3, result: 0},
  {a:3, b:3, result: 5}
]

valores.forEach(prueba => {
  const {a, b, result} = prueba

console.assert(
  suma(a,b) === result,
  `Suma de ${a} y ${b} no debería ser ${result}`
)
})

console.log(`${valores.length} pruebas revisadas...`)