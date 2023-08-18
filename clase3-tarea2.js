let edadUsuario = Number(prompt("Que edad tenes?"))
const Mi_EDAD = 28

if (edadUsuario === Mi_EDAD){
    console.log("Tenemos la misma edad!")
} else if(edadUsuario > Mi_EDAD){
    console.log("Lero, lero, sos mas viejo")
} else if(edadUsuario < Mi_EDAD){
    console.log("Que hace', pibe?")
} else{
    console.log("No entendi la respuesta")
}
