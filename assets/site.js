function setLang(lang){
  document.querySelectorAll("[data-lang-block]").forEach(el=>{
    el.classList.toggle("hidden", el.dataset.langBlock !== lang);
  });

  document.querySelectorAll("button.lang").forEach(btn=>{
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });
  localStorage.setItem("lang", lang);
}

document.querySelectorAll("button.lang").forEach(btn=>{
  btn.addEventListener("click", ()=> setLang(btn.dataset.lang));
});

const saved = localStorage.getItem("lang") || "de";
setLang(saved);

document.getElementById("year").textContent = new Date().getFullYear();
