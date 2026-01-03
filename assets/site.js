(function () {
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Theme
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const icon = btn?.querySelector(".toggle-icon");
  const text = btn?.querySelector(".toggle-text");

  function setTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      if (icon) icon.textContent = "☀️";
      if (text) text.textContent = "Light";
    } else {
      root.removeAttribute("data-theme");
      if (icon) icon.textContent = "🌙";
      if (text) text.textContent = "Dark";
    }
    localStorage.setItem("theme", theme);
  }

  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    setTheme(saved);
  } else {
    // default: dark
    setTheme("dark");
  }

  btn?.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    setTheme(isLight ? "dark" : "light");
  });
})();
