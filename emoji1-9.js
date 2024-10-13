const emoji_1 = document.getElementById("emoji_1");
const emoji_2 = document.getElementById("emoji_2");
const emoji_3 = document.getElementById("emoji_3");
const emoji_4 = document.getElementById("emoji_4");
const emoji_5 = document.getElementById("emoji_5");
const emoji_6 = document.getElementById("emoji_6");
const emoji_7 = document.getElementById("emoji_7");
const emoji_8 = document.getElementById("emoji_8");
const emoji_9 = document.getElementById("emoji_9");

let clicou_1 = false;
let clicou_2 = false;
let clicou_3 = false;
let clicou_4 = false;
let clicou_5 = false;
let clicou_6 = false;
let clicou_7 = false;
let clicou_8 = false;
let clicou_9 = false;

function func1() {
    if (clicou_1 == false) {
        emoji_1.textContent = "❌";
        clicou_1 = true;
    }
    else if (clicou_1 == true) {
        emoji_1.textContent = "🏐";
        clicou_1 = false;
    }
}

function func2() {
    if (clicou_2 == false) {
        emoji_2.textContent = "❌";
        clicou_2 = true;
    }
    else if (clicou_2 == true) {
        emoji_2.textContent = "🏀";
        clicou_2 = false;
    }
}

function func3() {
    if (clicou_3 == false) {
        emoji_3.textContent = "❌";
        clicou_3 = true;
    }
    else if (clicou_3 == true) {
        emoji_3.textContent = "⚽";
        clicou_3 = false;
    }
}

function func4() {
    if (clicou_4 == false) {
        emoji_4.textContent = "❌";
        clicou_4 = true;
    }
    else if (clicou_4 == true) {
        emoji_4.textContent = "💼";
        clicou_4 = false;
    }
}

function func5() {
    if (clicou_5 == false) {
        emoji_5.textContent = "❌";
        clicou_5 = true;
    }
    else if (clicou_5 == true) {
        emoji_5.textContent = "🐷";
        clicou_5 = false;
    }
}

function func6() {
    if (clicou_6 == false) {
        emoji_6.textContent = "❌";
        clicou_6 = true;
    }
    else if (clicou_6 == true) {
        emoji_6.textContent = "🦁";
        clicou_6 = false;
    }
}

function func7() {
    if (clicou_7 == false) {
        emoji_7.textContent = "❌";
        clicou_7 = true;
    }
    else if (clicou_7 == true) {
        emoji_7.textContent = "🐴";
        clicou_7 = false;
    }
}

function func8() {
    if (clicou_8 == false) {
        emoji_8.textContent = "❌";
        clicou_8 = true;
    }
    else if (clicou_8 == true) {
        emoji_8.textContent = "👛";
        clicou_8 = false;
    }
}

function func9() {
    if (clicou_9 == false) {
        emoji_9.textContent = "❌";
        clicou_9 = true;
    }
    else if (clicou_9 == true) {
        emoji_9.textContent = "🎳";
        clicou_9 = false;
    }
}