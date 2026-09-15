$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  // toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(350,625,350,20)
    createPlatform(0,450,175,20)
    createPlatform(810,375,110,30)
    createPlatform(900,400,20,100)
    createPlatform(400,350,175,20)
    createPlatform(800,500,250,20)
    createPlatform(1200,300,200,20)


    // TODO 3 - Create Collectables

    createCollectable("database",100,700,0,0)
    createCollectable("database",500,150,0,0)
    createCollectable("database",1300,100,0,0)


    
    // TODO 4 - Create Cannons

    createCannon("left",150,1750)
    createCannon("right",100,890)
    createCannon("top",100,1250)
    createCannon("bottom",1300,800)
    createCannon("right",500,1500)
    createCannon("right",750,1250)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
