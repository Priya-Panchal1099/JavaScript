// for loop
for(let i=0;i<10;i++){
    console.log("Iteration number: " + i);
    if(i==6){
        console.log("Break Loop at",i);
        break;
    }
}

// nested for loop ,break & continue
for(let i=1;i<10;i++){
    for(let j=1;j<10;j++){
        console.log("i: " + i + ", j: " + j);
        if(j==2){
            console.log("Continue inner loop at j=", j);
            continue; 
        }
        if(j==3){
            console.log("Break inner loop at j=", j);
            break;
        }
    }
}

//loop in Array
let arr=['One', 'Two', 'Three', 'Four', 'Five'];
for(let i=0;i<arr.length;i++){
    console.log("Element:",arr[i]);   
}