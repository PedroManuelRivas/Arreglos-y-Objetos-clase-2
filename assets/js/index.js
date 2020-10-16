var consultaDental = [
    //Índice 0 del arreglo
    {
        hora: "8:30:00",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    //Índice 1 del arreglo
    {

        hora: "11:00:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE"
    },
    //Índice 2 del arreglo
    {

        hora: "11:30:00",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA"
    },
    //Índice 3 del arreglo
    {

        hora: "13:00:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA"
    },
    //Índice 4 del arreglo
    {
        hora: "13:00:00",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA"
    },
    //Índice 5 del arreglo
    {
        hora: "14:00:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE"
    }
]
var consultaRadiologia = [
    //Índice 0 del arreglo
    {
        hora: "11:00:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA"
    },
    //Índice 1 del arreglo
    {
        hora: "11:30:00",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE"
    },
    //Índice 2 del arreglo
    {
        hora: "15:00:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE"
    },
    //Índice 3 del arreglo
    {
        hora: "15:30:00",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA"
    },
    //Índice 4 del arreglo
    {
        hora: "16:00:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA"
    }
]
var consultaTraumatologia = [
    //Indice 0 del arreglo
    {
        hora: "8:00:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA"
    },
    //Indice 1 del arreglo
    {
        hora: "10:00:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE"
    },
    //Indice 2 del arreglo
    {
        hora: "10:30:00",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE"
    },
    //Indice 3 del arreglo
    {
        hora: "11:00:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE"
    },
    //Indice 4 del arreglo
    {
        hora: "11:30:00",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA"
    },
    //Indice 5 del arreglo
    {
        hora: "12:00:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE"
    },
    //Indice 6 del arreglo
    {
        hora: "12:30:00",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE"
    }
]
//Declarando nuevo arreglo de pacientes en el área traumatología
var nuevaConsultaTraumatologia = [
    {
        hora: "09:00:00",
        especialista: "RENÉ POBLETE",
        paciente: "ANA GELLONA",
        rut: "13123329-7",
        prevision: "ISAPRE"
    },
    {
        hora: "09:30:00",
        especialista: "MARIA SOLAR",
        paciente: "RAMIRO ANDRADE",
        rut: "12221451-K",
        prevision: "FONASA"
    },
    {
        hora: "10:00:00",
        especialista: "RAUL LOYOLA",
        paciente: "CARMEN ISLA",
        rut: "10112348-3",
        prevision: "ISAPRE"
    },
    {
        hora: "10:30:00",
        especialista: "ANTONIO LARENAS",
        paciente: "PABLO LOAYZA",
        rut: "13453234-1 I",
        prevision: "ISAPRE"
    },
    {
        hora: "12:00:00",
        especialista: "MATIAS ARAVENA",
        paciente: "SUSANA POBLETE",
        rut: "14345656-6",
        prevision: "FONASA"
    },
]
var nuevasHoras = consultaTraumatologia.concat(nuevaConsultaTraumatologia)

var todos = [consultaTraumatologia, nuevasHoras]
//Creando función para generar tabla en HTML
function imprimirTabla(datos) {
    console.log(datos);
    $("tbody").html("");
    datos.forEach((c) => {
        $("tbody").append(`
          <tr>
          <td>${c.hora}</td>
          <td>${c.especialista}</td>
          <td>${c.paciente}</td>
          <td>${c.rut}</td>
          <td>${c.prevision}</td>
          </tr>
          `);
    });
}

//Creación de botones para imprimir nuevas citas
$(document).ready(function () {
    //each (primer parámetro es el indice y el segundo es el elemento)
    $("button:not([class])").each((i, b) => {
        console.log(b)
        b.addEventListener("click", function () {
            console.log("tabla")
            imprimirTabla(todos[i])
        }
        )
    })
})

//Creación de botones para eliminar primer registro de tabla
let eliminarPrimerRegistro = document.getElementsByClassName("eliminarPrimero")[0]
eliminarPrimerRegistro.addEventListener("click", function () {
    var eliminados = nuevasHoras
    eliminados.shift()
    console.log(eliminados)
    imprimirTabla(eliminados)
})

//Creación de boton para eliminar ultimo registro de la tabla.
let eliminarUltimoRegistro = document.getElementsByClassName("eliminarUltimo")[0]
eliminarUltimoRegistro.addEventListener("click", function () {
    let eliminados = nuevasHoras
    eliminados.pop()
    console.log(eliminados)
    imprimirTabla(eliminados)
})

//Creando funcion para imprimir citas de dental separado por guiones.

function imprimirDental(arregloDeObjetos) {
    console.log(arregloDeObjetos);
    $("div").html("").append("<h1>Consultas Dental</h1>");
    arregloDeObjetos.forEach((objetoDelArray) => {
        $("div").append(`
          <p>${Object.values(objetoDelArray).join("-")}</p>
        `);
    });
}

//Creación de boton para mostrar citas en dental
let printDental = document.getElementsByClassName("mostrarDental")[0]
printDental.addEventListener("click", function () {
    imprimirDental(consultaDental)
})