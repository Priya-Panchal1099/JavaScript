const coding = ["js", "ruby", "java", "python", "c++"]
//  using annonymous function
coding.forEach(function( item) {
    console.log( item," is a coding language");
});

// using arrow function
coding.forEach((item)=> console.log(item, "Arrow function"));


// Using named function
function printItem(item) {
    console.log(item, "named function");
}
coding.forEach(printItem);

// using forEach with index
coding.forEach((item,i)=> console.log(item, "is at index", i));
