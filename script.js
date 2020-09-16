//

var myApi = '08fed0ddeae70765e29238f931a921a5';
//var name  = 'Bristol';




var words;

$('#cityName').on('click', function(event){
    event.preventDefault();
    words = $('#city').val();
    console.log(words);
    myWeather()

    var liEl = $('<li>')
     $(liEl).text(words);
     $(liEl).addClass("list-group-item")
    $('#aList').append(liEl);
    
  
});


function myWeather(){

    var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ words +'&units=imperial&appid=' + myApi;  
    $.ajax({
        url: queryUrl,
        method:'GET',
    }).then(function(response){
        console.log(response)
        $('#cName').text(response.name);
         $('#temp').text('Temperature: ' + response.main.temp + '°F');
         $('#humid').text('Humidity: ' + response.main.humidity + '%');
         $('#wind').text('Wind Speed: ' + response.wind.speed + ' MPH');
  

         var lat = response.coord.lat;
         var lon = response.coord.lon;
         var queryUrl2 = 'http://api.openweathermap.org/data/2.5/uvi?appid=' + myApi + '&lat=' + lat + '&lon=' + lon;

         $.ajax({
             url: queryUrl2,
             method: 'GET',
         }).then(function(res){
             console.log(res);
             $('#uv').text(res.value);
             $('#uv').css('border', '2px solid black')
            

            
         })

         var queryUrl3 =  'https://api.openweathermap.org/data/2.5/forecast?q='+ words +'&units=imperial&appid=' + myApi;  

         $.ajax({
             url:queryUrl3,
             method: 'GET',
         }).then(function(newRes){
             console.log(newRes)
             $('#T1').text('Temp:' + newRes.list[3].main.temp  + '°F');
             $('#h1').text('Humidity:' + newRes.list[3].main.humidity + '%');
             $('#T2').text('Temp:' + newRes.list[11].main.temp  + '°F');
             $('#h2').text('Humidity:' + newRes.list[11].main.humidity + '%');
             $('#T3').text('Temp:' + newRes.list[19].main.temp  + '°F');
             $('#h3').text('Humidity:' + newRes.list[19].main.humidity + '%');
             $('#T4').text('Temp:' + newRes.list[27].main.temp  + '°F');
             $('#h4').text('Humidity:' + newRes.list[27].main.humidity + '%');
             $('#T5').text('Temp:' + newRes.list[35].main.temp  + '°F');
             $('#h5').text('Humidity:' + newRes.list[35].main.humidity + '%');



         })
    });



    
}
