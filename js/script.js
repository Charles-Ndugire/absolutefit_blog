var videoPlayer = document.getElementById('videoPlayer');

// Auto play, half volume.
videoPlayer.play()
videoPlayer.volume = 0.5;

// Play / pause.
videoPlayer.addEventListener('click', function () {
    if (videoPlayer.paused == false) {
        videoPlayer.pause();
        videoPlayer.firstChild.nodeValue = 'Play';
    } else {
        videoPlayer.play();
        videoPlayer.firstChild.nodeValue = 'Pause';
    }
});
$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown('1500').hide('1000');
    $("#development").show('1500');
  });
  $("#development").click(function(){
    $("#development").slideUp('1500');
    $("#development-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideDown('1500').hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function(){
    $("#design").slideUp('1500');
    $("#design-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function(){
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });
});

$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});

$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});

$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });

  $("#work6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });
  $("#work7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
  $("#work8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
});

$(document).ready(function(){
  $("form#form1").submit(function(event){
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    if ($("input#MERGE1").val() && $("input#MERGE0").val()){
      alert ("Hello " + name + ", we have received your message. Thank you for contacting us.");
    }
    else {
      alert("Oops! Please enter your Name and Email!");
    }

  });

});

function showContent() {
  $(".readmore-btn").on("click",function () {
    $(this).parent().toggleClass("showContent");

    var replaceText = $(this).parent().hasClass("showContent") ? "Read Less" : "Read More";
    $(this).text(replaceText);
  });
};


$(document).ready(function(){
  $("form#form2").submit(function(event){
    let name = $("input#yourname").val();
    let email = $("input#youremail").val();
    let message = $("textarea#comment").val();
    event.preventDefault();
    if ($("input#yourname").val() && $("input#youremail").val()){
     alert (name + ", we have received your message. Thank you for contacting us.");
   }
   else{
     alert("Please provide your name and email");
   }
  });
 });
 