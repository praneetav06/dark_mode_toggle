const inputElement = document.querySelector(".input");
const bodyElement = document.querySelector("body");
// console.log(inputElement);
inputElement.checked = JSON.parse(localStorage.getItem("mode"));
// can set the default value to true of false to land to the direct mode applied on the screen 
updateBody();
function updateBody() {
    if(inputElement.checked){
        bodyElement.style.background = "black";
    } else {
        bodyElement.style.background = "white";
    }
} 
// add event listener to the input element
inputElement.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
})
function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputElement.checked));
}