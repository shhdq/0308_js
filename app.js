let rocket = document.getElementById("rocket");

function up() {
  rocket.style.transition = "2s";
  rocket.style.marginTop = "-2000px";
}

function down() {
  rocket.style.transition = "2s";
  rocket.style.marginTop = "0";
}
