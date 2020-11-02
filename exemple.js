let btn = document.querySelector("#mode");

if (localStorage.getItem("theme")) {
  if (localStorage.getItem("theme") == "sombre") {
    modeSombre();
  }
}

btn.addEventListener("click", () => {
  if (document.body.classList.contains("nightMode")) {
    document.body.className = "";
    btn.className = "";
    localStorage.setItem("theme", "clair");
  } else {
    modeSombre();
  }
});

function modeSombre() {
  document.body.className = "nightMode";
  btn.className = "nightModeBtn";
  localStorage.setItem("theme", "sombre");
}
