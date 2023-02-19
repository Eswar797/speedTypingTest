let timer = document.getElementById("timer");
let c = 0;
let p = document.getElementById("quoteDisplay");
let t = setInterval(function() {
    c = c + 1;
    timer.textContent = c + " seconds";
}, 1000);
let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET",
}
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        let spi = document.getElementById("spinner");
        spi.classList.toggle("d-none");
        let tot = document.getElementById("speedTypingTest");
        tot.classList.toggle("d-none");
        p.textContent = jsonData.content;
    });
let text = document.getElementById("quoteInput");
let resu = document.getElementById("result");

function res() {
    let spi = document.getElementById("spinner");
    spi.classList.remove("d-none");
    clearInterval(t);
    resu.textContent = "";
    text.value = " ";
    let c = 0;
    t = setInterval(function() {
        c = c + 1;
        timer.textContent = c + " seconds";
    }, 1000);
    let y = 0;
    let tot = document.getElementById("speedTypingTest");
    tot.classList.add("d-none");
    let d = setInterval(function() {
        y = y + 1;
        if (y === 1) {
            tot.classList.remove("d-none");
            spi.classList.add("d-none");
            clearInterval(d);
        }
    }, 1000);


}

function sub() {
    if (text.value === p.textContent) {
        resu.textContent = "Correct " + c;
        clearInterval(t);
    } else {
        resu.textContent = "Incorrect";
        clearInterval(t);

    }
}
