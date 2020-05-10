//Ex 9:
clear()
const colors = ['red', 'gray', 'blue', 'purple', 'cyan']
setshape('rocket')
for (i in colors){
    color(colors[i])
    for (j=1; j <5; j++){
        fd(50*i)
        rt(90)
    }
}

//Nice to do:
//Ex 10:
let name = prompt('Enter a sequence of names, seperated by commas')
let lname = name.split(',')
let new_name = lname.map((x) =>{
     return `<${x}>`
})
alert(`${lname} => ${new_name}`)

//Ex 11:
let num = prompt('Enter a sequence of names, seperated by commas')
let lnum = num.split(',')
let oddNum = lnum.filter((x) =>{
    return x % 2 != 0
})
alert(`${lnum} => ${oddNum}`)


