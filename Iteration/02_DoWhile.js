// while loop
let i = 0;
while(i<10){
    i++;
    console.log("Iteration number: " + i);
}


// do while loop
let j = 20;
do{
    j++;
    console.log("Iteration number: " + j);
}while(j<25){
    console.log("this will be executed at least once");
}

// while in Array
let array = ['One', 'Two', 'Three', 'Four', 'Five'];
let arr=0
while(arr<array.length) {
    console.log("Element:", array[arr]);
    arr=arr + 1;
}
