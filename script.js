$(document).ready(function(){

    $('img').click(function(){
        var cityname = $(this).attr('value');
        console.log("value " + cityname);
        var url = "https://www.anapioficeandfire.com/api/houses/" + cityname;
        
        $.get(url, function(res){
            var housename = "<h3>Name: " + res['name'] + "</h3>"
            var housewords = "<h3>Words: " + res['words'] + "</h3>"
            var titles = "<h3>Titles: " + res['titles'] + "</h3>"
            // console.log(res);
            $('.container').html(housename + housewords + titles);
        });
    })

})


