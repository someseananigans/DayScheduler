cDate = moment().format('dddd, MMMM Do')

presentHour = moment().hour()


// much compare times every minute... if hour isBefore gray, if hour isSame red, if hour isAfter green

// compare times Options: isBefore, isSame, isAfter
// console.log(moment().isBefore(scheduleTime))

// Change the current date on top
document.getElementById('currentDay').innerHTML = cDate

let workDay = JSON.parse(localStorage.getItem('workDay')) || []

console.log(workDay)
counter = 8
workDay.forEach(schedule => {
  console.log(schedule)
  let plan = "plan" + counter
  document.getElementById(schedule.time).textContent = schedule.plan
  counter++
})


document.addEventListener('click', event => {
  if (event.target.classList.contains('saveBtn')) {
    let time = stringInteger(event.target.previousElementSibling.previousElementSibling.textContent)
    let note = event.target.previousElementSibling.children[0].value
    console.log(time)
    
    let schedule = {
      plan: note,
      time: "plan" + time
    }

    workDay.push(schedule)

    localStorage.setItem('workDay', JSON.stringify(workDay))
  }
})

// figure out how to replace objets in the array when content is updated


stringInteger = (timeString) => {
  switch (timeString) {
    case '8AM': return 8
    case '9AM': return 9
    case '10AM': return 10
    case '11AM': return 11
    case '12PM': return 12
    case '1PM': return 13
    case '2PM': return 14
    case '3PM': return 15
    case '4PM': return 16
    case '5PM': return 17
}
}


  for (let i = 8; i <= 17; i++) {
    let timeCounter = "time" + i
    let timeString = document.getElementById(timeCounter).textContent
    let timeInteger = stringInteger(timeString)
    if (presentHour == timeInteger) {
      document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('present')
      console.log(`${i} present`)
    }
    else if (presentHour > timeInteger) {
      document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('past')
      console.log(`${i} past`)
    }
    else if (presentHour < timeInteger) {
      document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('future')
      console.log(`${i} future`)
    }
   
  }
  
