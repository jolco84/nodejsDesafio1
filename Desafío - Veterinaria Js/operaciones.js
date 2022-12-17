const fs = require('fs') //importar modulo FileSystem

//operacion para registrar nueva cita
const registrar = (nombre, edad, tipo, color, enfermedad) => {

    try {
        const objCita = {
            nombre, edad, tipo, color, enfermedad
        }


        //obtene info de json
        const content = leer();
        content.push(objCita)

        //convertir objeto
        const objectToString = JSON.stringify(content)

        //escribir archivo
        fs.writeFileSync('citas.json', objectToString)
        //leer()
    } catch (err) {
        return err;
    }
}

//operacion para leer las citas registrados
const leer = () => {
    try {


        const content = fs.readFileSync('citas.json')
        const stringToObject = JSON.parse(content)
        return stringToObject;
    } catch (err) {
        return err;
    }
}

//exporto las operaciones
module.exports = { registrar, leer }
