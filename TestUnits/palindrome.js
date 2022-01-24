/*
- npm init
- npm install --save jest

--Entramos en donde necesitemos hacer la prueba.
- cd (carpeta) 
- npm run test 

 */

// ESTE ES EL MAIN
const palindromo = (string) => {

  if(typeof string === 'undefined') return

  return string
  .split('')//convertirlo en array
  .reverse('')//darle vuelta
  .join('')//unirlo como string
  }

  //obtener media
  const promedio = array => {
    let sum = 0
    array.forEach(num => {sum += num})
    return sum / array.length // Obtiene promedio
  }
// Indica al jest que estos son los dos módulos a llamar durante las pruebas
// Indica qué vas a exportar
  module.exports = { 
    palindromo,
    promedio
  }