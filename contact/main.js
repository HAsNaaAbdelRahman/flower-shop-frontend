const namee = document.getElementById("nm");
const form = document.getElementById("form");
const error = document.getElementById("error");
error.style.color = " #df4875d6";
error.style.fontWeight = "bold";
error.style.fontSize = "20px";
form.addEventListener('submit' , (event)=> {
let ms = []
if(namee.value === "") {
    ms.push("Name is not valid")
}

if(ms.length > 0) {
    event.preventDefault();
    error.innerHTML = ms.join('' , '');
    // alert("Please enter a valid name")

}
})