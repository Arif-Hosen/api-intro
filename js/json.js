// JavaScript Object Notation
// JSON

const user = { id: 30, name: 'Kasem Ali', job: 'actor' };

const srtingified = JSON.stringify(user);
// console.log(user);
// console.log(srtingified);

const shop = {
    name: 'Alia Store',
    address: 'vuter Goli',
    profit: 12000,
    owner: {
        name: 'Alia Bhatt',
        profession: 'Actor'
    },
    product: ['computer', 'mobile', 'watch'],
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);

const convert = JSON.parse(shopStringified);
console.log(convert);