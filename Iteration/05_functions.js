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


// Array function in object
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName,"language", item.languageFileName, "file");
    
})
