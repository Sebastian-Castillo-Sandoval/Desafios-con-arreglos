/*Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n. 
Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia. Entonces, 
si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5.*/
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    
    var fibArr = [0, 1];
    while(fibArr.length<n){
        
        let ultimo = fibArr[fibArr.length-1];
        let penultimo = fibArr[fibArr.length-2];  
        actual = ultimo + penultimo;
        fibArr.push(actual);
        
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
