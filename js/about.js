// Team Members Data
const teamMembers = [
  {
    name: "Rupali Gurav",
    position: "Director & Tax Consultant",
    bio: "With over 8 years of experience in tax consultancy, Rupali leads our team with expertise in GST and Income Tax.",
    image: "images/placeholder.jpg",
  },
  {
    name: "Sangram Gurav",
    position: "Financial Advisor",
    bio: "Priya specializes in financial planning and investment strategies with 10+ years of industry experience.",
    image: "images/placeholder.jpg",
  },
  {
    name: "Swati Powar",
    position: "E-Tendering Specialist",
    bio: "Amit has successfully managed over 500 e-tendering projects across various government sectors.",
    image: "images/placeholder.jpg",
  },
  {
    name: "Rutuja Gurav",
    position: "Audit Manager",
    bio: "Neha brings 8 years of experience in auditing and compliance management to our team.",
    image: "images/placeholder.jpg",
  },
]


// DOM Elements
const teamGrid = document.getElementById("team-grid")
const timeline = document.getElementById("timeline")

// Render Team Members
if (teamGrid) {
  teamMembers.forEach((member) => {
    const teamCard = document.createElement("div")
    teamCard.className = "team-card"
    teamCard.innerHTML = `
      <div class="team-image">
        <img src="${member.image}" alt="${member.name}">
      </div>
      <div class="team-header">
        <h3 class="team-name">${member.name}</h3>
        <p class="team-position">${member.position}</p>
      </div>
      <div class="team-content">
        <p class="team-bio">${member.bio}</p>
      </div>
    `
    teamGrid.appendChild(teamCard)
  })
}

// Render Timeline
if (timeline) {
  timelineData.forEach((item) => {
    const timelineItem = document.createElement("div")
    timelineItem.className = "timeline-item"
    timelineItem.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-year">${item.year}</span>
        <span class="timeline-title">- ${item.title}</span>
      </div>
      <p class="timeline-description">${item.description}</p>
    `
    timeline.appendChild(timelineItem)
  })
}

