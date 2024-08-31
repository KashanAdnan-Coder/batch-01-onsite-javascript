function setFieldValue() {
    let username = document.getElementById("name")
    let email = document.getElementById("name")
    let password = document.getElementById("name")

    array.push({
        name: username.value,
        email: email.value,
        password: password.value
    })
}

let array = []