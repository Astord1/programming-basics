const obj = {
    n: 0
};

const inc1 = (n) => {
    return n;
};

const inc2 = (num) => {
    num.n = 89;
};

const a = 5;
const b = inc1(a);

console.log({ a, b });
inc2(obj);
console.dir(obj);