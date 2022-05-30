class Parent {
    constructor() {
        if (this.constructor === Parent) {
            throw new Error("Kelas ini abstraction");
        }
    }

    selector(selector) {
        return document.querySelectorAll(selector);
    }
}

class Game extends Parent {
    #isChoice = false;
    #playerChoice;
    #comsChoice;

    suit(el, choices) {
        if (this.#isChoice) return;

        this.#playerChoice = choices;
        this.#isChoice = true;
        el.style.backgroundColor = "#C4C4C4";

        const com = this.comChoice();

        if (choices - com == 0) {
            console.log("draw");
        } else if (choices - com === -2 || choices - com === 1) {
            console.log("menang");
        } else if (choices - com === -1 || choices - com === 2) {
            console.log("kalah");
        }
    }

    comChoice() {
        const com = Math.floor((Math.random() * 3) - 0.0001);
        this.#comsChoice = com;
        const el = this.selector("div.com-choice > div.choice > img");
        el[com].style.backgroundColor = "#C4C4C4";

        return com;
    }

    reset() {
        const p = this.selector("div.player-choice > div.choice > img");
        p[this.#playerChoice].style.backgroundColor = "transparent";

        const com = this.selector("div.com-choice > div.choice > img");
        com[this.#comsChoice].style.backgroundColor = "transparent";

        this.#isChoice = false;
    }

    selector(selector) {
        const el = super.selector(selector);
        console.log(el);
        return el;
    }
}

const g = new Game();

function suit(el, choices) {
    g.suit(el, choices);
}

function reset() {
    g.reset();
}