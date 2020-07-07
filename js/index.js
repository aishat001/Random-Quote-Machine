     var colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    var btn = document.getElementById("btn");
    var bgColor = document.querySelector(".body");
    var text = document.getElementById("text");
    var author = document.getElementById("author");
    var quotes = ["When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
                "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
                "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
                "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
                "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
                "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",];
    var authors = ["Henry Ford", "Mae Jemison", "Abigail Van Buren", "Robert Frost", "Bob Dylan", "Plato"];
    var randomStr;
    var quoteIcon = document.querySelector("i");

    btn.addEventListener("click", function () {
    //get hexColor
    var hexColor = '#';
    for (var i = 0; i < 6; i++) {
        //get random num for background-colors////
        var randomNum = Math.floor(Math.random()*colors.length);
         hexColor += colors[randomNum]; 
    }
    ///CHANGE TEXT AND BACKGROUND-COLOR///
    bgColor.style.color = hexColor;
    btn.style.backgroundColor = hexColor;
    quoteIcon.style.color = hexColor;

    ///GET RANDOM QUOTES///
       randomStr = Math.floor(Math.random()*6);
    text.textContent =   quotes[randomStr];
    author.textContent = authors[randomStr];
 });
    

    
     
  
 
