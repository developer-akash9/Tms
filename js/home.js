// Services Data
const services = [
  {
    title: "E-Tendering",
    description: "Professional assistance with electronic tendering processes",
    icon: "fa-file-lines",
  },
  {
    title: "Gram Panchayat",
    description: "Complete support for Gram Panchayat related documentation",
    icon: "fa-building",
  },
  {
    title: "Panchayat Samiti",
    description: "Expert guidance on Panchayat Samiti procedures",
    icon: "fa-users",
  },
  {
    title: "Zilla Parishad",
    description: "Comprehensive assistance with Zilla Parishad works",
    icon: "fa-landmark",
  },
  {
    title: "PAN Card",
    description: "Hassle-free PAN card application and correction services",
    icon: "fa-credit-card",
  },
  {
    title: "Loan Insurance",
    description: "Tailored loan insurance solutions for your needs",
    icon: "fa-shield",
  },
  {
    title: "EPF",
    description: "Employee Provident Fund registration and management",
    icon: "fa-wallet",
  },
  {
    title: "TDS",
    description: "Tax Deducted at Source filing and compliance",
    icon: "fa-receipt",
  },
]

// Testimonials Data
const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Enterprises",
    content:
      "TMS has been instrumental in streamlining our tax compliance. Their expertise in GST and Income Tax has saved us both time and money.",
    avatar: "images/placeholder.jpg",
  },
  {
    name: "Priya Sharma",
    company: "Sharma Associates",
    content:
      "The team at Total Management Solution provided exceptional service for our company audit. Their attention to detail and professionalism is commendable.",
    avatar: "images/placeholder.jpg",
  },
  {
    name: "Amit Patel",
    company: "Patel Industries",
    content:
      "We've been working with TMS for our E-Tendering needs for over 3 years now. Their expertise and prompt service have been crucial to our business growth.",
    avatar: "images/placeholder.jpg",
  },
]

// DOM Elements
const servicesGrid = document.getElementById("services-grid")
const testimonialsGrid = document.getElementById("testimonials-grid")
const contactForm = document.getElementById("contact-form")
const formSuccess = document.getElementById("form-success")
const sendAnother = document.getElementById("send-another")

// Render Services
if (servicesGrid) {
  services.forEach((service) => {
    const serviceCard = document.createElement("div")
    serviceCard.className = "service-card"
    serviceCard.innerHTML = `
      <div class="service-card-header">
        <div class="service-icon">
          <i class="fas ${service.icon}"></i>
        </div>
        <h3 class="service-title">${service.title}</h3>
      </div>
      <div class="service-card-content">
        <p class="service-description">${service.description}</p>
      </div>
    `
    servicesGrid.appendChild(serviceCard)
  })
}

// Render Testimonials
if (testimonialsGrid) {
  testimonials.forEach((testimonial) => {
    const testimonialCard = document.createElement("div")
    testimonialCard.className = "testimonial-card"
    testimonialCard.innerHTML = `
      <div class="testimonial-header">
        <div class="testimonial-avatar">
          <img src="${testimonial.avatar}" alt="${testimonial.name}">
        </div>
        <div>
          <h3 class="testimonial-name">${testimonial.name}</h3>
          <p class="testimonial-company">${testimonial.company}</p>
        </div>
      </div>
      <p class="testimonial-content">"${testimonial.content}"</p>
    `
    testimonialsGrid.appendChild(testimonialCard)
  })
}

// Contact Form Submission
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Simulate form submission
    contactForm.classList.add("hidden")
    formSuccess.classList.remove("hidden")
  })
}

// Send Another Message
if (sendAnother) {
  sendAnother.addEventListener("click", () => {
    formSuccess.classList.add("hidden")
    contactForm.classList.remove("hidden")
    contactForm.reset()
  })
}

