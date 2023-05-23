/* Codigo para encriptar el numero de 4 digitos */
function encriptar() {
    event.preventDefault();
    var digito = document.getElementById("digito").value;
    if (digito.length !== 4) {
        alert("Por favor, ingrese un número entero de 4 dígitos.");
        return;
    }
    var digitosArray = Array.from(digito.toString()).map(Number);
    var encriptados = digitosArray.map(function(digito) {
      return (digito + 7) % 10;
    });
    var temp = encriptados[0];
    encriptados[0] = encriptados[2];
    encriptados[2] = temp;
    temp = encriptados[1];
    encriptados[1] = encriptados[3];
    encriptados[3] = temp;
    var resultado = encriptados.join("");
    document.getElementById("resultado").textContent = "Número encriptado: " + resultado;
  }
  
  /* Codigo para desencriptar el numero encriptado de 4 digitos */
  function desencriptar() {
    event.preventDefault();
    var digitoEncriptado = document.getElementById("digito2").value;
    if (digitoEncriptado.length !== 4) {
        alert("Por favor, ingrese un número encriptado de 4 dígitos.");
        return;
    }
    var digitosEncriptadosArray = Array.from(digitoEncriptado.toString()).map(Number);
    var temp = digitosEncriptadosArray[0];
    digitosEncriptadosArray[0] = digitosEncriptadosArray[2];
    digitosEncriptadosArray[2] = temp;
    temp = digitosEncriptadosArray[1];
    digitosEncriptadosArray[1] = digitosEncriptadosArray[3];
    digitosEncriptadosArray[3] = temp;
    var desencriptados = digitosEncriptadosArray.map(function(digitoEncriptado) {
      return (digitoEncriptado + 10 - 7) % 10;
    });
    var resultado = desencriptados.join("");
    document.getElementById("resultado").textContent = "Número desencriptado: " + resultado;
  }