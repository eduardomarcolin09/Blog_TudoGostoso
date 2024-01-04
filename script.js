const iconeMenu = document.getElementById("icone-menu");
const dropdown = document.getElementById("dropdown");
iconeMenu.addEventListener("click", function() {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});

