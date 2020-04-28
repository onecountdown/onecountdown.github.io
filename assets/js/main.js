import moment from 'https://dev.jspm.io/moment@2.24.0';

const dateZero = moment('2016-10-01');

function setContent(contentContainer) {
  const now = moment();

  contentContainer.querySelector('.month-content').textContent = now.diff(dateZero, 'month');
  contentContainer.querySelector('.year-content').textContent = now.diff(dateZero, 'year');
  contentContainer.querySelector('.day-content').textContent = now.diff(dateZero, 'day');
}

(() => {
  const container = document.getElementById("countdown-container");
  const template = document
    .querySelector(".countdown-content")

  const countdownContent = template.content.cloneNode(true);

  setContent(countdownContent);

  container.appendChild(countdownContent);
})();
