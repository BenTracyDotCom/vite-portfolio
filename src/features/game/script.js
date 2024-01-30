//Game functionality
window.addEventListener('load', () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const trees = [];
  let bgSpeed = 0;

  //this tracks what keys are pressed
  class InputHandler {
    constructor() {
      this.keys = new Set([]);
      window.addEventListener('keydown', (e) => {
        if ((
          e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight") ||
          e.key === "c") {
          this.keys.add(e.key)
        } else if (e.key === " ") {
          this.keys.add("space")
        }
      });
      window.addEventListener('keyup', (e) => {
        if (
          e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight" ||
          e.key === "c") {
          this.keys.delete(e.key);
        } else if (e.key === " ") {
          this.keys.delete("space");
        }
      });
    }

  }

  class Tank {
    constructor(gameWidth, gameHeight, deltaTime) {
      this.gameWidth = gameWidth;
      this.gameHeight = gameHeight;
      this.width = 86;
      this.height = 105;
      this.x = 10;
      this.y = this.gameHeight - this.height - 120;
      this.image = document.getElementById('tankImage');
      this.frameX = 0;
      this.frameY = 3.8;
      this.speed = 0;
      this.treeInterval = 100;
      this.treeTimer = 99;
    }
    draw(context) {
      context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }
    update(deltaTime) {
      
      //Check for inputs
      if (input.keys.has('ArrowRight')) {
        this.speed = 5;
      } else if (input.keys.has('ArrowLeft')) {
        this.speed = -5
      } else {
        this.speed = 0
      } 
      if(input.keys.has('space')) {   
        //Plant a tree
        if(this.treeTimer === this.treeInterval){
          plantTree(this.x - 50)
          this.treeTimer = 0;
        }
      }
      
      //Animate treads and move
      this.x += this.speed
      if (this.x < 0) {
        this.x = 0
      } else if (this.x > this.gameWidth - this.width) {
        this.x = this.gameWidth - this.width
      }
      
      if (this.speed > 0) {
        this.frameX = (this.frameX - 1 + 4) % 4
      } else if (this.speed < 0) {
        this.frameX = (this.frameX + 1) % 4
      }
      
      //Charge the tree planter to tree interval
      if(this.treeTimer < this.treeInterval){
        this.treeTimer ++
      }
      
      
    }
  }
  
  class Tree {
    constructor(gameWidth, gameHeight, x) {
      this.gameWidth = gameWidth;
      this.gameHeight = gameHeight;
      this.width = 32;
      this.height = 32;
      this.x = x;
      this.y = this.gameHeight - this.height - 190;
      this.image = document.getElementById('treeImage')
      this.frameX = 0;
      this.frameY = 0;
      this.time = 0;
      this.growTime = 1000
    }

    draw(context, x) {
      context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width * 2, this.height * 2)
    }
    // grow(){
    //   if (!(this.frameX === 1 && this.frameY === 3)){
    //     if(this.frameX === 1){
    //       this.frameX = 0
    //       this.frameY = (this.frameY + 1) % 4
    //     } else {
    //       this.frameX ++
    //     }
    //   }
    // }
    update(deltaTime) {
      let grown = this.frameX === 1 && this.frameY === 3
      if(!grown){
        if (this.time > this.growTime){
          this.time = 0;
          if(this.frameX === 1){
            this.frameX = 0
            this.frameY = (this.frameY + 1) % 4
          } else {
            this.frameX ++
          }
        }
        this.time += deltaTime
      }
    }
  }

  class Background {
    constructor(gameWidth, gameHeight) {
      this.gameWidth = gameWidth;
      this.gameHeight = gameHeight;
      //This is where the bg image gets loaded
      this.image = document.getElementById('backgroundImage');
      this.x = 0;
      this.y = this.gameHeight / 8;
      //dimensions are available in the image itself
      this.width = 8165;
      this.height = 2205;
      this.speed = 5;
    }
    draw(context) {
      context.drawImage(this.image, this.x, this.y,
        //these are unnecessary in example because the bg is the right height already
        this.width / 4, this.height / 4);
      context.drawImage(this.image, this.x + this.width, this.y, this.width / 4, this.height / 4);

    }

    update() {
      this.x -= this.speed;
      if (this.x < 0 - this.width) {
        this.x = 0
      }
    }
  }





  function handleTrees(deltaTime) {
    trees.forEach(tree => {
      tree.draw(ctx, tree.x)
      tree.update(deltaTime)
    })
  }
  function plantTree(x) {
    trees.push(new Tree(canvas.width, canvas.height, x))
  }



  const input = new InputHandler();
  const background = new Background(canvas.width, canvas.height);
  const tank = new Tank(canvas.width, canvas.height);
  const tree = new Tree(canvas.width, canvas.height);

  //this and deltaTime below determine enemy spawn time
  // let lastTime = 0;
  // let enemyTimer = 0;
  // let enemyInterval = 2000;
  // let randomEnemyInterval = Math.random() * 1000 + 500;

  //Grow time for trees
  let lastTime = 0;



  // plantTree(10);
  
  function animate(timeStamp) {
    //timeStamp is auto-generated by the requestAnimationFrame and passed to the function it calls(in this case, animate())
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    //we can use deltaTime to handle periodic events
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //background.draw(ctx);
    tank.draw(ctx);
    tank.update();
    handleTrees(deltaTime)
    tree.draw(ctx, 100)
    tree.update(deltaTime)
    //background.update();
    //player.draw(ctx);
    //player.update()
    requestAnimationFrame(animate);
  }
  //not auto-generated the first time so we need to pass something as timeStamp
  animate(0)

})