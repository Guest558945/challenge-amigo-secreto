Esta aplicación web permite organizar un sorteo de amigo secreto de forma sencilla. Los usuarios pueden agregar nombres de participantes y realizar un sorteo aleatorio para determinar quién será el amigo secreto. El proyecto está dividido en los siguientes archivos:

app.js: Contiene la lógica principal del programa.
style.css: Define los estilos visuales de la aplicación.
index.html: la estructura de la pagina
amigo-secreto.png: Imagen utilizada como parte del diseño visual.

 ♣Funcionalidades
◘ Agregar Amigos
Descripción: Permite al usuario ingresar el nombre de un participante en el sorteo.
Función: agregarAmigo()
Flujo:
Captura el valor ingresado en el input de texto.
Agrega el nombre a un array.
Limpia el input.
Muestra la lista actualizada de participantes en pantalla.



◘ Mostrar Lista
Descripción: Muestra en pantalla los nombres de los participantes agregados.
Función: mostrarLista()
Flujo:
Toma el array de participantes.
Itera sobre él creando elementos <li> para cada nombre.
Inserta los elementos en el contenedor designado.

◘ Sortear Amigo Secreto  
Descripción: Realiza un sorteo aleatorio entre los participantes.
Función: sortearAmigo()
Flujo:
Genera un número aleatorio basado en la longitud del array.
Muestra el nombre del amigo secreto sorteado.
Evita seleccionar a alguien si no hay participantes.

◘ Estilos (style.css) 
El archivo style.css proporciona un diseño limpio y moderno utilizando variables de color, flexbox y efectos visuales.

Principales características del diseño:
Colores primarios: Definidos mediante variables CSS.
Diseño centrado: La aplicación se mantiene centrada en la pantalla.
Botones interactivos: Cambian de color al pasar el mouse.
Input con borde redondeado: Mejora la experiencia de usuario.

◘ Cómo ejecutar el proyecto
Descarga todos los archivos del proyecto.
Abre el archivo index.html en tu navegador.
Ingresa los nombres de los participantes.
Haz clic en Agregar amigo.
Una vez agregados, haz clic en Sortear amigo secreto para obtener un resultado.
