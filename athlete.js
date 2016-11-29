var athlete = {
  hydration: 100,
  distanceCovered: 0,
  run: function(){
    if ( this.hydration <= 0 ) {
      return;
    }
    this.hydration -= 10;
    this.distanceCovered += 100;
  }
}

module.exports = athlete;