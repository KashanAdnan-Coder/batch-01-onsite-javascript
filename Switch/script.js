let dayOfWek = new Date().getDay() // 0 to 6
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

// console.log(dayOfWek); // 4
// console.log(days); // ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]

// console.log();
// switch case sytnax

let day = days[dayOfWek]
// switch (day) {
//     case "Sat":
//         console.log("Whoope")
//         break
//     case "Sun":
//         console.log("Whoope")
//         break
//     case "Thur":
//         console.log("TGIF")
//         break
//     default:
//         console.log("Kashan")
// }



switch (day) {
    case "Sat":
        console.log('Whoopee!')
        break
    case "Sun":
        console.log("Whoopee!")
        break
    case "Thur":
        console.log("TGIF!")
        break
    default:
        console.log("Kashan")
}