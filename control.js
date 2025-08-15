let salida = "";

function calcular(data) {
  const pantalla = document.querySelector(".pantalla--primaria");
  const pantalla2 = document.querySelector(".pantalla--secundaria");

  // Borrar todo
  if (data === "borrar") {
    pantalla.innerHTML = "0";
    pantalla2.innerHTML = "";
    salida = "";
    return;
  }

  // Igual: calcular resultado
  if (data === "=") {
    try {
      const resultado = eval(salida);
      if (resultado !== undefined) {
        pantalla.innerHTML = resultado;
        pantalla2.innerHTML = "";
        salida = "";
      }
    } catch (error) {
      pantalla.innerHTML = "Error";
      pantalla2.innerHTML = "";
      salida = "";
    }
    return;
  }

  // Evitar operadores al inicio
  if (pantalla.innerHTML === "0" && /[+*/]/.test(data)) return;

  // Agregar nuevo valor a la salida
  salida += data;

  // Mostrar la salida formateada
  pantalla.innerHTML = salida.replace(/\*/g, "×").replace(/\//g, "÷");

  // Mostrar resultado parcial si termina en número
  try {
    if (/[\d)]$/.test(salida)) {
      const parcial = eval(salida);
      pantalla2.innerHTML = parcial !== undefined ? parcial : "";
    } else {
      pantalla2.innerHTML = "";
    }
  } catch {
    pantalla2.innerHTML = "";
  }
}