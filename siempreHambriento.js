/*cada vez que el valor sea "comida" debería mostrar "delicioso"en la consola. Si "comida" 
no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez.*/

function alwaysHungry(arr) {
    contarComida = 0;
    for (let i=0; i<arr.length; i++){
        if(arr[i] === "comida"){
            console.log("delicioso");
            contarComida = contarComida + 1;
            }   
        }
        if(contarComida === 0){
            console.log("Tengo hambre"); 
        }
    } 
  
alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"
