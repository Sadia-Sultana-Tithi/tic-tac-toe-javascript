let boxes = document.querySelector(".box");
let resetBtn = document.querySelector("#resetbtn");

let turn0 = true; //player x, player0

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        box.innerText = "abc"
    });
});