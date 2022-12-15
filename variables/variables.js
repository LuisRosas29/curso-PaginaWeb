// --- EJERCICIO 1 ---

// Variables
let texto = "VariableTexto";
let numero = 29;
let boleano = true;
let indefinido = undefined;
let nulo = null;

//Impresión de la terminal

console.log(`La variable string es: ${texto}`);
console.log(`La variable number es: ${numero}`);
console.log(`La variable boolean es: ${boleano}`);
console.log(`La variable unddefined es: ${indefinido}`);
console.log(`La variable null es: ${nulo}`);

// --- EJERCICIO 2 ---

let concatenar = "concatenación";
let interpolar = "interpolación"; 

console.log("El siguiente texto esta elaborado con la: "+concatenar+" de textos");
console.log(`El siguiente texto esta elaborado con la: ${interpolar} de textos`);

// --- EJERCICIO 3 ---
let number1 = 19;
let number2 = 29;
let number3 = 0;

console.log(`Ejemplo de operación aritmetica: ${number1} + ${number2} = ${number1+number2}`);
console.log(`Ejemplo 1 de asignación: number1 va a tener el mismo valor que number 3, por lo tanto, number 3 vale ${number3 = number1}`);
console.log(`Ejemplo 2 de asignación: number3 va a tener el valor de number2 + number 3, por lo tanto, ahora number 3 vale ${number3 += number2}`);
console.log(`Ejemplo de compración: ¿${number1} es igual a ${number3}? La respues es: ${number1 == number3}`);
