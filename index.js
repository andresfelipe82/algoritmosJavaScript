let continuar = "si";

let contador_ej_uno = 0;
let contador_ej_dos = 0;
let contador_ej_tres = 0;
let contador_ej_cuatro = 0;
let contador_ej_cinco = 0;
let contador_ej_seis = 0;
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
      contador_ej_uno++;
      break;
    case 2:
      let radio = Number(prompt("Ingrese el radio del ciculo"));
      ejercicio2(radio);
      contador_ej_dos++;
      break;
    case 3:
      let lado1 = Number(prompt("Ingrese el lado 1"));
      let lado2 = Number(prompt("Ingrese el lado 2"));
      let lado3 = Number(prompt("Ingrese el lado 3"));
      ejercicio3(lado1, lado2, lado3);
      contador_ej_tres++;
      break;
    case 4:
      let numero1 = Number(prompt("Ingrese el numero 1"));
      let numero2 = Number(prompt("Ingrese el numero 2"));
      ejercicio4(numero1, numero2);
      contador_ej_cuatro++;
      break;
    case 5:
      let valor = Number(prompt("Ingrese el valor"));
      let cantidad = Number(prompt("Ingrese la cantidad"));
      ejercicio5(valor, cantidad);
      contador_ej_cinco++;
      break;
    case 6:
      let notas = [];
      for (let i = 0; i < 4; i++) {
        let pregunta =  Number(prompt("Ingrese la nota " + (i + 1)));
        if(pregunta>5){
          alerta("El numero es mayor a 5");
          return
      }
        notas[i] = pregunta
        
      ejercicio6(notas);
      contador_ej_seis++;
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
  } else if (lado1 == lado2 && lado1 !== lado3 || lado2==lado3 && lado1!=lado2) {
    alert("El triangulo es isóceles");
    return;
  } else if (lado1 !== lado2 && lado1 !== lado3) {
    alert("El triangulo es escaleno");
    return;
  }
}

function ejercicio4(num1, num2) {
  contadorNum1 = 0;
  contadorNum2 = 0;
  for (let i = 0; i < num1; i++) {
    if (num1 % i == 0) {
      contadorNum1 += i;
    }
  }
  if (contadorNum1 != num2) {
    alert("Los numeros " + num1 + " y " + num2 + " No son amigos");
    return;
  }
  for (let j = 0; j < num2; j++) {
    if (num2 % j == 0) {
      contadorNum2 += j;
    }
  }
  if (contadorNum2 != num1) {
    alert("Los numeros " + num1 + " y " + num2 + " No son amigos");
    return;
  } else {
    alert("Los numeros " + num1 + " y " + num2 + " Son amigos");
    return;
  }
}

function ejercicio5(valor, cantidad) {
  let subTotal = valor * cantidad;
  let iva = subTotal * 0.19;
  let total;
  console.log(subTotal);
  if (subTotal > 500000) {
    total = subTotal;
  } else {
    total = subTotal - iva;
  }

  if (total > 1000000) {
    total = total - total * 0.1;
  }
  alert("El valor es " + total);
  alert("El iva es " + iva);
}

function ejercicio6(notas) {
  let porcentaje = 0.1;
  notaFinal = 0;

  if (notas[notas.length - 1] == 5) {
    for (let i = 0; i < notas.length - 1; i++) {
      notas[i] = notas[i] + 1;
    }
  }

  for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
    console.log(i, notas[i] * porcentaje);
    notaFinal += notas[i] * porcentaje;
    porcentaje += 0.1;
  }
  console.log(notaFinal);
  if(notaFinal>3.5){
    alert("Ganó")
  }
  else{
    alert("Perdió")
  }
}
}
let contadores_ejercicios = [contador_ej_uno,contador_ej_dos,contador_ej_tres,contador_ej_cuatro,contador_ej_cinco,contador_ej_seis];
contadores_ejercicios.sort();
console.log("El ejercicio 1 se ejecutó " + contador_ej_uno + " veces");
console.log("El ejercicio 2 se ejecutó " + contador_ej_dos + " veces");
console.log("El ejercicio 3 se ejecutó " + contador_ej_tres + " veces");
console.log("El ejercicio 4 se ejecutó " + contador_ej_cuatro + " veces");
console.log("El ejercicio 5 se ejecutó " + contador_ej_cinco + " veces");
console.log("El ejercicio 6 se ejecutó " + contador_ej_seis + " veces");
console.log("El ejercicio que menos se ejecutó fue: "+contadores_ejercicios[0]);
console.log("El ejercicio que mas se ejecutó fue: "+contadores_ejercicios[contadores_ejercicios.length-1]);

