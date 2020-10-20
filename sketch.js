var cars, car1, car2, car3, car4;
var database;
var form, game, player;
var gameState = 0;
var playerCount;
var allPlayers;
var distance=0;
var car1Image, car2Image, car3Image, car4Image, trackImage, groundImage
var first, second, third;

function preload() {
    car1Image = loadImage("images/car1.png");
    car2Image = loadImage("images/car2.png");
    car3Image = loadImage("images/car3.png");
    car4Image = loadImage("images/car4.png");
    trackImage = loadImage("images/track.jpg");
    groundImage = loadImage("images/ground.png");
}

function setup(){
    createCanvas(displayWidth - 30,displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

    second = createSprite(displayWidth/2-137.5,-displayHeight/4,75,150);
    third = createSprite(displayWidth/2+137.5,-displayHeight/4,75,100);
}

function draw(){
    
    if (playerCount === 4) {
        game.update(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
    if (gameState === 2) {
        clear();
        game.end();
        drawSprites();
    }
    
}