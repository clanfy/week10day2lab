var athlete = require ('../athlete');
var assert = require("assert");

describe("Athlete", function(){
  it("should be hydrated to 100", function(){
    assert.equal(100, athlete.hydration);
  });

  it("distance covered should start at 0", function(){
    assert.equal(0, athlete.distanceCovered);
  });

  it("athlete should run, increase distance, decrease hydration", function(){
    athlete.run();
    assert.equal(100, athlete.distanceCovered);
    assert.equal(90, athlete.hydration);
  });

  it("athlete can't run when hydration is 0", function(){
    for (var i = 0; i < 10; i++) {
      athlete.run();}
      athlete.run();
    assert.equal(1000, athlete.distanceCovered);
    assert.equal(0, athlete.hydration);
  });

  


});