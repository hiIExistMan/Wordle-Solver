let letters = document.querySelectorAll(".gameBoard div");
let lettersar = Array.prototype.slice.call(letters);
let letterrows = [
    lettersar.slice(0,5),
    lettersar.slice(5,10),
    lettersar.slice(10,15),
    lettersar.slice(15,20),
    lettersar.slice(20,25),
    lettersar.slice(25,30),
];
let wordinp = document.querySelector(".word");
let submitbutton = document.querySelector(".submit");
let evalbutton = document.querySelector(".evaluate-words");
let wordstext = document.querySelector(".words");
let starter = document.querySelector(".starter")
let row = 0;

console.log("hello");
console.log(letters);

let possiblewords = getPossibleWords();
let removedDuplicates = possiblewords.filter((c, index) => {
    return possiblewords.indexOf(c) === index;
});
wordstext.innerText = removedDuplicates.join(" ");
starter.innerText = `Struggling to think of a starter? Try ${possiblewords[Math.floor(Math.random()*possiblewords.length)]}!`;

submitbutton.addEventListener("mousedown", e => {
    starter.innerText = "";
    if (wordinp.value.length == 5) {
        console.log(wordinp.value)
        if(row == 6) {
            window.location.reload();
        }
        for (let i = 0; i < letterrows[row].length; i++) {
            letterrows[row][i].innerText = wordinp.value.charAt(i).toUpperCase();
        }
        row++;
        
    }
    wordinp.value = ""
});

evalbutton.addEventListener("mousedown", e => {
    let possiblewords = getPossibleWords();
    let removedDuplicates = possiblewords.filter((c, index) => {
        return possiblewords.indexOf(c) === index;
    });
    wordstext.innerText = removedDuplicates.join(" ");
});

for (let letter of letters) {
    letter.addEventListener("mousedown", e => {
        if(e.which == 3 || e.button == 2){
            if(e.target.classList.contains("yellow")) {
                e.target.classList.add("green");
                e.target.classList.remove("yellow");
            }
            else if(e.target.classList.contains("green")) {
                e.target.classList.add("grey");
                e.target.classList.remove("green");
            }
            else if(e.target.classList.contains("grey")) {
                e.target.classList.add("yellow");
                e.target.classList.remove("grey");
            }
        } else {
            if(e.target.classList.contains("yellow")) {
                e.target.classList.add("grey");
                e.target.classList.remove("yellow");
            }
            else if(e.target.classList.contains("green")) {
                e.target.classList.add("yellow");
                e.target.classList.remove("green");
            }
            else if(e.target.classList.contains("grey")) {
                e.target.classList.add("green");
                e.target.classList.remove("grey");
            }
        }
        
    })
}