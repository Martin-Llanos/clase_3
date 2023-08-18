const nombreDeUsuario = prompt("Como te llamas?" || '').toLowerCase();
const miNombre = 'Sebastian'
const nombreDeMiHermano = 'Luciano'

if (nombreDeUsuario === 'sebastian'){
    console.log("Hola, Tocayo! Yo también me llamo " + miNombre);
} else if (nombreDeUsuario === 'luciano'){
   console.log("Hola " + nombreDeMiHermano + " , te llamás igual que mi hermano");
} else {
    console.log("Hola, " + nombreDeUsuario)
}