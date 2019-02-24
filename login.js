$(document).ready(function(){
    // declaring login info
    let userInfo={
        name: "admin",
        password: "admin"
    }

    // adding an effecs to the both input and submit button
    $(".error-message").hide();
    $("form").css({"margin-top": "80px"})
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
        // assigning the input value to a variable
        let email = $("#email").val();
        let password = $("#password").val();
        // email verification
        if(email===userInfo.name && password===userInfo.password){
            alert("you will be login if we have your info in our database")
            $(".error-message").hide();
            $("form").css({"margin-top": "80px"})
        }else{
            $(".error-message").show();
            $("form").css({"margin-top": "30px"})
        }
    });
  });