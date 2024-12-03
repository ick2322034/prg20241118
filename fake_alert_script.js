function a() {
    alert("Fakeだって書いてあるよね？");
    window.location.href("./form.html")
}
let button = document.getElementById("button");
button.addEventListener("click",a);