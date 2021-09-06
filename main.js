const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clear-btn");
const resizeBtn = document.querySelector("#resize-btn");

const getRandomColor = () => {
    var variables = '0123456789ABCDEF'
    var chosenColor = '#'
    for (var i = 0; i < 6; i++) {
        chosenColor += variables[Math.floor(Math.random() * 16)];
    }
    return chosenColor;
}

const grid = (e) => {
    for (var i = 0; i < e; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (var j = 0; j < e; j++) {
            var box = document.createElement('div');
            box.style.width = `${520 / e}px`;
            box.style.height = `${520 / e}px`;
            box.className = "box";
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}


clearBtn.addEventListener('click', () => {
    for (let i = 0; i < boxDiv.length; i++) {
        boxDiv[i].style.backgroundColor = "grey";
    }
})

resizeBtn.addEventListener('click', () => {
    for (let i = 0; i < rowDiv.length; ++i) {
        rowDiv[i].parentNode.removeChild(rowDiv[i]); // removes elements in html
    }
    let cellQuestion = prompt('Please chose how you would like to resize your grid')
    let cellNum = parseInt(cellQuestion, 10);
    grid(cellNum)
    setColors();
    setRow();
});

let setColors = () => {
    boxDiv = document.querySelectorAll(".box");
    for (let i = 0; i < boxDiv.length; i++) {
        boxDiv[i].addEventListener("mouseover", () => {
            boxDiv[i].style.backgroundColor = getRandomColor();
        })
    }
}

let setRow = () => {
    rowDiv = document.querySelectorAll(".row");
}

grid(4);
let boxDiv = document.querySelectorAll(".box");
let rowDiv = document.querySelectorAll(".row");
setColors();
