let process = require('process')

let {crear,listar,mostrarConsola,actualizar,filtrar} = require('./funcionesDeTareas')

let operacion
let parametro

let validacion = (variable,pos = 2) => {
    if (process.argv[pos] !== undefined){
        return variable = process.argv[pos].toLowerCase()
    }
    return variable = process.argv[pos]
}

switch (validacion(operacion,2)) {
    case "listar":
        listar()
        break;
    case "crear":
        if (validacion(parametro,3) !== undefined) {
            crear(validacion(parametro,3))
        }else{
            mostrarConsola("Debes pasar un parametro a la funcion");
        }
        break;
    case "actualizar":
        if (validacion(parametro,3) !== undefined) {
            actualizar(validacion(parametro,3))
        }else{
            mostrarConsola("Debes pasar un parametro a la funcion");
        }
        break;  
    case "filtrar":
        if (validacion(parametro,3) !== undefined) {
            if(validacion(parametro,3) !== 'pendiente' || validacion(parametro,3) !== 'terminado' || validacion(parametro,3) !== 'en proceso'){
                return mostrarConsola('No se encuentra ese parametro')
            }
            filtrar(validacion(parametro,3))
        }else{
            mostrarConsola("Debes pasar un parametro a la funcion");
        }
    break; 
    case undefined:
        mostrarConsola("Atención - Tienes que pasar una acción\nTenemos las siguientes tareas si es que llegamos a terminar,\nintenta escribiendo una de las siguientes:\n- Listar\n- Crear");
        break;
    default:
        mostrarConsola("No entiendo qué quieres hacer\nNo tenemos tareas asociadas a esa operacion intenta una de las siguientes:\n- Listar\n- Crear")
        break;
}