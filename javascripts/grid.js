var Grid = function(color, canvasId, widthAspectRatio, heightAspectRatio){
  this.canvas = document.getElementById(canvasId)
  this.widthAspectRatio = widthAspectRatio
  this.heightAspectRatio = heightAspectRatio
  this.lineColor = color
  this.context = this.prepareContext()
  this.width = this.gridWidth()
  this.height = this.gridHeight()
}

Grid.prototype.prepareContext = function(){
  return this.canvas.getContext("2d")
}

Grid.prototype.drawLine = function(x,y){
  this.context.beginPath()
  this.context.moveTo(0, 0)
  this.context.lineTo(x, y)
  this.context.translate(x,y)
  this.context.strokeStyle = this.lineColor
  this.context.closePath()
  this.context.stroke()
}

Grid.prototype.clearScreen = function(){
  this.context.clearRect(-100,-100,1000,1000)
}

Grid.prototype.rotate = function(degrees) {
  this.context.rotate(degrees*Math.PI/180.0)
}

Grid.prototype.gridWidth = function() {
    return this.canvas.width / this.widthAspectRatio
  }

 Grid.prototype.gridHeight = function() {
    return this.canvas.height / this.heightAspectRatio
  }

Grid.prototype.makeGridLines = function(){
  this.context.beginPath()
    for (var y=this.gridHeight(); y<this.canvas.height; y+=this.gridHeight()) {
      this.context.moveTo(0, y)
      this.context.lineTo(this.canvas.width, y)
    }
    for (var x=this.gridWidth(); x<this.canvas.width; x+=this.gridWidth()) {
      this.context.moveTo(x, 0)
      this.context.lineTo(x, this.canvas.height)
    }
    this.context.strokeStyle = this.lineColor
    this.context.closePath()
    this.context.stroke()
}
