// ! CommonJS
//--------------------------------------------------
// * obj toma todas las cosas
//!const obj = require("./funciones");
// * si quiero algo en especifico
const { suma } = require("./funciones");
const { num1, num2 } = require("./variables");

// console.log(obj);

// para usar las el module.exports tengo que escribir como la linea 11
//!const resultado = obj.suma(4, 5);
const resultado = suma(num1, num2);

alert(resultado);
