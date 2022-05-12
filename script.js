//Number 1
for (let index = 1; index <= 100; index++) {
    
    var evenNumber = []
    if (index % 2 === 0) {
         evenNumber.push(index)
         console.log(evenNumber)
    }
    
}


//Number 2

function evenNumbers(a,b) {
    for (let index = a + 1 ; index < b; index++) {
    
        if (index % 2 === 0) {
            return index
        }
        
    }
}
evenNumbers(1,20);


//Number 3
//(b)when you want your code to choose between multiple numbers .


// Number 4
function firstFunction(a,b) {
   return a + b;
}

firstFunction(3,4);


//Number5
function printSum(a,b) {
 console.log(a+b)
}

printSum(4,6)


//Number 6

function courseMates(a,b,c,d,e,f,g,h,i,j) {
  return [a,b,c,d,e,f,g,h,i,j]
}
var name1 = 'Abidemi'
var name2 = 'Elijah'
var name3 = 'Tobi'
var name4 = 'fini'
var name5 = 'Bode'
var name6 = 'Ezekiel'
var name7 = 'Mary'
var name8 = 'Adaobi'
var name9 = 'Olorunshola'
var name10 = 'Funmibi'

courseMates(name1,name2,name3,name4,name5,name6,name7,name8,name9,name10)


//Number 7

var numbers= [1,2,4]
numbers.push(5)
console.log(numbers)


//Number 8

var numbers = [1,2,3,8]
numbers.pop()
console.log(numbers)


//Number 9

var numbers = [23,77,80,45]
numbers.shift()
console.log(numbers)


//Number 10

var numbers = [[20,30,80],[10,50,55]]
numbers.unshift(10)
console.log(numbers)

