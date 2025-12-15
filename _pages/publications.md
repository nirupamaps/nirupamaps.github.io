---
layout: page
title: publications
permalink: /publications/
nav: true
---

<h1>Publications</h1>

<input type="text" id="searchInput" placeholder="Search publications..." style="padding: 6px; width: 100%; max-width: 300px; margin-bottom: 1rem;">

<div id="publications">

  <!-- Example publication -->
  <div class="publication">
    <strong>Author A, Author B</strong> (2025). <em>Title of the Paper</em>. <a href="link-to-pdf.pdf">PDF</a> | <a href="https://doi.org/example">DOI</a>
  </div>

  <div class="publication">
    <strong>Author C, Author D</strong> (2024). <em>Another Paper Title</em>. <a href="link-to-pdf.pdf">PDF</a>
  </div>

  <!-- Add more publications manually like above -->

</div>

<script>
document.getElementById("searchInput").addEventListener("input", () => {
  const q = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll(".publication").forEach(pub => {
    pub.style.display = pub.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
});
</script>

<style>
.publication { margin-bottom: 1rem; }
.publication a { color: #007acc; text-decoration: none; margin-left: 5px; }
.publication a:hover { text-decoration: underline; }
</style>
