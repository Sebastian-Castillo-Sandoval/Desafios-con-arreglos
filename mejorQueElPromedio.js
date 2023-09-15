//Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.
function betterThanAverage(arr) {
    var sum = 0;// calcula el promedio
    let prom = 0;
    
    for (let i=0; i<arr.length; i++){

        sum = sum + arr[i];
    
    }
    prom = (sum/arr.length);
    var count = 0
    for (let i=0; i<arr.length; i++){
        if(arr[i]>prom){
        count = count +1;
    }
}
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
