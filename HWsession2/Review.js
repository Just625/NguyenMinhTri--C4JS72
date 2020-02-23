//Study
//I.let vs var vs const
//1.var và const đều là từ khóa của JS dùng để khai báo biến
//2.Khi khai báo biến bằng var trong {} thì vẫn có thể gọi biến khi ra ngoài {}, còn let thì không làm được
//3.const dùng để khai báo biến là 1 hằng số tức là giá trị không đổi
//Biến được khai báo bởi let thì có thể thay đổi giá trị
//4.Dùng const khi tin rằng biến được khai báo sẽ không thay đổi
//Dùng let khi biến được sử dụng trong phạm vi {} nhất định, khi code đỡ bị ri
//Dùng var khi biến được sử dụng xuyên suốt chương trình
//II.Boolean
//1.Boolean là 1 kiểu dữ liệu trong JS gồm có 2 giá trị: true và false
//2.Boolean trả về 1 trong 2 giá trị true hoặc false
//Ex 3:
//Ex 3.a:
for (i =0; i<7; i++){
    console.log(i)
}

//Ex 3.b:
let n = Number(prompt('Enter a number?'))
 for (i =0; i<n; i++){
    console.log(i)
 }

//Ex 3.c:
 let n = Number(prompt('Enter n'))
  for (i =3; i<n; i++){
     console.log(i)
  }

//Ex 3.d:
 let n = Number(prompt('Enter n'))
 let c = Number(prompt('Enter c'))
  for (i =c; i<n; i++){
     console.log(i)
  }

//Ex 3.e:
 let n = Number(prompt('Enter n'))
 let c = Number(prompt('Enter c'))
  for (i =c; i<n; i+=3){
     console.log(i)
  }

//Ex 3.f:
 let n = Number(prompt('Enter n'))
 let c = Number(prompt('Enter c'))
 let s = Number(prompt('Enter s'))
  for (i =c; i<n; i+=s){
     console.log(i)
  }

//Ex 4:
let a = Number(prompt('Enter a number'))
let b = 1
for (i =1; i< a+1; i++){
   b = b*i
}
console.log(`The factorial of ${a} is ${b}`)

//Ex 5:
let a = Number(prompt('How old are you?'))
if (a < 14){
   console.log('You are not old enough to view this content')
} else{
   console.log('Enjoy')
}