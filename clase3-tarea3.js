const documentos = prompt('Tenes documento de identidad? ('Si').toLowerCase();

let edad;

if (documentos === 'si'){
    edad = 16(prompt('Que edad tenes?'))
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
