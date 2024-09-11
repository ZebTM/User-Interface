// 1A
let addTwoNumbers = ( a , b ) => {
    return a + b;
}
// 1B
let stringLength = ( myStr ) => {
    if(myStr.length < 10)
        return "short";
    return "long";
}

// 2
// The arrow function is taking two parameters a and b
// It is then comparing them and which ever is greater it is printing it to the console

// 3
let arrayMapping = ( array ) => {
    array.map( (item ) => {
        console.log( item );
    })
}


arrayMapping( [ 1, 2 ,3 ])