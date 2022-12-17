

const { registrar, leer } = require('./operaciones.js')

//obtener argumentos
const argumentos = process.argv.slice(2)
const operacion = argumentos[0]
const nombre = argumentos[1]
const edad = argumentos[2]
const tipo = argumentos[3]
const color = argumentos[4]
const enfermedad = argumentos[5]



//Condicion para ejecutar operacion deseada
if (operacion === "registrar") {
    //validar argumentos
    if (nombre === undefined) {
        console.log("Error, el nombre de la mascota no esta")
        return
    }
    if (edad === undefined) {
        console.log("Error, la edad de la mascota no esta")
        return
    }
    if (tipo === undefined) {
        console.log("Error, la tipo de la mascota no esta")
        return
    }
    if (color === undefined) {
        console.log("Error, la color de la mascota no esta")
        return
    }
    if (enfermedad === undefined) {
        console.log("Error, la enfermedad de la mascota no esta")
        return
    }
    registrar(nombre, edad, tipo, color, enfermedad)
}
if (operacion === "leer") {
    const content = leer();

    for (const fruta of content) {
        console.log(fruta)
    }
}