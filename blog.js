function goBack() {
  window.history.back();
}

function getArticle() {
  //Get elements
  let source = document.getElementById("source");

  //Store them in an array
  let sources = [];

  //Assign values to array
  sources[0] = "The Medium is the Message";
  sources[1] = "URLs";
  sources[2] = "Metadata";
  sources[3] = "Information Geographies";
  sources[4] = "Reflection on UX/UI";
  sources[5] = "Internet, Soceity and Design Justice";
  sources[6] = "A Reflection On the Creation of This Site";
  sources[7] = "Knowledge is Power";
  sources[8] = "External JS Dependamcy";

  //Random number
  let i = Math.floor(Math.random() * sources.length);

  //Set article
  source.innerHTML = sources[i];
}
