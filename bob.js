class bob {
constructor(x, y, r) {
    var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(x, y, r/2, options);
    this.r = r/2;
    this.image = loadImage("paper.png")
    World.add(world, this.body);
}
display(){ var pos = this.body.position; 
    push(); translate(pos.x, pos.y);
    strokeWeight(3);
        stroke('white')
        fill('blue')
        image(this.image,0,0,40,40);
        pop(); }
     }