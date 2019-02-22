if (false) {
    console.log('I am inside if block')
    console.log('I am still inside the if block')
} else if (true) {
    console.log('I am inside the else block')
}
else {
    console.log('I am outside the block' )
}

//LCO

var whoIsHere = 'abc'

if (whoIsHere === 'user'){
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
} else if(whoIsHere === 'teacher') {
    console.log('Greeting message for Teacher')
    console.log('Allow access to his courses ')
} else {
    console.log('MWSSAGE: please verify your email')
    console.log('Send user an email for verification')
}

// Grade problem

//student actualMarks:

//10- Amazing
//5 - Good
//3 - fail
 let studentMarks = 3

 if(studentMarks >5 && studentMarks <= 10){
    console.log('Amazing')
 } else if (studentMarks > 3 && studentMarks <= 5) {
    console.log('Good')
 } else if(studentMarks >= 0 && studentMarks <= 3){
    console.log('Fail')
 }