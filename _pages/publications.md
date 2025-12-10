<style>
/* Container */
.publications-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

/* Filter and search */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.filters input[type="text"] {
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
}

.filters button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #2980b9;
  color: white;
  transition: background-color 0.2s;
}

.filters button:hover,
.filters button.active {
  background-color: #1f618d;
}

/* Year section */
.pub-year {
  margin-bottom: 2rem;
}

.pub-year h2 {
  border-bottom: 2px solid #ccc;
  padding-bottom: 0.3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

/* Individual publication card */
.pub-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;
  margin-bottom: 1rem;
  transition: transform 0.2s;
}

.pub-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.pub-card h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #34495e;
}

.pub-card .authors {
  font-style: italic;
  margin: 0.5rem 0;
}

.pub-card .venue {
  font-weight: bold;
  color: #555;
}

.pub-card .links a {
  margin-right: 1rem;
  text-decoration: none;
  color: #2980b9;
}

.pub-card .links a:hover {
  text-decoration: underline;
}

/* Hide cards initially for filtering */
.pub-card.hidden {
  display: none;
}
</style>

<div class="publications-container">

  <!-- Filters -->
  <div class="filters">
    <button class="year-btn active" data-year="all">All Years</button>
    <button class="year-btn" data-year="2025">2025</button>
    <button class="year-btn" data-year="2024">2024</button>
    <input type="text" id="searchBox" placeholder="Search publications...">
  </div>

  <div class="publications">

    <!-- 2025 -->
    <div class="pub-year" data-year="2025">
      <h2>2025</h2>
      <div class="pub-card">
        <h3>A Data Mining Approach for Load Composition Analysis in Residential Units</h3>
        <div class="authors">Nirupama Pudukkarai Srinivas, Sara Ostovar, Mojdeh Khorsand</div>
        <div class="venue">2025 57th North American Power Symposium (NAPS)</div>
        <div class="links">
          <a href="https://ieeexplore.ieee.org/document/11272295/" target="_blank">PDF</a>
          <a href="10.1109/NAPS66256.2025.11272295" target="_blank">DOI</a>
        </div>
      </div>
    </div>

    <!-- 2024 -->
    <div class="pub-year" data-year="2024">
      <h2>2024</h2>
      <div class="pub-card">
        <h3>Bidding Generation Tool</h3>
        <div class="authors">Sara Ostovar, Nirupama Pudukkarai Srinivas, Mojdeh Khorsand</div>
        <div class="venue">Power Systems Engineering Research Center, 2024</div>
        <div class="links">
          <a href="https://documents.pserc.wisc.edu/documents/publications/reports/2024_reports/M_45G_Final_Report.pdf" target="_blank">PDF</a>
        </div>
      </div>
      <div class="pub-card">
        <h3>A Day-Ahead Bidding Strategy Algorithm for Distributed Energy Resource Aggregators</h3>
        <div class="authors">Nirupama Pudukkarai Srinivas</div>
        <div class="venue">Arizona State University, ProQuest Dissertations & Theses, 2024</div>
        <div class="links">
          <a href="https://www.proquest.com/openview/3a73b4682de1b70474c29a281fac8548/1.pdf?pq-origsite=gscholar&cbl=18750&diss=y" target="_blank">PDF</a>
        </div>
      </div>
    </div>

  </div>
</div>

<script>
// Year filter
const yearButtons = document.querySelectorAll(".year-btn")
const pubYears = document.querySelectorAll(".pub-year")

yearButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    yearButtons.forEach(b => b.classList.remove("active"))
    btn.classList.add("active")

    const year = btn.dataset.year
    pubYears.forEach(section => {
      if(year === "all" || section.dataset.year === year){
        section.style.display = "block"
      } else {
        section.style.display = "none"
      }
    })
  })
})

// Search filter
const searchBox = document.getElementById("searchBox")
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase()
  document.querySelectorAll(".pub-card").forEach(card => {
    const text = card.innerText.toLowerCase()
    card.classList.toggle("hidden", !text.includes(query))
  })
})
</script>
