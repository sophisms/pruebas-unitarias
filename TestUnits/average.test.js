const {promedio} = require('./palindrome.js')

//Importación del siguiente módulo:
// const promedio = array => {
//   let sum = 0
//   array.forEach(num => {sum += num})
//   return sum / array.length
// }

describe('promedio', () => {

  test('Un valor es el valor en sí mismo', () => {
    expect(promedio([1])).toBe(1)
  })

  test('De varios numeros se calcula correctamente', () => {
    expect(promedio([1,2,3,4,5,6])).toBe(3.5)
  })

})