# Basic Login Modal
with Bootstrap and jQuery

## Overview

I'm experimenting with variations of login/ registration UI. This is the basic version using Bootstrap and jQuery. The next version will incorporate Angular JS 1.X, then will be linked with a Firebase backend. The final UI elements will be incorporated into a larger project I am currently working on. 

## Technologies
* Bootstrap
* jQuery
* HTML 5
* CSS 3

## As a user, I can...
* click on "Login" or "Register" to launch the modal.
* click on the "double chevrons" to minimize the footer.
* access the "Sign In", "Register" modal.
* bring the full size modal back up.
* sign in or register via social media links
* sign in or registers via email and password
* switch from login to register within the modal
* switch from register to login within the modal.

## Known issues
* hovering over buttons inside the footer
    * on occasion the hover doesnt recogize the button
    * issues with mobile
* issues with layout on mobile
* when modal fades out, the modal disappears before the animation plays.
    jQuery.animate() will not change the (css) visibility to "hidden", visibility is therefor chained to the end of the animate function and is called once the animation begins instead of at the end.
    
    ```
    /* does not change the visibility */
    
    $(element).animate({
        opacity: 0,
        visibilty: 'hidden'
    },300);
    
    /* changes the visibility but causes the "flash" out */
    
    $(element).animate({
        opactiy: 0
    }, 300).css("visibilty", "hidden");
    
    ```