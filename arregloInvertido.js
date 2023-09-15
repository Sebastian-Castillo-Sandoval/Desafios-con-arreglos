function reverse(arr) {
    let inicio = 0;
    let final = arr.length-1;//4
    let temp = 0;
    while (inicio<final){
        temp = arr[inicio];
        arr[inicio] = arr[final];
        arr[final] = temp;
        inicio = inicio +1;
        final = final -1;
    }
    
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
