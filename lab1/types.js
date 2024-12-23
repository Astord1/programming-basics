/* const typeArray = [true, 'hello', 5, 12, -200, false, false, 'word', {l: "klkl"}, undefined, null, true, [1,5,8,9], 23];
const typeObj = { number: 0, string: 0, boolean: 0, other: 0 };

for(const el of typeArray){
    const type = typeof el;
    if(type === "string" || type === "number" || type === "boolean"){
        typeObj[type] += 1;
    }else{
        typeObj.other += 1;
    }
}

console.dir(typeObj); */
// Modifiead version 
const typeArray = [true, 'hello', 5, 12, -200, false, false, 'word', { l: "klkl" }, undefined, null, true, [1, 5, 8, 9], 23];
let typeObj = {};
for (const el of typeArray) {
    const type = typeof el;
    if (type === "string" || type === "number" || type === "boolean") {
        typeObj[type] ? typeObj[type] += 1 : typeObj[type] = 1;
    }
    else {
        typeObj.other ? typeObj.other += 1 : typeObj.other = 1;
    }
}

console.dir(typeObj);