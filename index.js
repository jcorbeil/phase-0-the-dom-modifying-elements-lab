/*document.addEventListener("DOMContentLoaded", function() {
    const newHeader = document.createElement("h1");
    newHeader.setAttribute("id", "victory");
    const yourName = "Jeremy"; // Replace with your name
    newHeader.textContent = `${yourName} is the champion`;
    document.body.appendChild(newHeader);
  });*/

  const main = document.getElementById("main");
  main.remove();
  const newHeader = document.createElement("h1");
  newHeader.setAttribute("id", "victory");
  const yourName = "Jeremy"; // Replace with your name
  newHeader.textContent = `${yourName} is the champion`;
  document.body.appendChild(newHeader);
