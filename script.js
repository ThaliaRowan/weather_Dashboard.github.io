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
    console.log(response)
    $('#cName').text(response.city.name)
    $('#temp').text()
});
});

