// Definimos las variables que utilizaremos
let nombre;
let edad;
let nombreRepresentante;
let telefonoRepresentante;
let notas = [];

class Materia {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }
}

// Crear instancias de Materias con sus IDs y nombres
const ingles = new Materia(1, "Inglés");
const logicaMatematica = new Materia(2, "Lógica Matemática");
const redes = new Materia(3, "Redes");
const poo = new Materia(4, "POO");
const baseDeDatos = new Materia(5, "Base de Datos");
const node = new Materia(6, "Node");
const express = new Materia(7, "Express");
const designThinking = new Materia(8, "Design Thinking");

// Creamos una función que simula la llamada telefónica
function llamarTelefono(numero) {
  alert(`Llamando al número ${numero}...`);
}

// Pedimos al usuario que ingrese su nombre y su edad mediante prompts
nombre = prompt("Ingresa tu nombre:");
edad = prompt("Ingresa tu edad:");

// Verificamos si el usuario es menor de edad y, en caso afirmativo, pedimos los datos del representante
if (edad < 18) {
  nombreRepresentante = prompt("Ingresa el nombre de tu representante:");
  telefonoRepresentante = prompt("Ingresa el número de teléfono de tu representante:");
}

// Creamos una función que imprime un mensaje de bienvenida y simula la llamada telefónica si el usuario es menor de edad
function saludar(nombre, edad, nombreRepresentante, telefonoRepresentante) {
  if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad. Tu representante es ${nombreRepresentante} y su número de teléfono es ${telefonoRepresentante}.`);
    llamarTelefono(telefonoRepresentante);

    // Si el usuario es menor de edad, no mostramos las notas y terminamos la ejecución del programa
    return;
  } else {
    alert(`Hola ${nombre}, eres mayor de edad. Puedes entrar sin representante.`);
  }
}

// Llamamos a la función para que imprima el mensaje de bienvenida y simule la llamada telefónica si es necesario
saludar(nombre, edad, nombreRepresentante, telefonoRepresentante);

// Utilizamos un ciclo for para imprimir los números del 1 al 5 y simular una llamada telefónica por cada menor de edad ingresado
if (edad < 18) {
  for (let i = 1; i <= edad; i++) {
    llamarTelefono(telefonoRepresentante);
    alert("Representante no autorizó tu entrada, bye.");
    break;
  }
} else {
  alert("¡Bienvenido!");

  // Utilizamos un ciclo for para ingresar las notas de evaluación del usuario
  for (let i = 1; i <= 3; i++) {
    let nota = prompt(`Ingresa la nota de la evaluación ${i}:`);
    while (isNaN(parseFloat(nota))) {
      nota = prompt(`¡Valor inválido! Ingresa la nota de la evaluación ${i}:`);
    }
    notas.push(parseFloat(nota));
  }

  // Calculamos el promedio de las notas y lo mostramos en un mensaje de alerta
  let promedio = notas.reduce((a, b) => a + b) / notas.length;
  alert(`Tu promedio de notas es ${promedio.toFixed(2)}.`);

   // Verificamos si el promedio es mayor a 5
if (promedio > 5) {
  // Creamos un cuadro de diálogo personalizado
  let confirmacion = confirm("¿Deseas inscribir nuevas materias?");

  if (confirmacion) {
    const materias = [
      { id: 1, materia: "Inglés" },
      { id: 2, materia: "Lógica Matemática" },
      { id: 3, materia: "Redes" },
      { id: 4, materia: "POO" },
      { id: 5, materia: "Base de datos" },
      { id: 6, materia: "Node" },
      { id: 7, materia: "Express" },
      { id: 8, materia: "Design Thinking" }
    ];

    let seleccionados = [];
    let maxRamos = 5;

    let listaMaterias = "Materias disponibles:\n";

    for (let i = 0; i < materias.length; i++) {
      listaMaterias += `${materias[i].id}. ${materias[i].materia}\n`;
    }

    let ejemploInscripcion = "Ejemplo de inscripción: 1, 3, 6, 4, 2";

    let respuesta = prompt(`${listaMaterias}\nIngrese los números de las materias a inscribir, separados por comas.\n${ejemploInscripcion}`);

    let numeros = respuesta.split(",").map(numero => parseInt(numero.trim()));

    if (numeros.length > maxRamos) {
      alert("Ha excedido el límite máximo de ramos permitidos.");
    } else if (numeros.length > 0) {
      for (let i = 0; i < numeros.length; i++) {
        let idMateria = numeros[i];
        let materiaSeleccionada = materias.find((materia) => materia.id === idMateria);

        if (materiaSeleccionada) {
          if (!seleccionados.includes(materiaSeleccionada)) {
            seleccionados.push(materiaSeleccionada);
          } else {
            alert(`El número de materia ${idMateria} ya ha sido seleccionado. Se omitirá en la inscripción.`);
          }
        } else {
          alert(`Número de materia inválido: ${idMateria}. Se omitirá en la inscripción.`);
        }
      }

      if (seleccionados.length > 0) {
        let confirmar = confirm("¿Confirmar ramos seleccionados?");

        if (confirmar) {
          let listaRamos = "Ramos seleccionados:\n";

          for (let i = 0; i < seleccionados.length; i++) {
            listaRamos += `${seleccionados[i].id}. ${seleccionados[i].materia}\n`;
          }

          alert(listaRamos);
        } else {
          alert("No se realizaron inscripciones de ramos.");
        }
      } else {
        alert("No se seleccionaron ramos válidos.");
      }
    } else {
      alert("No se ingresaron números de materias válidos.");
    }
  } else {
    // Si el usuario hace clic en "Cancelar", cerramos el cuadro de diálogo
    alert("Has decidido no inscribir nuevas materias.");
  }
}
}
