
    const element = document.getElementById("toggle");
    element.addEventListener("click", game);
    
    
    
 
    function game() {
        f1();
        f2();
      }
      

  function f1 (){
    var x = document.getElementById("menu");
        if (x.style.left === "-100%" || x.style.left === "" ) {
          x.style.left = "0";
        } else {
          x.style.left = "-100%";
        }
  }
  function f2 (){
    var x = document.getElementById("toggle");
        if (x.style.background-color === "yellow" ) {
          x.style.background-color =="red";
        } else {
          x.style.background-color =="yello";
        }
  }