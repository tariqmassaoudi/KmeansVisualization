var sizex=800;
var sizey=600;
var data;
var kMean;
var c;
var n_iteration=0;

function setup() {
  createCanvas(sizex,sizey);
  data=new dataset([10,20,30,40],[10,20,30,40]);
 
  kMean=new kMeans(4,sizex,sizey,data)
frameRate(0.8)
kMean.assignCentroidsNodes()

fill(255)
  textSize(32);
  text('K means simulation', 200, 50);
  
  text('Number of iterations: '+n_iteration,200,550)

}

function draw() {
  
  // put drawing code here
  background(0)
  //draw the text

  fill(255)
  textSize(32);
  text('K means simulation', 200, 50);
  text('Number of iterations: '+n_iteration,200,550)




 

  // c.draw()
  
  kMean.drawCentroids()
  kMean.updatePos()
  kMean.assignCentroidsNodes()
  n_iteration++;

}