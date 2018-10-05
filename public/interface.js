$(document).ready(function() {
	var thermostat = new Thermostat();
    // updateTemperature()
		$.when( $.get("/temp", function(temp) {
			console.log(1)
			console.log(temp)
			if (temp !== "") {
				// console.log("temp was null")
				thermostat.temperature = temp
				// console.log(thermostat.temperature)
				// console.log(" ");
			}
		})).done(function() {
			updateTemperature()
		});

    $('#temperature-up').on('click', function() {
      thermostat.up();
			$.post("/temp", { temp: thermostat.temperature }).then(updateTemperature());
      // updateTemperature();
    });

    $('#temperature-down').on('click', function() {
      thermostat.down();
			$.post("/temp", { temp: thermostat.temperature });
      updateTemperature();
    });

    $('#temperature-reset').on('click', function() {
      thermostat.reset();
			$.post("/temp", { temp: thermostat.temperature });
      updateTemperature();
    });

    $('#powersave').on('click', function() {
      thermostat.togglePowerSave();
      $('#powersave').text(thermostat.isPowerSave ? 'Power Saving: ON' : 'Power Saving: OFF');
      updateTemperature();
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
      return destination + location + api_key;
    }

    function kelvin_to_celsius(kelvin) {
      return (kelvin - 273.15).toFixed(0);
    }

    function updateTemperature() {
			console.log(2)
			console.log(thermostat.temperature);
			$.get("/temp", function(temp) {
				$('#temperature').text(thermostat.temperature + " \xB0C");
	      $('#temperature').attr('class', thermostat.getCurrentEnergyUsage())
			});
    };
});
//
// 3109df7fa97004737cf5823e612f8f12




//
// function updateTemperature() {
// 	// console.log(thermostat.temperature);
// 	$.post("/temp", { temp: thermostat.temperature });
// 	$.get("/temp", function(temp) {
// 		console.log("before get request temp:")
// 		console.log(temp)
// 		console.log("after")
// 		$('#temperature').text(temp + " \xB0C");
// 		$('#temperature').attr('class', thermostat.getCurrentEnergyUsage())
// 	});
// }
// });
// //
