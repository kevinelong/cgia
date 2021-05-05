function Draggable(elem) {

    this.target = elem
    this.clickPoint = this.target.ownerSVGElement.createSVGPoint()
    this.lastMove = this.target.ownerSVGElement.createSVGPoint()
    this.currentMove = this.target.ownerSVGElement.createSVGPoint()
    this.target.addEventListener("mousedown", this)

    function globalToLocalCoords(x, y) {
        let p = elem.ownerSVGElement.createSVGPoint()
        let m = elem.parentNode.getScreenCTM()
        p.x = x
        p.y = y
        return p.matrixTransform(m.inverse())
    }

    this.handleEvent = function (evt) {
        evt.preventDefault()
        this.clickPoint = globalToLocalCoords(evt.clientX, evt.clientY)
        this.target.classList.add("dragged")
        this.target.setAttribute("pointer-events", "none")
        this.target.ownerSVGElement.addEventListener("mousemove", this.move)
        this.target.ownerSVGElement.addEventListener("mouseup", this.endMove)
    }
    this.move = function (evt) {
        let p = globalToLocalCoords(evt.clientX, evt.clientY)
        this.currentMove.x = this.lastMove.x + (p.x - this.clickPoint.x)
        this.currentMove.y = this.lastMove.y + (p.y - this.clickPoint.y)
        this.target.setAttribute("transform", "translate(" + this.currentMove.x + "," + this.currentMove.y + ")")
    }.bind(this)

    this.endMove = function (evt) {
        result = vector_to_radians(vector(
            point(this.clickPoint.x, this.clickPoint.y),
            point(this.lastMove.x, this.lastMove.y)
        ))
        log("result:", result)
        this.lastMove.x = this.currentMove.x
        this.lastMove.y = this.currentMove.y
        this.target.classList.remove("dragged")
        this.target.setAttribute("pointer-events", "all")
        this.target.ownerSVGElement.removeEventListener("mousemove", this.move)
        this.target.ownerSVGElement.removeEventListener("mouseup", this.endMove)
    }.bind(this)


}