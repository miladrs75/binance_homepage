export function activeTabs(popularCoins) {
  popularCoins.forEach(function (box) {
    const tabs = box.querySelectorAll(".popular-coins--tab");
    const sections = box.querySelectorAll(".popular-coins--section");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function (e) {
        e.preventDefault();

        tabs.forEach((t) => t.classList.remove("active"));

        this.classList.add("active");

        sections.forEach((sec) => sec.classList.remove("active"));

        const activeSection = box.querySelector(this.getAttribute("href"));
        activeSection.classList.add("active");
      });
    });
  });
}
