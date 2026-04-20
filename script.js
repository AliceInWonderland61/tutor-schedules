/*
  ============================================
  MAIN PAGE LOGIC
  ============================================
  This file controls:
  - course search
  - day search
  - dropdown suggestions
  - combined filtering results

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

/*
  These two variables store the current chosen filters.
  They update when the user clicks a suggestion,
  presses Enter on a suggestion, or types an exact match.
*/
let selectedCourseFilter = null;
let selectedDayFilter = null;

/* =========================
   HELPER FUNCTIONS
   ========================= */

function normalizeText(text) {
  return String(text || "").trim().toLowerCase();
}

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

function closeAllSuggestionBoxes() {
  courseSuggestionsBox.classList.remove("open");
  daySuggestionsBox.classList.remove("open");

  courseSearchInput.setAttribute("aria-expanded", "false");
  daySearchInput.setAttribute("aria-expanded", "false");
}

function showEmptyState() {
  emptyStateSection.style.display = "block";
  resultsArea.innerHTML = "";
}

function hideEmptyState() {
  emptyStateSection.style.display = "none";
}

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

function isAvailable(scheduleValue) {
  return normalizeText(scheduleValue) !== "off" && normalizeText(scheduleValue) !== "";
}

function findExactCourseMatch(searchText) {
  const normalizedSearch = normalizeText(searchText);

  if (!normalizedSearch) {
    return null;
  }

  return uniqueCourses.find(function (course) {
    const fullCourseLabel = `${course.courseCode} - ${course.courseName}`;

    return (
      normalizeText(course.courseCode) === normalizedSearch ||
      normalizeText(course.courseName) === normalizedSearch ||
      normalizeText(fullCourseLabel) === normalizedSearch
    );
  }) || null;
}

function findExactDayMatch(searchText) {
  const normalizedSearch = normalizeText(searchText);

  if (!normalizedSearch) {
    return null;
  }

  return availableDays.find(function (dayName) {
    return normalizeText(dayName) === normalizedSearch;
  }) || null;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* =========================
   RENDERING FUNCTIONS
   ========================= */

function createScheduleBoxesForAllDays(entry) {
  return AVAILABLE_DAYS.map(function (dayName) {
    const dayValue = entry.days[dayName];
    const specialNote = getSpecialNote(dayValue);
    const badgeHtml = specialNote
      ? `<div class="status-badge">${escapeHtml(specialNote)}</div>`
      : "";

    return `
      <div class="info-box">
        <span class="info-label">${escapeHtml(dayName)}</span>
        <div class="info-value">${escapeHtml(dayValue)}</div>
        ${badgeHtml}
      </div>
    `;
  }).join("");
}

function createTutorCard(entry, options) {
  const showSingleDay = Boolean(options && options.selectedDay);
  const selectedDay = showSingleDay ? options.selectedDay : null;

  let detailsHtml = "";

  if (showSingleDay) {
    const scheduleForThatDay = entry.days[selectedDay];
    const specialNote = getSpecialNote(scheduleForThatDay);
    const availabilityText = isAvailable(scheduleForThatDay) ? scheduleForThatDay : "OFF";
    const badgeHtml = specialNote
      ? `<div class="status-badge">${escapeHtml(specialNote)}</div>`
      : "";

    detailsHtml = `
      <div class="info-grid">
        <div class="info-box">
          <span class="info-label">Day</span>
          <div class="info-value">${escapeHtml(selectedDay)}</div>
        </div>
        <div class="info-box">
          <span class="info-label">Availability</span>
          <div class="info-value">${escapeHtml(availabilityText)}</div>
          ${badgeHtml}
        </div>
        <div class="info-box">
          <span class="info-label">Tutor</span>
          <div class="info-value">${escapeHtml(entry.tutorName)}</div>
        </div>
        <div class="info-box">
          <span class="info-label">Course</span>
          <div class="info-value">${escapeHtml(entry.courseCode)} - ${escapeHtml(entry.courseName)}</div>
        </div>
      </div>
    `;
  } else {
    detailsHtml = `
      <div class="info-grid">
        ${createScheduleBoxesForAllDays(entry)}
      </div>
    `;
  }

  return `
    <article class="card">
      <div class="card-header">
        <h3>${escapeHtml(entry.tutorName)}</h3>
        <p class="card-subtitle">${escapeHtml(entry.courseCode)} · ${escapeHtml(entry.courseName)}</p>
      </div>
      <div class="card-body">
        ${detailsHtml}
      </div>
    </article>
  `;
}

function renderNoResults(messageTitle, messageText) {
  hideEmptyState();
  resultsArea.innerHTML = `
    <section class="no-results">
      <h2>${escapeHtml(messageTitle)}</h2>
      <p>${escapeHtml(messageText)}</p>
    </section>
  `;
}

function renderResultsFromCurrentFilters() {
  closeAllSuggestionBoxes();

  const hasCourseFilter = Boolean(selectedCourseFilter);
  const hasDayFilter = Boolean(selectedDayFilter);

  if (!hasCourseFilter && !hasDayFilter) {
    showEmptyState();
    return;
  }

  hideEmptyState();

  let matchingEntries = TUTOR_SCHEDULE_DATA.slice();

  if (hasCourseFilter) {
    matchingEntries = matchingEntries.filter(function (entry) {
      return (
        entry.courseCode === selectedCourseFilter.courseCode &&
        entry.courseName === selectedCourseFilter.courseName
      );
    });
  }

  if (hasDayFilter) {
    matchingEntries = matchingEntries.filter(function (entry) {
      return isAvailable(entry.days[selectedDayFilter]);
    });
  }

  matchingEntries.sort(function (a, b) {
    const courseCompare = a.courseCode.localeCompare(b.courseCode);
    if (courseCompare !== 0) {
      return courseCompare;
    }
    return a.tutorName.localeCompare(b.tutorName);
  });

  if (matchingEntries.length === 0) {
    const titleParts = [];

    if (hasCourseFilter) {
      titleParts.push(`${selectedCourseFilter.courseCode}`);
    }

    if (hasDayFilter) {
      titleParts.push(`${selectedDayFilter}`);
    }

    const titleText = titleParts.length > 0
      ? `No results for ${titleParts.join(" + ")}`
      : "No results found";

    renderNoResults(titleText, "No tutors matched the current search filters.");
    return;
  }

  let headerTitle = "Filtered Schedule Results";
  let helperText = "Showing tutors that match the current search filters.";

  if (hasCourseFilter && hasDayFilter) {
    headerTitle = `${selectedCourseFilter.courseCode} - ${selectedCourseFilter.courseName} on ${selectedDayFilter}`;
    helperText = "Showing tutors for the selected course on the selected day.";
  } else if (hasCourseFilter) {
    headerTitle = `${selectedCourseFilter.courseCode} - ${selectedCourseFilter.courseName}`;
    helperText = "Showing all tutors and weekly times for the selected course.";
  } else if (hasDayFilter) {
    headerTitle = `Tutors Available on ${selectedDayFilter}`;
    helperText = "Showing tutors available on the selected day.";
  }

  const cardsHtml = matchingEntries.map(function (entry) {
    if (hasDayFilter) {
      return createTutorCard(entry, { selectedDay: selectedDayFilter });
    }

    return createTutorCard(entry, {});
  }).join("");

  resultsArea.innerHTML = `
    <section>
      <div class="results-header">
        <div>
          <h2>${escapeHtml(headerTitle)}</h2>
          <p class="card-subtitle">${escapeHtml(helperText)}</p>
        </div>
        <div class="results-count">${matchingEntries.length} result(s)</div>
      </div>
      ${cardsHtml}
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
        data-course-code="${escapeHtml(course.courseCode)}"
        data-course-name="${escapeHtml(course.courseName)}"
        tabindex="0"
      >
        <span class="suggestion-main">${escapeHtml(course.courseCode)} - ${escapeHtml(course.courseName)}</span>
        <span class="suggestion-tag">Course</span>
      </div>
    `;
  }).join("");

  courseSuggestionsBox.classList.add("open");
  courseSearchInput.setAttribute("aria-expanded", "true");

  Array.from(courseSuggestionsBox.querySelectorAll(".suggestion-item")).forEach(function (item) {
    item.addEventListener("mousedown", function (event) {
      event.preventDefault();
      chooseCourseFilter({
        courseCode: item.dataset.courseCode,
        courseName: item.dataset.courseName
      });
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
        data-day-name="${escapeHtml(dayName)}"
        tabindex="0"
      >
        <span class="suggestion-main">${escapeHtml(dayName)}</span>
        <span class="suggestion-tag">Day</span>
      </div>
    `;
  }).join("");

  daySuggestionsBox.classList.add("open");
  daySearchInput.setAttribute("aria-expanded", "true");

  Array.from(daySuggestionsBox.querySelectorAll(".suggestion-item")).forEach(function (item) {
    item.addEventListener("mousedown", function (event) {
      event.preventDefault();
      chooseDayFilter(item.dataset.dayName);
    });
  });
}

/* =========================
   FILTER SELECTION HELPERS
   ========================= */

function chooseCourseFilter(course) {
  selectedCourseFilter = course;
  courseSearchInput.value = `${course.courseCode} - ${course.courseName}`;
  renderResultsFromCurrentFilters();
}

function chooseDayFilter(dayName) {
  selectedDayFilter = dayName;
  daySearchInput.value = dayName;
  renderResultsFromCurrentFilters();
}

function syncCourseFilterFromTypedText() {
  const exactCourseMatch = findExactCourseMatch(courseSearchInput.value);

  if (exactCourseMatch) {
    selectedCourseFilter = exactCourseMatch;
    courseSearchInput.value = `${exactCourseMatch.courseCode} - ${exactCourseMatch.courseName}`;
    return;
  }

  if (normalizeText(courseSearchInput.value) === "") {
    selectedCourseFilter = null;
  }
}

function syncDayFilterFromTypedText() {
  const exactDayMatch = findExactDayMatch(daySearchInput.value);

  if (exactDayMatch) {
    selectedDayFilter = exactDayMatch;
    daySearchInput.value = exactDayMatch;
    return;
  }

  if (normalizeText(daySearchInput.value) === "") {
    selectedDayFilter = null;
  }
}

/* =========================
   KEYBOARD SUPPORT
   ========================= */

function attachKeyboardSupport(inputElement, suggestionBox, onChooseSuggestion) {
  inputElement.addEventListener("keydown", function (event) {
    const suggestionItems = Array.from(suggestionBox.querySelectorAll(".suggestion-item"));

    if (event.key === "Enter" && suggestionItems.length === 0) {
      if (inputElement === courseSearchInput) {
        syncCourseFilterFromTypedText();
      }

      if (inputElement === daySearchInput) {
        syncDayFilterFromTypedText();
      }

      renderResultsFromCurrentFilters();
      return;
    }

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
  if (normalizeText(courseSearchInput.value) === "") {
    selectedCourseFilter = null;
    renderResultsFromCurrentFilters();
  }

  renderCourseSuggestions(courseSearchInput.value);
});

courseSearchInput.addEventListener("blur", function () {
  setTimeout(function () {
    syncCourseFilterFromTypedText();
    renderResultsFromCurrentFilters();
  }, 150);
});

daySearchInput.addEventListener("input", function () {
  if (normalizeText(daySearchInput.value) === "") {
    selectedDayFilter = null;
    renderResultsFromCurrentFilters();
  }

  renderDaySuggestions(daySearchInput.value);
});

daySearchInput.addEventListener("blur", function () {
  setTimeout(function () {
    syncDayFilterFromTypedText();
    renderResultsFromCurrentFilters();
  }, 150);
});

attachKeyboardSupport(courseSearchInput, courseSuggestionsBox, function (chosenItem) {
  chooseCourseFilter({
    courseCode: chosenItem.dataset.courseCode,
    courseName: chosenItem.dataset.courseName
  });
});

attachKeyboardSupport(daySearchInput, daySuggestionsBox, function (chosenItem) {
  chooseDayFilter(chosenItem.dataset.dayName);
});

document.addEventListener("click", function (event) {
  const clickedInsideCourseArea = event.target.closest(".search-group") === courseSearchInput.closest(".search-group");
  const clickedInsideDayArea = event.target.closest(".search-group") === daySearchInput.closest(".search-group");

  if (!clickedInsideCourseArea && !clickedInsideDayArea) {
    closeAllSuggestionBoxes();
  }
});

showEmptyState();