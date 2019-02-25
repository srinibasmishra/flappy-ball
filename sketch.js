var pipes= [];

var bird;
function setup() {
  // put setup code here

  createCanvas(400, 600);
  bird= new Bird();
   pipes.push(new Pipe());
}

function draw() {
background(0);

for(var i= pipes.length-1; i >= 0 ; i--){

  pipes[i].show();

  pipes[i].update();


  if( pipes[i].hits(bird)){
    console.log("hit");
  }

  if(pipes[i].offscreen()){

    pipes.slice(i, 1);
  }

}


bird.update();
bird.show();


if(frameCount %100 == 0){

  pipes.push(new Pipe());

}



  // put drawing code here
}

function keyPressed(){
  if(key == ' '){
   // console.log("space");
  
  bird.up();
  }


}