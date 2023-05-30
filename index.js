let continuar = "si";

let contadorEjUno = 0;
let contadorEjDos = 0;
let contadorEjTres = 0;
let contadorEjCuatro = 0;
let contadorEjCinco = 0;
let contadorEjSeis = 0;
while (continuar == "si") {
  let menu = Number(
    prompt(
      "Ingrese el numero del ejercicio que desea ver \nEjercicio 1\nEjercicio 2\nEjercicio 3\nEjercicio 4\nEjercicio 5\nEjercicio 6"
    )
  );
  switch (menu) {
    case 1:
      let num1 = Number(prompt("Ingrese el numero 1"));
      let num2 = Number(prompt("Ingrese el numero 2"));
      let num3 = Number(prompt("Ingrese el numero 3"));
      ejercicio1(num1, num2, num3);
      break;
    case 2:
      let radio = Number(prompt("Ingrese el radio del ciculo"));
      ejercicio2(radio);
      break;
    case 3:
      let lado1 = Number(prompt("Ingrese el lado 1"));
      let lado2 = Number(prompt("Ingrese el lado 2"));
      let lado3 = Number(prompt("Ingrese el lado 3"));
      ejercicio3(lado1, lado2, lado3);
      break;
    default:
      break;
  }
  continuar = prompt("¿Desea continuar?");
}

function ejercicio1(num1, num2, num3) {
  let numero_mayor_menor;
  let numero_menor_mayor;
  if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
      numero_mayor_menor = `${num1}, ${num2}, ${num3}`;
      numero_menor_mayor = `${num3}, ${num2}, ${num1}`;
    } else {
      numero_mayor_menor = `${num1}, ${num3}, ${num2}`;
      numero_menor_mayor = `${num2}, ${num3}, ${num1}`;
    }
  } else if (num2 > num3) {
    if (num1 > num3) {
      numero_mayor_menor = `${num2}, ${num3}, ${num1}`;
      numero_menor_mayor = `${num1}, ${num3}, ${num2}`;
    } else {
      numero_mayor_menor = `${num2}, ${num3}, ${num1}`;
      numero_menor_mayor = `${num3}, ${num1}, ${num2}`;
    }
  } else {
    if (num1 > num2) {
      numero_mayor_menor = `${num3}, ${num1}, ${num2}`;
      numero_menor_mayor = `${num2}, ${num1}, ${num3}`;
    } else {
      numero_mayor_menor = `${num3}, ${num2}, ${num1}`;
      numero_menor_mayor = `${num1}, ${num2}, ${num3}`;
    }
  }
  alert(`Los numero de Mayor a Menor son ` + numero_mayor_menor);
  alert(`Los numero de Menor a Mayor son ` + numero_menor_mayor);
}

function ejercicio2(radio) {
  alert("El area del circulo es " + 3.1416 * (radio * radio));
}

function ejercicio3(lado1, lado2, lado3) {
  if (lado1 == lado2 && lado1 == lado3) {
    alert("El triangulo es equilatero");
    return;
  } else if (lado1 == lado2 && lado1 !== lado3) {
    alert("El triangulo es isóceles");
    return;
  } else if (lado1 !== lado2 && lado1 !== lado3) {
    alert("El triangulo es escaleno");
    return;
  }
}

