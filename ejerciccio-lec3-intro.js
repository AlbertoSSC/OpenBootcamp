function sumarTresNumeros(num1, num2, num3) {
  var suma = num1 + num2 + num3;
  return suma;
}

var resultado = sumarTresNumeros(2, 4, 6);
console.log("El resultado de la suma es:", resultado);

class Coche {
  constructor() {
    this.numeroPuertas = 2;
  }

  agregarPuerta() {
    this.numeroPuertas++;
  }
}

var miCoche = new Coche();
miCoche.agregarPuerta();

console.log("El número de puertas del coche es:", miCoche.numeroPuertas);
