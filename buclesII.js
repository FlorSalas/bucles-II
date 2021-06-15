let check = true;
let sum = 0;

while (check) {
    let option = parseInt (prompt ("Ingrese una opción " + "\n" + "1) Cobrar" + "\n" + "2) Retirar dinero de caja" + "\n" + "3) Ver balance de caja " + "\n" + "4) Ver montos totales de las operaciones realizadas" + "\n" + "5) Salir"));


    switch (option) {

    case 1:
        
    let i = 1;
    while (i !== 0) {
        let precios = parseInt (prompt ("Ingrese los precios de los productos" + "\n" + "para salir ingrese el número '0'"));
        sum = sum + precios;

        if (precios === 0) {
            i = 0;
            alert("El valor total de sus compras es de: " + sum);
            let pagar = prompt("¿Desea abonar con tarjeta o con efectivo?");

            if (pagar === "efectivo" && sum > 2000 && sum < 5000) {
                let descuento = (sum*0.05);
                let valordescuento = sum - descuento;
                alert("El total a abonar en efectivo es de: $" + valordescuento);
                let consultar = parseInt(prompt("¿Con cuánto desesa abonar?"));
                let vuelto = (consultar - valordescuento);
                alert("Su vuelto es: $" + vuelto);
                
            } else if (sum > 5000) {
                let descuento = (sum * 0.1);
                let valordescuento = sum - descuento;
                alert("El total a abonar es de: $" + valordescuento);
            }
        } 
        
    } sum = 0;

    break

    case 2:
        break;

    case 3:
        break;
    
    case 4:
        break;

    case 5:
        break;

    }

}