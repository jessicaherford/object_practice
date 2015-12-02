var getter = $.ajax({
  url: "https://www.reddit.com/subreddits/search.json?q=mockingjay",
  method: "GET",
  dataType: "json"
});
//calling the api

getter.done(function(response){
  console.log(response['data']['children'][0]['data']['display_name']);

});

getter.fail(function(){
  console.log("Didn't get it!");
});

$(document).ready(function(){

  console.log("Hello World!");
})
