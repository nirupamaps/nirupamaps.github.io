---
layout: page
title: publications
permalink: /publications/
nav: true
nav_order: 4
display_categories: [years]
horizontal: false
---

## Publications

<div style="margin-bottom: 15px;">
  <input type="text" id="searchInput" placeholder="Search..." style="padding: 6px; width: 200px;">
</div>

<div id="pubList">
  {% bibliography --group_by year --sort_by year --order descending %}
</div>

<div class="publications-page">

  <!-- Sidebar for years -->
  <div class="sidebar">
    {% assign years = site.bibliography | map: "year" | uniq | sort: "reverse" %}
    <ul>
      {% for year in years %}
        <li><a href="#year-{{ year }}">{{ year }}</a></li>
      {% endfor %}
    </ul>
  </div>

  <!-- Main publications list -->
  <div class="pub-list">
    {% for year in years %}
      <h3 id="year-{{ year }}" class="bibliography-group">{{ year }}</h3>
      <div class="year-entries">
        {% bibliography --group_by year --sort_by year --order descending %}
      </div>
    {% endfor %}
  </div>

</div>

<script>
// Collapsible year sections
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("h3.bibliography-group").forEach(h => {
    const next = h.nextElementSibling;
    next.style.display = "none";   // collapsed by default
    h.style.cursor = "pointer";
    h.addEventListener("click", () => {
      next.style.display = next.style.display === "none" ? "block" : "none";
    });
  });
});

// Search + Filter
document.addEventListener("input", () => {
  const q = document.getElementById("searchInput").value.toLowerCase();
  const year = document.getElementById("yearFilter").value;

  document.querySelectorAll(".bibliography").forEach(entry => {
    const text = entry.innerText.toLowerCase();
    const entryYear = entry.dataset.year;

    const matchText = text.includes(q);
    const matchYear = (year === "all" || entryYear === year);

    entry.style.display = (matchText && matchYear) ? "block" : "none";
  });
});
// Add clickable PDF / DOI buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".bibliography").forEach(entry => {
    const url = entry.dataset.url; // jekyll-scholar sets this if `url` field exists
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
      
      // append after the title
      const titleEl = entry.querySelector(".title");
      if(titleEl) titleEl.appendChild(btn);
    }
  });
});

</script>
