// --------------------------- <> Closure
const cliente = 'Juan';
function mostrarCliente() {
    const cliente = 'Pablo';
    console.log(cliente);
}

console.log(cliente);

mostrarCliente();

// -------------- 

const obtenerCliente = () =>  {
    const nombre = "Juan";
    function muestraNombre() {
        console.log(nombre);
    }
    return muestraNombre;  
}
  
const cliente2 = obtenerCliente();
cliente2(); 


const cold = () => {
    const n = 5;
    function num() {
        console.log(n);
    }
    return num;
}

const hot = cold();
hot()


// Es una forma de acceder a una función o valor, desde el exterior...