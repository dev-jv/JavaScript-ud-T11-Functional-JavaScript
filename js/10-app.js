// --------------------------------------------- <> Composition

const obtenerNombre = (info) => ({ // function > function ...¿wn?
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});
const guardarEmail = (info) => ({
    agregarEmail(email) {
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = (info) => ({
    mostrarEmail() {
        console.log(`Correo: ${info.email}`);
    }
});
const obtenerEmpresa = (info) => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }
});
const obtenerPuesto = (info) => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }
});

function Cliente(nombre, email, empresa) {
    let info = {
        nombre, 
        email, 
        empresa
    }
    return Object.assign( // Retorna un objeto, incluye las funciones(llamadas en este caso)
        info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info), 
        obtenerEmpresa(info)
    )
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre, 
        email, 
        puesto
    }
    return Object.assign(
        info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Juan', null, 'Udemy'); // Instancia 
cliente.mostrarNombre(); // Con la referencia a la instancia y el respectivo método...
cliente.agregarEmail('cliente@cliente.com'); // Pasa un valor!
cliente.mostrarEmail()
cliente.mostrarEmpresa()

console.log("---------------------------");

const empleado = Empleado('Pedro', null, 'Programador'); // Instancia
empleado.mostrarNombre();
empleado.agregarEmail('empleado@empleado.com');
empleado.mostrarEmail()
empleado.mostrarPuesto()


// console.log(cliente);
// console.log(empleado);
















