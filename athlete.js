var bottle = require('./water_bottle');

var athlete = {
  hydration: 100,
  distanceCovered: 0,
  bottle: bottle,
  fillBottle: function(){
    this.bottle.fill();
  },
  run: function(){
    if ( this.hydration <= 0 ) {
      return;
    }
    this.hydration -= 10;
    this.distanceCovered += 100;
  },
  drink: function() {
    if (this.bottle.volume >= 10) {
      this.bottle.drink();
      this.hydration += 10;
    }
  }
}

module.exports = athlete;