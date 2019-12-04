$(function() {
    $('body').removeClass('fade-out');
});

// Form validation
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("All fields must be filled out.");
      return false;
    }
  }


// Popup form

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  //slidehsow
  $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);
