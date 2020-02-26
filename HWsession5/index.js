//Ex 1:
function censoredString(str){
    let nguyenAm = ['u','e', 'o', 'a', 'i']
    let d = ''
    for ( i = 0; i < str.length; i++){
      if(nguyenAm.includes(str.charAt(i).toLowerCase())){
          d = d + '*'
    } else {
        d = d + str.charAt(i)}
    } 
    return d
}

//Ex 2:
function getFrequencies(string){
    let dic = {}
    for ( i in string){
        if (string[i] in dic){
            dic[string[i]] += 1
        } else {
            dic[string[i]]=1
        }
    }
    return(dic)
}

//Ex 3:
function keysAndValues(object){
    let array = []
    for ( i in object){
        array.push(i) 
    }
    for ( i in object){
        array.push(object[i]) 
    }   
    return array
}

//Ex 4:
function khaBanh(string){
    let newString = string[0] 
    for (i = 1; i < string.length; i++){
        if (newString.charAt(i-1) == newString.charAt(i-1).toUpperCase() 
            && newString.charAt(i-1) != ' '){
            newString += string.charAt(i).toLowerCase()
        } else if (newString.charAt(i-1) == newString.charAt(i-1).toLowerCase() 
            &&newString.charAt(i-1) != ' '){
            newString += string.charAt(i).toUpperCase()
        } else if (newString.charAt(i-1) == ' '){
            if(newString.charAt(i-2) == newString.charAt(i-2).toUpperCase()){
                newString += string.charAt(i).toLowerCase()
            } else { 
                newString += string.charAt(i).toUpperCase()
            }
        }
    } 
    return newString
}

//Ex 5:
function mapLetters(str){
    let dic = {}
    for ( i = 0; i < str.length; i++){
        if( !(str.charAt(i) in dic)){
            dic[str.charAt(i)] = [i]
        } else {
            dic[str.charAt(i)].push(i)
        }
    } 
    return dic
}


//Ex 6:
function reverseObject(dic){
    let new_dic = {}
    for ( i in dic){
        new_dic[dic[i]] = i
    } 
    return new_dic
}