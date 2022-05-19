class Parent {
    #timer = [0, 0, 0, 0];
    #element;
    #btn;

    constructor(el, btn) {
        if (this.constructor === Parent) {
            throw new Error("This class is abstraction");
        }

        this.#element = el;
        this.#btn = btn;
    }

    start(){
        this.#setBtn("start");
    }

    pause(){
        this.#setBtn("pause");
    }

    reset(el) { //el = undifined
        this.#setBtn("reset");
        this.#clear(el);
    }
    
    #clear(els){  // els = undifined
        this.setTimer([0, 0, 0, 0]);
        this.setText();

        const el = document.getElementById(els || "stopwatch-split");
        el.textContent = "";
    }

    setTimer(timer){
        this.#timer = timer;
    }

    getTimer(){
        return this.#timer;
    }

    setText() {
        for (let index = 0; index < this.#timer.length; index++) {
            this.#element[index].textContent = this.generateText(this.#timer[index]);
        }
    }

    #setBtn(action) {
        for (let index = 0; index < this.#btn.length; index++) {
            if (action === "start") {
                this.#btn[index].disabled = index === 1;
            } else if (action === "pause") {
                this.#btn[index].disabled = index !== 1 && index !== 3; // 1 === 2 false
            } else {
                this.#btn[index].disabled = index !== 1;
            }
        }
    }

    generateText(time) {
        if (time <= 9) {
            return `0${time}`;
        }

        return time;
    }
}

class Stopwatch extends Parent {
    #interval;

    constructor(el, btn){
        super(el, btn)
    }

    start(){
        super.start();

        let timer = super.getTimer();
        
        this.#interval = setInterval(() => {
            this.#runs(timer);
            super.setText();
        }, 10);
    }

    #runs(timer){
        timer[3] += 1;

        if (timer[3] === 100) {
            timer[3] = 0;
            timer[2] += 1;
        }

        if (timer[2] === 60) {
            timer[2] = 0;
            timer[1] += 1;
        }

        if (timer[1] === 60) {
            timer[1] = 0;
            timer[0] += 1;
        }

        return timer;
    }

    pause(){
        super.pause();
        clearInterval(this.#interval);
    }

    reset(el){ //el = undifined
        super.reset(el);
        clearInterval(this.#interval);
    }

    split(){
        const timer = super.getTimer();
        const spl = document.createElement("li");
        spl.textContent = `${this.generateText(timer[0])} : ${this.generateText(timer[1])} : ${this.generateText(timer[2])} : ${this.generateText(timer[3])}`;

        const el = document.getElementById("stopwatch-split");
        el.append(spl);
    }
}

const element = document.getElementsByClassName("stopwatch-run");
const btn = document.querySelectorAll("div.stopwatch-action > button");
const st = new Stopwatch(element, btn);

function startCounting() {
    st.start();
}

function pauseCounting() {
    st.pause();
}

function resetCounting() {
    st.reset();
}

function splitCounting() {
    st.split();
}