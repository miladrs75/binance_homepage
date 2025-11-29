const root = document.documentElement;
const themeBtns = document.querySelectorAll(".theme-btn");

window.addEventListener("load", () => {
  const storagedTheme = localStorage.getItem("theme");
  console.log(storagedTheme);
  if (storagedTheme === "light") {
    return;
  } else {
    root.classList.add("dark");
  }
});

themeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
