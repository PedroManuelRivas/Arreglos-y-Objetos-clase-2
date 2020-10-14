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

//Variable para ordenar por consulta
var consultasOrd = consultaDental.sort((a, b) => a.date - b.date);

//Creando función para generar tabla en HTML
function imprimirRegistros() {
    for (consulta of consultasOrd) {
        $("#tablaConsulta").append(
            `
              <tr>
                  <td>${consulta.hora}</td>
                  <td>${consulta.especialista}</td>
                  <td>${consulta.paciente}</td>
                  <td>${consulta.rut}</td>
                  <td>${consulta.prevision}</td>
              </tr>
         `
        );
    }
}
//Activando la función
imprimirRegistros()

//Creando función que imprime primera y ultima consulta
var longitud = consultasOrd.length

$(document).ready(function () {
    $("button").click(function () {
        $("div p:nth-child(1)").html("Primera atención: " + consultasOrd[0].paciente + " - " + consultasOrd[0].prevision);
        $("div p:nth-child(2)").html("Último atención: " + consultasOrd[longitud - 1].paciente + " - " + consultasOrd[longitud - 1].prevision);
    });
});







