//Ex 6:
//Ex 6.1:
console.log('Before')
console.log('Hi there, this is your learning tasks to front-end developer career:')
let  way = [{'subject': 'HTML',
             'progression': 'False'},
            {'subject': 'CSS',
            'progression': 'False'},
            {'subject': 'Basic of Javascript',
             'progression': 'False'},
            {'subject': 'Node Package Manager ',
             'progression': 'False'},
            {'subject': 'Git',
             'progression': 'False'}
]
for ( i=0; i < way.length; i++){
    console.log(`${i+1}. ${way[i].subject}`)
    console.log(`Complete: ${way[i].progression}`)
}

for ( i=0; i < way.length; i++){
    if (way[i].progression== 'False'){
     console.log(`${i+1}. [ ] ${way[i].subject}`)
    }else {
        console.log(`${i+1}. [x] ${way[i].subject}`)
    }
}

// //Ex 6.2 + 6.3 + 6.4:
let command = prompt('Enter your command (New, Delete, Update, Complete)').toLowerCase()
if (command == 'new'){
    let new_sub = prompt('Enter new task:')
    way.push ({'subject': new_sub,
                 'progression': 'False'})
} else if (command == 'update'){
    let up_pos = Number(prompt('Enter position:'))
    let up_sub = prompt('Enter new title')
    way[up_pos-1].subject = up_sub
} else if (command == 'complete'){
    let com_pos = Number(prompt('Enter position:'))
    way[com_pos-1].progression = 'true'
} else if (command == 'delete'){
    let del_sub = prompt('What do u want to delete?')
    way.splice(del_sub-1, 1)
}

//Ex 6.6:
console.log('\nAfter')
console.log('This is your learning tasks to front-end developer career now:')
for ( i=0; i < way.length; i++){
    if (way[i].progression== 'False'){
     console.log(`${i+1}. [ ] ${way[i].subject}`)
    }else {
        console.log(`${i+1}. [x] ${way[i].subject}`)
    }
}

