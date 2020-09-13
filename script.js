//

var myApi = '08fed0ddeae70765e29238f931a921a5';
var name  = 'Bristol';




var words;

$('#cityName').on('click', function(event){
    event.preventDefault();
    words = $('#city').val();
    console.log(words);

    var queryUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ words +'&appid=' + myApi;  
$.ajax({
    url: queryUrl,
    method:'GET',
}).then(function(response){
    $('#cName').text(response.city.name);
    var farin = (response.list[3].main.temp - 273.15) * 1.80 +32;
     $('#temp').text('Temperature: ' + farin.toFixed() + '°F');
     $('#humid').text('Humidity: ' + response.list[0].main.humidity);
     
     $('#wind').text('Wind Speed: ' + response.list[3].wind.speed + ' MPH');
     console.log(response)
});
});

