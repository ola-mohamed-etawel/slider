

var allItems = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById('lightBoxContainer');
var ligthtBox = document.querySelector("#ligthtBox");
var closeBtn = document.getElementById("close");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var currentIndex;

closeBtn.addEventListener("click", close);
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

for (var i = 0; i < allItems.length; i++) {

   allItems[i].addEventListener("click", function (e) {

      lightBoxContainer.classList.replace("d-none", "d-flex");
      var currentImg = e.target.getAttribute("src");
      // console.log(currentImg);
      ligthtBox.style.backgroundImage = `url(${currentImg})`;
      // console.log(currentImg);
      currentIndex = allItems.indexOf(e.target);
      console.log(currentIndex);
   })
}

function close() {
   lightBoxContainer.classList.replace("d-flex", "d-none");

}

function nextSlide() {
   currentIndex++;
   if (currentIndex >= allItems.length) {
      currentIndex = 0;

   }
   var imgUrl = allItems[currentIndex].getAttribute('src');
   ligthtBox.style.backgroundImage = `url(${imgUrl})`;

}

function prevSlide() {
   currentIndex--;
   if (currentIndex < 0) {
      currentIndex = allItems.length - 1

   }
   var imgUrl = allItems[currentIndex].getAttribute('src');
   ligthtBox.style.backgroundImage = `url(${imgUrl})`;

}
