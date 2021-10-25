function sum(a:number,b:number):number{
    return a+b
}

console.log(sum(1,2))


function sum2(a:number,b:number|string):number|string{
    return a+<number>b
}

console.log(sum2(1,'2'))
console.log(sum2(1,2))

let str: any = 'Текстовая переменная'
let strLength = (<string>str).length
let strLength2 = str.length
console.log(strLength)
console.log(strLength2)