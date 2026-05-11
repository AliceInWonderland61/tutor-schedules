/*
  ============================================
  TUTOR SCHEDULE DATA
  ============================================
  This file was rebuilt directly from the Excel file:
  Tutor_Schedules_ADA.xlsm

  HOW TO EDIT THIS FILE:
  - Each item below represents one row from the Excel sheet.
  - If the Excel sheet has two separate rows for the same tutor/course,
    keep them as two separate entries here too.
  - Days must stay exactly like this:
      Monday, Tuesday, Wednesday, Thursday, Friday

  TIP:
  - If you want the website to match the spreadsheet exactly,
    update the Excel sheet first, then update this file from it.

    This is a random comment AGAIN
*/



const AVAILABLE_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const TUTOR_SCHEDULE_DATA =
[
  // ============================================================
  // EDINBURG CAMPUS
  // ============================================================

  // ---- ACCT 2301 ----
  {
    "courseCode": "ACCT 2301",
    "courseName": "Intro to Financial Acct",
    "campus": "Edinburg",
    "tutorName": "Sebastian Sanchez Reyes",
    "days": {
      "Monday": "Lead Training",
      "Tuesday": "1:30pm - 4:15pm",
      "Wednesday": "Lead Training",
      "Thursday": "9:30am - 12:45pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ACCT 2301",
    "courseName": "Intro to Financial Acct",
    "campus": "Edinburg",
    "tutorName": "Fernando Casanova",
    "days": {
      "Monday": "12:00pm - 3:45pm",
      "Tuesday": "1:00pm - 3:15pm",
      "Wednesday": "12:00pm - 3:45pm",
      "Thursday": "1:00pm - 3:15pm",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "ACCT 2301",
    "courseName": "Intro to Financial Acct",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "11:00am - 2:00pm & 2:30pm - 5:00pm",
      "Tuesday": "11:00am - 12:15pm",
      "Wednesday": "11:00am - 1:45pm & 3:45pm - 8:00pm",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "OFF"
    }
  },

  // ---- ACCT 2302 ----
  {
    "courseCode": "ACCT 2302",
    "courseName": "Intro to Managerial Acct",
    "campus": "Edinburg",
    "tutorName": "Sebastian Sanchez Reyes",
    "days": {
      "Monday": "Lead Training",
      "Tuesday": "1:30pm - 4:15pm",
      "Wednesday": "Lead Training",
      "Thursday": "9:30am - 12:45pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ACCT 2302",
    "courseName": "Intro to Managerial Acct",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "11:00am - 2:00pm & 2:30pm - 5:00pm",
      "Tuesday": "11:00am - 12:15pm",
      "Wednesday": "11:00am - 1:45pm & 3:45pm - 8:00pm",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "OFF"
    }
  },

  // ---- ASLI 1310 ----
  {
    "courseCode": "ASLI 1310",
    "courseName": "ASL I",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm - 3:00pm & 4:00pm - 6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm - 6:00pm",
      "Thursday": "12:00pm - 3:00pm & 4:00pm - 6:00pm",
      "Friday": "12:30pm - 3:00pm"
    }
  },
  {
    "courseCode": "ASLI 1310",
    "courseName": "ASL I",
    "campus": "Edinburg",
    "tutorName": "Josue Peralta De Jesus",
    "days": {
      "Monday": "11:00am - 12:30pm & 3:30pm - 5:00pm",
      "Tuesday": "9:00am - 12:00pm & 3:00pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm",
      "Thursday": "9:00am - 12:00pm & 3:00pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ASLI 1310",
    "courseName": "ASL I",
    "campus": "Edinburg",
    "tutorName": "Mario Salinas",
    "days": {
      "Monday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:00pm - 5:00pm",
      "Wednesday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Thursday": "9:00am - 12:00pm & 2:00pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- ASLI 1320 ----
  {
    "courseCode": "ASLI 1320",
    "courseName": "ASL II",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm - 3:00pm & 4:00pm - 6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm - 6:00pm",
      "Thursday": "12:00pm - 3:00pm & 4:00pm - 6:00pm",
      "Friday": "12:30pm - 3:00pm"
    }
  },
  {
    "courseCode": "ASLI 1320",
    "courseName": "ASL II",
    "campus": "Edinburg",
    "tutorName": "Josue Peralta De Jesus",
    "days": {
      "Monday": "11:00am - 12:30pm & 3:30pm - 5:00pm",
      "Tuesday": "9:00am - 12:00pm & 3:00pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm",
      "Thursday": "9:00am - 12:00pm & 3:00pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ASLI 1320",
    "courseName": "ASL II",
    "campus": "Edinburg",
    "tutorName": "Mario Salinas",
    "days": {
      "Monday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:00pm - 5:00pm",
      "Wednesday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Thursday": "9:00am - 12:00pm & 2:00pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- ASLI 2310 ----
  {
    "courseCode": "ASLI 2310",
    "courseName": "ASL III",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm - 3:00pm & 4:00pm - 6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm - 6:00pm",
      "Thursday": "12:00pm - 3:00pm & 4:00pm - 6:00pm",
      "Friday": "12:30pm - 3:00pm"
    }
  },
  {
    "courseCode": "ASLI 2310",
    "courseName": "ASL III",
    "campus": "Edinburg",
    "tutorName": "Josue Peralta De Jesus",
    "days": {
      "Monday": "11:00am - 12:30pm & 3:30pm - 5:00pm",
      "Tuesday": "9:00am - 12:00pm & 3:00pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm",
      "Thursday": "9:00am - 12:00pm & 3:00pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ASLI 2310",
    "courseName": "ASL III",
    "campus": "Edinburg",
    "tutorName": "Mario Salinas",
    "days": {
      "Monday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:00pm - 5:00pm",
      "Wednesday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Thursday": "9:00am - 12:00pm & 2:00pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- ASLI 3310 ----
  {
    "courseCode": "ASLI 3310",
    "courseName": "ASL IV",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm - 3:00pm & 4:00pm - 6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm - 6:00pm",
      "Thursday": "12:00pm - 3:00pm & 4:00pm - 6:00pm",
      "Friday": "12:30pm - 3:00pm"
    }
  },
  {
    "courseCode": "ASLI 3310",
    "courseName": "ASL IV",
    "campus": "Edinburg",
    "tutorName": "Mario Salinas",
    "days": {
      "Monday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:00pm - 5:00pm",
      "Wednesday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Thursday": "9:00am - 12:00pm & 2:00pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- ASLI 3320 ----
  {
    "courseCode": "ASLI 3320",
    "courseName": "ASL V",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm - 3:00pm & 4:00pm - 6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm - 6:00pm",
      "Thursday": "12:00pm - 3:00pm & 4:00pm - 6:00pm",
      "Friday": "12:30pm - 3:00pm"
    }
  },
  {
    "courseCode": "ASLI 3320",
    "courseName": "ASL V",
    "campus": "Edinburg",
    "tutorName": "Mario Salinas",
    "days": {
      "Monday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:00pm - 5:00pm",
      "Wednesday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Thursday": "9:00am - 12:00pm & 2:00pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- ASLI 3325 ----
  {
    "courseCode": "ASLI 3325",
    "courseName": "Interpreting I",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm - 3:00pm & 4:00pm - 6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm - 6:00pm",
      "Thursday": "12:00pm - 3:00pm & 4:00pm - 6:00pm",
      "Friday": "12:30pm - 3:00pm"
    }
  },

  // ---- ASLI 3340 ----
  {
    "courseCode": "ASLI 3340",
    "courseName": "Intro to Classifiers",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm - 3:00pm & 4:00pm - 6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm - 6:00pm",
      "Thursday": "12:00pm - 3:00pm & 4:00pm - 6:00pm",
      "Friday": "12:30pm - 3:00pm"
    }
  },
  {
    "courseCode": "ASLI 3340",
    "courseName": "Intro to Classifiers",
    "campus": "Edinburg",
    "tutorName": "Mario Salinas",
    "days": {
      "Monday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:00pm - 5:00pm",
      "Wednesday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Thursday": "9:00am - 12:00pm & 2:00pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- ASLI 3345 ----
  {
    "courseCode": "ASLI 3345",
    "courseName": "Interpreting II",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm - 3:00pm & 4:00pm - 6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm - 6:00pm",
      "Thursday": "12:00pm - 3:00pm & 4:00pm - 6:00pm",
      "Friday": "12:30pm - 3:00pm"
    }
  },

  // ---- BIOL 1406 ----
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Edinburg",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am - 1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Edinburg",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Edinburg",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am - 12:45pm",
      "Tuesday": "9:00am - 10:45am",
      "Wednesday": "9:00am - 10:45am & 7:00pm - 8:00pm",
      "Thursday": "9:00am - 12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm - 4:45pm",
      "Tuesday": "11:00am - 1:30pm",
      "Wednesday": "2:45pm - 6:45pm",
      "Thursday": "2:45pm - 5:00pm",
      "Friday": "9:45am - 12:00pm"
    }
  },

  // ---- BIOL 1407 ----
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Edinburg",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am - 1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Edinburg",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Edinburg",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am - 12:45pm",
      "Tuesday": "9:00am - 10:45am",
      "Wednesday": "9:00am - 10:45am & 7:00pm - 8:00pm",
      "Thursday": "9:00am - 12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm - 4:45pm",
      "Tuesday": "11:00am - 1:30pm",
      "Wednesday": "2:45pm - 6:45pm",
      "Thursday": "2:45pm - 5:00pm",
      "Friday": "9:45am - 12:00pm"
    }
  },

  // ---- BIOL 2401 ----
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Edinburg",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am - 1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Edinburg",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am - 12:45pm",
      "Tuesday": "9:00am - 10:45am",
      "Wednesday": "9:00am - 10:45am & 7:00pm - 8:00pm",
      "Thursday": "9:00am - 12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Edinburg",
    "tutorName": "Amanda Villa",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 10:30am",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 10:30am",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm - 4:45pm",
      "Tuesday": "11:00am - 1:30pm",
      "Wednesday": "2:45pm - 6:45pm",
      "Thursday": "2:45pm - 5:00pm",
      "Friday": "9:45am - 12:00pm"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Edinburg",
    "tutorName": "Yaeli Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "10:00am - 2:00pm",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },

  // ---- BIOL 2402 ----
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Edinburg",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am - 1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Edinburg",
    "tutorName": "Amanda Villa",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 10:30am",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 10:30am",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm - 4:45pm",
      "Tuesday": "11:00am - 1:30pm",
      "Wednesday": "2:45pm - 6:45pm",
      "Thursday": "2:45pm - 5:00pm",
      "Friday": "9:45am - 12:00pm"
    }
  },

  // ---- BMED 1301 ----
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "campus": "Edinburg",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "12:00pm - 4:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "campus": "Edinburg",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am - 1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "campus": "Edinburg",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "campus": "Edinburg",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am - 12:45pm",
      "Tuesday": "9:00am - 10:45am",
      "Wednesday": "9:00am - 10:45am & 7:00pm - 8:00pm",
      "Thursday": "9:00am - 12:30pm",
      "Friday": "OFF"
    }
  },

  // ---- BMED 1302 ----
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "campus": "Edinburg",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "12:00pm - 4:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "campus": "Edinburg",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am - 1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "campus": "Edinburg",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "campus": "Edinburg",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am - 12:45pm",
      "Tuesday": "9:00am - 10:45am",
      "Wednesday": "9:00am - 10:45am & 7:00pm - 8:00pm",
      "Thursday": "9:00am - 12:30pm",
      "Friday": "OFF"
    }
  },

  // ---- BMED 2301 ----
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "campus": "Edinburg",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am - 1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "campus": "Edinburg",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "campus": "Edinburg",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am - 12:45pm",
      "Tuesday": "9:00am - 10:45am",
      "Wednesday": "9:00am - 10:45am & 7:00pm - 8:00pm",
      "Thursday": "9:00am - 12:30pm",
      "Friday": "OFF"
    }
  },

  // ---- BMED 2302 ----
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "campus": "Edinburg",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am - 1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "campus": "Edinburg",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "campus": "Edinburg",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am - 12:45pm",
      "Tuesday": "9:00am - 10:45am",
      "Wednesday": "9:00am - 10:45am & 7:00pm - 8:00pm",
      "Thursday": "9:00am - 12:30pm",
      "Friday": "OFF"
    }
  },

  // ---- BMED 4220 ----
  {
    "courseCode": "BMED 4220",
    "courseName": "Medical Bioinformatics",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },

  // ---- BMED 4230 ----
  {
    "courseCode": "BMED 4230",
    "courseName": "Medical Genetics & Genomics",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },

  // ---- BMED 4250 ----
  {
    "courseCode": "BMED 4250",
    "courseName": "Advanced Cell Biology",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4250",
    "courseName": "Advanced Cell Biology",
    "campus": "Edinburg",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4250",
    "courseName": "Advanced Cell Biology",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },

  // ---- BMED 4260 ----
  {
    "courseCode": "BMED 4260",
    "courseName": "Advanced Molecular Biology",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4260",
    "courseName": "Advanced Molecular Biology",
    "campus": "Edinburg",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4260",
    "courseName": "Advanced Molecular Biology",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },

  // ---- BMED 4310 ----
  {
    "courseCode": "BMED 4310",
    "courseName": "Medical Biochemistry",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4310",
    "courseName": "Medical Biochemistry",
    "campus": "Edinburg",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4310",
    "courseName": "Medical Biochemistry",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4310",
    "courseName": "Medical Biochemistry",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },

  // ---- BMED 4380 ----
  {
    "courseCode": "BMED 4380",
    "courseName": "Medical Neuroscience/Neurochemistry",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4380",
    "courseName": "Medical Neuroscience/Neurochemistry",
    "campus": "Edinburg",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4380",
    "courseName": "Medical Neuroscience/Neurochemistry",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4380",
    "courseName": "Medical Neuroscience/Neurochemistry",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },

  // ---- BMED 4440 ----
  {
    "courseCode": "BMED 4440",
    "courseName": "Medical Microbiology",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4440",
    "courseName": "Medical Microbiology",
    "campus": "Edinburg",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4440",
    "courseName": "Medical Microbiology",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },

  // ---- CHEM 1309/1109 ----
  {
    "courseCode": "CHEM 1309/1109",
    "courseName": "Chemistry for Engrs/Lab",
    "campus": "Edinburg",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am - 12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },

  // ---- CHEM 1311/1111 ----
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "campus": "Edinburg",
    "tutorName": "Miranda Villasenor",
    "days": {
      "Monday": "11:30am - 12:15pm & 2:30pm - 3:15pm",
      "Tuesday": "9:45am - 12:45pm",
      "Wednesday": "11:30am - 12:15pm & 2:30pm - 3:15pm & 5:00pm - 6:00pm",
      "Thursday": "10:00am - 1:00pm & 3:30pm - 4:30pm",
      "Friday": "10:00am - 12:00pm"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "campus": "Edinburg",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "12:00pm - 4:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "campus": "Edinburg",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am - 1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "campus": "Edinburg",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "campus": "Edinburg",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am - 12:45pm",
      "Tuesday": "9:00am - 10:45am",
      "Wednesday": "9:00am - 10:45am & 7:00pm - 8:00pm",
      "Thursday": "9:00am - 12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "campus": "Edinburg",
    "tutorName": "Amanda Villa",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 10:30am",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 10:30am",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm - 4:45pm",
      "Tuesday": "11:00am - 1:30pm",
      "Wednesday": "2:45pm - 6:45pm",
      "Thursday": "2:45pm - 5:00pm",
      "Friday": "9:45am - 12:00pm"
    }
  },

  // ---- CHEM 1312/1112 ----
  {
    "courseCode": "CHEM 1312/1112",
    "courseName": "General Chemistry II/Lab",
    "campus": "Edinburg",
    "tutorName": "Miranda Villasenor",
    "days": {
      "Monday": "11:30am - 12:15pm & 2:30pm - 3:15pm",
      "Tuesday": "9:45am - 12:45pm",
      "Wednesday": "11:30am - 12:15pm & 2:30pm - 3:15pm & 5:00pm - 6:00pm",
      "Thursday": "10:00am - 1:00pm & 3:30pm - 4:30pm",
      "Friday": "10:00am - 12:00pm"
    }
  },
  {
    "courseCode": "CHEM 1312/1112",
    "courseName": "General Chemistry II/Lab",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1312/1112",
    "courseName": "General Chemistry II/Lab",
    "campus": "Edinburg",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am - 2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1312/1112",
    "courseName": "General Chemistry II/Lab",
    "campus": "Edinburg",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am - 12:45pm",
      "Tuesday": "9:00am - 10:45am",
      "Wednesday": "9:00am - 10:45am & 7:00pm - 8:00pm",
      "Thursday": "9:00am - 12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1312/1112",
    "courseName": "General Chemistry II/Lab",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm - 4:45pm",
      "Tuesday": "11:00am - 1:30pm",
      "Wednesday": "2:45pm - 6:45pm",
      "Thursday": "2:45pm - 5:00pm",
      "Friday": "9:45am - 12:00pm"
    }
  },

  // ---- CHEM 2323/2123 ----
  {
    "courseCode": "CHEM 2323/2123",
    "courseName": "Organic Chemistry I/Lab",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 2323/2123",
    "courseName": "Organic Chemistry I/Lab",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 2323/2123",
    "courseName": "Organic Chemistry I/Lab",
    "campus": "Edinburg",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am - 12:45pm",
      "Tuesday": "9:00am - 10:45am",
      "Wednesday": "9:00am - 10:45am & 7:00pm - 8:00pm",
      "Thursday": "9:00am - 12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 2323/2123",
    "courseName": "Organic Chemistry I/Lab",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm - 4:45pm",
      "Tuesday": "11:00am - 1:30pm",
      "Wednesday": "2:45pm - 6:45pm",
      "Thursday": "2:45pm - 5:00pm",
      "Friday": "9:45am - 12:00pm"
    }
  },

  // ---- CHEM 2325/2125 ----
  {
    "courseCode": "CHEM 2325/2125",
    "courseName": "Organic Chemistry II/Lab",
    "campus": "Edinburg",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am - 11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 2325/2125",
    "courseName": "Organic Chemistry II/Lab",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },

  // ---- CHEM 3303 ----
  {
    "courseCode": "CHEM 3303",
    "courseName": "Biochemistry I",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },

  // ---- CHEM 4302 ----
  {
    "courseCode": "CHEM 4302",
    "courseName": "Advanced Biochemistry",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },

  // ---- CHEM 4320 ----
  {
    "courseCode": "CHEM 4320",
    "courseName": "Nutrition & Exercise Biochemistry",
    "campus": "Edinburg",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "OFF"
    }
  },

  // ---- CIVE 1101 ----
  {
    "courseCode": "CIVE 1101",
    "courseName": "Intro to Civil Engr",
    "campus": "Edinburg",
    "tutorName": "Gerardo Castillo",
    "days": {
      "Monday": "9:00am - 10:45am",
      "Tuesday": "9:30am - 10:45am",
      "Wednesday": "9:00am - 10:45am",
      "Thursday": "9:30am - 10:45am",
      "Friday": "9:00am - 11:00am"
    }
  },

  // ---- CIVE 2220 ----
  {
    "courseCode": "CIVE 2220",
    "courseName": "Civil Engr Measurements",
    "campus": "Edinburg",
    "tutorName": "Gerardo Castillo",
    "days": {
      "Monday": "9:00am - 10:45am",
      "Tuesday": "9:30am - 10:45am",
      "Wednesday": "9:00am - 10:45am",
      "Thursday": "9:30am - 10:45am",
      "Friday": "9:00am - 11:00am"
    }
  },
  {
    "courseCode": "CIVE 2220",
    "courseName": "Civil Engr Measurements",
    "campus": "Edinburg",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "9:00am - 10:00am"
    }
  },

  // ---- CIVE 2350 ----
  {
    "courseCode": "CIVE 2350",
    "courseName": "Numerical Methods",
    "campus": "Edinburg",
    "tutorName": "Gerardo Castillo",
    "days": {
      "Monday": "9:00am - 10:45am",
      "Tuesday": "9:30am - 10:45am",
      "Wednesday": "9:00am - 10:45am",
      "Thursday": "9:30am - 10:45am",
      "Friday": "9:00am - 11:00am"
    }
  },

  // ---- CIVE 3315 ----
  {
    "courseCode": "CIVE 3315",
    "courseName": "Fluid Mechanics",
    "campus": "Edinburg",
    "tutorName": "Gerardo Castillo",
    "days": {
      "Monday": "9:00am - 10:45am",
      "Tuesday": "9:30am - 10:45am",
      "Wednesday": "9:00am - 10:45am",
      "Thursday": "9:30am - 10:45am",
      "Friday": "9:00am - 11:00am"
    }
  },

  // ---- CIVE 3321 ----
  {
    "courseCode": "CIVE 3321",
    "courseName": "Mechanics of Materials",
    "campus": "Edinburg",
    "tutorName": "Gerardo Castillo",
    "days": {
      "Monday": "9:00am - 10:45am",
      "Tuesday": "9:30am - 10:45am",
      "Wednesday": "9:00am - 10:45am",
      "Thursday": "9:30am - 10:45am",
      "Friday": "9:00am - 11:00am"
    }
  },

  // ---- CIVE 3440 ----
  {
    "courseCode": "CIVE 3440",
    "courseName": "CE Materials",
    "campus": "Edinburg",
    "tutorName": "Gerardo Castillo",
    "days": {
      "Monday": "9:00am - 10:45am",
      "Tuesday": "9:30am - 10:45am",
      "Wednesday": "9:00am - 10:45am",
      "Thursday": "9:30am - 10:45am",
      "Friday": "9:00am - 11:00am"
    }
  },

  // ---- CLSC 2429 ----
  {
    "courseCode": "CLSC 2429",
    "courseName": "Clinic Micro",
    "campus": "Edinburg",
    "tutorName": "Amanda Villa",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 10:30am",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 10:30am",
      "Friday": "9:00am - 12:00pm"
    }
  },

  // ---- CSCI 1101 ----
  {
    "courseCode": "CSCI 1101",
    "courseName": "Intro to Computer Science",
    "campus": "Edinburg",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am - 1:15pm & 3:30pm - 4:30pm",
      "Wednesday": "11:45am - 1:45pm",
      "Thursday": "10:15am - 1:15pm",
      "Friday": "OFF"
    }
  },

  // ---- CSCI 1380 ----
  {
    "courseCode": "CSCI 1380",
    "courseName": "Intro to Programming Python",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },

  // ---- CSCI 1381 ----
  {
    "courseCode": "CSCI 1381",
    "courseName": "Intro to Programming C++",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },

  // ---- CSCI 1390 ----
  {
    "courseCode": "CSCI 1390",
    "courseName": "Intro to Programming II",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },

  // ---- CSCI 1470 ----
  {
    "courseCode": "CSCI 1470",
    "courseName": "Computer Science I",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 1470",
    "courseName": "Computer Science I",
    "campus": "Edinburg",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am - 1:15pm & 3:30pm - 4:30pm",
      "Wednesday": "11:45am - 1:45pm",
      "Thursday": "10:15am - 1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 1470",
    "courseName": "Computer Science I",
    "campus": "Edinburg",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:00am - 1:30pm",
      "Tuesday": "11:00am - 1:45pm",
      "Wednesday": "11:00am - 1:30pm",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "OFF"
    }
  },

  // ---- CSCI 2344 ----
  {
    "courseCode": "CSCI 2344",
    "courseName": "Programming in Unix/Linux",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },

  // ---- CSCI 2380 ----
  {
    "courseCode": "CSCI 2380",
    "courseName": "Computer Science II",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 2380",
    "courseName": "Computer Science II",
    "campus": "Edinburg",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am - 1:15pm & 3:30pm - 4:30pm",
      "Wednesday": "11:45am - 1:45pm",
      "Thursday": "10:15am - 1:15pm",
      "Friday": "OFF"
    }
  },

  // ---- CSCI 3329 ----
  {
    "courseCode": "CSCI 3329",
    "courseName": "Obj Oriented Prog in Python",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },

  // ---- CSCI 3334 ----
  {
    "courseCode": "CSCI 3334",
    "courseName": "Systems in Programming",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },

  // ---- ECON 2301 ----
  {
    "courseCode": "ECON 2301",
    "courseName": "Principles of Macroeconomics",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "11:00am - 2:00pm & 2:30pm - 5:00pm",
      "Tuesday": "11:00am - 12:15pm",
      "Wednesday": "11:00am - 1:45pm & 3:45pm - 8:00pm",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "OFF"
    }
  },

  // ---- ECON 2302 ----
  {
    "courseCode": "ECON 2302",
    "courseName": "Principles of Microeconomics",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "11:00am - 2:00pm & 2:30pm - 5:00pm",
      "Tuesday": "11:00am - 12:15pm",
      "Wednesday": "11:00am - 1:45pm & 3:45pm - 8:00pm",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "OFF"
    }
  },

  // ---- EECE 1101 ----
  {
    "courseCode": "EECE 1101",
    "courseName": "Intro to Elec & Comp Engr",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },

  // ---- EECE 2305 ----
  {
    "courseCode": "EECE 2305",
    "courseName": "Electric Circuits I",
    "campus": "Edinburg",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am - 12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },

  // ---- EECE 2306/2106 ----
  {
    "courseCode": "EECE 2306/2106",
    "courseName": "Digital Systems Engineering I/Lab",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 2306/2106",
    "courseName": "Digital Systems Engineering I/Lab",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:45am - 1:45pm & 3:30pm - 4:15pm",
      "Wednesday": "11:45am - 1:45pm & 3:30pm - 4:15pm",
      "Thursday": "11:45am - 5:00pm & 3:30pm - 4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 2306/2106",
    "courseName": "Digital Systems Engineering I/Lab",
    "campus": "Edinburg",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am - 1:15pm & 3:30pm - 4:30pm",
      "Wednesday": "11:45am - 1:45pm",
      "Thursday": "10:15am - 1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 2306/2106",
    "courseName": "Digital Systems Engineering I/Lab",
    "campus": "Edinburg",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am - 12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },

  // ---- EECE 2317 ----
  {
    "courseCode": "EECE 2317",
    "courseName": "Electronic Systems",
    "campus": "Edinburg",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am - 1:00pm & 3:30pm - 4:45pm",
      "Tuesday": "9:00am - 1:00pm & 3:30pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm & 3:30pm - 8:00pm",
      "Thursday": "3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- EECE 3331 ----
  {
    "courseCode": "EECE 3331",
    "courseName": "Microcontrol & Embedded Systems",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },

  // ---- EECE 3340 ----
  {
    "courseCode": "EECE 3340",
    "courseName": "Probability & Stats (Elec & Comp)",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },

  // ---- EECE 3435 ----
  {
    "courseCode": "EECE 3435",
    "courseName": "Microprocessor Systems",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },

  // ---- EECE 4303 ----
  {
    "courseCode": "EECE 4303",
    "courseName": "Digital Systems Engineering II",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },

  // ---- EECE 4380 ----
  {
    "courseCode": "EECE 4380",
    "courseName": "Computer Architecture",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },

  // ---- INFS 2300 ----
  {
    "courseCode": "INFS 2300",
    "courseName": "Data Modeling Management Tools",
    "campus": "Edinburg",
    "tutorName": "Daniela Celaya (Lead Tutor)",
    "days": {
      "Monday": "11:00am - 12:00pm",
      "Tuesday": "OFF",
      "Wednesday": "10:15am - 1:15pm",
      "Thursday": "10:15am - 1:15pm",
      "Friday": "OFF"
    }
  },

  // ---- MATH 1314, 1414 ----
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm - 4:45pm",
      "Tuesday": "11:00am - 1:30pm",
      "Wednesday": "2:45pm - 6:45pm",
      "Thursday": "2:45pm - 5:00pm",
      "Friday": "9:45am - 12:00pm"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:45am - 1:45pm & 3:30pm - 4:15pm",
      "Wednesday": "11:45am - 1:45pm & 3:30pm - 4:15pm",
      "Thursday": "11:45am - 5:00pm & 3:30pm - 4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Edinburg",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am - 1:15pm & 3:30pm - 4:30pm",
      "Wednesday": "11:45am - 1:45pm",
      "Thursday": "10:15am - 1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Edinburg",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:00am - 1:30pm",
      "Tuesday": "11:00am - 1:45pm",
      "Wednesday": "11:00am - 1:30pm",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Edinburg",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "9:00am - 10:00am"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Edinburg",
    "tutorName": "Paul Diaz (SI Mentor)",
    "days": {
      "Monday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Tuesday": "11:00am - 1:45pm & 3:30pm - 4:30pm",
      "Wednesday": "Mentor Duties",
      "Thursday": "Mentor Duties",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Edinburg",
    "tutorName": "Paulina Olvera Leal",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "4:00pm - 5:00pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "4:00pm - 5:00pm",
      "Friday": "BROWNSVILLE"
    }
  },

  // ---- MATH 1324 ----
  {
    "courseCode": "MATH 1324",
    "courseName": "Math for Business",
    "campus": "Edinburg",
    "tutorName": "Sebastian Sanchez Reyes",
    "days": {
      "Monday": "Lead Training",
      "Tuesday": "1:30pm - 4:15pm",
      "Wednesday": "Lead Training",
      "Thursday": "9:30am - 12:45pm",
      "Friday": "OFF"
    }
  },

  // ---- MATH 1342 ----
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "campus": "Edinburg",
    "tutorName": "Fernando Casanova",
    "days": {
      "Monday": "12:00pm - 3:45pm",
      "Tuesday": "1:00pm - 3:15pm",
      "Wednesday": "12:00pm - 3:45pm",
      "Thursday": "1:00pm - 3:15pm",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "campus": "Edinburg",
    "tutorName": "Amanda Villa",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 10:30am",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 10:30am",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "campus": "Edinburg",
    "tutorName": "Yaeli Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "10:00am - 2:00pm",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "11:00am - 2:00pm & 2:30pm - 5:00pm",
      "Tuesday": "11:00am - 12:15pm",
      "Wednesday": "11:00am - 1:45pm & 3:45pm - 8:00pm",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "OFF"
    }
  },

  // ---- MATH 1343 ----
  {
    "courseCode": "MATH 1343",
    "courseName": "Intro to Biostatistics",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "11:00am - 2:00pm & 2:30pm - 5:00pm",
      "Tuesday": "11:00am - 12:15pm",
      "Wednesday": "11:00am - 1:45pm & 3:45pm - 8:00pm",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1343",
    "courseName": "Intro to Biostatistics",
    "campus": "Edinburg",
    "tutorName": "Amanda Villa",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 10:30am",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 10:30am",
      "Friday": "9:00am - 12:00pm"
    }
  },

  // ---- MATH 2318 ----
  {
    "courseCode": "MATH 2318",
    "courseName": "Linear Algebra",
    "campus": "Edinburg",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "9:00am - 10:00am"
    }
  },
  {
    "courseCode": "MATH 2318",
    "courseName": "Linear Algebra",
    "campus": "Edinburg",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- MATH 2346 ----
  {
    "courseCode": "MATH 2346",
    "courseName": "Math for EE & CE",
    "campus": "Edinburg",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am - 2:30pm",
      "Tuesday": "10:45am - 2:30pm",
      "Wednesday": "10:45am - 2:30pm",
      "Thursday": "12:15pm - 4:00pm",
      "Friday": "OFF"
    }
  },

  // ---- MATH 2412 ----
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Edinburg",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am - 1:15pm & 3:30pm - 4:30pm",
      "Wednesday": "11:45am - 1:45pm",
      "Thursday": "10:15am - 1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Edinburg",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:00am - 1:30pm",
      "Tuesday": "11:00am - 1:45pm",
      "Wednesday": "11:00am - 1:30pm",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Edinburg",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am - 12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Edinburg",
    "tutorName": "Jacob Villarreal",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:45am - 12:15pm",
      "Wednesday": "9:00am - 12:30pm",
      "Thursday": "10:45am - 12:15pm",
      "Friday": "9:00am - 10:30pm"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Edinburg",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "9:00am - 10:00am"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Edinburg",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- MATH 2413 ----
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:45am - 1:45pm & 3:30pm - 4:15pm",
      "Wednesday": "11:45am - 1:45pm & 3:30pm - 4:15pm",
      "Thursday": "11:45am - 5:00pm & 3:30pm - 4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am - 1:15pm & 3:30pm - 4:30pm",
      "Wednesday": "11:45am - 1:45pm",
      "Thursday": "10:15am - 1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:00am - 1:30pm",
      "Tuesday": "11:00am - 1:45pm",
      "Wednesday": "11:00am - 1:30pm",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am - 12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Miranda Villasenor",
    "days": {
      "Monday": "11:30am - 12:15pm & 2:30pm - 3:15pm",
      "Tuesday": "9:45am - 12:45pm",
      "Wednesday": "11:30am - 12:15pm & 2:30pm - 3:15pm & 5:00pm - 6:00pm",
      "Thursday": "10:00am - 1:00pm & 3:30pm - 4:30pm",
      "Friday": "10:00am - 12:00pm"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Valeria Ramirez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:15pm - 8:00pm",
      "Thursday": "3:45pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Jacob Villarreal",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:45am - 12:15pm",
      "Wednesday": "9:00am - 12:30pm",
      "Thursday": "10:45am - 12:15pm",
      "Friday": "9:00am - 10:30pm"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "9:00am - 10:00am"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am - 1:00pm & 3:30pm - 4:45pm",
      "Tuesday": "9:00am - 1:00pm & 3:30pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm & 3:30pm - 8:00pm",
      "Thursday": "3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Ethan De Leon",
    "days": {
      "Monday": "11:15am - 12:15pm",
      "Tuesday": "1:15pm - 3:15pm",
      "Wednesday": "Lead Training",
      "Thursday": "Lead Training",
      "Friday": "Lead Training"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Paul Diaz (SI Mentor)",
    "days": {
      "Monday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Tuesday": "11:00am - 1:45pm & 3:30pm - 4:30pm",
      "Wednesday": "Mentor Duties",
      "Thursday": "Mentor Duties",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- MATH 2414 ----
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:45am - 1:45pm & 3:30pm - 4:15pm",
      "Wednesday": "11:45am - 1:45pm & 3:30pm - 4:15pm",
      "Thursday": "11:45am - 5:00pm & 3:30pm - 4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Edinburg",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am - 1:15pm & 3:30pm - 4:30pm",
      "Wednesday": "11:45am - 1:45pm",
      "Thursday": "10:15am - 1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Edinburg",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:00am - 1:30pm",
      "Tuesday": "11:00am - 1:45pm",
      "Wednesday": "11:00am - 1:30pm",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Edinburg",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am - 12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Edinburg",
    "tutorName": "Valeria Ramirez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:15pm - 8:00pm",
      "Thursday": "3:45pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Edinburg",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "9:00am - 10:00am"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Edinburg",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am - 1:00pm & 3:30pm - 4:45pm",
      "Tuesday": "9:00am - 1:00pm & 3:30pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm & 3:30pm - 8:00pm",
      "Thursday": "3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Edinburg",
    "tutorName": "Paul Diaz (SI Mentor)",
    "days": {
      "Monday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Tuesday": "11:00am - 1:45pm & 3:30pm - 4:30pm",
      "Wednesday": "Mentor Duties",
      "Thursday": "Mentor Duties",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Edinburg",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- MATH 2415 ----
  {
    "courseCode": "MATH 2415",
    "courseName": "Calculus III",
    "campus": "Edinburg",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am - 1:00pm & 3:30pm - 4:45pm",
      "Tuesday": "9:00am - 1:00pm & 3:30pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm & 3:30pm - 8:00pm",
      "Thursday": "3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2415",
    "courseName": "Calculus III",
    "campus": "Edinburg",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- MATH 3341 ----
  {
    "courseCode": "MATH 3341",
    "courseName": "Differential Equations",
    "campus": "Edinburg",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- MECE 1101 ----
  {
    "courseCode": "MECE 1101",
    "courseName": "Intro to Mechanical Engineering",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:45am - 1:45pm & 3:30pm - 4:15pm",
      "Wednesday": "11:45am - 1:45pm & 3:30pm - 4:15pm",
      "Thursday": "11:45am - 5:00pm & 3:30pm - 4:15pm",
      "Friday": "OFF"
    }
  },

  // ---- MECE 2301 ----
  {
    "courseCode": "MECE 2301",
    "courseName": "Statics",
    "campus": "Edinburg",
    "tutorName": "Valeria Ramirez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:15pm - 8:00pm",
      "Thursday": "3:45pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 2301",
    "courseName": "Statics",
    "campus": "Edinburg",
    "tutorName": "Jacob Villarreal",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:45am - 12:15pm",
      "Wednesday": "9:00am - 12:30pm",
      "Thursday": "10:45am - 12:15pm",
      "Friday": "9:00am - 10:30pm"
    }
  },
  {
    "courseCode": "MECE 2301",
    "courseName": "Statics",
    "campus": "Edinburg",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "9:00am - 10:00am"
    }
  },
  {
    "courseCode": "MECE 2301",
    "courseName": "Statics",
    "campus": "Edinburg",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am - 1:00pm & 3:30pm - 4:45pm",
      "Tuesday": "9:00am - 1:00pm & 3:30pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm & 3:30pm - 8:00pm",
      "Thursday": "3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 2301",
    "courseName": "Statics",
    "campus": "Edinburg",
    "tutorName": "Ethan De Leon",
    "days": {
      "Monday": "11:15am - 12:15pm",
      "Tuesday": "1:15pm - 3:15pm",
      "Wednesday": "Lead Training",
      "Thursday": "Lead Training",
      "Friday": "Lead Training"
    }
  },

  // ---- MECE 2302 ----
  {
    "courseCode": "MECE 2302",
    "courseName": "Dynamics",
    "campus": "Edinburg",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am - 1:00pm & 3:30pm - 4:45pm",
      "Tuesday": "9:00am - 1:00pm & 3:30pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm & 3:30pm - 8:00pm",
      "Thursday": "3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- MECE 2340/2140 ----
  {
    "courseCode": "MECE 2340/2140",
    "courseName": "Engineering Materials/Lab",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:45am - 1:45pm & 3:30pm - 4:15pm",
      "Wednesday": "11:45am - 1:45pm & 3:30pm - 4:15pm",
      "Thursday": "11:45am - 5:00pm & 3:30pm - 4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 2340/2140",
    "courseName": "Engineering Materials/Lab",
    "campus": "Edinburg",
    "tutorName": "Valeria Ramirez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:15pm - 8:00pm",
      "Thursday": "3:45pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 2340/2140",
    "courseName": "Engineering Materials/Lab",
    "campus": "Edinburg",
    "tutorName": "Jacob Villarreal",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:45am - 12:15pm",
      "Wednesday": "9:00am - 12:30pm",
      "Thursday": "10:45am - 12:15pm",
      "Friday": "9:00am - 10:30pm"
    }
  },

  // ---- MECE 3304 ----
  {
    "courseCode": "MECE 3304",
    "courseName": "System Dynamics",
    "campus": "Edinburg",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am - 1:00pm & 3:30pm - 4:45pm",
      "Tuesday": "9:00am - 1:00pm & 3:30pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm & 3:30pm - 8:00pm",
      "Thursday": "3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- MECE 3335 ----
  {
    "courseCode": "MECE 3335",
    "courseName": "Thermodynamics I",
    "campus": "Edinburg",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am - 1:00pm & 3:30pm - 4:45pm",
      "Tuesday": "9:00am - 1:00pm & 3:30pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm & 3:30pm - 8:00pm",
      "Thursday": "3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- MECE 3440 ----
  {
    "courseCode": "MECE 3440",
    "courseName": "Mechanical Engineering Analysis",
    "campus": "Edinburg",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am - 1:00pm & 3:30pm - 4:45pm",
      "Tuesday": "9:00am - 1:00pm & 3:30pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm & 3:30pm - 8:00pm",
      "Thursday": "3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- MUSI (Edinburg - Marisol Mejia) ----
  {
    "courseCode": "MUSI 1116",
    "courseName": "ET & SS I",
    "campus": "Edinburg",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Wednesday": "6:30pm - 8:00pm EPAC C1.108",
      "Thursday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Friday": "9:00am - 12:00pm; EPAC C1.108"
    }
  },
  {
    "courseCode": "MUSI 1117",
    "courseName": "ET & SS II",
    "campus": "Edinburg",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Wednesday": "6:30pm - 8:00pm EPAC C1.108",
      "Thursday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Friday": "9:00am - 12:00pm; EPAC C1.108"
    }
  },
  {
    "courseCode": "MUSI 1211",
    "courseName": "Music Theory I",
    "campus": "Edinburg",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Wednesday": "6:30pm - 8:00pm EPAC C1.108",
      "Thursday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Friday": "9:00am - 12:00pm; EPAC C1.108"
    }
  },
  {
    "courseCode": "MUSI 1212",
    "courseName": "Music Theory II",
    "campus": "Edinburg",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Wednesday": "6:30pm - 8:00pm EPAC C1.108",
      "Thursday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Friday": "9:00am - 12:00pm; EPAC C1.108"
    }
  },
  {
    "courseCode": "MUSI 1301",
    "courseName": "Fundamentals of Music",
    "campus": "Edinburg",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Wednesday": "6:30pm - 8:00pm EPAC C1.108",
      "Thursday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Friday": "9:00am - 12:00pm; EPAC C1.108"
    }
  },
  {
    "courseCode": "MUSI 2116",
    "courseName": "ET & SS III",
    "campus": "Edinburg",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Wednesday": "6:30pm - 8:00pm EPAC C1.108",
      "Thursday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Friday": "9:00am - 12:00pm; EPAC C1.108"
    }
  },
  {
    "courseCode": "MUSI 2117",
    "courseName": "ET & SS IV",
    "campus": "Edinburg",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Wednesday": "6:30pm - 8:00pm EPAC C1.108",
      "Thursday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Friday": "9:00am - 12:00pm; EPAC C1.108"
    }
  },
  {
    "courseCode": "MUSI 2211",
    "courseName": "Music Theory III",
    "campus": "Edinburg",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Wednesday": "6:30pm - 8:00pm EPAC C1.108",
      "Thursday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Friday": "9:00am - 12:00pm; EPAC C1.108"
    }
  },
  {
    "courseCode": "MUSI 2212",
    "courseName": "Music Theory IV",
    "campus": "Edinburg",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Wednesday": "6:30pm - 8:00pm EPAC C1.108",
      "Thursday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Friday": "9:00am - 12:00pm; EPAC C1.108"
    }
  },
  {
    "courseCode": "MUSI 3211",
    "courseName": "Musical Form & Analysis",
    "campus": "Edinburg",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Wednesday": "6:30pm - 8:00pm EPAC C1.108",
      "Thursday": "9:00am - 12:00pm; EPAC C1.108 & 2:45pm - 5:00pm; EPAC C1.108",
      "Friday": "9:00am - 12:00pm; EPAC C1.108"
    }
  },

  // ---- Nursing (Edinburg) ----
  {
    "courseCode": "Nursing",
    "courseName": "1st Semester",
    "campus": "Edinburg",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "12:00pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "Nursing",
    "courseName": "1st Semester",
    "campus": "Edinburg",
    "tutorName": "Linda Ceaser",
    "days": {
      "Monday": "Calendar",
      "Tuesday": "Calendar",
      "Wednesday": "Calendar",
      "Thursday": "Calendar",
      "Friday": "Calendar"
    }
  },
  {
    "courseCode": "Nursing",
    "courseName": "1st Semester",
    "campus": "Edinburg",
    "tutorName": "Johnmarc Candelaria",
    "days": {
      "Monday": "Calendar",
      "Tuesday": "Calendar",
      "Wednesday": "Calendar",
      "Thursday": "Calendar",
      "Friday": "Calendar"
    }
  },
  {
    "courseCode": "Nursing",
    "courseName": "2nd Semester",
    "campus": "Edinburg",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "12:00pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "Nursing",
    "courseName": "2nd Semester",
    "campus": "Edinburg",
    "tutorName": "Linda Ceaser",
    "days": {
      "Monday": "Calendar",
      "Tuesday": "Calendar",
      "Wednesday": "Calendar",
      "Thursday": "Calendar",
      "Friday": "Calendar"
    }
  },
  {
    "courseCode": "Nursing",
    "courseName": "2nd Semester",
    "campus": "Edinburg",
    "tutorName": "Johnmarc Candelaria",
    "days": {
      "Monday": "Calendar",
      "Tuesday": "Calendar",
      "Wednesday": "Calendar",
      "Thursday": "Calendar",
      "Friday": "Calendar"
    }
  },
  {
    "courseCode": "Nursing",
    "courseName": "3rd Semester",
    "campus": "Edinburg",
    "tutorName": "Linda Ceaser",
    "days": {
      "Monday": "Calendar",
      "Tuesday": "Calendar",
      "Wednesday": "Calendar",
      "Thursday": "Calendar",
      "Friday": "Calendar"
    }
  },
  {
    "courseCode": "Nursing",
    "courseName": "3rd Semester",
    "campus": "Edinburg",
    "tutorName": "Johnmarc Candelaria",
    "days": {
      "Monday": "Calendar",
      "Tuesday": "Calendar",
      "Wednesday": "Calendar",
      "Thursday": "Calendar",
      "Friday": "Calendar"
    }
  },
  {
    "courseCode": "Nursing",
    "courseName": "4th Semester",
    "campus": "Edinburg",
    "tutorName": "Linda Ceaser",
    "days": {
      "Monday": "Calendar",
      "Tuesday": "Calendar",
      "Wednesday": "Calendar",
      "Thursday": "Calendar",
      "Friday": "Calendar"
    }
  },
  {
    "courseCode": "Nursing",
    "courseName": "4th Semester",
    "campus": "Edinburg",
    "tutorName": "Johnmarc Candelaria",
    "days": {
      "Monday": "Calendar",
      "Tuesday": "Calendar",
      "Wednesday": "Calendar",
      "Thursday": "Calendar",
      "Friday": "Calendar"
    }
  },

  // ---- PHYS 1401 ----
  {
    "courseCode": "PHYS 1401",
    "courseName": "General Physics I",
    "campus": "Edinburg",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am - 12:45pm",
      "Tuesday": "9:00am - 10:45am",
      "Wednesday": "9:00am - 10:45am & 7:00pm - 8:00pm",
      "Thursday": "9:00am - 12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 1401",
    "courseName": "General Physics I",
    "campus": "Edinburg",
    "tutorName": "Paul Diaz (SI Mentor)",
    "days": {
      "Monday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Tuesday": "11:00am - 1:45pm & 3:30pm - 4:30pm",
      "Wednesday": "Mentor Duties",
      "Thursday": "Mentor Duties",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 1401",
    "courseName": "General Physics I",
    "campus": "Edinburg",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- PHYS 1402 ----
  {
    "courseCode": "PHYS 1402",
    "courseName": "General Physics II",
    "campus": "Edinburg",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- PHYS 2425 ----
  {
    "courseCode": "PHYS 2425",
    "courseName": "Physics for Sci & Engr I",
    "campus": "Edinburg",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am - 12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am - 12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },
  {
    "courseCode": "PHYS 2425",
    "courseName": "Physics for Sci & Engr I",
    "campus": "Edinburg",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am - 1:00pm & 3:30pm - 4:45pm",
      "Tuesday": "9:00am - 1:00pm & 3:30pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm & 3:30pm - 8:00pm",
      "Thursday": "3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 2425",
    "courseName": "Physics for Sci & Engr I",
    "campus": "Edinburg",
    "tutorName": "Ethan De Leon",
    "days": {
      "Monday": "11:15am - 12:15pm",
      "Tuesday": "1:15pm - 3:15pm",
      "Wednesday": "Lead Training",
      "Thursday": "Lead Training",
      "Friday": "Lead Training"
    }
  },
  {
    "courseCode": "PHYS 2425",
    "courseName": "Physics for Sci & Engr I",
    "campus": "Edinburg",
    "tutorName": "Paul Diaz (SI Mentor)",
    "days": {
      "Monday": "9:00am - 10:45am & 3:30pm - 5:00pm",
      "Tuesday": "11:00am - 1:45pm & 3:30pm - 4:30pm",
      "Wednesday": "Mentor Duties",
      "Thursday": "Mentor Duties",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 2425",
    "courseName": "Physics for Sci & Engr I",
    "campus": "Edinburg",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- PHYS 2426 ----
  {
    "courseCode": "PHYS 2426",
    "courseName": "Physics for Sci & Engr II",
    "campus": "Edinburg",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm",
      "Friday": "9:00am - 10:00am"
    }
  },
  {
    "courseCode": "PHYS 2426",
    "courseName": "Physics for Sci & Engr II",
    "campus": "Edinburg",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am - 1:00pm & 3:30pm - 4:45pm",
      "Tuesday": "9:00am - 1:00pm & 3:30pm - 5:00pm",
      "Wednesday": "11:00am - 1:00pm & 3:30pm - 8:00pm",
      "Thursday": "3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 2426",
    "courseName": "Physics for Sci & Engr II",
    "campus": "Edinburg",
    "tutorName": "Ethan De Leon",
    "days": {
      "Monday": "11:15am - 12:15pm",
      "Tuesday": "1:15pm - 3:15pm",
      "Wednesday": "Lead Training",
      "Thursday": "Lead Training",
      "Friday": "Lead Training"
    }
  },
  {
    "courseCode": "PHYS 2426",
    "courseName": "Physics for Sci & Engr II",
    "campus": "Edinburg",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- PHYS 2327 ----
  {
    "courseCode": "PHYS 2327",
    "courseName": "Physics for Sci & Engr III",
    "campus": "Edinburg",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "9:00am - 12:00pm & 2:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- QUMT 2341 ----
  {
    "courseCode": "QUMT 2341",
    "courseName": "Business Statistics I",
    "campus": "Edinburg",
    "tutorName": "Fernando Casanova",
    "days": {
      "Monday": "12:00pm - 3:45pm",
      "Tuesday": "1:00pm - 3:15pm",
      "Wednesday": "12:00pm - 3:45pm",
      "Thursday": "1:00pm - 3:15pm",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "QUMT 2341",
    "courseName": "Business Statistics I",
    "campus": "Edinburg",
    "tutorName": "Daniela Celaya (Lead Tutor)",
    "days": {
      "Monday": "11:00am - 12:00pm",
      "Tuesday": "OFF",
      "Wednesday": "10:15am - 1:15pm",
      "Thursday": "10:15am - 1:15pm",
      "Friday": "OFF"
    }
  },

  // ---- QUMT 2398 ----
  {
    "courseCode": "QUMT 2398",
    "courseName": "Decision Analytics",
    "campus": "Edinburg",
    "tutorName": "Daniela Celaya (Lead Tutor)",
    "days": {
      "Monday": "11:00am - 12:00pm",
      "Tuesday": "OFF",
      "Wednesday": "10:15am - 1:15pm",
      "Thursday": "10:15am - 1:15pm",
      "Friday": "OFF"
    }
  },

  // ---- QUMT 3341 ----
  {
    "courseCode": "QUMT 3341",
    "courseName": "Business Statistics II",
    "campus": "Edinburg",
    "tutorName": "Daniela Celaya (Lead Tutor)",
    "days": {
      "Monday": "11:00am - 12:00pm",
      "Tuesday": "OFF",
      "Wednesday": "10:15am - 1:15pm",
      "Thursday": "10:15am - 1:15pm",
      "Friday": "OFF"
    }
  },

  // ---- SPAN 3313 ----
  {
    "courseCode": "SPAN 3313",
    "courseName": "Adv Grammar & Comp Heritage I",
    "campus": "Edinburg",
    "tutorName": "Paulina Olvera Leal",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "4:00pm - 5:00pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "4:00pm - 5:00pm",
      "Friday": "BROWNSVILLE"
    }
  },

  // ---- SPAN 3315 ----
  {
    "courseCode": "SPAN 3315",
    "courseName": "Adv Grammar & Comp Heritage II",
    "campus": "Edinburg",
    "tutorName": "Paulina Olvera Leal",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "4:00pm - 5:00pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "4:00pm - 5:00pm",
      "Friday": "BROWNSVILLE"
    }
  },

  // ============================================================
  // BROWNSVILLE CAMPUS
  // ============================================================

  // ---- ACCT 2301 (Brownsville) ----
  {
    "courseCode": "ACCT 2301",
    "courseName": "Intro to Financial Acct",
    "campus": "Brownsville",
    "tutorName": "Miranda Diaz",
    "days": {
      "Monday": "9:00am - 12:00pm & 3:30pm - 5:00pm",
      "Tuesday": "11:30am - 5:00pm",
      "Wednesday": "10:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ACCT 2301",
    "courseName": "Intro to Financial Acct",
    "campus": "Brownsville",
    "tutorName": "Jose Eduardo Sanchez Ramirez",
    "days": {
      "Monday": "Lead Training",
      "Tuesday": "OFF",
      "Wednesday": "9:00am - 10:45am & 2:00pm - 3:45pm",
      "Thursday": "Lead Training",
      "Friday": "9:00am - 10:00am"
    }
  },

  // ---- ACCT 2302 (Brownsville) ----
  {
    "courseCode": "ACCT 2302",
    "courseName": "Intro to Managerial Acct",
    "campus": "Brownsville",
    "tutorName": "Miranda Diaz",
    "days": {
      "Monday": "9:00am - 12:00pm & 3:30pm - 5:00pm",
      "Tuesday": "11:30am - 5:00pm",
      "Wednesday": "10:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },

  // ---- ASLI (Brownsville - Luz Anabel Martinez) ----
  {
    "courseCode": "ASLI 1310",
    "courseName": "ASL I",
    "campus": "Brownsville",
    "tutorName": "Luz Anabel Martinez",
    "days": {
      "Monday": "2:00pm - 5:00pm",
      "Tuesday": "12:00pm - 3:00pm",
      "Wednesday": "2:00pm - 5:00pm",
      "Thursday": "12:00pm - 3:00pm",
      "Friday": "10:00am - 1:00pm"
    }
  },
  {
    "courseCode": "ASLI 1320",
    "courseName": "ASL II",
    "campus": "Brownsville",
    "tutorName": "Luz Anabel Martinez",
    "days": {
      "Monday": "2:00pm - 5:00pm",
      "Tuesday": "12:00pm - 3:00pm",
      "Wednesday": "2:00pm - 5:00pm",
      "Thursday": "12:00pm - 3:00pm",
      "Friday": "10:00am - 1:00pm"
    }
  },
  {
    "courseCode": "ASLI 2310",
    "courseName": "ASL III",
    "campus": "Brownsville",
    "tutorName": "Luz Anabel Martinez",
    "days": {
      "Monday": "2:00pm - 5:00pm",
      "Tuesday": "12:00pm - 3:00pm",
      "Wednesday": "2:00pm - 5:00pm",
      "Thursday": "12:00pm - 3:00pm",
      "Friday": "10:00am - 1:00pm"
    }
  },
  {
    "courseCode": "ASLI 3310",
    "courseName": "ASL IV",
    "campus": "Brownsville",
    "tutorName": "Luz Anabel Martinez",
    "days": {
      "Monday": "2:00pm - 5:00pm",
      "Tuesday": "12:00pm - 3:00pm",
      "Wednesday": "2:00pm - 5:00pm",
      "Thursday": "12:00pm - 3:00pm",
      "Friday": "10:00am - 1:00pm"
    }
  },
  {
    "courseCode": "ASLI 3320",
    "courseName": "ASL V",
    "campus": "Brownsville",
    "tutorName": "Luz Anabel Martinez",
    "days": {
      "Monday": "2:00pm - 5:00pm",
      "Tuesday": "12:00pm - 3:00pm",
      "Wednesday": "2:00pm - 5:00pm",
      "Thursday": "12:00pm - 3:00pm",
      "Friday": "10:00am - 1:00pm"
    }
  },
  {
    "courseCode": "ASLI 3340",
    "courseName": "Intro to Classifiers",
    "campus": "Brownsville",
    "tutorName": "Luz Anabel Martinez",
    "days": {
      "Monday": "2:00pm - 5:00pm",
      "Tuesday": "12:00pm - 3:00pm",
      "Wednesday": "2:00pm - 5:00pm",
      "Thursday": "12:00pm - 3:00pm",
      "Friday": "10:00am - 1:00pm"
    }
  },

  // ---- BIOL / BMED (Brownsville - Luis Aguillon) ----
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "BMED 4250",
    "courseName": "Advanced Cell Biology",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "BMED 4260",
    "courseName": "Advanced Molecular Biology",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "BMED 4310",
    "courseName": "Medical Biochemistry",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "BMED 3102",
    "courseName": "Neurochemistry",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "CHEM 1311",
    "courseName": "General Chemistry I",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "CHEM 1312",
    "courseName": "General Chemistry II",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "CHEM 2323",
    "courseName": "Organic Chemistry I",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "PHYS 1401",
    "courseName": "General Physics I",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },
  {
    "courseCode": "PHYS 1402",
    "courseName": "General Physics II",
    "campus": "Brownsville",
    "tutorName": "Luis Aguillon (CSHR Mentor)",
    "days": {
      "Monday": "Mentor Duties",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 11:30am",
      "Thursday": "Mentor Duties",
      "Friday": "Mentor Duties"
    }
  },

  // ---- BIOL / BMED (Brownsville - Satya Olvera) ----
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Brownsville",
    "tutorName": "Satya Olvera",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 11:00am",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Brownsville",
    "tutorName": "Satya Olvera",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 11:00am",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Brownsville",
    "tutorName": "Satya Olvera",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 11:00am",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Brownsville",
    "tutorName": "Satya Olvera",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 11:00am",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "campus": "Brownsville",
    "tutorName": "Satya Olvera",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 11:00am",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "campus": "Brownsville",
    "tutorName": "Satya Olvera",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 11:00am",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "campus": "Brownsville",
    "tutorName": "Satya Olvera",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 11:00am",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "campus": "Brownsville",
    "tutorName": "Satya Olvera",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 11:00am",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },

  // ---- BIOL / BMED (Brownsville - Angel Rodriguez) ----
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Brownsville",
    "tutorName": "Angel Rodriguez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "9:30am - 11:30am",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Brownsville",
    "tutorName": "Angel Rodriguez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "9:30am - 11:30am",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "campus": "Brownsville",
    "tutorName": "Angel Rodriguez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "9:30am - 11:30am",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "campus": "Brownsville",
    "tutorName": "Angel Rodriguez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "9:30am - 11:30am",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 3102",
    "courseName": "Neurochemistry",
    "campus": "Brownsville",
    "tutorName": "Angel Rodriguez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "9:30am - 11:30am",
      "Friday": "OFF"
    }
  },

  // ---- BIOL / BMED / CHEM (Brownsville - Sofia Lerma) ----
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Brownsville",
    "tutorName": "Sofia Lerma",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 10:15am",
      "Wednesday": "9:00am - 12:15pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Brownsville",
    "tutorName": "Sofia Lerma",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 10:15am",
      "Wednesday": "9:00am - 12:15pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Brownsville",
    "tutorName": "Sofia Lerma",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 10:15am",
      "Wednesday": "9:00am - 12:15pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Brownsville",
    "tutorName": "Sofia Lerma",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 10:15am",
      "Wednesday": "9:00am - 12:15pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "campus": "Brownsville",
    "tutorName": "Sofia Lerma",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 10:15am",
      "Wednesday": "9:00am - 12:15pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "campus": "Brownsville",
    "tutorName": "Sofia Lerma",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 10:15am",
      "Wednesday": "9:00am - 12:15pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "campus": "Brownsville",
    "tutorName": "Sofia Lerma",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 10:15am",
      "Wednesday": "9:00am - 12:15pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "campus": "Brownsville",
    "tutorName": "Sofia Lerma",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 10:15am",
      "Wednesday": "9:00am - 12:15pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "BMED 3102",
    "courseName": "Neurochemistry",
    "campus": "Brownsville",
    "tutorName": "Sofia Lerma",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 10:15am",
      "Wednesday": "9:00am - 12:15pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "CHEM 1311",
    "courseName": "General Chemistry I",
    "campus": "Brownsville",
    "tutorName": "Sofia Lerma",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 10:15am",
      "Wednesday": "9:00am - 12:15pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 10:30am"
    }
  },

  // ---- BIOL / CHEM / MATH (Brownsville - Ashlyn Ramirez) ----
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Brownsville",
    "tutorName": "Ashlyn Ramirez",
    "days": {
      "Monday": "11:15am - 5:00pm",
      "Tuesday": "11:30am - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "12:00pm - 4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Brownsville",
    "tutorName": "Ashlyn Ramirez",
    "days": {
      "Monday": "11:15am - 5:00pm",
      "Tuesday": "11:30am - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "12:00pm - 4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311",
    "courseName": "General Chemistry I",
    "campus": "Brownsville",
    "tutorName": "Ashlyn Ramirez",
    "days": {
      "Monday": "11:15am - 5:00pm",
      "Tuesday": "11:30am - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "12:00pm - 4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Brownsville",
    "tutorName": "Ashlyn Ramirez",
    "days": {
      "Monday": "11:15am - 5:00pm",
      "Tuesday": "11:30am - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "12:00pm - 4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "campus": "Brownsville",
    "tutorName": "Ashlyn Ramirez",
    "days": {
      "Monday": "11:15am - 5:00pm",
      "Tuesday": "11:30am - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "12:00pm - 4:15pm",
      "Friday": "OFF"
    }
  },

  // ---- BIOL / CHEM / MATH (Brownsville - Joel Almaguer) ----
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:45am - 1:30pm & 3:30pm - 5:00pm",
      "Wednesday": "5:15pm - 8:00pm",
      "Thursday": "11:00am - 1:30pm & 3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:45am - 1:30pm & 3:30pm - 5:00pm",
      "Wednesday": "5:15pm - 8:00pm",
      "Thursday": "11:00am - 1:30pm & 3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:45am - 1:30pm & 3:30pm - 5:00pm",
      "Wednesday": "5:15pm - 8:00pm",
      "Thursday": "11:00am - 1:30pm & 3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311",
    "courseName": "General Chemistry I",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:45am - 1:30pm & 3:30pm - 5:00pm",
      "Wednesday": "5:15pm - 8:00pm",
      "Thursday": "11:00am - 1:30pm & 3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 2323",
    "courseName": "Organic Chemistry I",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:45am - 1:30pm & 3:30pm - 5:00pm",
      "Wednesday": "5:15pm - 8:00pm",
      "Thursday": "11:00am - 1:30pm & 3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:45am - 1:30pm & 3:30pm - 5:00pm",
      "Wednesday": "5:15pm - 8:00pm",
      "Thursday": "11:00am - 1:30pm & 3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1343",
    "courseName": "Introduction to Biostatistics",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:45am - 1:30pm & 3:30pm - 5:00pm",
      "Wednesday": "5:15pm - 8:00pm",
      "Thursday": "11:00am - 1:30pm & 3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Precalculus",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:45am - 1:30pm & 3:30pm - 5:00pm",
      "Wednesday": "5:15pm - 8:00pm",
      "Thursday": "11:00am - 1:30pm & 3:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- BIOL / CHEM / CLSC (Brownsville - Ximena Navarro) ----
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Brownsville",
    "tutorName": "Ximena Navarro",
    "days": {
      "Monday": "9:30am - 10:45am",
      "Tuesday": "OFF",
      "Wednesday": "9:30am - 10:45am & 2:15pm - 5:45pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Brownsville",
    "tutorName": "Ximena Navarro",
    "days": {
      "Monday": "9:30am - 10:45am",
      "Tuesday": "OFF",
      "Wednesday": "9:30am - 10:45am & 2:15pm - 5:45pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "CHEM 1311",
    "courseName": "General Chemistry I",
    "campus": "Brownsville",
    "tutorName": "Ximena Navarro",
    "days": {
      "Monday": "9:30am - 10:45am",
      "Tuesday": "OFF",
      "Wednesday": "9:30am - 10:45am & 2:15pm - 5:45pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "CLSC 2429",
    "courseName": "Clinical Microbiology",
    "campus": "Brownsville",
    "tutorName": "Ximena Navarro",
    "days": {
      "Monday": "9:30am - 10:45am",
      "Tuesday": "OFF",
      "Wednesday": "9:30am - 10:45am & 2:15pm - 5:45pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },

  // ---- BIOL / CHEM / MATH / PHYS (Brownsville - Kevin Torres-Vega) ----
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 1:30pm",
      "Tuesday": "11:30am - 1:30pm",
      "Wednesday": "11:15am - 5:00pm & 5:45pm - 8:00pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 1:30pm",
      "Tuesday": "11:30am - 1:30pm",
      "Wednesday": "11:15am - 5:00pm & 5:45pm - 8:00pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 1:30pm",
      "Tuesday": "11:30am - 1:30pm",
      "Wednesday": "11:15am - 5:00pm & 5:45pm - 8:00pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 1:30pm",
      "Tuesday": "11:30am - 1:30pm",
      "Wednesday": "11:15am - 5:00pm & 5:45pm - 8:00pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "CHEM 1311",
    "courseName": "General Chemistry I",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 1:30pm",
      "Tuesday": "11:30am - 1:30pm",
      "Wednesday": "11:15am - 5:00pm & 5:45pm - 8:00pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "PHYS 1401",
    "courseName": "General Physics I",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 1:30pm",
      "Tuesday": "11:30am - 1:30pm",
      "Wednesday": "11:15am - 5:00pm & 5:45pm - 8:00pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 1:30pm",
      "Tuesday": "11:30am - 1:30pm",
      "Wednesday": "11:15am - 5:00pm & 5:45pm - 8:00pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },

  // ---- BIOL / MATH / NUTR (Brownsville - Sienna Ochoa) ----
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Brownsville",
    "tutorName": "Sienna Ochoa",
    "days": {
      "Monday": "3:30pm - 5:00pm",
      "Tuesday": "10:00am - 1:00pm & 2:00pm - 5:00pm",
      "Wednesday": "3:30pm - 6:00pm",
      "Thursday": "11:00am - 1:00pm",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "NUTR 2351",
    "courseName": "Introduction to Clinical Nutrition",
    "campus": "Brownsville",
    "tutorName": "Sienna Ochoa",
    "days": {
      "Monday": "3:30pm - 5:00pm",
      "Tuesday": "10:00am - 1:00pm & 2:00pm - 5:00pm",
      "Wednesday": "3:30pm - 6:00pm",
      "Thursday": "11:00am - 1:00pm",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Brownsville",
    "tutorName": "Sienna Ochoa",
    "days": {
      "Monday": "3:30pm - 5:00pm",
      "Tuesday": "10:00am - 1:00pm & 2:00pm - 5:00pm",
      "Wednesday": "3:30pm - 6:00pm",
      "Thursday": "11:00am - 1:00pm",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "campus": "Brownsville",
    "tutorName": "Sienna Ochoa",
    "days": {
      "Monday": "3:30pm - 5:00pm",
      "Tuesday": "10:00am - 1:00pm & 2:00pm - 5:00pm",
      "Wednesday": "3:30pm - 6:00pm",
      "Thursday": "11:00am - 1:00pm",
      "Friday": "9:00am - 12:00pm"
    }
  },

  // ---- CSCI / EECE / MATH (Brownsville - Daniel Aguirre) ----
  {
    "courseCode": "CSCI 4334",
    "courseName": "Operating Systems",
    "campus": "Brownsville",
    "tutorName": "Daniel Aguirre",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:00pm",
      "Wednesday": "11:45am - 1:45pm",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Brownsville",
    "tutorName": "Daniel Aguirre",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:00pm",
      "Wednesday": "11:45am - 1:45pm",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1324",
    "courseName": "Math for Business",
    "campus": "Brownsville",
    "tutorName": "Daniel Aguirre",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:00pm",
      "Wednesday": "11:45am - 1:45pm",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Brownsville",
    "tutorName": "Daniel Aguirre",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:00pm",
      "Wednesday": "11:45am - 1:45pm",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },

  // ---- ECON / INFS / MGMT / MARK / MATH (Brownsville - Jesus Munoz) ----
  {
    "courseCode": "ECON 2301",
    "courseName": "Principles of Macroeconomics",
    "campus": "Brownsville",
    "tutorName": "Jesus Munoz",
    "days": {
      "Monday": "12:30pm - 5:00pm",
      "Tuesday": "OFF",
      "Wednesday": "12:30pm - 4:30pm & 5:00pm - 8:00pm",
      "Thursday": "1:15pm - 4:45pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ECON 2302",
    "courseName": "Principles of Microeconomics",
    "campus": "Brownsville",
    "tutorName": "Jesus Munoz",
    "days": {
      "Monday": "12:30pm - 5:00pm",
      "Tuesday": "OFF",
      "Wednesday": "12:30pm - 4:30pm & 5:00pm - 8:00pm",
      "Thursday": "1:15pm - 4:45pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "INFS 2300",
    "courseName": "Data Modeling Management Tools",
    "campus": "Brownsville",
    "tutorName": "Jesus Munoz",
    "days": {
      "Monday": "12:30pm - 5:00pm",
      "Tuesday": "OFF",
      "Wednesday": "12:30pm - 4:30pm & 5:00pm - 8:00pm",
      "Thursday": "1:15pm - 4:45pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MGMT 3361",
    "courseName": "Principles of Management",
    "campus": "Brownsville",
    "tutorName": "Jesus Munoz",
    "days": {
      "Monday": "12:30pm - 5:00pm",
      "Tuesday": "OFF",
      "Wednesday": "12:30pm - 4:30pm & 5:00pm - 8:00pm",
      "Thursday": "1:15pm - 4:45pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MARK 3300",
    "courseName": "Principles of Marketing",
    "campus": "Brownsville",
    "tutorName": "Jesus Munoz",
    "days": {
      "Monday": "12:30pm - 5:00pm",
      "Tuesday": "OFF",
      "Wednesday": "12:30pm - 4:30pm & 5:00pm - 8:00pm",
      "Thursday": "1:15pm - 4:45pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1324",
    "courseName": "Math for Business",
    "campus": "Brownsville",
    "tutorName": "Jesus Munoz",
    "days": {
      "Monday": "12:30pm - 5:00pm",
      "Tuesday": "OFF",
      "Wednesday": "12:30pm - 4:30pm & 5:00pm - 8:00pm",
      "Thursday": "1:15pm - 4:45pm",
      "Friday": "OFF"
    }
  },

  // ---- MATH 1342 (Brownsville - Samira Almaguer Lead Tutor) ----
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "campus": "Brownsville",
    "tutorName": "Samira Almaguer (Lead Tutor)",
    "days": {
      "Monday": "10:00am - 12:00pm",
      "Tuesday": "OFF",
      "Wednesday": "10:00am - 12:00pm",
      "Thursday": "Lead Duties",
      "Friday": "OFF"
    }
  },

  // ---- CSCI / EECE / MATH (Brownsville - Marcos Ontiveros Lead Tutor) ----
  {
    "courseCode": "CSCI 1470",
    "courseName": "Computer Science I",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "Lead Duties",
      "Tuesday": "10:00am - 11:30am",
      "Wednesday": "5:00pm - 7:00pm",
      "Thursday": "10:00am - 12:30pm & 2:30pm - 3:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 2380",
    "courseName": "Computer Science II",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "Lead Duties",
      "Tuesday": "10:00am - 11:30am",
      "Wednesday": "5:00pm - 7:00pm",
      "Thursday": "10:00am - 12:30pm & 2:30pm - 3:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 3328",
    "courseName": "Object Oriented Programming in C#",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "Lead Duties",
      "Tuesday": "10:00am - 11:30am",
      "Wednesday": "5:00pm - 7:00pm",
      "Thursday": "10:00am - 12:30pm & 2:30pm - 3:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 1101",
    "courseName": "Intro to Electric & Computer Engineering",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "Lead Duties",
      "Tuesday": "10:00am - 11:30am",
      "Wednesday": "5:00pm - 7:00pm",
      "Thursday": "10:00am - 12:30pm & 2:30pm - 3:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 2306",
    "courseName": "Digital Systems Engineering I",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "Lead Duties",
      "Tuesday": "10:00am - 11:30am",
      "Wednesday": "5:00pm - 7:00pm",
      "Thursday": "10:00am - 12:30pm & 2:30pm - 3:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 3435",
    "courseName": "Microprocessor Systems",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "Lead Duties",
      "Tuesday": "10:00am - 11:30am",
      "Wednesday": "5:00pm - 7:00pm",
      "Thursday": "10:00am - 12:30pm & 2:30pm - 3:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 4303",
    "courseName": "Digital Systems Engineering II",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "Lead Duties",
      "Tuesday": "10:00am - 11:30am",
      "Wednesday": "5:00pm - 7:00pm",
      "Thursday": "10:00am - 12:30pm & 2:30pm - 3:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "Lead Duties",
      "Tuesday": "10:00am - 11:30am",
      "Wednesday": "5:00pm - 7:00pm",
      "Thursday": "10:00am - 12:30pm & 2:30pm - 3:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "Lead Duties",
      "Tuesday": "10:00am - 11:30am",
      "Wednesday": "5:00pm - 7:00pm",
      "Thursday": "10:00am - 12:30pm & 2:30pm - 3:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "Lead Duties",
      "Tuesday": "10:00am - 11:30am",
      "Wednesday": "5:00pm - 7:00pm",
      "Thursday": "10:00am - 12:30pm & 2:30pm - 3:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 3341",
    "courseName": "Differential Equations",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "Lead Duties",
      "Tuesday": "10:00am - 11:30am",
      "Wednesday": "5:00pm - 7:00pm",
      "Thursday": "10:00am - 12:30pm & 2:30pm - 3:15pm",
      "Friday": "OFF"
    }
  },

  // ---- CHEM / EECE / MATH / PHYS (Brownsville - Kenneth Davis) ----
  {
    "courseCode": "CHEM 1309/1109",
    "courseName": "Chemistry for Engrs/Lab",
    "campus": "Brownsville",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Tuesday": "EDINBURG",
      "Wednesday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Thursday": "EDINBURG",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "EECE 2305",
    "courseName": "Electric Circuits I",
    "campus": "Brownsville",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Tuesday": "EDINBURG",
      "Wednesday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Thursday": "EDINBURG",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "EECE 2306/2106",
    "courseName": "Digital Systems Engrs I/Lab",
    "campus": "Brownsville",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Tuesday": "EDINBURG",
      "Wednesday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Thursday": "EDINBURG",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "MATH 2346",
    "courseName": "Math for EE & CE",
    "campus": "Brownsville",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Tuesday": "EDINBURG",
      "Wednesday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Thursday": "EDINBURG",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Brownsville",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Tuesday": "EDINBURG",
      "Wednesday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Thursday": "EDINBURG",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Brownsville",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Tuesday": "EDINBURG",
      "Wednesday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Thursday": "EDINBURG",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Brownsville",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Tuesday": "EDINBURG",
      "Wednesday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Thursday": "EDINBURG",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "PHYS 2425",
    "courseName": "Physics for Sci & Engr I",
    "campus": "Brownsville",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Tuesday": "EDINBURG",
      "Wednesday": "9:30am - 10:45am & 2:00pm - 3:15pm",
      "Thursday": "EDINBURG",
      "Friday": "9:00am - 10:30am"
    }
  },

  // ---- MECE / MATH (Brownsville - Samuel Jaquin Perez) ----
  {
    "courseCode": "MECE 1101",
    "courseName": "Introduction to Mechanical Engr",
    "campus": "Brownsville",
    "tutorName": "Samuel Jaquin Perez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:15pm - 5:00pm",
      "Wednesday": "10:00am - 11:45am & 5:45pm - 8:00pm",
      "Thursday": "2:45pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 1221",
    "courseName": "Engineering Graphics",
    "campus": "Brownsville",
    "tutorName": "Samuel Jaquin Perez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:15pm - 5:00pm",
      "Wednesday": "10:00am - 11:45am & 5:45pm - 8:00pm",
      "Thursday": "2:45pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Brownsville",
    "tutorName": "Samuel Jaquin Perez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:15pm - 5:00pm",
      "Wednesday": "10:00am - 11:45am & 5:45pm - 8:00pm",
      "Thursday": "2:45pm - 5:00pm",
      "Friday": "OFF"
    }
  },

  // ---- MATH (Brownsville - Alejandra Ramos Arevalo) ----
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Wednesday": "12:30pm - 4:00pm",
      "Thursday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Wednesday": "12:30pm - 4:00pm",
      "Thursday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Wednesday": "12:30pm - 4:00pm",
      "Thursday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Wednesday": "12:30pm - 4:00pm",
      "Thursday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "MATH 2415",
    "courseName": "Calculus III",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Wednesday": "12:30pm - 4:00pm",
      "Thursday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "MATH 2318",
    "courseName": "Linear Algebra",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Wednesday": "12:30pm - 4:00pm",
      "Thursday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "MATH 3341",
    "courseName": "Differential Equations",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Wednesday": "12:30pm - 4:00pm",
      "Thursday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Friday": "9:00am - 10:30am"
    }
  },
  {
    "courseCode": "STAT 3337",
    "courseName": "Probability & Statistics",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Wednesday": "12:30pm - 4:00pm",
      "Thursday": "9:00am - 12:00pm & 1:00pm - 5:00pm",
      "Friday": "9:00am - 10:30am"
    }
  },

  // ---- MATH (Brownsville - Angel Morales) ----
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Brownsville",
    "tutorName": "Angel Morales",
    "days": {
      "Monday": "11:00am - 1:00pm",
      "Tuesday": "9:00am - 12:30pm & 3:30pm - 5:00pm",
      "Wednesday": "3:30pm - 5:30pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Brownsville",
    "tutorName": "Angel Morales",
    "days": {
      "Monday": "11:00am - 1:00pm",
      "Tuesday": "9:00am - 12:30pm & 3:30pm - 5:00pm",
      "Wednesday": "3:30pm - 5:30pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Brownsville",
    "tutorName": "Angel Morales",
    "days": {
      "Monday": "11:00am - 1:00pm",
      "Tuesday": "9:00am - 12:30pm & 3:30pm - 5:00pm",
      "Wednesday": "3:30pm - 5:30pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Brownsville",
    "tutorName": "Angel Morales",
    "days": {
      "Monday": "11:00am - 1:00pm",
      "Tuesday": "9:00am - 12:30pm & 3:30pm - 5:00pm",
      "Wednesday": "3:30pm - 5:30pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },
  {
    "courseCode": "MATH 3341",
    "courseName": "Differential Equations",
    "campus": "Brownsville",
    "tutorName": "Angel Morales",
    "days": {
      "Monday": "11:00am - 1:00pm",
      "Tuesday": "9:00am - 12:30pm & 3:30pm - 5:00pm",
      "Wednesday": "3:30pm - 5:30pm",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm"
    }
  },

  // ---- INFS (Brownsville - Miranda Diaz) ----
  {
    "courseCode": "INFS 2300",
    "courseName": "Data Modeling Management Tools",
    "campus": "Brownsville",
    "tutorName": "Miranda Diaz",
    "days": {
      "Monday": "9:00am - 12:00pm & 3:30pm - 5:00pm",
      "Tuesday": "11:30am - 5:00pm",
      "Wednesday": "10:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },

  // ---- INFS / MATH (Brownsville - Jose Eduardo Sanchez Ramirez) ----
  {
    "courseCode": "INFS 2300",
    "courseName": "Data Modeling Management Tools",
    "campus": "Brownsville",
    "tutorName": "Jose Eduardo Sanchez Ramirez",
    "days": {
      "Monday": "Lead Training",
      "Tuesday": "OFF",
      "Wednesday": "9:00am - 10:45am & 2:00pm - 3:45pm",
      "Thursday": "Lead Training",
      "Friday": "9:00am - 10:00am"
    }
  },
  {
    "courseCode": "MATH 1324",
    "courseName": "Math for Business",
    "campus": "Brownsville",
    "tutorName": "Jose Eduardo Sanchez Ramirez",
    "days": {
      "Monday": "Lead Training",
      "Tuesday": "OFF",
      "Wednesday": "9:00am - 10:45am & 2:00pm - 3:45pm",
      "Thursday": "Lead Training",
      "Friday": "9:00am - 10:00am"
    }
  },

  // ---- ECON (Brownsville - Miranda Diaz) ----
  {
    "courseCode": "ECON 2301",
    "courseName": "Principles of Macroeconomics",
    "campus": "Brownsville",
    "tutorName": "Miranda Diaz",
    "days": {
      "Monday": "9:00am - 12:00pm & 3:30pm - 5:00pm",
      "Tuesday": "11:30am - 5:00pm",
      "Wednesday": "10:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },

  // ---- MUSI (Brownsville - Karen Galan) ----
  {
    "courseCode": "MUSI 1116",
    "courseName": "ET & SS I",
    "campus": "Brownsville",
    "tutorName": "Karen Galan",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:00pm - 8:00pm; BMSLC 3.205",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MUSI 1117",
    "courseName": "ET & SS II",
    "campus": "Brownsville",
    "tutorName": "Karen Galan",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:00pm - 8:00pm; BMSLC 3.206",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MUSI 1211",
    "courseName": "Music Theory I",
    "campus": "Brownsville",
    "tutorName": "Karen Galan",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:00pm - 8:00pm; BMSLC 3.207",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MUSI 1212",
    "courseName": "Music Theory II",
    "campus": "Brownsville",
    "tutorName": "Karen Galan",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:00pm - 8:00pm; BMSLC 3.208",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MUSI 1301",
    "courseName": "Fundamentals of Music",
    "campus": "Brownsville",
    "tutorName": "Karen Galan",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:00pm - 8:00pm; BMSLC 3.209",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MUSI 2116",
    "courseName": "ET & SS III",
    "campus": "Brownsville",
    "tutorName": "Karen Galan",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:00pm - 8:00pm; BMSLC 3.210",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MUSI 2117",
    "courseName": "ET & SS IV",
    "campus": "Brownsville",
    "tutorName": "Karen Galan",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:00pm - 8:00pm; BMSLC 3.211",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MUSI 2211",
    "courseName": "Music Theory III",
    "campus": "Brownsville",
    "tutorName": "Karen Galan",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:00pm - 8:00pm; BMSLC 3.212",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MUSI 2212",
    "courseName": "Music Theory IV",
    "campus": "Brownsville",
    "tutorName": "Karen Galan",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:00pm - 8:00pm; BMSLC 3.213",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MUSI 3211",
    "courseName": "Musical Form & Analysis",
    "campus": "Brownsville",
    "tutorName": "Karen Galan",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:00pm - 8:00pm; BMSLC 3.214",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },

  // ---- MUSI (Brownsville - Ivan Melendez) ----
  {
    "courseCode": "MUSI 1116",
    "courseName": "ET & SS I",
    "campus": "Brownsville",
    "tutorName": "Ivan Melendez",
    "days": {
      "Monday": "5:00pm - 6:30pm; BMSLC 3.204",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:00pm; BMSLC 3.205",
      "Friday": "9:00am - 11:00am; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 1117",
    "courseName": "ET & SS II",
    "campus": "Brownsville",
    "tutorName": "Ivan Melendez",
    "days": {
      "Monday": "5:00pm - 6:30pm; BMSLC 3.204",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:00pm; BMSLC 3.205",
      "Friday": "9:00am - 11:00am; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 1211",
    "courseName": "Music Theory I",
    "campus": "Brownsville",
    "tutorName": "Ivan Melendez",
    "days": {
      "Monday": "5:00pm - 6:30pm; BMSLC 3.204",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:00pm; BMSLC 3.205",
      "Friday": "9:00am - 11:00am; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 1212",
    "courseName": "Music Theory II",
    "campus": "Brownsville",
    "tutorName": "Ivan Melendez",
    "days": {
      "Monday": "5:00pm - 6:30pm; BMSLC 3.204",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:00pm; BMSLC 3.205",
      "Friday": "9:00am - 11:00am; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 1301",
    "courseName": "Fundamentals of Music",
    "campus": "Brownsville",
    "tutorName": "Ivan Melendez",
    "days": {
      "Monday": "5:00pm - 6:30pm; BMSLC 3.204",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:00pm; BMSLC 3.205",
      "Friday": "9:00am - 11:00am; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 2116",
    "courseName": "ET & SS III",
    "campus": "Brownsville",
    "tutorName": "Ivan Melendez",
    "days": {
      "Monday": "5:00pm - 6:30pm; BMSLC 3.204",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:00pm; BMSLC 3.205",
      "Friday": "9:00am - 11:00am; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 2117",
    "courseName": "ET & SS IV",
    "campus": "Brownsville",
    "tutorName": "Ivan Melendez",
    "days": {
      "Monday": "5:00pm - 6:30pm; BMSLC 3.204",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:00pm; BMSLC 3.205",
      "Friday": "9:00am - 11:00am; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 2211",
    "courseName": "Music Theory III",
    "campus": "Brownsville",
    "tutorName": "Ivan Melendez",
    "days": {
      "Monday": "5:00pm - 6:30pm; BMSLC 3.204",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:00pm; BMSLC 3.205",
      "Friday": "9:00am - 11:00am; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 2212",
    "courseName": "Music Theory IV",
    "campus": "Brownsville",
    "tutorName": "Ivan Melendez",
    "days": {
      "Monday": "5:00pm - 6:30pm; BMSLC 3.204",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:00pm; BMSLC 3.205",
      "Friday": "9:00am - 11:00am; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 3211",
    "courseName": "Musical Form & Analysis",
    "campus": "Brownsville",
    "tutorName": "Ivan Melendez",
    "days": {
      "Monday": "5:00pm - 6:30pm; BMSLC 3.204",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:00pm; BMSLC 3.205",
      "Friday": "9:00am - 11:00am; BMSLC 1.206"
    }
  },

  // ---- MUSI (Brownsville - Jonathan Gonzales) ----
  {
    "courseCode": "MUSI 1116",
    "courseName": "ET & SS I",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Tuesday": "3:30pm - 4:30pm; BMSLC 1.206",
      "Wednesday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 1117",
    "courseName": "ET & SS II",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Tuesday": "3:30pm - 4:30pm; BMSLC 1.206",
      "Wednesday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 1211",
    "courseName": "Music Theory I",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Tuesday": "3:30pm - 4:30pm; BMSLC 1.206",
      "Wednesday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 1212",
    "courseName": "Music Theory II",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Tuesday": "3:30pm - 4:30pm; BMSLC 1.206",
      "Wednesday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 1301",
    "courseName": "Fundamentals of Music",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Tuesday": "3:30pm - 4:30pm; BMSLC 1.206",
      "Wednesday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 2116",
    "courseName": "ET & SS III",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Tuesday": "3:30pm - 4:30pm; BMSLC 1.206",
      "Wednesday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 2117",
    "courseName": "ET & SS IV",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Tuesday": "3:30pm - 4:30pm; BMSLC 1.206",
      "Wednesday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 2211",
    "courseName": "Music Theory III",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Tuesday": "3:30pm - 4:30pm; BMSLC 1.206",
      "Wednesday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 2212",
    "courseName": "Music Theory IV",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Tuesday": "3:30pm - 4:30pm; BMSLC 1.206",
      "Wednesday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm; BMSLC 1.206"
    }
  },
  {
    "courseCode": "MUSI 3211",
    "courseName": "Musical Form & Analysis",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Tuesday": "3:30pm - 4:30pm; BMSLC 1.206",
      "Wednesday": "12:30pm - 1:30pm; BMSLC 3.204",
      "Thursday": "OFF",
      "Friday": "9:00am - 12:00pm; BMSLC 1.206"
    }
  },

  // ---- Nursing (Brownsville) ----
  {
    "courseCode": "NURSING",
    "courseName": "1st Semester",
    "campus": "Brownsville",
    "tutorName": "Camila Hinojosa",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "9:00am - 2:30pm",
      "Thursday": "12:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "NURSING",
    "courseName": "2nd Semester",
    "campus": "Brownsville",
    "tutorName": "Camila Hinojosa",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "9:00am - 2:30pm",
      "Thursday": "12:30pm - 5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "NURSING",
    "courseName": "1st Semester",
    "campus": "Brownsville",
    "tutorName": "Jose Salinas",
    "days": {
      "Monday": "Calendar",
      "Tuesday": "Calendar",
      "Wednesday": "Calendar",
      "Thursday": "Calendar",
      "Friday": "Calendar"
    }
  },
  {
    "courseCode": "NURSING",
    "courseName": "2nd Semester",
    "campus": "Brownsville",
    "tutorName": "Jose Salinas",
    "days": {
      "Monday": "Calendar",
      "Tuesday": "Calendar",
      "Wednesday": "Calendar",
      "Thursday": "Calendar",
      "Friday": "Calendar"
    }
  },
  {
    "courseCode": "NURSING",
    "courseName": "3rd Semester",
    "campus": "Brownsville",
    "tutorName": "Jose Salinas",
    "days": {
      "Monday": "Calendar",
      "Tuesday": "Calendar",
      "Wednesday": "Calendar",
      "Thursday": "Calendar",
      "Friday": "Calendar"
    }
  },
  {
    "courseCode": "NURSING",
    "courseName": "4th Semester",
    "campus": "Brownsville",
    "tutorName": "Jose Salinas",
    "days": {
      "Monday": "Calendar",
      "Tuesday": "Calendar",
      "Wednesday": "Calendar",
      "Thursday": "Calendar",
      "Friday": "Calendar"
    }
  }
];
