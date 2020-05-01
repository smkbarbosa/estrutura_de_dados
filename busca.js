var valores = [5, 8, 10, 22, 45, 38];

function busca(num){
    for(i=0; i<6; i++){
        if(num == valores[i]){
            return i;
        }        
    }
}

/*--------------------------- */

console.log(busca(10));
console.log(busca(50));