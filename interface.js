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
      $('#powersave').text(thermostat.isPowerSave ? 'Power Saving: ON' : 'Power Saving: OFF')
      updateTemperature()
    });

    $('#get_weather').on('click', function() {
      var location = $('#location').val();
      $.get(url_maker(location), function(result) {
        $("#weather_output").html(kelvin_to_celsius(result.main.temp) + " \xB0C");
      });
    });

    function url_maker(location) {
      var destination = "http://api.openweathermap.org/data/2.5/weather?q=";
      var api_key = "&appid=3109df7fa97004737cf5823e612f8f12";
      return destination + location + api_key
    }

    function kelvin_to_celsius(kelvin) {
      return (kelvin - 273.15).toFixed(0)
    }

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature + " \xB0C");
      $('#temperature').attr('class', thermostat.getCurrentEnergyUsage())
    }
});
//
// 3109df7fa97004737cf5823e612f8f12
