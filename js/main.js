(()=>{

  const BODY = document.body;
  const SQUARE = document.querySelector(".square");

  var horizontalValue;
  var w_width = window.innerWidth;
  var h_height = window.innerHeight;

  function changeShapeColor()
  {
    SQUARE.classList.add("fillColor");
  }

  function changeShapePosition(e)
  {
      horizontalValue = w_width - e.clientX - 60;
      var verticalValue = h_height - e.clientY;
      SQUARE.style.left = horizontalValue + "px";
      SQUARE.style.top = verticalValue + "px";
  }
  BODY.addEventListener("mousemove", changeShapePosition);
  SQUARE.addEventListener("mouseenter", changeShapeColor);
  SQUARE.addEventListener("mouseout", function(){SQUARE.classList.remove("fillColor");});

})();
