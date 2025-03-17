//Dates
let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());

//log
// let mycreateDate=new Date(2023,0,23)//get custom date
// let mycreateDate=new Date(2023,0,23,5,3)//get custom date with time
// console.log(mycreateDate.toLocaleString());
let mycreateDate=new Date("01-14-2023");
// console.log(mycreateDate.toLocaleString());

//time
let myTime=Date.now();
console.log(myTime);
console.log(mycreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let date=new Date();
console.log(date.getDate());
console.log(date.getMonth());

