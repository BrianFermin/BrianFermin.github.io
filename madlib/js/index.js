//STARTING OUR MAIN FUNCTION

$(function(){
  
  //CREATING VARIABLES TO STORE THE USER-INPUT INTO THE CORRESPONDING DIV
  var adverb1 = $('#adverb'),
      noun1 = $('#noun'),
      JobTitle = $('#Job-Title'),
      noun2 = $('#noun-2'),
      adjective1 = $('#adjective');
     
   
  //GRABBING THE TEXT FROM THE INPUT FIELDS AND PLACING THEM IN THE CORRECT DIVS
  adverb1.keyup(function(){
    $('#adverb-output').text(adverb1.val());
  });
  
  noun1.keyup(function(){
    $('#noun-output').text(noun.val());
  });
  
  JobTitle.keyup(function(){
    $('#Job-Title-output').text(JobTitle.val());
  });
  
  noun2.keyup(function(){
    $('#noun-2-output').text(noun2.val());
  });
  
  adjective1.keyup(function(){
    $('#adjective-output').text(adjective1.val());
  });
  
  //CREATING AN ACTION/EVENT FOR OUR BUTTON - DISPLAYING THE PARAGRAPH TEXT WITH MADLIB INPUT 
  $('button').on('click', function(){
    $('.madlib-output').toggle('fast');
  });
  
});


//inserting a css animtaiton effect utilizing the library we added in our html (Animated.css)
//try playing with different effects to utilize in your design
//for more information about the library - check out their website: https://github.com/daneden/animate.css

//example below of two different types of animation effects - called from the library 
// $('.madlib-output').addClass('animated jello');
$('.madlib-output').addClass('animated fadeIn');