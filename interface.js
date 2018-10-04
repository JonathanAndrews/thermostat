$(document).ready(function() {
	var thermostat = new Thermostat();
    updateTemperature()

    $('#temperature-up').on('click', function() {
      thermostat.up();
      updateTemperature()
    });

    $('#temperature-down').on('click', function() {
      thermostat.down();
      updateTemperature()
    });

    $('#temperature-reset').on('click', function() {
      thermostat.reset();
      updateTemperature()
    });

    $('#powersave').on('click', function() {
      thermostat.togglePowerSave();
      $('#power-saving-status').text(thermostat.isPowerSave ? 'ON' : 'OFF')
      updateTemperature()
    });

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
      $('#temperature').attr('class', thermostat.getCurrentEnergyUsage())
    }
});
