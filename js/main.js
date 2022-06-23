
class Game {
    constructor() {
        this.player = null;
    }
    start() {
        this.player = new Player();
        this.addEventListeners();
    }
    addEventListeners() {
        document.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft") {
                this.player.moveLeft();
            }
            else if (event.key === "ArrowRight") {
                this.player.moveRight();
            } else {
                console.log("please use the arrow keys");
            }
        })
    }
}

class Player {
    constructor() {
        this.positionX = 45;
        this.positionY = 0;
        this.domElement = null;
        this.createDomElement();
    }
    createDomElement() {
        //create dom element
        this.domElement = document.createElement('div');

        //set id and css
        this.domElement.id = "player";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //append child to parent 
        const boardElm = document.getElementById('board');
        boardElm.appendChild(this.domElement);
    }
    moveLeft() {
        this.positionX--;
        this.domElement.style.left = this.position + "vw";
    }
    moveRight() {
        this.positionX++;
        this.domElement.style.left = this.position + "vw";
    }
}


const game = new Game();
game.start();

