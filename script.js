// Creating variables
let age = 0
let day = 'Monday'
// Connect "Age?" button to "random" function
document.getElementById('mybutton').addEventListener('click', checkageandday)
// Get users age and convert it to an integer
function checkageandday () {
  age = document.getElementById('myinput').value
  age = parseInt(age)
  day = document.getElementById('myinput2').value
  // Checking to see if it's time for the user to go to school, go to work, or relax.
  if ((age < 18) && (day !== 'Saturday' && day !== 'Sunday')) {
    document.getElementById('myanswer').innerHTML = 'Time for school!'
  } else if ((age > 18) && (day !== 'Saturday' && day !== 'Sunday')) {
    document.getElementById('myanswer').innerHTML = 'Time to go to work!'
  } else if ((age < 18 || age > 18) && (day === 'Saturday' || day === 'Sunday')) {
    document.getElementById('myanswer').innerHTML = 'Time to relax for the weekend!'
  }
}
