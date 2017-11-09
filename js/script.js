

var arr = [90, 80, 50, 50, 60, 90]; //array of skills percentages
var index = 0;




$(document).ready(function() {
  setTimeout(animateSkillBar,1500);
  /*
    function check() {
        if( $('a[href="#mySkills"]').parent('li').hasClass('active')){
            animateSkillBar();
        }
        else{
            setTimeout(check, 100);
        }
    }
    */


  /*Closes the navbar of subitems after click - for smartphones view */    
    $('.nav a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    });

    // Get the height of the header
    var headerHeight = $("#navbarID").height();

    // Attach the click event
    $('#navbarID a').on("click", function(e) {
        e.preventDefault();

        var target = $(this).attr("href"); //Get the target
        var scrollToPosition = $(target).offset().top - headerHeight;

        $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(){
            window.location.hash = "" + target;
            // This hash change will jump the page to the top of the div with the same id
            // so we need to force the page to back to the end of the animation
            $('html').animate({ 'scrollTop': scrollToPosition }, 0);
        });

        $('body').append("called");
    });


    $(".project-box-details").slideUp();
    $(".project-box").click(function(){
        $(this).children(".project-box-details-click").slideToggle(500);
        $(this).children(".project-box-details").slideToggle(1000);
    });




    /*Adds class'active' to the clicked element in nabar  */
    /*
    $(".nav li").on("click", function() {
        $(".nav li").removeClass("active");
        $(this).addClass("active");
        });
        
    */

        
    
    /*BS Scrollspy to make navbar li element active */
    $('body').scrollspy({ target: '.navbar-fixed-top' , offset: 100 });





});

var animateSkillBar = function(){
  
  $(".containerBar").each(function() {
    //set lightness between 20 and 60, but do gradient from 80 to value (descending - darkening color)
    var currentLightness = 80;
    var limitLightness = 60- Math.ceil((arr[index] / 100)*40);
    //animate skillbar
    $(this)
      .find(".skills")
      .animate(
        {
          width: arr[index] + "%"
        }, 5000);    
    //create gradient by looping and pausing for a brief moment and changing color
    changeColor($(this), currentLightness, limitLightness);
    index++;
  });
};


//this function loops until desired lightness is reached, stopping every interval of time in each iteration before recursively calling itself
var changeColor = function(thisObject, currentLightness, limitLightness){
  var str = "hsl(199, 100%, " + currentLightness + "%)";
  thisObject.find(".skills").css("background-color", str);
  currentLightness--;
  //console.log(thisObject);
  if(currentLightness>limitLightness){
    //call function 0.2 sec later
    setTimeout(function(){
      changeColor(thisObject, currentLightness, limitLightness);
    }, 75);  
  }
};




  
  
  
