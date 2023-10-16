// let a = "Baby";
// console.log(a)

// let b = ["Muskan","Baby","Jeeant","Ankush","Radha","Mukesh"]

// console.log(b)

// let a = [ 1,2,3,4,5,6,7,8,9,10]

// console.log(a)
// a[0] = 0;
// console.log(a)

// a[0]
// let b = a[0]
// console.log(b)

// let a = [1,2,3,4,5,6,7,8,9,10,"Muskan Rajput"]

// console.log(a)
// console.log(a[10].length)

// let a = 'Mukesh';
// let b = 7
// let c = [1,2,3,4,5]

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)


// let a1 = [1,2,3,4,5]
// let a2 = [11,12,13,14,15]
// let a3 = [21,22,23,24,25]
// console.log(a)
// console.log(a.toString())
// console.log(a.join("-"))
// a.pop()
// a.push(11)
// a.shift()
// a.unshift(0)
// delete a[5]
// console.log(a.length)

// console.log(a1.concat(a2,a3))

// let a = [2,4,15,36,15,1,42,10,3,47,20]
// a.sort((x,y)=>{
//     return x-y
// })
// a.sort(function (x,y){
//     return x-y
// })
// console.log(a)
// let a = [1,2,3,4,5,6]
// a.splice(5,2,23,24)
// console.log(a)

// let a = [1,2,3,4,5,6,7,8]
// console.log(a.slice(2))

// let a = [1,2,3,4,5,6,7,8]
// let b = a.reverse()
// console.log(b)

// const a  = [1,2,3,4,5]
// let b = a.forEach((value,index,array)=>{
//         let b = value*value
//         console.log(b)
//     })
// console.log(b)

    // const a  = [1,2,3,4,5]
    // let b = a.map((value,index,array)=>{
    //     return value*value
    // })
    // console.log(b)

// const a = [1,2,3,4,5,6,7,8,9,10]

// const b = a.filter((x)=>{
//     return x<5
// })
// console.log(b)

// const num = [1,2,3,4,5,6,7,8]
// let sum = num.reduce((x,y)=>x+y)
// console.log(sum)

// const a = ['a','b','c','d','e']

// for(const element of a){
//     console.log(a)
// }

const a = {a:1,b:2,c:3,d:4}

for(const element in a){
    console.log(`${element}:${object[element]}`)
}