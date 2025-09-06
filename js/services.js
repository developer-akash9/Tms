// All Services Data
const allServices = [
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
  {
    title: "Income Tax Return",
    description: "Professional ITR filing for individuals and businesses",
    icon: "fa-file-check",
  },
  {
    title: "GST",
    description: "Complete GST registration, filing and compliance services",
    icon: "fa-chart-bar",
  },
  {
    title: "E-Way Bills",
    description: "Efficient E-Way Bill generation and management",
    icon: "fa-truck",
  },
  {
    title: "Institution Audit",
    description: "Thorough auditing services for institutions and companies",
    icon: "fa-clipboard-check",
  },
  {
    title: "Society Registration",
    description: "End-to-end registration services for societies and institutions",
    icon: "fa-file-signature",
  },
  {
    title: "DIN/KYC",
    description: "Director Identification Number and KYC compliance assistance",
    icon: "fa-user-check",
  },
  {
    title: "12A & 80G",
    description: "Expert guidance for 12A & 80G certification",
    icon: "fa-award",
  },
  {
    title: "Business Projects",
    description: "Comprehensive business project planning and execution",
    icon: "fa-briefcase",
  },
]

// DOM Elements
const servicesPageGrid = document.getElementById("services-page-grid")

// Render All Services
if (servicesPageGrid) {
  allServices.forEach((service) => {
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
    servicesPageGrid.appendChild(serviceCard)
  })
}

