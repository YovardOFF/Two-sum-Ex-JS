
//Solución O(n)

function twoSum(nums, target) {
    const map = {}; // Constante donde guardo los numeros ya vistos en el array
    
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]; //comenzamos con el numero actual
        const complement = target - num; //creamos otra constante para calcular lo necesario para llegar al target

        if(map.hasOwnProperty(complement)) { //La función hasOwnProperty(propiedad) se usa para saber si un objeto tiene una propiedad específica (clave)
            //entonces usamos hasOwnProperty porque en la función twoSum, usamos un objeto como si fuera un diccionario o mapa, y queremos saber si ya guardamos el número complementario antes
            
            //Entonces si el numero ya fue visto, estara solucionado 
            return[map[complement], i];
        }

        //Si no lo vimos, guardamos el numero actual en el map
        map[num] = i; 
    }
}