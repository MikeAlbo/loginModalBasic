$(document).ready(function(){
   
    
    //when the login or register modal are launched, the background will be blurred to provide contrast between it and the modal 
    
    var isBlurred = null;
    var loginActive = true;
    var bodyText = $(".bodyText");
    var loginDiv = $("#loginDiv");
    
    
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
        
        if(isBlurred){
            isBlurred = false;
            //$(bodyText).animate({opacity: 1}, 200);
            blurElement(bodyText, 0, 1);
        }else{
            isBlurred = true;
           // $(bodyText).animate({opacity: ".3"}, 200);
            blurElement(bodyText, 2, '.8');
        }
        
    };
    
    
    // the sign in, register, and close modal buttons. 

    // sign in

    
    
    $("#signInButton").on('click', function(){
        
        if(loginActive){
            blurBackground();
            $(loginDiv).animate({
                opacity: 1,
                top: "10%"
            }, 100).css("visibility", "visible");
            loginActive = null;
        } else {
            blurBackground();
            $(loginDiv).animate({
                opacity: 0,
                top: "25%",
                visibility: "hidden"
            }, 100);
            loginActive = true;
        }
        
    });
    
    
    // register
    
    $("#registerButton").on('click', function(){
       // do something 
    });
    
    
    // close modal
    
    $("#closeModal").on('click', function(){
       // close the modal 
    });
    
    
    
});

