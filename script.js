const serviceButtons = document.querySelectorAll(".service-card")
const aboutCards = document.querySelectorAll(".about-card")
const placeholder = document.querySelector(".about-custom")

serviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetClass = button.id.replace("service-", "about-")
    let anyActive = false

    aboutCards.forEach((card) => {
      if (card.classList.contains(targetClass)) {
        // Toggle the clicked card
        card.classList.toggle("active")
      } else {
        // Hide all other cards
        card.classList.remove("active")
      }

      if (
        card.classList.contains("active") &&
        !card.classList.contains("about-custom")
      ) {
        anyActive = true
      }
    })

    // Show placeholder if no other cards are active
    if (placeholder) {
      if (!anyActive) {
        placeholder.classList.add("active")
      } else {
        placeholder.classList.remove("active")
      }
    }
  })
})
