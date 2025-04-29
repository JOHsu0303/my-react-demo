function App(num) {
    // 預設為全部隱藏
    const page1 = document.querySelector("#page1").style.display = "none";
    const page2 = document.querySelector("#page2").style.display = "none";
    const page3 = document.querySelector("#page3").style.display = "none";

    const btn1 = document.querySelector("#btn1").style.display = "none";
    const btn2 = document.querySelector("#btn2").style.display = "none";
    const btn3 = document.querySelector("#btn3").style.display = "none";

    // 在一參數個別打開
    if (num == 2) {
        // 表示在第二頁，顯示第一步與第三步
        document.querySelector("#page2").style.display = "block";
        document.querySelector("#btn2").style.display = "block";
        document.querySelector("#btn3").style.display = "block";
    }

    if (num == 1) {
        // 表示在第一頁，顯示第二步
        document.querySelector("#page1").style.display = "block";
        document.querySelector("#btn1").style.display = "block";
    }

    if (num == 3) {
        // 表示在第三頁，顯示第二步
        document.querySelector("#page3").style.display = "block";
        document.querySelector("#btn1").style.display = "block";
    }
}
export default App