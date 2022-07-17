(function () {
  "use strict";

  var btnClick = document.querySelectorAll(".rating-btn");

  for (let i = 0; i < btnClick.length; i++) {

    btnClick[i].addEventListener("click", function () {
        for (let i = 0; i < btnClick.length; i++) {
            btnClick[i].classList.remove("btn-click");

        }
        this.classList.add("btn-click");
        

        
    

        var ratingSelected = this.id;

        document.querySelector(".rating").innerHTML = `You selected ${ratingSelected} out of 5`;
    });
  }

  document.getElementById("submit-btnn").addEventListener("click", function () {
    var x= document.querySelector(".rating").innerHTML;
    if (x !== "Rating goes here") {
      document.querySelector(".first").classList.toggle("hidden");
      document.querySelector(".second").classList.toggle("hidden");
    }
    else{
      alert("Please select a rating between 1-5")
    }
  });
})();
