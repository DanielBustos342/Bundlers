// ! Patron de Modulo IIFE (ya no se usa)

const { suma } = require("./funciones");

//----------------------------------------------------
const moduloDias = (function () {
  // console.log('Holis')
  const dias = ["Domingo", "Lunes", "Martes"];

  return {
    name: (index) => {
      return dias[index];
    },
  };
})();

console.log(moduloDias.name(1));
//--------------------------------------------------
