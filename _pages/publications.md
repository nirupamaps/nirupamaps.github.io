---
layout: page
title: publications
permalink: /publications/
nav: true
nav_order: 4
horizontal: false
display_categories: [years]
---

<div class="publications-page">

  <!-- Sidebar for years -->
  <div class="sidebar">
    <ul>
      {% assign years = site.bibliography | map: "year" | uniq | sort: "reverse" %}
      {% for year in years %}
        <li><a href="#year-{{ year }}">{{ year }}</a></li>
      {% endfor %}
    </ul>
  </div>

  <!-- Main publications list -->
  <div class="pub-list">
    <div style="margin-bottom: 15px;">
      <input type="text" id="searchInput" placeholder="Search..." style="padding: 6px; width: 200px;">
    </div>

    {% for year in years %}
      <h3 id="year-{{ year }}" class="bibliography-group">{{ year }}</h3>
      <div class="year-entries">
        {% bibliography --sort_by year --order descending %}
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

  // PDF / DOI buttons
  document.querySelectorAll(".bibliography").forEach(entry => {
    const url = entry.dataset.url;
    if(url){
      const btn = document.createElement("a");
      btn.href = url;
      btn.target = "_blank";
      btn.textContent = "🔗 PDF / DOI";
      btn.style.marginLeft = "10px";
      btn.style.fontSize = "0.9em";
      btn.style.color = "#007acc";
      btn.style.textDecoration = "none";
      btn.addEventListener("mouseover", () => { btn.style.textDecoration = "underline"; });
      btn.addEventListener("mouseout", () => { btn.style.textDecoration = "none"; });
      const titleEl = entry.querySelector(".title");
      if(titleEl) titleEl.appendChild(btn);
    }
  });

  // Search filter
  document.getElementById("searchInput").addEventListener("input", () => {
    const q = document.getElementById("searchInput").value.toLowerCase();
    document.querySelectorAll(".bibliography").forEach(entry => {
      const text = entry.innerText.toLowerCase();
      entry.style.display = text.includes(q) ? "block" : "none";
    });
  });
});
</script>

<style>
.publications-page { display: flex; gap: 2rem; }
.sidebar { flex: 0 0 120px; position: sticky; top: 1rem; }
.sidebar ul { list-style: none; padding: 0; }
.sidebar li { margin-bottom: 0.5rem; }
.sidebar a { text-decoration: none; color: #007acc; }
.sidebar a:hover { text-decoration: underline; }
.pub-list { flex: 1; }
.year-entries { margin-bottom: 2rem; }
</style>
