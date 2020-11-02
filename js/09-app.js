
// ------------------------------- <> Currying y Partials...

// const suma = (a, b, c ) => {
//     return a + b + c;
// }

// console.log(suma(1,2,3));

// -------

// const suma = (a,b,c) => a + b + c;

// console.log(suma(1,2,3));

// -------

// const suma = (a,b,c) => a + b + c;
// const parcial = a => (b,c) => suma(a,b,c)

// const primerNumero = parcial(1);
// const resultado = primerNumero(2, 3); 

// console.log(resultado);

// -------

// // const suma = (a,b,c) => a + b + c;
// const parcial = a => (b,c) => a + b + c;

// const primerNumero = parcial(1);
// const resultado = primerNumero(2, 3); 

// console.log(resultado);

// -------

// const suma = (a,b,c) => a + b + c;
// const parcial = a => b => c => suma(a,b,c)

// const primerNumero = parcial(3);
// const segundoNumero = primerNumero(2); 
// const resultado = segundoNumero(1)

// console.log(resultado);

// -------

// const suma = (a,b,c) => a + b + c; // -
// const parcial = a => b => c => a + b + c;

// const primerNumero = parcial(1);
// const segundoNumero = primerNumero(2); 
// const resultado = segundoNumero(3)

// console.log(resultado);

// -------


// const parcial = a => b => c => a + b + c;

// const primerNumero = parcial(1);
// const segundoNumero = primerNumero(2); 
// const resultado = segundoNumero(3)

// console.log(resultado);

// -------

// const suma = (a,b,c) => a + b + c;
// const parcial = a => b => c => suma(a,b,c)
// const resultadoParcial = parcial(1)(2)(3) // La forma más... práctica?! 

// console.log(resultadoParcial);

// -------

// const parcial = a => 
//     (b,c) => a + b + c;
// const primerNumero = parcial(1);
// const resultado = primerNumero(2, 3); 

// console.log(resultado);

// -------

// const suma = (a,b,c) => a + b + c;
// const parcial = a => 
//     b => 
//         c => suma(a, b, c);

// const resultadoParcial = parcial(1)(2)(3)
// console.log(resultadoParcial)

// -------

const parcial = a => 
    b => 
        c => a + b + c;

const resultadoParcial = parcial(1)(2)(3)
console.log(resultadoParcial)

// 

