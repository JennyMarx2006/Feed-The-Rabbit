    var garden,rabbit;
    var gardenImg,rabbitImg;
    var apple,appleImg;
    var leaf,leafImg;

    var random;


        function preload(){
          
              gardenImg = loadImage("garden.png");
              rabbitImg = loadImage("rabbit.png");
              appleImg=loadImage("apple.png");
              leafImg=loadImage("leaf.png");

        }

      function setup(){

          createCanvas(400,400);
  
                  // Moving background
                  garden=createSprite(200,200);
                  garden.addImage(gardenImg);

                  //creating boy running
                  rabbit = createSprite(180,340,30,30);
                  rabbit.scale =0.09;
                  rabbit.addImage(rabbitImg);
                  }

  
            function draw() {
              background(0);

                    edges= createEdgeSprites();

                    rabbit.collide(edges);

                    rabbit.x=mouseX;

                    createLeaves()
                    createApples()

                    drawSprites();
                  }

              function createApples(){
                
                var select_sprites =  Math.round(random(1,2))
                console.log(select_sprites)
                if(frameCount % 80==0){

                  if(select_sprites==1){


                apple=createSprite(random(50,350),20,10,10);
                apple.addImage(appleImg);
                apple.scale=0.05;
                apple.velocityY=3;
                apple.y=random(1,2);
                }
                  }}


                function createLeaves(){
                  
                  var select_sprites =  Math.round(random(1,2))
                  console.log(select_sprites)

                 if(frameCount % 80==0){
                   if(select_sprites==1){

                leaf=createSprite(random(251,40),80,10,10);
                leaf.addImage(leafImg);
                leaf.scale=0.05;
                leaf.velocityY=3;
                leaf.y=random(1,6);


          }}
  
          
        }

  
  


