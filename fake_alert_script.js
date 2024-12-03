function a() {
    alert("Fakeだって書いてあるよね？");
    // 現在のURLを取得
    const currentUrl = window.location.href;

    // URLの末尾に"/form.html"を追加
    const newUrl = currentUrl + "form.html";

    // 新しいURLに移動
    window.location.href = newUrl;
}
let button = document.getElementById("button");
button.addEventListener("click",a);