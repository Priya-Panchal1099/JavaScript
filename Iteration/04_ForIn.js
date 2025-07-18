let arr=['One', 'Two', 'Three', 'Four', 'Five'];
for(let key in arr){
    console.log("Element:", arr[key]);   
}

let str="Hello How are you?";
for(let i in str){
    console.log("Character:", str[i]); 
}

const obj = {
    employee:"Anup",
    company:"TechCorp",
    position:"Developer"
};
for(let key in obj){    
    console.log("Emp Key:", key, ",Emp Value:", obj[key]);
}

//in not work in map
const map=new Map();
map.set("name", "kisu");
map.set("age", 25);
map.set("city", "Ahmedabad");
for(let value in map){
    console.log("map value:", map[value]);
}