// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href !== "") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

// Safety check - only add listeners if both elements exist
if (mobileMenuButton && mobileMenu) {
  // Toggle Logic
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");

    const isOpen = !mobileMenu.classList.contains("hidden");
    console.log("Is the menu open?", isOpen);
  });

  // Close on Outside Click
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnButton = mobileMenuButton.contains(event.target);

    // Check: Is it open? (It's open if it DOES NOT have the 'hidden' class)
    const isMenuOpen = !mobileMenu.classList.contains("hidden");

    if (!isClickInsideMenu && !isClickOnButton && isMenuOpen) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    }
  });

  // Close when clicking a link
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    });
  });
}
