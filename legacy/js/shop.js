const sidebar = document.getElementById("sidebarFilter");
const overlay = document.getElementById("sidebarOverlay");
const closeSidebarBtn = document.getElementById("closeSidebar");
const openSidebarBtn = document.getElementById("openSidebar");

function toggleSidebar(show) {
  if (show) {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  } else {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }
}

openSidebarBtn.addEventListener("click", () => toggleSidebar(true));
closeSidebarBtn.addEventListener("click", () => toggleSidebar(false));
overlay.addEventListener("click", () => toggleSidebar(false));

function toggleAccordion(element) {
  element.classList.toggle("open");
  element.nextElementSibling.classList.toggle("open");
  const icon = element.querySelector("i");
  if (icon) icon.classList.toggle("fa-rotate-180");
}

const priceRange = document.getElementById("priceRange");
const priceDisplay = document.getElementById("currentPriceValue");

priceRange.addEventListener("input", function () {
  const value = this.value;
  priceDisplay.textContent = "$" + value;
  const percent = (value / this.max) * 100;
  this.style.background = `linear-gradient(to right, black ${percent}%, grey ${percent}%)`;
});

function switchPage(pageNum) {
  document.querySelectorAll(".products-grid").forEach((grid) => {
    grid.classList.add("hidden-page");
    grid.classList.remove("active");
    grid.style.display = "none";
  });

  const selectedGrid = document.getElementById("products-page-" + pageNum);
  if (selectedGrid) {
    selectedGrid.classList.remove("hidden-page");
    selectedGrid.classList.add("active");
    selectedGrid.style.display = "grid";
  }

  document
    .querySelectorAll(".page-num")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById("btn-" + pageNum).classList.add("active");

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (pageNum === 1) {
    prevBtn.disabled = true;
    prevBtn.setAttribute("onclick", "");
    nextBtn.disabled = false;
    nextBtn.setAttribute("onclick", "switchPage(2)");
  } else {
    prevBtn.disabled = false;
    prevBtn.setAttribute("onclick", "switchPage(1)");
    nextBtn.disabled = true;
    nextBtn.setAttribute("onclick", "");
  }

  document
    .querySelector(".products-container")
    .scrollIntoView({ behavior: "smooth" });
}

function setActiveCategory(link, name) {
  document
    .querySelectorAll(".category-link")
    .forEach((l) => l.classList.remove("active-filter"));
  link.classList.add("active-filter");
  document.getElementById("pageTitle").textContent = name;
  switchPage(1);

  if (window.innerWidth < 768) toggleSidebar(false);
}

priceRange.dispatchEvent(new Event("input"));
