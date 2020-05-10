//Ex 4:
let clothes = ['Jeans', 'T-Shirt', 'Socks']
let request = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)? ").toUpperCase()
if (request == 'C'){
    let new_item = prompt("Enter the name of the new item")
    clothes.push(new_item)
    alert('Done')
} else if(request == 'R'){
     console.log('The current items are:')
} else if(request == 'U'){
    let index = Number(prompt('Enter the position you want to update'))
    if (index > 0 && index < clothes.length ){
     let new_name = prompt('Enter the new name')
     clothes[index-1] = new_name
     alert('Done')
    } else { console.log("Please enter number in range")}
} else if(request == 'D'){
    let del_pos = Number(prompt('Enter the position you want to delete'))
    if ( del_pos > 0 && del_pos <= clothes.length ){
     clothes.splice(del_pos-1, 1)
     alert('Done')
    } else{ console.log('Pleas enter number in range')}
} else{
    alert("This command is not supported")
}

for (i=0; i< clothes.length; i++){
    console.log(`${i+1}. ${clothes[i]}`)
}  