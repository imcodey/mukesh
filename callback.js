// const display = (a1) =>{
//     document.getElementById("my").innerHTML = a1;
// }
// const first = () =>{
//     display("Hello World")
// }
// const second = () =>{
//     display("Good Morning")
// }
// first();
// second();

// const display = (a1) =>{
//     document.getElementById("my").innerHTML = a1;
// }
// const add = (num1,num2)=>{
//     let sum = num1+ num2;
//     return sum
// }
// let result = add(5,5)

// display(result)

// const display = (sometext)=>{
//     document.getElementById("my").innerHTML = sometext;
// }

// const add =(num1,num2,callback)=>{
//     let sum = num1+num2
//     callback(sum)
// }

// add(5,2,display) 

// remove the negative number in the array using to the callback

const num = [-12,4,5,-10,23,-5,14,-32];

//remove number
const removeNeg = (numbers,callback)=>{
    const array = [];
    for(const x of numbers){
        if(callback(x)){
            array.push(x);
        }
    }
    return array;
}

const Posnum = removeNeg(num,(x)=> x >= 0) //remove neg with callback
//display
document.getElementById("my").innerHTML = Posnum;