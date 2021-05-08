


$('.ball').css("background-image","-webkit-gradient(linear,left bottom,right bottom,color-stop(0.50, black),color-stop(0.50, brown)")

$('.ball').css("border-radius","75px")

$('.ball').css("text-align","center")

$('.ball').css("transform","rotate(2deg)")

$('.ball').css({color: 'white', 
                width:'150px',
                height:'150px',
                border:'3px dotted grey', 
                
            });

$('.right').click(function(){
    $('.ball').animate({
        left:'+=5px',
        opacity:'3', function(){
            console.log("Animation");
        }
    });
});

$('.left').click(function(){
    $('.ball').animate({
        left:'-=5px',

    })
})

$('.left').click(function(){
        $('.left').fadeOut(100, function(){
            $('.left').fadeIn(300);
        })
})


$('.right').click(function(){
    $('.right').fadeOut(100, function(){
        $('.right').fadeIn(300);
    })
})

$('.ball').click(function(){
    var angle = 0;
    $('.right').click(function(){
        window.st = setInterval(function(){
            angle +=2;
            $('.ball').rotate(angle);
        }, 10);
    });
    $('.left').click(function(){
        clearInterval;(window.st);
    });
});
/*

var looper;
var degrees = 0;
function rotateAnimation(el,speed){
        var elem = document.getElementsByClassName(ball);
        looper = setTimer('rotateAnimation(\'' +el +'\', '+speed+ ')',speed  );
        degrees++;
        if(degrees > 359){
            degrees = 1;
        }
        document.getElementById("status").innerHTML = "rotate("+degrees+ "deg)";
    }
*/

/**
 2nd Wheel
 */

//$('.ball').css("background-image","-webkit-gradient(linear,left bottom,right bottom,color-stop(0.50, black),color-stop(0.50, brown)")

//$('.ball').css("border-radius","75px")

//$('.ball').css("text-align","center")

//$('.ball').css("transform","rotate(2deg)")

//$('..wheel').css({color: 'white', 
  //              width:'150px',
    //            height:'150px',
                
      //      });

$('.right1').click(function(){
    $('.wheel').animate({
        left:'+=5px',
        opacity:'3', function(){
            console.log("Animation");
        }
    });
});

$('.left1').click(function(){
    $('.wheel').animate({
        left:'-=5px',

    })
})

$('.left1').click(function(){
        $('.left1').fadeOut(100, function(){
            $('.left1').fadeIn(300);
        })
})


$('.right1').click(function(){
    $('.right1').fadeOut(100, function(){
        $('.right1').fadeIn(300);
    })
})

$('.wheel').click(function(){
    var angle = 0;
    $('.right1').click(function(){
        window.st = setInterval(function(){
            angle +=2;
            $('.wheel').rotate(angle);
        }, 10);
    });
    $('.left1').click(function(){
        clearInterval;(window.st);
    });
});


