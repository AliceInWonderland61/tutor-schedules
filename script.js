/*
  ============================================
  MAIN PAGE LOGIC
  ============================================
  This file controls:
  - search behavior
  - dropdown suggestions
  - results shown on the page

  GOOD TO KNOW:
  - If you want to edit schedule information, go to data.js
  - If you want to edit colors or font sizes, go to style.css
  - If you want to change labels or structure on the page, go to index.html
*/

/* =========================
   EASY REFERENCES TO PAGE ELEMENTS
   ========================= */
const courseSearchInput = document.getElementById("course-search-input");
const daySearchInput = document.getElementById("day-search-input");

const courseSuggestionsBox = document.getElementById("course-suggestions");
const daySuggestionsBox = document.getElementById("day-suggestions");

const emptyStateSection = document.getElementById("empty-state");
const resultsArea = document.getElementById("results-area");

/* =========================
   PREPARE DATA FOR SEARCHING
   ========================= */
const uniqueCourses = getUniqueCourses(TUTOR_SCHEDULE_DATA);
const availableDays = AVAILABLE_DAYS.slice();

/* =========================
   HELPER FUNCTIONS
   ========================= */

/* Remove extra spaces and convert to lowercase for easier matching */
function normalizeText(text) {
  return String(text || "").trim().toLowerCase();
}

/* Create a list of unique courses based on course code + course name */
function getUniqueCourses(scheduleData) {
  const uniqueMap = new Map();

  scheduleData.forEach(function (entry) {
    const uniqueKey = `${entry.courseCode}|||${entry.courseName}`;

    if (!uniqueMap.has(uniqueKey)) {
      uniqueMap.set(uniqueKey, {
        courseCode: entry.courseCode,
        courseName: entry.courseName
      });
    }
  });

  return Array.from(uniqueMap.values()).sort(function (a, b) {
    return a.courseCode.localeCompare(b.courseCode);
  });
}

/* Close both dropdown menus */
function closeAllSuggestionBoxes() {
  courseSuggestionsBox.classList.remove("open");
  daySuggestionsBox.classList.remove("open");

  courseSearchInput.setAttribute("aria-expanded", "false");
  daySearchInput.setAttribute("aria-expanded", "false");
}

/* Show the empty state and remove old results */
function showEmptyState() {
  emptyStateSection.style.display = "block";
  resultsArea.innerHTML = "";
}

/* Hide the empty state when results are shown */
function hideEmptyState() {
  emptyStateSection.style.display = "none";
}

/* Check whether a schedule value is special information instead of normal time */
function getSpecialNote(scheduleValue) {
  const cleanedValue = String(scheduleValue || "").trim();

  if (
    cleanedValue === "BROWNSVILLE" ||
    cleanedValue === "Brownsville" ||
    cleanedValue === "Calendar" ||
    cleanedValue === "Mentor Duties" ||
    cleanedValue === "Lead Tutor Duties"
  ) {
    return cleanedValue;
  }

  return "";
}

/* Check if a tutor is actually available that day */
function isAvailable(scheduleValue) {
  return normalizeText(scheduleValue) !== "off" && normalizeText(scheduleValue) !== "";
}

/* =========================
   RENDERING FUNCTIONS
   ========================= */

/* Build a small HTML card for one tutor result */
function createTutorCard(entry, selectedDay) {
  const scheduleForThatDay = entry.days[selectedDay];
  const specialNote = getSpecialNote(scheduleForThatDay);

  const availabilityText = isAvailable(scheduleForThatDay)
    ? scheduleForThatDay
    : "OFF";

  const badgeHtml = specialNote
    ? `<div class="status-badge">${specialNote}</div>`
    : "";

  return `
    <article class="card">
      <div class="card-header">
        <h3>${entry.tutorName}</h3>
        <p class="card-subtitle">${entry.courseCode} · ${entry.courseName}</p>
      </div>
      <div class="card-body">
        <div class="info-grid">
          <div class="info-box">
            <span class="info-label">Day</span>
            <div class="info-value">${selectedDay}</div>
          </div>
          <div class="info-box">
            <span class="info-label">Availability</span>
            <div class="info-value">${availabilityText}</div>
            ${badgeHtml}
          </div>
          <div class="info-box">
            <span class="info-label">Tutor</span>
            <div class="info-value">${entry.tutorName}</div>
          </div>
          <div class="info-box">
            <span class="info-label">Course</span>
            <div class="info-value">${entry.courseCode} - ${entry.courseName}</div>
          </div>
        </div>
      </div>
    </article>
  `;
}

/* Show a list of tutor results for one day */
function renderDayResults(selectedDay) {
  closeAllSuggestionBoxes();
  hideEmptyState();

  const matchingEntries = TUTOR_SCHEDULE_DATA
    .filter(function (entry) {
      return isAvailable(entry.days[selectedDay]);
    })
    .sort(function (a, b) {
      return a.tutorName.localeCompare(b.tutorName);
    });

  if (matchingEntries.length === 0) {
    resultsArea.innerHTML = `
      <section class="no-results">
        <h2>No results for ${selectedDay}</h2>
        <p>No tutors were listed as available for that day.</p>
      </section>
    `;
    return;
  }

  const cardsHtml = matchingEntries
    .map(function (entry) {
      return createTutorCard(entry, selectedDay);
    })
    .join("");

  resultsArea.innerHTML = `
    <section>
      <div class="results-header">
        <h2>Tutors Available on ${selectedDay}</h2>
        <div class="results-count">${matchingEntries.length} result(s)</div>
      </div>
      ${cardsHtml}
    </section>
  `;
}

/* Show all tutors attached to one course across the week */
function renderCourseResults(selectedCourse) {
  closeAllSuggestionBoxes();
  hideEmptyState();

  const matchingEntries = TUTOR_SCHEDULE_DATA.filter(function (entry) {
    return (
      entry.courseCode === selectedCourse.courseCode &&
      entry.courseName === selectedCourse.courseName
    );
  });

  if (matchingEntries.length === 0) {
    resultsArea.innerHTML = `
      <section class="no-results">
        <h2>No results found</h2>
        <p>That course is not currently listed.</p>
      </section>
    `;
    return;
  }

  const courseCardsHtml = matchingEntries
    .map(function (entry) {
      return `
        <article class="card">
          <div class="card-header">
            <h3>${entry.tutorName}</h3>
            <p class="card-subtitle">${entry.courseCode} · ${entry.courseName}</p>
          </div>
          <div class="card-body">
            <div class="info-grid">
              ${AVAILABLE_DAYS.map(function (dayName) {
                const dayValue = entry.days[dayName];
                return `
                  <div class="info-box">
                    <span class="info-label">${dayName}</span>
                    <div class="info-value">${dayValue}</div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  resultsArea.innerHTML = `
    <section>
      <div class="results-header">
        <h2>${selectedCourse.courseCode} - ${selectedCourse.courseName}</h2>
        <div class="results-count">${matchingEntries.length} tutor(s)</div>
      </div>
      ${courseCardsHtml}
    </section>
  `;
}

/* =========================
   DROPDOWN BUILDERS
   ========================= */

function renderCourseSuggestions(searchText) {
  const normalizedSearch = normalizeText(searchText);

  const matchingCourses = uniqueCourses.filter(function (course) {
    return (
      normalizeText(course.courseCode).includes(normalizedSearch) ||
      normalizeText(course.courseName).includes(normalizedSearch)
    );
  }).slice(0, 12);

  if (matchingCourses.length === 0 || normalizedSearch === "") {
    courseSuggestionsBox.innerHTML = "";
    courseSuggestionsBox.classList.remove("open");
    courseSearchInput.setAttribute("aria-expanded", "false");
    return;
  }

  courseSuggestionsBox.innerHTML = matchingCourses.map(function (course, index) {
    return `
      <div
        class="suggestion-item"
        role="option"
        aria-selected="${index === 0 ? "true" : "false"}"
        data-course-code="${course.courseCode}"
        data-course-name="${course.courseName}"
        tabindex="0"
      >
        <span class="suggestion-main">${course.courseCode} - ${course.courseName}</span>
        <span class="suggestion-tag">Course</span>
      </div>
    `;
  }).join("");

  courseSuggestionsBox.classList.add("open");
  courseSearchInput.setAttribute("aria-expanded", "true");

  Array.from(courseSuggestionsBox.querySelectorAll(".suggestion-item")).forEach(function (item) {
    item.addEventListener("click", function () {
      const selectedCourse = {
        courseCode: item.dataset.courseCode,
        courseName: item.dataset.courseName
      };

      courseSearchInput.value = `${selectedCourse.courseCode} - ${selectedCourse.courseName}`;
      renderCourseResults(selectedCourse);
    });
  });
}

function renderDaySuggestions(searchText) {
  const normalizedSearch = normalizeText(searchText);

  const matchingDays = availableDays.filter(function (dayName) {
    return normalizeText(dayName).includes(normalizedSearch);
  }).slice(0, 7);

  if (matchingDays.length === 0 || normalizedSearch === "") {
    daySuggestionsBox.innerHTML = "";
    daySuggestionsBox.classList.remove("open");
    daySearchInput.setAttribute("aria-expanded", "false");
    return;
  }

  daySuggestionsBox.innerHTML = matchingDays.map(function (dayName, index) {
    return `
      <div
        class="suggestion-item"
        role="option"
        aria-selected="${index === 0 ? "true" : "false"}"
        data-day-name="${dayName}"
        tabindex="0"
      >
        <span class="suggestion-main">${dayName}</span>
        <span class="suggestion-tag">Day</span>
      </div>
    `;
  }).join("");

  daySuggestionsBox.classList.add("open");
  daySearchInput.setAttribute("aria-expanded", "true");

  Array.from(daySuggestionsBox.querySelectorAll(".suggestion-item")).forEach(function (item) {
    item.addEventListener("click", function () {
      const selectedDay = item.dataset.dayName;
      daySearchInput.value = selectedDay;
      renderDayResults(selectedDay);
    });
  });
}

/* =========================
   KEYBOARD SUPPORT
   ========================= */

function attachKeyboardSupport(inputElement, suggestionBox, onChooseSuggestion) {
  inputElement.addEventListener("keydown", function (event) {
    const suggestionItems = Array.from(suggestionBox.querySelectorAll(".suggestion-item"));

    if (suggestionItems.length === 0) {
      return;
    }

    const selectedIndex = suggestionItems.findIndex(function (item) {
      return item.getAttribute("aria-selected") === "true";
    });

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = selectedIndex < suggestionItems.length - 1 ? selectedIndex + 1 : 0;
      updateSelectedSuggestion(suggestionItems, nextIndex);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const nextIndex = selectedIndex > 0 ? selectedIndex - 1 : suggestionItems.length - 1;
      updateSelectedSuggestion(suggestionItems, nextIndex);
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const chosenItem = suggestionItems[Math.max(selectedIndex, 0)];
      if (chosenItem) {
        onChooseSuggestion(chosenItem);
      }
    }

    if (event.key === "Escape") {
      closeAllSuggestionBoxes();
    }
  });
}

function updateSelectedSuggestion(suggestionItems, activeIndex) {
  suggestionItems.forEach(function (item, index) {
    item.setAttribute("aria-selected", String(index === activeIndex));
  });

  if (suggestionItems[activeIndex]) {
    suggestionItems[activeIndex].scrollIntoView({ block: "nearest" });
  }
}

/* =========================
   INPUT EVENTS
   ========================= */

courseSearchInput.addEventListener("input", function () {
  renderCourseSuggestions(courseSearchInput.value);
});

daySearchInput.addEventListener("input", function () {
  renderDaySuggestions(daySearchInput.value);
});

attachKeyboardSupport(courseSearchInput, courseSuggestionsBox, function (chosenItem) {
  const selectedCourse = {
    courseCode: chosenItem.dataset.courseCode,
    courseName: chosenItem.dataset.courseName
  };

  courseSearchInput.value = `${selectedCourse.courseCode} - ${selectedCourse.courseName}`;
  renderCourseResults(selectedCourse);
});

attachKeyboardSupport(daySearchInput, daySuggestionsBox, function (chosenItem) {
  const selectedDay = chosenItem.dataset.dayName;
  daySearchInput.value = selectedDay;
  renderDayResults(selectedDay);
});

/* Close dropdowns if the user clicks somewhere else */
document.addEventListener("click", function (event) {
  const clickedInsideCourseArea = event.target.closest(".search-group") === courseSearchInput.closest(".search-group");
  const clickedInsideDayArea = event.target.closest(".search-group") === daySearchInput.closest(".search-group");

  if (!clickedInsideCourseArea && !clickedInsideDayArea) {
    closeAllSuggestionBoxes();
  }
});

/* Start with the empty state visible */
showEmptyState();