const reloadButton = document.getElementById("send");
  const message = document.getElementById("thankYou");

  reloadButton.addEventListener("click", function() {
    location.reload();
    message.style.display = "block";
  });