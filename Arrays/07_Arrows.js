const user = {
    username: "priya",
    price: 200,
    welcomeMessage: function () {
        console.log(`${this.username},welcome to website`);
        console.log(this);

    }
}
// user.welcomeMessage();
// user.username="nikita";
// user.welcomeMessage();

// chai()

// const chai = function () {
//     let username = "anup"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "priya";
//     console.log(this);
// }
// chai()

// const addTwo=(n1,n2)=>{
//     return n1+n2;
// }
// console.log(addTwo(4,5));

// const addTwo=(n1,n2)=>n1+n2;
// console.log(addTwo(2,4));

const addTwo = (num1, num2) => ({username: "hitesh"})
// console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 7, 8];
// myArray.forEach(n=>console.log(n));


// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
