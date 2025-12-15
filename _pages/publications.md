---
layout: page
title: publications
permalink: /publications/
nav: true
---

<h1>Publications</h1>

<input type="text" id="searchInput" placeholder="Search publications..."
       style="padding:6px;width:100%;max-width:300px;margin-bottom:1.5rem;">

<div id="publications">

  <div class="publication">
    <div class="pub-text">
      <strong>Author A, Author B</strong> (2025).  
      <em>Title of the Paper</em>.
    </div>

    <div class="pub-links">
      <a href="paper.pdf">PDF</a>
      <span class="sep">|</span>
      <a href="https://doi.org/xxxx">DOI</a>
    </div>

  </div>

  <div class="publication">
    <div class="pub-text">
      <strong>Author C, Author D</strong> (2024).  
      <em>Another Paper Title</em>.
    </div>

    <div class="pub-links">
      <a href="paper.pdf">PDF</a>
    </div>

  </div>

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
.publication {
  padding: 0.8rem 0;
  border-bottom: 1px solid #ddd;
}

.pub-text {
  margin-bottom: 0.4rem;
}

.pub-links {
  font-size: 0.9em;
}

.pub-links a {
  color: #007acc;
  text-decoration: none;
}

.pub-links a:hover {
  text-decoration: underline;
}

.sep {
  margin: 0 0.4rem;
  color: #888;
}
</style>
