function app() {
  const topBanner = document.querySelector(".top-banner");
  const topBannerCloseBtn = document.querySelector(".top-banner-close-btn");

  topBannerCloseBtn.addEventListener("click", () => topBanner.remove());
}

document.addEventListener("DOMContentLoaded", app);
