debugger

let user = prompt ("ingrese usuario");

if (user == ""){
    alert("Usuario no ingresado")
} else {
alert ("Bienvenido "+user,"")
}

// function cotizarDolar(pesos){
// let cotizacionDolares = pesos/DOLAR_COMPRA
// return cotizacionDolares;
// }


// if(opcion == "1" ){
//     let cantiPesos = parseFloat(prompt("ingresa la cantidad de pesos"))
//     let cotizacionD = cotizarDolar(cantiPesos);
//     alert ("Ingresando $"+cantiPesos+", te quedan U$S "+cotizacionD);

const IVA = 1.21

function calcularIva (precioRopa){
    let ropaConIva = precioRopa * IVA
    return ropaConIva;
    }

let ropa=prompt("Ingrese el articulo que quiere comprar (Salir para finalizar)");
while (ropa != "Salir"){
switch(ropa){
    case "Remera negra":
        let remeIva = (parseInt(2500));
        let totalIvaR = calcularIva (remeIva);
        console.log ("El valor total de este articulo es de "+totalIvaR);
        break;
    case "Pantalon gabardina":
    case "Pantalon jean":
        let pantalonIva =(parseInt(4000));
        let totalIvaP = calcularIva (pantalonIva);
        console.log ("El valor total de este articulo es de "+totalIvaP);
        break;
    case "Buzo jogging":
        let buzoIva =(parseInt(6000));
        let totalIvaB = calcularIva (buzoIva);
        console.log ("El valor total de este articulo es de "+totalIvaB);
        break;
    case "Campera de nieve":
        let camperaIva =parseInt((12000));
        let totalIvaC = calcularIva (camperaIva);
        console.log ("El valor total de este articulo es de "+totalIvaC);
        break;
    default:
        console.log ("No contamos con ese articulo en stock")
        break;
}
ropa=prompt("Ingrese el articulo que quiere comprar (Salir para finalizar");
}

