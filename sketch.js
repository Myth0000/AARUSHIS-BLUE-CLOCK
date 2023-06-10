let clock;
let SalyClock;

function preload() {
  SalyClock = loadImage("SALYCLOCK.png");
}
function setup() {
  createCanvas(950, 1300);
  clock = {
    x: 15,
    y: 17,
    size:444,

    Draw() {
      image(SalyClock, this.x, this.y, this.size, this.size);
      //rect(this.x,this.y,this.size,this.size);
    },
    rainbow() {
      this.x = random(0, width - this.size);
      this.y = random(0, height - this.size);
    },
  };
}

function draw() {
  background(color(250));

  clock.Draw();
}

function mouseClicked() {
  let firstCornerX = clock.x;
  let firstCornerY = clock.y;
  let secondCornerX = clock.x + clock.size;
  let secondCornerY = clock.y;
  let thirdCornerX = clock.x + clock.size;
  let thirdCornerY = clock.y + clock.size;
  let fourthCornerX = clock.x;
  let fourthCornerY = clock.y + clock.size;

  if (
    mouseX >= firstCornerX &&
    mouseX <= secondCornerX &&
    mouseY >= firstCornerY &&
    mouseY <= fourthCornerY
  ) {
    clock.rainbow();
  }
}
