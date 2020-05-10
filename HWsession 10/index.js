// // Ex 1:
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("Promise is da best"), 5000);
// })
  

// async function render(){
//     const showIt = await promise
//     console.log(showIt)
// }
// render()

// promise.then(resolve => console.log(resolve), 
//     error => console.log(error) 
// )

//Ex 4:
// const rdNum = () => {
//     const number = Math.floor(Math.random() * 11)
//     return number
// }
// const x = rdNum()
// if (x < 0) {
//     console.log("Failed: the number is smaller than 0")
// } else if (x > 10) {
//     console.log("Failed: the number is bigger than 10")
// } else {
//     console.log("Passed, bravo")
// }

//Ex 5:
// function rdNum(a,b){
//     number = Math.floor(Math.random()*(b-a+1))+a
//     return number
// }
// const x = rdNum(4, 16)
// if (x < 4) {
//   console.log("Failed: the number is smaller than 4")
// } else if (x > 16) {
//   console.log("Failed: the number is bigger than 16")
// } else {
//   console.log("Passed, bravo")
// }

//Ex 6:
// function calculate(x1,x2,y1,y2){
//     distance = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))
//     return distance
// }
// const d = calculate(3, 10, 0, 6);
// if (d !== 5) {
//   console.log("Failed: the calculation is wrong");
// } else {
//   console.log("Passed, bravo");
// }

//Ex 7:
// async function fetchData(){
//     const quoteData = await fetch ('http://quotes.rest/qod.json')
//     const realData = await quoteData.json()
//     return realData
// }

// async function render(){
//     const data = await fetchData()
//     console.log(data)
//     const quoteContent = document.getElementById('quoteContent')
//     quoteContent.innerHTML = data.contents.quotes[0].quote
//     const quoteAuthor = document.getElementById('quoteAuthor')
//     quoteAuthor.innerHTML = data.contents.quotes[0].author
// }

// render()
