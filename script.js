var profiles = [
  {name: "John", age: "22", city: "Denver"},
  {name: "Scott", age: "55", city: "Boulder"},
  {name: "Amanda", age: "30", city: "Austin"}
]

// profiles.forEach(function(prof){
//    for(p in prof){
//      document.writeln(prof[p]);
//    }
// });


for (var i = 0; i < profiles.length; i++) {
  var local_obj = profiles[i];
  for (p in local_obj){
    document.writeln(local_obj[p]);
  }
  document.writeln('<br>');
}


var fruits = {
    citrus: ['lemon', 'lime', 'orange'],
    sweet:  [ 'apple', 'watermelon', 'banana' ],
    exotic: [ 'passionfruit', 'mango', 'lychee']
 };

document.writeln("<br>");
document.writeln("<br>");


for(fruit in fruits){
  document.writeln(fruit+':');
  for (var i = 0; i < fruits[fruit].length; i++) {
    var inside = fruits[fruit];
    document.writeln("<li>"+inside[i]+"</li>");
  }
  document.writeln("<br>");
}
