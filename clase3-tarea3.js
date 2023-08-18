const documentos = prompt('Tenes documento de identidad? (responda Si o No)').toLowerCase();

let edad;

if (documentos === 'si'){
    edad = Number(prompt('Que edad tenes?'))
    if (edad <18){
        console.log("No te puedo dejar pasar");
    }else if(edad >=16){
        console.log("Bienvenido al Bar")
    }else {
        console.log("No entendi la respuesta")
    }
} else if(documentos === 'no'){
    console.log("No te puedo dejar pasasar");
}else{
    console.log("No entendi la respuesta")
}
