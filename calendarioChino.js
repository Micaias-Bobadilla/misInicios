/*
 * Enunciado: Crea un función, que dado un año, indique el elemento 
 * y animal correspondiente en el ciclo sexagenario del zodíaco chino.
 * - Info: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos
 *   madera, fuego, tierra, metal, agua y los animales rata, buey, tigre,
 *   conejo, dragón, serpiente, caballo, oveja, mono, gallo, perro, cerdo
 *   (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 */

const animales=   ['rata', 'buey', 'tigre','conejo', 'dragón','serpiente', 'caballo', 'oveja', 'mono', 'gallo', 'perro', 'cerdo']
const elementos = ['madera', 'fuego', 'tierra', 'metal', 'agua'] 
const anhoABuscar = 1967
let anhoInicio = 1924
let indexAnimal=0
let indexElement = 0

while (anhoABuscar != anhoInicio){

    for ( let indexAnimalRecorrido = 0; indexAnimalRecorrido < animales.length; indexAnimalRecorrido++) {

            if (indexAnimalRecorrido%2==0 && indexAnimalRecorrido!= 0) {
                indexElement+=1;
                if (indexElement>=5) {
                    indexElement=0
                }     
            }

        anhoInicio+=1;
        if ( anhoInicio === anhoABuscar ){ 
            indexAnimal = indexAnimalRecorrido +1 
            indexAnimalRecorrido=animales.length+1
            indexElement+=1
            if (indexElement>=5) {
                indexElement=0
            }   
        }
        
    }
}



console.log(animales[indexAnimal], elementos[indexElement]);



