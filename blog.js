function readMoreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  //var buttons = document.getElementsById[("myBtn", "myBtn2", "myBtn3")];
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
