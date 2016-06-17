$(document).ready(function(){
   
    
    //when the login or register modal are launched, the background will be blurred to provide contrast between it and the modal 
    
    var isBlurred = null;
    var bodyText = $(".bodyText");
    
    
    // blur function
    function blurElement(element, size){            // via http://jsfiddle.net/3F6jm/
        var filterVal = 'blur(' + size + 'px)';
        $(element)
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
            $(bodyText).animate({opacity: 1}, 200);
            blurElement(bodyText, 0);
        }else{
            $(bodyText).animate({opacity: ".3"}, 200);
            blurElement(bodyText, 2);
        }
        
    };
    
    
    
   
    
    // the sign in, register, and close modal buttons. 
    
    // check if modal active
    function activeModal(){
        
    }

    // sign in
    
    $("#signInButton").on('click', function(){
        //alert("signing you in");
        blurBackground();    
    });
    
    
    // register
    
    $("#registerButton").on('click', function(){
       // do something 
    });
    
    
    // close modal
    
    function closeModal(){
      alert("close modal");  
    };
    
    
    
});

