//Ex 6:
let a = Number(prompt('Enter a number'))
if ( a<0 || a>9){
 console.log('Number does not meet requirements')
} else if (a < 9/2){
    console.log('Lower half of 9')
} else{
    console.log("Higher half of 9")
}

//Ex 7:
let n = Number(prompt('n='))
let x = Number(prompt('x='))
if (x < n/2){
    console.log(`${x} is in lower half of ${n}`)
} else{
    console.log(`${x} is in higher half of ${n}`)
}

//Ex 8:
let x = Number(prompt("x="))
if (x%2 == 1){
    console.log(`${x} is an odd number`)
} else{
    console.log(`${x} is an even number`)
}

//Ex 9:
//Ex 9.a:
for( i=0;i<6/2;i++){
    console.log("L")
}
for( j=0;j<6/2;j++){
    console.log("H")
}

//Ex 9.b:
let n = Number(prompt("Enter the total number of L's and H's?"))
let h = Math.floor(n/2)
let l = n-h
for( i=0;i<l;i++){
    console.log("L")
}
for( j=0;j<h;j++){
    console.log("H")
}

//Ex 9.c:
for (i=0; i <8/2; i ++){
 console.log(0)
 console.log(1)
}

//Ex 9.d:
for (i=0; i <9; i ++){
 if (i%2==0){
 console.log(0)
 } else{
 console.log(1)
 }
}

//Ex 10:
let mass = Number(prompt("Your weight in kg?"))
let h = Number(prompt("Your height in cm?"))
if (mass>0 && h >0){
 height = h/100
 let BMI = Math.round((mass/height**2)*100)/100
 console.log(`Your BMI is ${BMI}`)
 if (BMI < 16){
    console.log('You are severely underweight')
 } else if ( BMI < 18.5){
    console.log("You are underweight")
 } else if ( BMI < 25){
    console.log('You are normal')
 } else if ( BMI < 30){
    console.log("You are overweight")
 } else{
    console.log("You are obese")
 }
}else {
    console.log('Wrong number')
}



