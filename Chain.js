class Chain {
    constructor(bodyA,bodyB)
    {
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.05,
            length: random(10,15)
        }

        this.sling=Constraint.create(options);
        World.add(world,this.sling);     
    }
    display()
    {   
        var a=this.sling.bodyA.position;
        var b=this.sling.bodyB.position;
        line(a.x,a.y,b.x,b.y);
    }
}