const myNums = [1, 2, 3]
const total=myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // 6

const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 }
]

const bill=shoppingCart.reduce((acc,item)=>acc+item.price,0); // 24996
console.log("Total bill is: " + bill); // Total bill is: 24996



