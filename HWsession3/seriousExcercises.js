//Ex 5:
let number = prompt('Enter a sequence of Number, separated by commas (.)')
lnumber = number.split(',')
sum = 0
for ( i in lnumber){
    sum = sum + Number(lnumber[i])
}
alert(`The sum of them is ${sum}`)

// // Ex 6:
let number = prompt('Enter a sequence of Number, separated by commas (.)')
lnumber = number.split(',')
alert(`The smalles number is ${Math.min(...lnumber)}`)

//Ex 7:
const arr = [3, 4, 6, -9, 10, -88, 2]
let num = Number(prompt('Enter a number'))
if (Number.isNaN(num)){
    alert('Please enter a number')
} else{
 let a = arr.indexOf(num)
 if (a == -1){
    alert(`${num} is NOT found in my array`)
 } else{
    alert(`${num} is found in my array at index ${a}`)
 }
}

//Ex 8:
//Ex 8.1:
let sheepFlock = [5, 7, 300, 90, 24, 50, 75]
console.log('Hello my name is Minh Tri and here is my sheep size: \n'
            ,...sheepFlock)

//Ex 8.2:
let maxSheep = Math.max(...sheepFlock)
console.log(`Now my biggest sheep has size ${maxSheep}, let shave it`)

//Ex 8.3:
sheepFlock[sheepFlock.indexOf(maxSheep)] = 8
console.log('After shearing, here is my flock \n',...sheepFlock)

//Ex 8.4:
console.log('MONTH 1')
for ( i in sheepFlock){
    sheepFlock[i] = sheepFlock[i] +50
}
console.log('One month has passes, my sheeps have grown, here are their sizes: \n'
            ,...sheepFlock)

//Ex 8.5
for (j =1; j <3; j++){
 console.log(`MONTH ${j}`)
 for ( i in sheepFlock){
    sheepFlock[i] = sheepFlock[i] +50
 }
 console.log('One month has passes, my sheeps have grown, here are their sizes: \n'
            ,...sheepFlock)
 let maxSheep = Math.max(...sheepFlock)
 console.log(`Now my biggest sheep has size ${maxSheep}, let shave it`)
 sheepFlock[sheepFlock.indexOf(maxSheep)] = 8
 console.log('After shearing, here is my flock \n' ,...sheepFlock)
}
console.log('MONTH 3')
for ( k in sheepFlock){
    sheepFlock[k] = sheepFlock[k] +50
}
console.log('One month has passes, my sheeps have grown, here are their sizes: \n'
            ,...sheepFlock)

//Ex 8.6:
let total = 0
for ( l in sheepFlock){
    total = total + sheepFlock[l]
}
console.log(`My flock has size in total: ${total}`)
let nw = total * 2
console.log(`I would get ${total} * 2$ = ${nw}`)
