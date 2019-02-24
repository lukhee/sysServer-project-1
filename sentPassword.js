$(document).ready(function(){
    $(".button").css({"margin-top": "40px"}) 
        // event.preventDefault();
        // assessing the email stored in my localstorage and  binding it with the html tag
        let email = localStorage.getItem('email')
        $(".retrieved-email").replaceWith(email) 
        localStorage.clear();
        $(".button")
  });