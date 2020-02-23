//Ex 7:
clear()
const pos = {
  x: 200,
  y: 50
}
setshape('rocket')
penup()
rt(90)
fd((pos.x)/2)
lt(90)
fd(pos.y)

//Ex 8:
clear()
const square = {
  x: 100,
  y: 50,
  width: 20
}
setshape('rocket')
penup()
rt(90)
fd(square.x)
lt(90)
fd(square.y)
pendown()
for ( i =0; i <4; i++){
  fd(square.width)
  rt(90)
}

//Ex 9:
clear()
const rect = {
  x: 100,
  y: 50,
  width: 20,
  height: 40
}
setshape('rocket')
penup()
rt(90)
fd(rect.x)
lt(90)
fd(rect.y)
pendown()
for ( i =0; i <2; i++){
  fd(rect.height)
  rt(90)
  fd(rect.width)
  rt(90)
}

//Ex 10:
clear()
const cmds = [
    {
        shape: 'square',
        x: 20,
        y: 40,
        width: 50,
    },
    {
        shape: 'rect',
        x: 8,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 70,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 10,
        y: 20,
        width: 70,
        height: 20,
    },
    {
        shape: 'square',
        x: 25,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 33,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 50,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 58,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 40,
        y: 25,
        width: 8,
    },
    {
        shape: 'square',
        penWidth: 1,
        x: 500,
        y: 500,
        width: 15,
    },
]
setshape('rocket')
for ( i in cmds){
    home()
    penup()
    rt(90)
    fd(cmds[i].x)
    lt(90)
    fd(cmds[i].y)
    pendown()
    if (cmds[i].shape == 'square'){
       for ( j=0; j < 4; j++){
           fd(cmds[i].width)
           rt(90)
       }
    }else {
        for (k =0; k<2; k++){
            fd(cmds[i].height)
            rt(90)
            fd(cmds[i].width)
            rt(90)
        }
    }    
}

//Ex 11:
clear()
const circle = {
    shape: 'circle',
    x: 100,
    y: 50,
    radius: 30
}
setshape('rocket')
penup()
rt(90)
fd(circle.x)
lt(90)
fd(circle.y)
fd(circle.radius)
pendown()
for (i=0; i<360; i++){
    fd(1)
    rt(1)
}

//Ex 12:
clear()
const cmds = [
    {
        shape: 'circle',
        x: 0,
        y: -20,
        radius: 60,
    },
    {
        shape: 'circle',
        x: 0,
        y: 80,
        radius: 40,
    },
    {
        shape: 'circle',
        x: -75,
        y: 10,
        radius: 20,
    },
      {
        shape: 'circle',
        x: 75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'square',
        x: -65,
        y: -100,
        width: 30,
    },
      {
        shape: 'square',
        x: 38,
        y: -100,
        width: 30,
    },
  
  {
        shape: 'rect',
        x: -30,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: 10,
        y: 80,
        width: 20,
        height: 4
    },
      {
        shape: 'rect',
        x: -10,
        y: 50,
        width: 20,
        height: 6
    },
  {
        shape: 'square',
        x: 500,
        y: 500,
        width: 20,
    },
]
setshape('rocket')
for ( i in cmds){
    home()
    penup()
    rt(90)
    fd(cmds[i].x)
    lt(90)
    fd(cmds[i].y)
    if (cmds[i].shape == 'square'){
       pendown()
       for ( j=0; j < 4; j++){
           fd(cmds[i].width)
           rt(90)
       }
    }else if(cmds[i].shape == 'rect'){
        pendown()
        for (k =0; k<2; k++){
            fd(cmds[i].height)
            rt(90)
            fd(cmds[i].width)
            rt(90)
        }
    }else{
        fd(cmds.radius)
        pendown()
        for (i=0; i<360; i++){
            fd(1)
            rt(1)
}}}



