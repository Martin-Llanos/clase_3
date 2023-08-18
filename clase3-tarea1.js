const nombreDeUsuario = prompt("Como te llamas?" || '').toLowerCase();
const miNombre = 'Miguel'
const nombreDeMiHermano = 'Luis'

if (nombreDeUsuario === 'Miguel'){
    console.log("Hola, Tocayo! Yo también me llamo " + miNombre);
} else if (nombreDeUsuario === 'luis'){
   console.log("Hola " + nombreDeMiHermano + " , te llamás igual que mi hermano");
} else {
    console.log("Hola, " + nombreDeUsuario)
}
