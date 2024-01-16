"use strict";

let width = window.innerWidth;
let height = window.innerHeight;

let buttons = [];
let sounds = [];

class Button
{
    constructor(xPosition, yPosition, width, height, color, accent, sound)
    {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
        this.color = color;
        this.accent = accent;
        this.sound = sound;        
    }

    show()
    {
        noStroke();

        fill(this.color);
        rect((this.xPosition -100), this.yPosition, this.width, 55);

        fill(this.accent);
        ellipse(this.xPosition, this.yPosition, this.width, this.height);

        fill(this.color);
        arc(this.xPosition, (this.yPosition + 50), this.width, this.height, TWO_PI, PI);
    }

    changePosition(x, y)
    {
        this.xPosition = x;
        this.yPosition = y;
    }

    clicked(xMouse, yMouse)
    {
        let mouseDistance = dist(xMouse, yMouse, this.xPosition, this.yPosition);

        if (mouseDistance < this.width / 3)
        {
            this.yPosition = this.yPosition + 10;
            this.sound.play();
        }
    }
}

function setup()
{
    createCanvas(width, height);

    sounds = 
    [
        loadSound("sounds/ahogo.mp3"),
        loadSound("sounds/blablabla.mp3"),
        loadSound("sounds/chipichipi.mp3"),
        loadSound("sounds/cry.mp3"),
        loadSound("sounds/happy.mp3"),
        loadSound("sounds/huh.mp3"),
        loadSound("sounds/laugh.mp3"),
        loadSound("sounds/meowrgh.mp3"),
        loadSound("sounds/wha.mp3")
    ]

    buttons = 
    [
        [
            new Button(width/3, height/4, 200, 80, color(226, 132, 19), color(244, 190, 124), sounds[0]),
            new Button(width/2, height/4, 200, 80, color(0, 159, 183), color(153, 241, 255), sounds[1]),
            new Button(2*width/3, height/4, 200, 80, color(145, 145, 233), color(204, 204, 245), sounds[2])
        ],
        [
            new Button(width/3, height/2, 200, 80, color(205,92,92), color(240,128,128), sounds[3]),
            new Button(width/2, height/2, 200, 80, color(72,209,204), color(175,238,238), sounds[4]),
            new Button(2*width/3, height/2, 200, 80, color(255,215,0), color(255,255,0), sounds[5])
        ],
        [
            new Button(width/3, 3*height/4, 200, 80, color(255, 163, 175), color(255, 214, 220), sounds[6]),
            new Button(width/2, 3*height/4, 200, 80, color(143, 45, 86), color(216, 131, 166), sounds[7]),
            new Button(2*width/3, 3*height/4, 200, 80, color(236, 78, 32), color(234, 162, 133), sounds[8])
        ]
    ]

    console.log('p5.js setup function executed!')
}

function draw() 
{
    background(51, 92, 129);
    noStroke();
    
    for (let i = 0; i < buttons.length; i++) 
    {
        buttons[0][i].show();
        buttons[1][i].show();
        buttons[2][i].show();        
    }
}

function windowResized() 
{
    width = window.innerWidth;
    height = window.innerHeight;
    resizeCanvas(width, height);

    for (let i = 0; i < buttons.length; i++) 
    {
        buttons[0][i].yPosition = height/4;
        buttons[1][i].yPosition = height/2;
        buttons[2][i].yPosition = 3*height/4;  
        
        buttons[i][0].xPosition = width/3;
        buttons[i][1].xPosition = width/2;
        buttons[i][2].xPosition = 2*width/3; 
    }
}

function mousePressed()
{
    for (let i = 0; i < buttons.length; i++) 
    {
        buttons[0][i].clicked(mouseX, mouseY); //Coordenadas del click (funcion de p5.js)
        buttons[1][i].clicked(mouseX, mouseY);
        buttons[2][i].clicked(mouseX, mouseY);        
    }
}

function mouseReleased() 
{
    for (let i = 0; i < buttons.length; i++) 
    {
      buttons[0][i].yPosition = height/4;
      buttons[1][i].yPosition = height/2;
      buttons[2][i].yPosition = 3*height/4;
    }
  }