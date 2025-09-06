// DOM Elements
const contactPageForm = document.getElementById("contact-page-form")
const contactFormSuccess = document.getElementById("contact-form-success")
const contactSendAnother = document.getElementById("contact-send-another")

// Contact Form Submission
if (contactPageForm) {
  contactPageForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Simulate form submission
    contactPageForm.classList.add("hidden")
    contactFormSuccess.classList.remove("hidden")
  })
}

// Send Another Message
if (contactSendAnother) {
  contactSendAnother.addEventListener("click", () => {
    contactFormSuccess.classList.add("hidden")
    contactPageForm.classList.remove("hidden")
    contactPageForm.reset()
  })
}

