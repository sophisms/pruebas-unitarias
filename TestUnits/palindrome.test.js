const { palindromo } = require ('./palindrome.js') // Exporta las funciones del archivo a las que les harás las pruebas


//Test Unitarios
test('palindromo', () =>{
const result = palindromo('holita')
expect(result).toBe('atiloh')
})

test('palindromo con string vacía', () =>{
  const result = palindromo('')
  expect(result).toBe('')
})

test('palindromo indefinido', () =>{
  const result = palindromo()
  expect(result).toBeUndefined()
})