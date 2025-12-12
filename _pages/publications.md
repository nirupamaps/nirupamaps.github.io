---
layout: page
title: publications
permalink: /publications/
nav: true
nav_order: 4
---

## Publications

<div style="margin-bottom: 15px;">
  <input type="text" id="searchInput" placeholder="Search..." style="padding: 6px; width: 200px;">
  
  <select id="yearFilter" style="padding: 6px; margin-left: 10px;">
    <option value="all">All Years</option>
    {% for y in site.data.years %}
      <option value="{{ y }}">{{ y }}</option>
    {% endfor %}
  </select>
</div>

<div id="pubList">
  {% bibliography --group_by year --sort_by year --order descending %}
</div>

<script>
// Highlight your name
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#pubList").forEach(section => {
    section.innerHTML = section.innerHTML.replace(/N\.?\s*Khorsand|Niru/gi, "<strong>$&</strong>");
  });
});

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
</script>
