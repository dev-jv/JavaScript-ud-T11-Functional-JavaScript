// ------------------------------- <> Pure Functions

const k = 20;

const duplicar = n => n * 2;

const resultado = duplicar(k);

console.log(resultado);



const nombre = 'Juan';
const trabajo = 'Web Developer';

const formatearNombre = (arg1, arg2) => `${arg1} - ${arg2}`;


const mostrarNombre = formatearNombre;

console.log(mostrarNombre(nombre, trabajo));





// Son funciones que retornan un dato pero no modifican los valores de las variables...

// Con una entrada de datos deben retornar la misma cantidad de entradas

// Usualmente el resultado deberá ser una nueva variable, ya modificada.


