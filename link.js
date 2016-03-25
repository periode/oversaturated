var Link = function(_pos1, _pos2, _col){
  this.pos1 = _pos1.copy();
  this.pos2 = _pos2.copy();
  this.col = _col;

  this.display = function(){
    stroke(red(this.col), blue(this.col), green(this.col), 10);
    line(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y);
  }
}
