function anim(targetedDiv) {
    var targetedLetter = $("#" + targetedDiv + " .rotate").text();

    var asciiValue = targetedLetter.charCodeAt(0); // return ascii value

    var pointer = 65; // Ascii of 'A' (starting point)

    changeChar();

    function changeChar() {
        if (pointer <= asciiValue) {
            $("#" + targetedDiv + " .rotate").text(String.fromCharCode(pointer));

            // fromCharCode function conver pointer  value in character such as 65 = A

            pointer++;
            setTimeout(changeChar, 20); // call the function after every 20MS
        } else{
            $(this).stop;
        }
    }

}

$(document).ready(function(){
    // show the menu
   $("#openMenu").click(function(){
      $("#main").fadeIn(200);

       // hide menu
       $("#openMenu").animate({left:"-10%"});

       // close menu button
       $("#closeMenu").animate({left:"93%"});

       $(".menu").animate({left:"-1%"}, 10);
   });

    // show the menu
    $("#closeMenu").click(function(){
        $("#main").fadeOut(200);

        // hide menu
        $("#openMenu").animate({left:"0%"});

        // close menu button
        $("#closeMenu").animate({left:"100%"});

        $(".menu").animate({left:"-50%"}, 10);
    });
});