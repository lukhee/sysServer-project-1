$(document).ready(function(){
    // making some adjustmet on the page
    $(".warning-alert").hide();
    $(".button").css({"margin-top": "40px"}) 

    // adding an effecs to the both input and submit button
    $("input").mouseup(function(){
        $(this).addClass("inputEffect");
        $(".login-button").addClass("buttonEffect");
      });
    $("input").blur(function(){
        $(this).removeClass("inputEffect");
      });

    //   performing the login action and also display the warning page if the email is empty
      $(".login-submit").click(function(){
        event.preventDefault();
        let email = $("#email").val();
        if(email===""){
            $(".warning-alert").show();
            $(".button").css({"margin-top": "-10px"})
        } else {
            $(".warning-alert").hide();
            $(".button").css({"margin-top": "40px"})
            // putting the email in local storage so as to access it the routered page
            localStorage.setItem('email',email)
            $('#updateForm').submit();
        }
      });

    //   redirecting back to homepage/login page
    $('#login').click(function(){
        $('form').attr('action', 'login.html');
     });
  });