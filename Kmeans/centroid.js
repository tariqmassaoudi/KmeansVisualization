class centroid {
    constructor(dataset){
        //x and y are arrays representing the data you want to cluster
        this.x=0;
        this.y=0;
        this.sizex=sizex;
        this.sizey=sizey;
        this.nodes=[]
        this.size=30;
        this.dataset=dataset;
        this.distances=[]
    }
    initposition(sizex,sizey){
        this.x=round(random(0,sizex))
        this.y=round(random(0,sizey))
    }


    draw(r,g,b){
        fill(r,g,b)
        ellipse(this.x,this.y,this.size,this.size)
    }
    setX(x){
        this.x=x
    }
    setY(y){
        this.y=y
    }
    getNodesdistances(){
        this.distances=[]
        for(var i=0;i<this.dataset.x.length;i++){
            let d =Math.sqrt(Math.pow(this.dataset.x[i]-this.x,2)+Math.pow(this.dataset.y[i]-this.y,2))
            this.distances.push(d)
        }
        return this.distances

    }
    restNodes(){
        this.nodes=[]
    }

}