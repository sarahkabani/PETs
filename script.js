$.ajax({
type: "GET",
url: "data/pets.json",
dataType: "json",
success: function(data){
 // var petCards = $('<div id="main" class="card-columns">');
 data.forEach(function(val){
   var keys = Object.keys(val);
   var card = '<div class="card">' + "<img class=\"card-img-top\" width=\"300px\" height=\"300px\" src=\"" + val.photo + "\">";
   card += '<div class="card-body">';
   keys.forEach(function(item) {
     if (item == "birthYear") {
       var birthYear = 2018 - val.birthYear;
       card += "<strong>" + "age" + "</strong>: " + birthYear + "<br>" + "<button type='button' class='btn btn-primary'>Adopt</button>" + "<br>";
     }
     else if (item == "photo") {
       delete val.photo;
     }
     else{
       card += "<strong>" + item + "</strong>: " + val[item] + "<br>";
     }
   });
   card += "</div></div>";
$('#main').append(card);
   // petCards.append(card);
 });
},
error: function(xhr,status,e){
 console.log(status, e);
}
});
