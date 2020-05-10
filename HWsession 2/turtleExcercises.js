//Ex 11:
//A square
clear()
setshape("rocket")
for ( i =0; i <4; i++){
fd(50)
lt(90)
}

//A triangle
clear()
setshape("rocket")
for ( i =0; i <3; i++){
fd(50)
rt(120)
}

//A pentagon
clear()
setshape("rocket")
for ( i =0; i <5; i++){
fd(50)
rt(72)
}

//A hexagon
clear()
setshape("rocket")
for ( i =0; i <6; i++){
fd(50)
rt(60)
}

//Ex 12:
clear()
setshape('rocket')
let a = Number(prompt('Enter number of edges'))
for (i=0; i<a;i++){
    fd(50)
    rt(360/a)
}

//Ex 13:
clear()
setshape('rocket')
let a = Number(prompt('How many polygons?'))
for (j=3; j<a+3; j++){
 for (i=0; i<j;i++){
    fd(50)
    rt(360/j)
 }
}