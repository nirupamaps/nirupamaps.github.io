---
layout: page
title: goals
permalink: /goals/
---

<style>
  .habit-container {
    max-width: 900px;
    margin: 2rem auto;
  }

  .habit-input {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .habit-input input {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
  }

  .habit-input button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }

  th, td {
    border: 1px solid #ddd;
    text-align: center;
    padding: 0.4rem;
  }

  th {
    background: #f4f4f4;
  }

  .done {
    background-color: #b6e3c6;
  }

  .delete-btn {
    color: #b00020;
    cursor: pointer;
  }
</style>

<div class="habit-container">
  <p><strong>Daily habit tracker.</strong> Data is stored locally in your browser.</p>

  <div class="habit-input">
    <input id="habitName" placeholder="New habit (e.g. Run, Read, Stretch)" />
    <button onclick="addHabit()">Add</button>
  </div>

  <table id="habitTable"></table>
</div>

<script>
  const DAYS = 7; // rolling 7-day tracker
  const STORAGE_KEY = 'habit_tracker_v1';

  function loadData() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  }

  function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function addHabit() {
    const name = document.getElementById('habitName').value.trim();
    if (!name) return;

    const data = loadData();
    data.push({ name, days: Array(DAYS).fill(false) });
    saveData(data);

    document.getElementById('habitName').value = '';
    render();
  }

  function toggle(habitIndex, dayIndex) {
    const data = loadData();
    data[habitIndex].days[dayIndex] = !data[habitIndex].days[dayIndex];
    saveData(data);
    render();
  }

  function removeHabit(index) {
    const data = loadData();
    data.splice(index, 1);
    saveData(data);
    render();
  }

  function render() {
    const table = document.getElementById('habitTable');
    const data = loadData();

    const today = new Date();
    const headers = ['Habit'];
    for (let i = DAYS - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      headers.push(d.toLocaleDateString(undefined, { weekday: 'short' }));
    }
    headers.push('');

    let html = '<tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr>';

    data.forEach((habit, hi) => {
      html += `<tr><td>${habit.name}</td>`;
      habit.days.forEach((done, di) => {
        html += `<td class="${done ? 'done' : ''}" onclick="toggle(${hi},${di})"></td>`;
      });
      html += `<td class="delete-btn" onclick="removeHabit(${hi})">✕</td></tr>`;
    });

    table.innerHTML = html;
  }

  render();
</script>