// Getting the current date and time 

// new Date() Method 

var date = new Date()

// getDay() 


// 0      1       2       3          4      5       6
// sunday monday tuesday wednesday thurday friday saturday

var day = date.getDay()
console.log(day);

var month = date.getMonth()
console.log(month);

var dateTime = date.getDate()
console.log(dateTime);

var year = date.getFullYear()
console.log(year)

var hours = date.getHours()
console.log(hours)

var minutes = date.getMinutes()
console.log(minutes)

var second = date.getSeconds() // for second
console.log(second)

var millisecond = date.getMilliseconds()
console.log(millisecond)

var time = date.getTime()
console.log(time)


// speifying date

var date_updated = new Date("Janurary 2, 2011")

console.log(date_updated)

 