window.addEventListener("load", function(){
    var open = document.getElementById("o-open"),
        close = document.getElementById("o-close"),
        over = document.getElementById("overlay");
  
    open.addEventListener("click", function(){
      over.classList.add("show");
    });
    close.addEventListener("click", function(){
      over.classList.remove("show");
    });
  });