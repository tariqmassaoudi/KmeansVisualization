//make it work on n number of clusters

class kMeans{

    constructor(n_clusters,sizex,sizey,dataset){
        this.n_clusters=n_clusters;
        this.centroids=[]
        for(var i=0;i<n_clusters;i++){
            this.centroids.push(new centroid(dataset))
            this.centroids[i].initposition(sizex,sizey)
            
        }
        this.distances=[]
        this.dataset=dataset
        this.dataset.generateClasses()


    }
    drawCentroids(){
        stroke(255)
        for(var i=0;i<this.n_clusters;i++){
            let r,g,b;
            if(i===0){
                r=0
                g=255
                b=0
           }
           if(i===1){
                r=255
                g=0
                b=0
           }
           if(i===2){
                r=0
                g=0
                b=255
           }
           if(i===3){
                r=180
                g=90
                b=50
           }
            this.centroids[i].draw(r,g,b)
        }
        this.dataset.draw()
    }
    assignCentroidsNodes(){

        //get the distances of the centroids and assign each node to corresponding centroid

        //reset nodes


        //get the distances
        let dis=this;
        this.distances=[]
        this.centroids.forEach(function(c){
            
            dis.distances.push(c.getNodesdistances())
            print(c.getNodesdistances())
            c.restNodes()
        })
        
        print("fuuuck")
      this.dataset.colors=[]
        for (var i=0;i<this.dataset.x.length;i++){
            let dist=[]
            for(var j=0;j<this.n_clusters;j++){
                dist.push(this.distances[j][i])
            }
       
            let min = dist.indexOf(Math.min(...dist));
                let r;
                let g;
                let b;
            if(min===0){
                 r=0
                 g=255
                 b=0
            }
            if(min===1){
                 r=255
                 g=0
                 b=0
            }
            if(min===2){
                 r=0
                 g=0
                 b=255
            }
            if(min===3){
                 r=180
                 g=90
                 b=50
            }
            this.dataset.colors.push({r:r,g:g,b:b})
            this.centroids[min].nodes.push({x:this.dataset.x[i],y:this.dataset.y[i]})
         
        }
       
       
    }
    updatePos(){
        //calculate mean and update centroids pos
        for(var i=0;i<this.n_clusters;i++){
            let totalX=0
            let totalY=0
            let numberOfnodes=0
            this.centroids[i].nodes.forEach(function(node){
                totalX+=node.x
                totalY+=node.y
                numberOfnodes+=1
            })
            let meanX=totalX/numberOfnodes
            let meanY=totalY/numberOfnodes
            
            //update the centroid
            this.centroids[i].setX(meanX)
            this.centroids[i].setY(meanY)
        }
    }
    

}