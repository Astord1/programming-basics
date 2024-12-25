function range(start, end){
    let array = [];
    for(i = start; i <= end; i++){
        array.push(i);
    }
    
    return array;
}

function rangeOdd(start, end){
    let array = [];
    for(i = start; i <= end; i++){
        if(i % 2 != 0){
            array.push(i);
        }
    }

    return array;
}

console.dir(range(15, 30));
console.dir(rangeOdd(15, 30));