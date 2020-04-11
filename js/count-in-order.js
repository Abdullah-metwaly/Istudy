$(function () {
  'use strict';
  // $( ".sortable1, .sortable2" ).sortable({
  //   connectWith: ".connectedSortable"
  // }).disableSelection();

  // $('#carouselExampleControls').carousel({
  //   interval: false
  // });
   // finction for clicking pics from ul to anther
  $('.sortable1').click(function () {
    $($(this).data('class')).append(" <li > <div> <img src='" + $(this).data('img') + "'> </div> </li>");


    $('.sort2 li').click(function () {
      if ($('.sort2 li').length <= 1) {
        $(this).parent().parent().find('button').prop('disabled', true).removeClass('button').addClass('disabled').text('Submit');
      }
      $(this).remove();
    });
    //Check At the Load 
    if ($($(this).data('class')).length === 0) {
      $($(this).data('check')).prop('disabled', true).removeClass('button').addClass('disabled');
      // console.log('button is disabled');
    } else {
      $($(this).data('check')).prop('disabled', false).removeClass('disabled').addClass('button');
      // console.log('button is active');
    }
    //Check Forever
    $($(this).data('class')).on("DOMSubtreeModified", function () {
      if ($($(this).data('class')).length === 0) {
        $($(this).data('check')).prop('disabled', true).removeClass('button').addClass('disabled');
        // console.log('button is disabled');
      } else {
        $($(this).data('check')).prop('disabled', false).removeClass('disabled').addClass('button').text('Submit');
        // console.log('button is active');
      }
    });
    // function for checking on each answers 
  });


 
// trigger popover wrong answer
  $('.wrong-popover #close').click(function () {
    $(this).parent().fadeOut();
  });

  // trigger popover right answer
  $('.right-popover #close').click(function () {
    $(this).parent().fadeOut();
  });


});


// for counting with images 
$('.question').hide();
$('#ques_1').fadeIn();
$('#next_1').fadeOut();
let i = 1;


function checkLi(x, id) {
  var y = $(id).find('li').length;
  if (x == y) {
    // showing right popover for answers
    $('#RPop').removeClass('hidden').fadeIn();
    // fo traversing between questions
    $('#next_' + i).removeClass('hidden').fadeIn();
  //  $('#next').click(function () {
    $('#next_' + i).click(function(){
      $('#ques_' + i).fadeOut();
      i++;
      $('#ques_' + i).fadeIn();
      console.log('true');
    });
  // });
  } else {
    $('#WPop').removeClass('hidden').fadeIn();
    console.log('false');
  }
}

