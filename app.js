//ejercicio 1
//Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.

function computeAverageLengthOfWords(word1, word2) {
  var x = word1;
  var empty = word2;
  return (x.length + empty.length) / 2;
}

console.log(computeAverageLengthOfWords("LALALALALA", "KEKEKEKEKEKEKE"));

//ejercicio 2
//Escriba una función llamada getNthElement.Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo dado.

function getNthElement(array, n) {

  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(n) === i);
    return array[n];

  }
}
console.log(getNthElement([1, 3, 5], 2));

//ejercicio 3
//Escribe una función llamada convertDoubleSpaceToSingle.Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada en cadena con todos los espacios dobles convertidos a espacios simples.

function convertDoubleSpaceToSingle(str) {
  const unEspacio = str.split("  ");
  const newStr = unEspacio.join(" ");
  return newStr;
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);

//ejercicio 4
//Escribe una función llamada areValidCredentials.Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false.

function areValidCredentials(name, password) {
  if (name.length > 3 && password.length > 8) {
    return true;
  } else {
    return false;
  }
}
var output = areValidCredentials('Ritu', 'mylongpassword');
console.log(output);

//ejercicio 5
//Dada una lista de números enteros no negativos y una suma objetivo, encuentre un par de números que sumen a la suma objetivo.

function findPairForSum(array, number) {
  for (var i = 0; i < array.length; i++) {
    var arr = array[i] 
    var arrx = (array.slice(0, i)).concat(array.slice(i+1, array.length));
    
    for (var j = 0; j < arrx.length ; j++) {
      if (arr + arrx[j] === number) {
        return [arr, arrx[j]];
      }
    }
  }
 }
 var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
 console.log(pair);

 //Ejercicio 6
 //Escriba una función llamada "filterOddElements".Dado un array de números,"filterOddElements" devuelve un array que contiene sólo los números impares del array dado.

 function filterOddElements(arr) {


 }
 var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output);