// BOTÃO E CONTEÚDO
const button = document.getElementById("btn-verEquipe");
const content = document.getElementById("contentEquipe");

// EVENTO DE CLIQUE
button.addEventListener("click", function () {
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});
