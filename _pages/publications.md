---
layout: page
title: publications
permalink: /publications/
nav: true
---

<div class="publication">
  <div class="pub-header">
    <div class="pub-text">
      <div class="pub-title">
        A Data Mining Approach for Load Composition Analysis in Residential Units
      </div>
      <div class="pub-authors">
        <em>Nirupama Pudukkarai Srinivas, Sara Ostovar, Mojdeh Khorsand</em>.
      </div>
      <div class="pub-venue">
        <em>2025 57th North American Power Symposium (NAPS)</em>.
      </div>
    </div>
    <div class="pub-year">2025</div>
  </div>

  <div class="pub-links">
    <a href="https://ieeexplore.ieee.org/document/11272295">IEEE</a>
    <span class="sep">|</span>
    <a href="https://doi.org/10.1109/NAPS66256.2025.11272295">DOI</a>
    <span class="sep">|</span>
    <button class="copy-cite-btn"
        onclick="copyCitation(this)"
        data-citation="N. P. Srinivas, S. Ostovar and M. Khorsand, 'A Data Mining Approach for Load Composition Analysis in Residential Units,' 2025 57th North American Power Symposium (NAPS), Storrs, CT, USA, 2025, pp. 1-6, doi: 10.1109/NAPS66256.2025.11272295.">
        Copy citation
    </button>
  </div>
</div>

<div class="publication">
  <div class="pub-header">
    <div class="pub-text">
      <div class="pub-authors">
        Nirupama Pudukkarai Srinivas, Sara Ostovar, Mojdeh Khorsand
      </div>
      <div class="pub-title">
        <em>Title of the Paper</em>.
      </div>
      <div class="pub-venue">
        <em>Venue of Publication</em>.
      </div>
    </div>
    <div class="pub-year">2025</div>
  </div>

  <div class="pub-links">
    <a href="paper.pdf">PDF</a>
    <span class="sep">|</span>
    <a href="https://doi.org/xxxx">DOI</a>
  </div>
</div>

<div class="publication">
  <div class="pub-header">
    <div class="pub-text">
      <div class="pub-title">
        Comparative Analysis of Traditional and Soft Computing Techniques of MPPT in PV Applications
      </div>
      <div class="pub-authors">
        <em>Nirupama Srinivas; Shivam Singh; Manish Gowda; Chinmay Prasanna; Sangeeta Modi</em>.
      </div>
      <div class="pub-venue">
        <em>2021 IEEE 4th International Conference on Computing, Power and Communication Technologies (GUCON)</em>.
      </div>
    </div>
    <div class="pub-year">2021</div>
  </div>

  <div class="pub-links">
    <a href="https://ieeexplore.ieee.org/document/9573876">IEEE</a>
    <span class="sep">|</span>
    <a href="https://doi.org/10.1109/GUCON50781.2021.9573876">DOI</a>
    <span class="sep">|</span>
    <button class="copy-cite-btn"
        onclick="copyCitation(this)"
        data-citation="N. Srinivas, S. Singh, M. Gowda, C. Prasanna and S. Modi, 'Comparative Analysis of Traditional and Soft Computing Techniques of MPPT in PV Applications,' 2021 IEEE 4th International Conference on Computing, Power and Communication Technologies (GUCON), Kuala Lumpur, Malaysia, 2021, pp. 1-6, doi: 10.1109/GUCON50781.2021.9573876.">
        Copy citation
    </button>
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

.pub-header {
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 1rem;
}

.pub-text {
  margin-bottom: 0.4rem;
}

.pub-year {
  font-weight: bold;
  text-align: right;
  color: #666;
  white-space: nowrap;
}

.pub-title {
  margin-top: 0.15rem;
}

.pub-venue{
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

.copy-cite-btn {
  padding: 4px 8px;
  font-size: 0.85rem;
  border-radius: 4px;
  border: 1px solid #161515ff;
  background: #100c0cff;
  cursor: pointer;
}

.copy-cite-btn:hover {
  background: #2e2ee7ff;
}

.sep {
  margin: 0 0.4rem;
  color: #888;
}
</style>
