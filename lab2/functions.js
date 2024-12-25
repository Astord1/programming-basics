function avarage(a,b){
    return (a+b)/2;
};

function square(a){
    return a*a;
};

function cube(a){
    return a*a*a;
};

function calculate(){
    let array = [];
    for(i = 0; i < 10; i++){
        array.push(avarage(square(i), cube(i)));
    }
    return array;
}

console.log(calculate());

