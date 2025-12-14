---
layout: page
title: Publications
permalink: /publications/
nav: true
---

<div class="publications-page">

  <!-- Sidebar for years -->
  <div class="sidebar">
    <ul>
      {% assign years = site.data.bib | map: "year" | uniq | sort: "reverse" %}
      {% for year in years %}
        <li><a href="#year-{{ year }}">{{ year }}</a></li>
      {% endfor %}
    </ul>
  </div>

  <!-- Main publications list -->
  <div class="pub-list">
    <input type="text" id="searchInput" placeholder="Search publications..." style="padding: 6px; width: 100%; max-width: 300px; margin-bottom: 1rem;">

    {% for year in years %}
      <h3 class="bibliography-group" id="year-{{ year }}">{{ year }}</h3>
      <div class="year-entries">
        {% bibliography --filter='year={{ year }}' --sort_by author --order ascending %}
      </div>
    {% endfor %}

  </div>

</div>

<script>
// Collapsible years
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("h3.bibliography-group").forEach(h => {
    const next = h.nextElementSibling;
    next.style.display = "none"; // collapsed by default
    h.style.cursor = "pointer";
    h.addEventListener("click", () => {
      next.style.display = next.style.display === "none" ? "block" : "none";
    });
  });

  // Add PDF / DOI buttons
  document.querySelectorAll(".bibliography").forEach(entry => {
    const links = entry.querySelectorAll("a[href$='.pdf'], a[href*='doi.org']");
    links.forEach(link => {
      link.textContent = "🔗 PDF / DOI";
      link.style.marginLeft = "10px";
      link.style.fontSize = "0.9em";
      link.style.color = "#007acc";
      link.style.textDecoration = "none";
      link.addEventListener("mouseover", () => { link.style.textDecoration = "underline"; });
      link.addEventListener("mouseout", () => { link.style.textDecoration = "none"; });
    });
  });

  // Search filter
  document.getElementById("searchInput").addEventListener("input", () => {
    const q = document.getElementById("searchInput").value.toLowerCase();
    document.querySelectorAll(".bibliography").forEach(entry => {
      entry.style.display = entry.innerText.toLowerCase().includes(q) ? "block" : "none";
    });
  });
});
</script>

<style>
.publications-page { display: flex; gap: 2rem; flex-wrap: wrap; }
.sidebar { flex: 0 0 120px; position: sticky; top: 1rem; }
.sidebar ul { list-style: none; padding: 0; }
.sidebar li { margin-bottom: 0.5rem; }
.sidebar a { text-decoration: none; color: #007acc; }
.sidebar a:hover { text-decoration: underline; }
.pub-list { flex: 1; min-width: 300px; }
.year-entries { margin-bottom: 2rem; }
.bibliography { margin-bottom: 0.5rem; }
</style>
