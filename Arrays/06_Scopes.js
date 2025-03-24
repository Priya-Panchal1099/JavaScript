// var c=300;
// let a=300;
if(true){
    let a=10;
    const b=20;
    // console.log("Inner block:",a);
}

// console.log(a);
// console.log(b);//b doesn't access outside block
// console.log(c);

function one(){
    const username="Anup";
    function two(){
        const website="Youtube";
        console.log("username",username);
        console.log(`website ${website}`);
        
    }
    // console.log("outside two function website:",website);//not access outside two function
    two(); 
}
// one();

if(true){
    const username="Anup";
    if(username==="Anup"){
        const website=" Youtube";
        console.log(username + website);
    }
    // console.log(website);//not access
}
// console.log(username);//not access


//intersting

console.log(addone(5))//return any function then log this function

function addone(num){
    return num + 1
}

// addTwo(5)//if you are log then print in addTwo() function
const addTwo = function(num){
    return num + 2
}
