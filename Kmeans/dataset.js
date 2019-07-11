class dataset{

constructor(x,y){
    //x and y are arrays representing the data you want to cluster
    this.x=x;
    this.y=y;
    this.colors=[]
    this.size=10;
}
draw(){
    noStroke()
    for (var i=0;i<this.x.length;i++){
      
        fill(this.colors[i].r,this.colors[i].g,this.colors[i].b)
        ellipse(this.x[i],this.y[i],this.size,this.size)
    }

}

generateClasses(){
    //first class x 100:300 and y 100:250
    var n_first=50;
    var n_second=50;
    var n_third=50;
    var n_fourth=50;
    this.x=[]
    this.y=[]
    for(var i=0;i<n_first;i++){
        this.x.push(round(random(100,300)))
        this.y.push(round(random(100,250)))
    }

    //second class x 400:700 and y 100:250
    for(var i=0;i<n_first;i++){
        this.x.push(round(random(400,700)))
        this.y.push(round(random(100,250)))
    }
    //third class x 400:700 and y 300:500
    for(var i=0;i<n_first;i++){
        this.x.push(round(random(400,700)))
        this.y.push(round(random(300,500)))
    }
    //fourth class x 100:300 and y 300:500
    for(var i=0;i<n_first;i++){
        this.x.push(round(random(100,300)))
        this.y.push(round(random(300,500)))
    }
}


}
