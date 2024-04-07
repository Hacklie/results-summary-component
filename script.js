"use strict";
import data from "./data.json" with { type: "json" };

const summaries = document.querySelectorAll(
  `.results-summary__summary-div-category`
);

summaries.forEach((summary, index) => {
  summary.insertAdjacentHTML(
    `afterbegin`,
    `
      <span class="flex">
        <img src="${data[index].icon}" alt="${data[index].category} Icon" />
        <p>${data[index].category}</p>
      </span>
      <span class="lightgrey">
        <strong class="grey">${data[index].score}</strong> / 100
      </span>
    `
  );
});
