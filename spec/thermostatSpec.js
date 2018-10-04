describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("starts", function() {
    it("at 20 degrees", function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it("with Power Saving Mode ON", function() {
      expect(thermostat.getCurrentPowerMode()).toBe(true);
    });
  });

  describe("increases the", function(){
    it('temperature', function(){
      thermostat.up(5);
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
    xit('temperature to default upper limit', function(){
      thermostat.togglePowerSave();
      thermostat.up(50);
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
    it('to maximum of 32 and throw error', function() {
      thermostat.togglePowerSave();
      expect(function() { thermostat.up(50); } ).toThrow(new Error('Temp too high'));
    });
    xit('temperature to default upper limit when Powersaving ON', function(){
      thermostat.up(50);
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
    it('to maximum of 25 and throw error when Powersaving ON', function() {
      expect(function() { thermostat.up(50); } ).toThrow(new Error('Temp too high'));
    });
  });

  describe('decreases the', function(){
    it("temperature", function(){
      thermostat.down(5);
      expect(thermostat.getCurrentTemperature()).toEqual(15);
    });
    xit('to minimum of 10 at the very least', function() {
      thermostat.down(15)
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
    it('to minimum of 10 and throw error', function() {
      expect(function() {thermostat.down(15);}).toThrow(new Error('Temp too low'));
    });
  });

  describe('Powersaving can be switched', function() {
    it('off', function() {
      thermostat.togglePowerSave()
      expect(thermostat.getCurrentPowerMode()).toBe(false);
    });
  });

  describe('Powersaving can be switched', function() {
    it('on', function() {
      thermostat.togglePowerSave()
      thermostat.togglePowerSave()
      expect(thermostat.getCurrentPowerMode()).toBe(true);
    });
  });

  describe("Changing max temp value", function() {
    it('to 32', function() {
      thermostat.togglePowerSave();
      expect(thermostat.maximumTemp).toEqual(32);
    })

    it('to 25', function() {
      thermostat.togglePowerSave();
      thermostat.togglePowerSave();
      expect(thermostat.maximumTemp).toEqual(25);
    });
  });

  describe('Resets the', function() {
    it('temperature back to default', function() {
      thermostat.reset();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe("Energy usage returns ", function() {
    it("'low-usage' if temp <18", function() {
      thermostat.down(5);
      expect(thermostat.getCurrentEnergyUsage()).toEqual("low-usage");
    });
  });
});
