// function greetUser() {
//     alert("Hi, How Are you!")
// }



function getInputValue() {
    let inputValue = document.getElementById("name")
    console.log(inputValue.value);
}

function generateMarks() {
    let english = document.getElementById("eng_marks").value;
    let urdu = document.getElementById("urdu_marks").value;
    let science = document.getElementById("sci_marks").value;
    let total = parseInt(english) + parseInt(urdu) + parseInt(science)

    let percentage = (total / 500) * 100 // 100 
    console.log(Math.round(percentage) + "%");
}
