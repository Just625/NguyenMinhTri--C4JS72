let currentTime = 0
let startButton = document.getElementById('startB')
let stopButton = document.getElementById('stopB')
let time = document.querySelector('p')
let inputElement = document.getElementById('input')
startFunction = function(){
    currentTime = inputElement.value
    a = setInterval(() => {
        if (currentTime > 0){
            time.innerText = currentTime
            currentTime = currentTime -1    
        }
        else{
            clearInterval(a)
            alert('Time is up')
    }}, 1000);
}
stopFunction = function(){
    clearInterval(a)
    alert('Time is up')
}
startButton.addEventListener('click',startFunction )
stopButton.addEventListener('click',stopFunction)