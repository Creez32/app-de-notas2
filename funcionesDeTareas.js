let tareas = require('./tareas.json')
let fs = require('fs')
let guardarJson = (array) => fs.writeFileSync('./tareas.json', JSON.stringify(array,null,2) ,'utf-8')


module.exports = {
    listar: () => {
        tareas.forEach((tarea, index) => {
            console.log(`${index + 1}- La tarea ${tarea.titulo} se encuentra ${tarea.estado}`);
        });
    },
    mostrarConsola:(texto) => console.log(texto),
    escribirJson: (array) => {
        fs.writeFileSync('./tareas.json', JSON.stringify(array,null,2) ,'utf-8')
    },
    crear: function(titulo) {
        let tarea = {
            titulo,
            estado : 'pendiente'
        }
        tareas.push(tarea)
        this.escribirJson(tareas)
        this.mostrarConsola(`La tarea nueva ${tarea.titulo} se encuentra con estado ${tarea.estado}`)
    },
    actualizar: function(titulo){
        let tareasActualizadas = tareas.map(tarea => {
            /* If Ternario  */
            /* (tarea.titulo === titulo && tarea.estado === 'pendiente') ? tarea.estado === 'En Proceso' : (tarea.titulo === titulo && tarea.estado === 'En Proceso') ? tarea.estado === 'Terminado' : console.log("no se encontro la tarea"); */

            if(tarea.titulo === titulo){
                if(tarea.estado === 'pendiente'){
                    tarea.estado = 'en proceso'
                    console.log(`tu tarea ${tarea.titulo} fue actualizada a ${tarea.estado}`);
                    return tarea
                }else if(tarea.estado === 'en proceso'){
                    tarea.estado = 'terminado'
                    console.log(`tu tarea ${tarea.titulo} fue actualizada a ${tarea.estado}`);
                    return tarea
                }
            }else{
                return tarea;
            }
            return tarea
        })
        guardarJson(tareasActualizadas);
    },
    filtrar: function(estado){
        arrayFiltrado = tareas.filter(function(tarea){
            return tarea.estado.toLowerCase() === estado.toLowerCase()
        })
        arrayFiltrado.forEach((tarea, index) => {
            console.log(`${index + 1}- La tarea ${tarea.titulo} se encuentra ${tarea.estado}`);
        });
    }
}