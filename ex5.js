// Implementa una función que recorre toda la 'palabra', y cuenta todas las letras 'letra' que contiene. Debe devolver el número de veces que aparece 'letra' en 'palabra'

//Recorrer la palabra y buscar letras que concuerde con la que busco, "guardar" el numero de esta letra que hemos encontrado. La funcion parará cuando se acabe la palabra

//Hacer un bucle para recorrer la palabra
// Necesito una variable para "guardar" el numero de veces que hemos encontrado la letra en la palabra

function contarLetras(palabra, letra) {
    let numVeces = 0
    
    for (let index = 0; index < palabra.length; index++) {
        if (letra == palabra[index]){
            numVeces ++
        }
        
    }
    return numVeces
}

console.log(contarLetras("pato", "p")); // 1
console.log(contarLetras("pato", "k")); // 0
console.log(contarLetras("perreque", "r")); // 2