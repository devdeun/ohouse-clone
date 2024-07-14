function app() {
  const topBanner = document.querySelector(".top-banner");
  const topBannerCloseBtn = document.querySelector(".top-banner-close-btn");
  const mobileMenuBtn = document.querySelector(".header-mobile-menu-btn");
  const mobileMenuBackground = document.querySelector(
    ".header-mobile-navbar-container .modal-bg"
  );

  topBannerCloseBtn.addEventListener("click", () => topBanner.remove());
  mobileMenuBtn.addEventListener("click", toggleActiveNavbar);
  mobileMenuBackground.addEventListener("click", toggleActiveNavbar);
}

function toggleActiveNavbar() {
  const navbarContainer = document.querySelector(
    ".header-mobile-navbar-container"
  );
  const navbarWrapper = document.querySelector(".header-mobile-navbar-wrapper");
  const modalBg = document.querySelector(".modal-bg");
  const isActive = navbarContainer.classList.contains("active");

  if (isActive) {
    gsap.to(modalBg, {
      opacity: 0,
      duration: 0.3,
    });
    gsap.to(navbarWrapper, {
      x: "-100%",
      duration: 0.3,
      onComplete: () => {
        navbarContainer.classList.remove("active");
      },
    });
  } else {
    navbarContainer.classList.add("active");
    gsap.to(modalBg, { opacity: 1, duration: 0.3 });
    gsap.fromTo(navbarWrapper, { x: "-100%" }, { x: "0%", duration: 0.3 });
  }
}

document.addEventListener("DOMContentLoaded", app);
