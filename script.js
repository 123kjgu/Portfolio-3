let pages = document.querySelectorAll(".page");
let current = 0;

document.querySelector(".book").addEventListener("click", function (e) {
    let width = this.offsetWidth;

    if (e.offsetX > width / 2) {
        nextPage();
    } else {
        prevPage();
    }
});

let startX = 0;

document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) nextPage();
    if (endX - startX > 50) prevPage();
});

function nextPage() {
    if (current < pages.length) {
        pages[current].classList.add("flipped");
        current++;
    }
}

function prevPage() {
    if (current > 0) {
        current--;
        pages[current].classList.remove("flipped");
    }
}