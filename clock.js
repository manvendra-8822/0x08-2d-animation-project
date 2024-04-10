class Clock{
    sel 
    domel
    ctx

    constructor(sel){
        this.sel=sel
        this.domel=document.querySelector(this.sel)
        this.ctx=this.domel.getContext('2d')
    }

    draw(ts){
        const ctx=this.ctx
        ctx.transform(1,0,0,1,150,150)

        ctx.reset()//imp for primary draw call routine

        //dial Circle
        ctx.beginPath()
        ctx.arc(0,0,100,0,2*Math.PI)
        ctx.stroke()

        //Second Hand Line
    }
}