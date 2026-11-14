
const button = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const text = document.getElementById("themeText");

// Load saved theme
function loadTheme() {
  const savedTheme = localStorage.getItem("website-theme");

  const theme = savedTheme || "light";

  applyTheme(theme);
}

// Apply theme
function applyTheme(theme) {
  document.documentElement.setAttribute(
    "data-theme",
    theme
  );

  if (theme === "dark") {
    icon.textContent = "🌙";
    text.textContent = "Dark Mode";
  } else {
    icon.textContent = "☀️";
    text.textContent = "Light Mode";
  }
}

// Toggle theme
button.addEventListener("click", () => {
  const currentTheme =
    document.documentElement.getAttribute("data-theme");

  const newTheme =
    currentTheme === "dark" ? "light" : "dark";

  applyTheme(newTheme);

  // Save preference
  localStorage.setItem("website-theme", newTheme);
});

// Initialize
loadTheme();


function applyTheme(theme) {
    document.documentElement.setAttribute(
        "data-theme",
        theme
    );

    if (theme === "dark") {
        icon.textContent = "🌙";
        text.textContent = "Dark Mode";
    } else {
        icon.textContent = "🔴";
        text.textContent = "Red Mode";
    }
}
