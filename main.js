$(document).ready(function(){
   
    
    //when the login or register modal are launched, the background will be blurred to provide contrast between it and the modal 
    
    var loginActive = true;
    var registerActive = true;
    var bodyText = $(".bodyText");
    var loginDiv = $("#loginDiv");
    var registerDiv = $("#registerDiv");
    
    var smallFooterText = '<p class="col-xs-6 col-xs-offset-3">Click here to <a class="minSignIn"> Sign In</a>, or to <a class="minRegister"> Register</a>.  </p>';
    
    var largeFooterText = 'To comment and save, sign in or create an account.';
    
    
    
    // blur function
    function blurElement(element, size, opacity){            // via http://jsfiddle.net/3F6jm/
        var filterVal = 'blur(' + size + 'px)';
        $(element)
            .css('opacity', opacity)
            .css('filter', filterVal)
            .css('webkitFilter', filterVal)
            .css('mozFilter', filterVal)
            .css('oFilter', filterVal)
            .css('msFilter', filterVal)
            .css('transition', 'all 0.3s ease-out')
            .css('-webkit-transition', 'all 0.3s ease-out')
            .css('-moz-transition', 'all 0.3s ease-out')
            .css('-o-transition', 'all 0.3s ease-out');
    };
    
    // blur background 
    
    function blurBackground(){
        blurElement(bodyText, 1, ".5");
    }
    
    function unblurBackground(){
        blurElement(bodyText, 0, 1);
    }
    
    
    // modal show/hide
    
    function showDiv(element){
        $(element).animate({
                opacity: 1,
                top: "10%"
            }, 100).css("visibility", "visible");
    }
    
    function hideDiv(element){
        $(element).animate({
                opacity: 0,
                top: "25%"
            }, 100).css("visibility", "hidden");
    }
    
    function loginModal(){
        if(loginActive){
            blurBackground();
            showDiv(loginDiv);
            hideDiv(registerDiv);
            loginActive = null;
            registerActive = true;
        } else {
            unblurBackground();
            hideDiv(loginDiv);
            loginActive = true;
            registerActive = true;
        }
    };
    
    function registerModal(){
        if(registerActive){
            blurBackground();
            showDiv(registerDiv);
            hideDiv(loginDiv);
            registerActive = null;
            loginActive = true;
        } else {
            unblurBackground();
            hideDiv(registerDiv);
            registerActive = true;
            loginActive = true;
        } 
    };
    
    
    // buttons. 

    // sign in
    $(".signIn").on('click', function(){ loginModal(); });
    
    // register  
    $(".register").on('click', function(){ registerModal(); });
    
    
    // close modal 
    $(".closeModal").on('click', function(){
        hideDiv(loginDiv);
        hideDiv(registerDiv);
        registerActive = true;
        loginActive = true;
        unblurBackground();
    });
    
    
    // login button for social apps
    $(".loginButton").on('click', function(){
      alert($(this).attr('value'));
    });
    
    
    // minimize the footer
    $("#closeFooter").on('click', function(){
        
       
        // hide the buttons and text, and then minmize the bar
        
        $("#footerDiv button").animate({ opacity: 0}, 300);
        
        $("#footerDiv").animate({height: "5%"});
        
        
        // add a line that allows the user to bring the bar back
        
        $("#largeFooterText").html(smallFooterText).css("padding-top", "5px");
        
        $(".minSignIn").on('click', function(){ 
            loginModal();
            $("#footerDiv").animate({height: "10%"});
            $("#footerDiv button").animate({opacity: 1}, 300);
            $("#largeFooterText").html(largeFooterText).css("padding-top", "");
        });
        
        $(".minRegister").on('click', function(){ 
            registerModal(); 
            $("#footerDiv").animate({height: "10%"});
            $("#footerDiv button").animate({opacity: 1}, 300);
            $("#largeFooterText").html(largeFooterText).css("padding-top", "");
        });
        
    });
    
    
    
    
});


