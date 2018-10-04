'use strict';

var Thermostat = function() {
  this.temperature = 20;
  this.isPowerSave = true;
  this.maximumTemp = 25;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(degrees = 1) {
  this.temperature += degrees;
  if (this.temperature > this.maximumTemp) {
    this.temperature = this.maximumTemp;
    throw new Error('Temp too high')
  }
};

Thermostat.prototype.down = function(degrees = 1) {
 this.temperature -= degrees;
 if (this.temperature < 10) {
   this.temperature = 10
   throw new Error('Temp too low')
 }
};

Thermostat.prototype.getCurrentPowerMode = function(){
  return this.isPowerSave;
};

Thermostat.prototype.togglePowerSave = function() {
  this.isPowerSave = !this.isPowerSave;
  this.maximumTemp = this.isPowerSave ? 25 : 32;
  if (this.temperature > this.maximumTemp) {
    this.temperature = this.maximumTemp;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.getCurrentEnergyUsage = function() {
  return this.temperature < 18 ? "low-usage" : this.temperature < 25 ? "medium-usage" : "high-usage";
};
