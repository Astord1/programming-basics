const fn = () => {
    const obj1 = { name: 'Biden' };
    let obj2 = { name: 'Zelensky' };
  
    obj1.name = 'Joe';
    obj2.name = 'Volodymyr'; 
    
//    obj1 = { name: 'Marcus Aurelius' }; констаната не може бути переприсвоєна
    obj2 = { name: 'Marcus Aurelius' };
};

const createUser = (name, city) => {
    return { name, city };
}

console.dir(createUser('Marcus Aurelius', 'Roma'));