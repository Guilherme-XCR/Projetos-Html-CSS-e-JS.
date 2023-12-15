const openBtn = document.getElementById("openBtn")
const closeBtn = document.getElementById("closeBtn")

openBtn.addEventListener("click", () => {openNav()});
closeBtn.addEventListener("click", () => {closeNav()});

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("content").style.marginLeft = "250px";
    document.getElementById("openBtn").style.display = "none";
  }

  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
    document.getElementById("openBtn").style.display = "block";
  }