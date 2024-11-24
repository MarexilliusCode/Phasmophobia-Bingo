let bingoArr = []
let isFrench = false;
const body = document.querySelector("body");
const languageButton = document.querySelector(".lang");
const restartButton = document.querySelector(".restart");
const casesArr = document.querySelectorAll(".bingoCase");
const caseValueArr = document.querySelectorAll(".caseValue");

function checkLanguage() {
    if (isFrench) {
        languageButton.textContent = "English";
        restartButton.textContent = "Recommencer";
        bingoArr = ["0 évidence utilisée", "Esprit", "Spectre", "Fantôme", "Poltergeist", "Banshee", "Djinn", "Cauchemare", "Revenant", "Ombre", "Démon", "Yurei", "Oni", "Yokai", "Hantu", "Goryo", "Myling", "Onryo", "Les Jumeaux", "Raiju", "Obake", "Le Mimic", "Moroi", "Deogen", "Thayé"]
    } else if (isFrench === false) {
        languageButton.textContent = "Français";
        restartButton.textContent = "Restart";
        bingoArr = ["0 evidence used", "Spirit", "Wraith", "Phantom", "Poltergeist", "Banshee", "Jinn", "Mare", "Revenant", "Shade", "Demon", "Yurei", "Oni", "Yokai", "Hantu", "Goryo", "Myling", "Onryo", "The Twins", "Raiju", "Obake", "The Mimic", "Moroi", "Deogen", "Thaye"]
    }
}

casesArr.forEach(element => {
    element.addEventListener("click", function () {
        element.classList.toggle("checked");
        checkIfWon();
    })
});

function startGame() {
    checkLanguage();
    body.classList.add("inGame");
    body.classList.remove("victory");
    casesArr.forEach(element => {
        element.classList.remove("checked");
    });
    caseValueArr[12].textContent = bingoArr[0];
    bingoArr.shift();
    bingoArr.sort(function () { return 0.5 - Math.random() });
    caseValueArr.forEach(element => {
        if (element === caseValueArr[12]) {
            // pass
        } else {
            element.textContent = bingoArr[0];
            bingoArr.shift();
        }
    });
}

function win(){
    body.classList.add("victory");
    body.classList.remove("inGame");
}

// Victory Scenarios
function checkIfWon() {
    // --------------------------------------
    //             R   O   W   S
    // --------------------------------------
    if (casesArr[0].classList.contains("checked") && casesArr[1].classList.contains("checked") && casesArr[2].classList.contains("checked") && casesArr[3].classList.contains("checked") && casesArr[4].classList.contains("checked")) {
        win()
    } else if (casesArr[5].classList.contains("checked") && casesArr[6].classList.contains("checked") && casesArr[7].classList.contains("checked") && casesArr[8].classList.contains("checked") && casesArr[9].classList.contains("checked")) {
        win()
    } else if (casesArr[10].classList.contains("checked") && casesArr[11].classList.contains("checked") && casesArr[12].classList.contains("checked") && casesArr[13].classList.contains("checked") && casesArr[14].classList.contains("checked")) {
        win()
    } else if (casesArr[15].classList.contains("checked") && casesArr[16].classList.contains("checked") && casesArr[17].classList.contains("checked") && casesArr[18].classList.contains("checked") && casesArr[19].classList.contains("checked")) {
        win()
    } else if (casesArr[20].classList.contains("checked") && casesArr[21].classList.contains("checked") && casesArr[22].classList.contains("checked") && casesArr[23].classList.contains("checked") && casesArr[24].classList.contains("checked")) {
        win()
    }
    // --------------------------------------
    //     C   O   L   L   U   M   N   S
    // --------------------------------------
    else if (casesArr[0].classList.contains("checked") && casesArr[5].classList.contains("checked") && casesArr[10].classList.contains("checked") && casesArr[15].classList.contains("checked") && casesArr[20].classList.contains("checked")) {
        win()
    } else if (casesArr[1].classList.contains("checked") && casesArr[6].classList.contains("checked") && casesArr[11].classList.contains("checked") && casesArr[16].classList.contains("checked") && casesArr[21].classList.contains("checked")) {
        win()
    } else if (casesArr[2].classList.contains("checked") && casesArr[7].classList.contains("checked") && casesArr[12].classList.contains("checked") && casesArr[17].classList.contains("checked") && casesArr[22].classList.contains("checked")) {
        win()
    } else if (casesArr[3].classList.contains("checked") && casesArr[8].classList.contains("checked") && casesArr[13].classList.contains("checked") && casesArr[18].classList.contains("checked") && casesArr[23].classList.contains("checked")) {
        win()
    } else if (casesArr[4].classList.contains("checked") && casesArr[9].classList.contains("checked") && casesArr[14].classList.contains("checked") && casesArr[19].classList.contains("checked") && casesArr[24].classList.contains("checked")) {
        win()
    }
    // --------------------------------------
    //   D   I   A   G   O   N   A   L   S
    // --------------------------------------
    else if (casesArr[0].classList.contains("checked") && casesArr[6].classList.contains("checked") && casesArr[12].classList.contains("checked") && casesArr[18].classList.contains("checked") && casesArr[24].classList.contains("checked")) {
        win()
    } else if (casesArr[4].classList.contains("checked") && casesArr[8].classList.contains("checked") && casesArr[12].classList.contains("checked") && casesArr[16].classList.contains("checked") && casesArr[20].classList.contains("checked")) {
        win()
    }
}

languageButton.addEventListener("click", function () {
    isFrench = !isFrench;
    startGame();
});
restartButton.addEventListener("click", startGame);

startGame();