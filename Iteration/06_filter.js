const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach((item) => {
    console.log(item);
    return item;
})

console.log(values); // undefined, as forEach does not return anything

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

myNums.filter((num) => { return num > 5; });
newNum = [];
myNums.forEach((num) => {
    if (num > 5) {
        newNum.push(num);
    }
});
console.log(newNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let nonfiction = books.filter((book) => {
    return book.genre === 'Non-Fiction';
});
console.log(nonfiction);


// every number in plus 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const plusTen = numbers.map((num) => {
    return num + 10;
});
console.log(plusTen);

numbers.map((num) => num = num * 10)
    .map((num) => num = num + 1)
    .filter((num) => num < 50)
    .forEach((num) => console.log(num));

