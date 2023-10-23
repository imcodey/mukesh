// const display = (a1)=>{
//     document.getElementById("my").innerHTML = a1;
// }
// const add = (num1,num2,callback) =>{
//     let sum = num1+num2;
//     callback(sum)
// }
// let result = add(4,3,display)

const num = [10,-12,14,-50,23,-40,-20,];

const removeNeg = (numbers,callback) =>{
    const array = [];
    for(x of numbers){
        if(callback(x)){
            array.push(x)
        }
    }
    return array;
}

const PosNum = removeNeg(num,(x)=> x >= 0);

document.getElementById("my").innerHTML = PosNum;