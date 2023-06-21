// If
var numeroIf = 8;
if (numeroIf > 0) {
  console.log("El número es positivo");
} else if (numeroIf < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es 0");
}

// While
var numeroWhile = 0;
while (numeroWhile < 3) {
  numeroWhile++;
  console.log("Valor de numeroWhile:", numeroWhile);
}

// Do While
var numeroDoWhile = 2;
do {
  numeroDoWhile++;
  console.log("Valor de numeroDoWhile:", numeroDoWhile);
} while (numeroDoWhile < 3);

// For
for (var numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log("Valor de numeroFor:", numeroFor);
}

// Switch
var estacion = "verano";
switch (estacion) {
  case "primavera":
    console.log("Es primavera.");
    break;
  case "verano":
    console.log("Es verano.");
    break;
  case "otoño":
    console.log("Es otoño.");
    break;
  case "invierno":
    console.log("Es invierno.");
    break;
  default:
    console.log("No es una estación válida.");
    break;
}
