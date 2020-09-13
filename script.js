//

var myApi = '08fed0ddeae70765e29238f931a921a5';
var name  = 'Bristol';




var words;

$('#cityName').on('click', function(event){
    event.preventDefault();
    words = $('#city').val();
    console.log(words);
myWeather()
  
});


function myWeather(){

    var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ words +'&units=imperial&appid=' + myApi;  
    $.ajax({
        url: queryUrl,
        method:'GET',
    }).then(function(response){
        console.log(response)
        $('#cName').text(response.name);
        //var farin = (response.list[0].main.temp - 273.15) * 1.80 +32;
         $('#temp').text('Temperature: ' + response.main.temp + '°F');
         $('#humid').text('Humidity: ' + response.main.humidity);
         $('#wind').text('Wind Speed: ' + response.wind.speed + ' MPH');


    });



    
}