function a() {
    alert("Fakeだって書いてあるよね？");
    const currentUrl = window.location.href;
    const newUrl = currentUrl  - "index.html" + "form.html";
    window.location.href = newUrl;
}
let button = document.getElementById("button");
button.addEventListener("click",a);
alert("このページはフェイクだよ！")