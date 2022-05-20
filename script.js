(function (){

    var btnClick=document.getElementsByClassName("rating-btn")
    for (let i = 0; i < btnClick.length; i++) {

        btnClick[i].addEventListener("click", function myRating() {
            btnClick[i].classList.toggle("btn-click");
            var ratingSelected=this.id;
            document.querySelector(".rating").innerHTML=`you selected ${ratingSelected} out of 5`;
            
          })       
        
        
    }

    document.getElementById("submit-btnn").addEventListener("click",function(){
        document.querySelector('.first').classList.toggle("visually-hidden");
        document.querySelector('.second').classList.toggle("visually-hidden");

    })

 })();