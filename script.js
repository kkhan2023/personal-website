// Mobile navigation toggle //

const hamburger = document.querySelector(".hamburger")
const icon = hamburger.querySelector("i")
const mobileNav = document.querySelector(".mobile-nav")

function toggleHamburger() {
  mobileNav.classList.toggle("active")

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars")
    icon.classList.add("fa-xmark")
    icon.style.transform = "rotate(90deg)"
  } else {
    icon.classList.remove("fa-xmark")
    icon.classList.add("fa-bars")
    icon.style.transform = "rotate(0deg)"
  }
}

hamburger.addEventListener("click", toggleHamburger)

// sticky header scroll //

const header = document.querySelector(".header")

function stickyHeaderScroll() {
  if (window.innerWidth >= 1000) {
    if (window.scrollY >= 50) {
      header.classList.add("scroll")
    } else if (window.scrollY <= 50) {
      header.classList.remove("scroll")
    }
  }
}

window.addEventListener("scroll", stickyHeaderScroll)
