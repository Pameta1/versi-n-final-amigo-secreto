// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

 //  Variable array para almacenar los nombres
    let nombreAmigo = [];

    //  Función para agregar un nombre
    function agregarAmigo() {
      const input = document.getElementById("amigo");
      const nuevoNombre = input.value.trim();

// Validar entrada vacía
      if (nuevoNombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
      }
// Evitar repetidos
     if (nombreAmigo.includes(nuevoNombre)) {
      alert("Ese nombre ya está en la lista.");
      return;
     }
      // Actualizar el array de amigos
      nombreAmigo.push(nuevoNombre);

      // Limpiar campo de texto
      input.value = "";

      // Actualizar lista visible
     mostrarLista();
    }

    //  Función para mostrar la lista
    function mostrarLista() {
      const lista = document.getElementById("listaAmigos");

      // Limpiar lista existente
      lista.innerHTML = "";

      // Recorrer el arreglo y crear <li> por cada elemento
      nombreAmigo.forEach ((nombre, i) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
      });
    }

    //  Función para sortear un amigo
    function sortearAmigo() {
      // Validar que haya amigos
      if (nombreAmigo.length === 0) {
        alert("No hay amigos para sortear.");
        return;
      }

      // Generar índice aleatorio
      const indiceAleatorio = Math.floor(Math.random() * nombreAmigo.length);

      // Obtener nombre sorteado
      const amigoSorteado = nombreAmigo[indiceAleatorio];

      // ocultar la lista
      document.getElementById("listaAmigos").style.display = "none";

      // Mostrar sólo el resultado
      document.getElementById("resultado").innerHTML =
        "El amigo secreto sorteado es: <strong>" + amigoSorteado + "</strong>";
    }



