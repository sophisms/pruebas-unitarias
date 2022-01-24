const suma = (a,b) => {
  return a + b;
}

console.assert(
  suma(0,0) === 0,
  'Suma de 0 y 0 debería ser 0'
)

console.assert(
  suma(1,3) === 4,
  'Suma de 1 y 3 debería ser 4'
)

console.assert(
  suma(2,3) === 5,
  'Suma de 2 y 3 debería ser 5'
)