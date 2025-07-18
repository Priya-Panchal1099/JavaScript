//for with of in Array
let arr=['One', 'Two', 'Three', 'Four', 'Five'];
for (let array of arr){
    console.log("Element:", array);   
}


//for with of character
let str="Hello How are you?";
for(let char of str){
    console.log("Character:", char); 
}


//Map iteration
let map=new Map();
map.set("name", "Priya");
map.set("age", 30);
map.set("city", "New York");

for(let[key,value]of map){
    console.log("Key:", key, ", Value:", value);
}

// Object iteration
const obj = {
    employee:"Anup",
    company:"TechCorp",
    position:"Developer"
};

for(const [key,value] of Object.entries(obj)){
    console.log("Emp Key:", key, ",Emp Value:", value);
    
}