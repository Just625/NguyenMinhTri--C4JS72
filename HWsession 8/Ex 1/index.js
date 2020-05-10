let count = 0
let plusButton = document.getElementById('plus')
let minusButton = document.getElementById('minus')
number.innerHTML = count
plusButton.addEventListener('click', function(){
    count += 1
    number.innerHTML = ''
    number.innerHTML += `${count}`
})
minusButton.addEventListener('click', function(){
    count -=1
    number.innerHTML = ''
    number.innerHTML += `${count}`
})


