document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const header = document.getElementById("header")
  const menuToggle = document.getElementById("menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")
  const themeToggle = document.getElementById("theme-toggle")
  const icon = themeToggle ? themeToggle.querySelector("i") : null
  const currentYearElements = document.querySelectorAll("#current-year")

  // Set current year in footer
  currentYearElements.forEach((element) => {
    element.textContent = new Date().getFullYear()
  })

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open")
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      if (
        mobileMenu.classList.contains("open") &&
        !mobileMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        mobileMenu.classList.remove("open")
      }
    })
  }

  // Theme toggle functionality
  if (themeToggle && icon) {
    // Function to update theme
    const updateTheme = (isDark) => {
      if (isDark) {
        document.documentElement.classList.add("dark")
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
      } else {
        document.documentElement.classList.remove("dark")
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
      }
      localStorage.setItem("theme", isDark ? "dark" : "light")
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    updateTheme(savedTheme === "dark")

    // Theme toggle click handler
    themeToggle.addEventListener("click", () => {
      const isDark = !document.documentElement.classList.contains("dark")
      updateTheme(isDark)
    })
  }
})
