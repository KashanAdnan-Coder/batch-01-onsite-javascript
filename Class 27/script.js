// let container = document.querySelector("#container")

// console.log(container.childNodes[1]);
// console.log(container.containerreviousSibling);
// console.log(container.nextSibling);
// console.log(container.parentNode);

// let li = document.getElementsByTagName("li")
// console.log(li.length);


let container = document.querySelector("#container")

container.setAttribute("class", "body")
let classValue = container.getAttribute("class")
console.log(classValue);

// has attribute
// attribute he ke nahi
// agar he to true
// agar nahi he to false

let hasAttribute = container.hasAttribute("href")
console.log(hasAttribute);

// agar class 
