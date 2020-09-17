//

var myApi = '08fed0ddeae70765e29238f931a921a5';





var words;

$('#cityName').on('click', function(event){
    event.preventDefault();
    words = $('#city').val();
    console.log(words);
    myWeather()

    liEl = $('<li>')
     $(liEl).text(words);
     $(liEl).addClass("list-group-item");
     $('#aList').append(liEl);
     
    
   
    
    var day1 = new moment().add(1, 'day');
    $('#d1').text(moment().format(day1.format('l')));

     
    var day2 = new moment().add(2, 'day');
    $('#d2').text(moment().format(day2.format('l')));

     
    var day3 = new moment().add(3, 'day');
    $('#d3').text(moment().format(day3.format('l')));

     
    var day4 = new moment().add(4, 'day');
    $('#d4').text(moment().format(day4.format('l')));

     
    var day5 = new moment().add(5, 'day');
    $('#d5').text(moment().format(day5.format('l')));
  
});






function myWeather(){

    var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ words +'&units=imperial&appid=' + myApi;  
    $.ajax({
        url: queryUrl,
        method:'GET',
    }).then(function(response){
        console.log(response)
        $('#cName').text(response.name + ' ' + '(' + moment().format('l') + ')');
        var iconCode = response.weather[0].icon;
        $('#myImg').attr('src' , 'http://openweathermap.org/img/wn/' + iconCode + '.png');
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
             $('#uv').addClass('uvBord');
             if (res.value >= 0 && res.value <= 2){
                 $('#uv').addClass('good');
             } else if (res.value >=3 && res.value <= 7){
                 $('#uv').addClass('okay');
             } else if (res.value >= 8){
                 $('#uv').addClass('bad');
             }
            

            
         })

         var queryUrl3 =  'https://api.openweathermap.org/data/2.5/forecast?q='+ words +'&units=imperial&appid=' + myApi;  

         $.ajax({
             url:queryUrl3,
             method: 'GET',
         }).then(function(newRes){
             console.log(newRes);
             var weathicon1 = newRes.list[3].weather[0].icon;
             $('#T1').text('Temp: ' + newRes.list[3].main.temp  + '°F');
             $('#h1').text('Humidity:' + newRes.list[3].main.humidity + '%');
             $('#img1').attr('src' , 'http://openweathermap.org/img/wn/' + weathicon1 + '.png');
             var weathicon2 = newRes.list[11].weather[0].icon;
             $('#T2').text('Temp: ' + newRes.list[11].main.temp  + '°F');
             $('#h2').text('Humidity:' + newRes.list[11].main.humidity + '%');
             $('#img2').attr('src' , 'http://openweathermap.org/img/wn/' + weathicon2 + '.png');
             var weathicon3 = newRes.list[19].weather[0].icon;
             $('#T3').text('Temp: ' + newRes.list[19].main.temp  + '°F');
             $('#h3').text('Humidity:' + newRes.list[19].main.humidity + '%');
             $('#img3').attr('src' , 'http://openweathermap.org/img/wn/' + weathicon3 + '.png');
             var weathicon4 = newRes.list[27].weather[0].icon;
             $('#T4').text('Temp: ' + newRes.list[27].main.temp  + '°F');
             $('#h4').text('Humidity:' + newRes.list[27].main.humidity + '%');
             $('#img4').attr('src' , 'http://openweathermap.org/img/wn/' + weathicon4 + '.png');
             var weathicon5 = newRes.list[35].weather[0].icon;
             $('#T5').text('Temp: ' + newRes.list[35].main.temp  + '°F');
             $('#h5').text('Humidity:' + newRes.list[35].main.humidity + '%');
             $('#img5').attr('src' , 'http://openweathermap.org/img/wn/' + weathicon5 + '.png');



         })
    });



    
}
