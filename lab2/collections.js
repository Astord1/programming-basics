// const collection = [
//     {name: "Joe", phone: "123-456-7890"},
//     {name: "Anna", phone: "234-567-8901"},
//     {name: "Mike", phone: "345-678-9012"},
//     {name: "Sara", phone: "456-789-0123"},
//     {name: "David", phone: "567-890-1234"},
//     {name: "Emma", phone: "678-901-2345"},
//     {name: "Chris", phone: "789-012-3456"}
// ];

// findPhoneByName = (name) => {
//     for (let i = 0; i < collection.length; i++) {
//         if (collection[i].name === name) {
//             return collection[i].phone;
//         }
//     }
//     return "No such user";
// }

// console.log(findPhoneByName("Mike"));

const phoneObject = {
    Joe: "123-456-7890",
    Anna: "234-567-8901",
    Mike: "345-678-9012",
    Sara: "456-789-0123",
    David: "567-890-1234",
    Emma: "678-901-2345",
    Chris: "789-012-3456"
};

const findPhoneByName = (name) => {
    return phoneObject[name] || "No such user";
};

console.log(findPhoneByName("Mike"));