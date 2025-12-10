---
layout: page
title: Publications
permalink: /publications/
nav: true
---

<div style="margin-bottom: 20px;">
  <input type="text" id="searchInput" placeholder="Search publications" style="padding: 5px; width: 200px;">
  <select id="yearFilter" style="padding: 5px; margin-left: 10px;">
    <option value="all">All years</option>
    {% assign years = site.publications | map: "year" | uniq | sort: "reverse" %}
    {% for y in years %}
      <option value="{{ y }}">{{ y }}</option>
    {% endfor %}
  </select>
</div>

<div id="pubContainer">
  {% assign pubs = site.publications | sort: "year" | reverse %}
  {% for pub in pubs %}
    <div class="pub-card" data-year="{{ pub.year }}">
      <h3>{{ pub.title }}</h3>
      <div class="authors">{{ pub.authors }}</div>
      <div class="venue">{{ pub.venue }}</div>
      <div class="links">
        {% if pub.pdf %}<a href="{{ pub.pdf }}" target="_blank">PDF</a>{% endif %}
        {% if pub.doi %}<a href="{{ pub.doi }}" target="_blank">DOI</a>{% endif %}
      </div>
    </div>
  {% endfor %}
</div>

<script>
const searchInput = document.getElementById("searchInput");
const yearFilter = document.getElementById("yearFilter");
const pubCards = document.querySelectorAll(".pub-card");

function filterPubs() {
  const query = searchInput.value.toLowerCase();
  const year = yearFilter.value;

  pubCards.forEach(card => {
    const text = card.innerText.toLowerCase();
    const cardYear = card.dataset.year;
    const matchesQuery = text.includes(query);
    const matchesYear = year === "all" || year === cardYear;
    card.style.display = matchesQuery && matchesYear ? "block" : "none";
  });
}

searchInput.addEventListener("input", filterPubs);
yearFilter.addEventListener("change", filterPubs);
</script>

<style>
.pub-card { border:1px solid #ddd; padding:1rem; margin-bottom:1rem; border-radius:8px; background:#f9f9f9; }
.pub-card h3 { margin:0; font-size:1.1rem; }
.pub-card .authors { font-style:italic; margin:0.5rem 0; }
.pub-card .links a { margin-right:1rem; text-decoration:none; color:#2980b9; }
.pub-card .links a:hover { text-decoration:underline; }
</style>
