/*
  ============================================
  TUTOR SCHEDULE DATA
  ============================================
  This is the main data file.

  HOW TO EDIT THIS FILE:
  - Each item below represents one tutor entry.
  - You can change course names, tutor names, or day schedules.
  - Keep the same structure:
      courseCode
      courseName
      tutorName
      days: { Monday, Tuesday, Wednesday, Thursday, Friday }

  EXAMPLE:
  {
    courseCode: "CSCI 1101",
    courseName: "Intro to Computer Science",
    tutorName: "Jane Doe",
    days: {
      Monday: "1:00pm-3:00pm",
      Tuesday: "OFF",
      Wednesday: "1:00pm-3:00pm",
      Thursday: "OFF",
      Friday: "OFF"
    }
  }
*/

const AVAILABLE_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const TUTOR_SCHEDULE_DATA = 
[
  {
    "courseCode": "ACCT 2301",
    "courseName": "Intro to Financial Acct",
    "tutorName": "Cristian Gonzalez (Lead Tutor)",
    "days": {
      "Monday": "2:30pm-5:00pm",
      "Tuesday": "3:30pm-5:00pm",
      "Wednesday": "Brownsville",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "Lead Tutor Duties"
    }
  },
  {
    "courseCode": "ACCT 2301",
    "courseName": "Intro to Financial Acct",
    "tutorName": "Sebastian Sanchez Reyes",
    "days": {
      "Monday": "11:00am-12:15pm & 2:00pm-3:45pm",
      "Tuesday": "9:30am-1:00pm & 1:30pm-4:15pm",
      "Wednesday": "11:00am-12:15pm & 2:00pm-3:30pm",
      "Thursday": "9:30am-12:45pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ACCT 2301",
    "courseName": "Intro to Financial Acct",
    "tutorName": "Fernando Casanova",
    "days": {
      "Monday": "12:00pm-3:45pm",
      "Tuesday": "1:00pm-3:15pm",
      "Wednesday": "12:00pm-3:45pm",
      "Thursday": "1:00pm-3:15pm",
      "Friday": "9:00am-12:00pm"
    }
  },
  {
    "courseCode": "ACCT 2301",
    "courseName": "Intro to Financial Acct",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "11:00am-2:00pm & 2:30pm-5:00pm",
      "Tuesday": "11:00am-12:15pm",
      "Wednesday": "11:00am-1:45pm & 3:45pm-8:00pm",
      "Thursday": "11:00am-12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ACCT 2302",
    "courseName": "Intro to Managerial Acct",
    "tutorName": "Cristian Gonzalez (Lead Tutor)",
    "days": {
      "Monday": "2:30pm-5:00pm",
      "Tuesday": "3:30pm-5:00pm",
      "Wednesday": "Brownsville",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "Lead Tutor Duties"
    }
  },
  {
    "courseCode": "ACCT 2302",
    "courseName": "Intro to Managerial Acct",
    "tutorName": "Sebastian Sanchez Reyes",
    "days": {
      "Monday": "11:00am-12:15pm & 2:00pm-3:30pm",
      "Tuesday": "9:30am-1:00pm & 1:30pm-4:15pm",
      "Wednesday": "11:00am-12:15pm & 2:00pm-3:30pm",
      "Thursday": "9:30am-12:45pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ACCT 2302",
    "courseName": "Intro to Managerial Acct",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "11:00am-2:00pm & 2:30pm-5:00pm",
      "Tuesday": "11:00am-12:15pm",
      "Wednesday": "11:00am-1:45pm & 3:45pm-8:00pm",
      "Thursday": "11:00am-12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ACCT 3321",
    "courseName": "Intermediate Accounting I",
    "tutorName": "Cristian Gonzalez (Lead Tutor)",
    "days": {
      "Monday": "2:30pm-5:00pm",
      "Tuesday": "3:30pm-5:00pm",
      "Wednesday": "Brownsville",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "Lead Tutor Duties"
    }
  },
  {
    "courseCode": "ACCT 3322",
    "courseName": "Intermediate Accounting II",
    "tutorName": "Cristian Gonzalez (Lead Tutor)",
    "days": {
      "Monday": "2:30pm-5:00pm",
      "Tuesday": "3:30pm-5:00pm",
      "Wednesday": "Brownsville",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "Lead Tutor Duties"
    }
  },
  {
    "courseCode": "ACCT 3326",
    "courseName": "Accounting Info Systems",
    "tutorName": "Cristian Gonzalez (Lead Tutor)",
    "days": {
      "Monday": "2:30pm-5:00pm",
      "Tuesday": "3:30pm-5:00pm",
      "Wednesday": "Brownsville",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "Lead Tutor Duties"
    }
  },
  {
    "courseCode": "ASLI 1310",
    "courseName": "ASL I",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm-3:00pm & 4:00pm-6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm-6:00pm",
      "Thursday": "12:00pm-3:00pm & 4:00pm-6:00pm",
      "Friday": "12:30pm-3:00pm"
    }
  },
  {
    "courseCode": "ASLI 1310",
    "courseName": "ASL I",
    "tutorName": "Ruby Mendieta",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-3:00pm",
      "Wednesday": "4:00pm-8:00pm",
      "Thursday": "9:00am-3:00pm",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "ASLI 1310",
    "courseName": "ASL I",
    "tutorName": "Josue Peralta De Jesus",
    "days": {
      "Monday": "11:00am-12:30pm & 3:30pm-5:00pm",
      "Tuesday": "9:00am-12:00pm & 3:00pm-5:00pm",
      "Wednesday": "11:00am-1:00pm",
      "Thursday": "9:00am-12:00pm & 3:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ASLI 1310",
    "courseName": "ASL I",
    "tutorName": "Mario Salinas",
    "days": {
      "Monday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Tuesday": "9:00am-12:00pm & 2:00pm-5:00pm",
      "Wednesday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Thursday": "9:00am-12:00pm & 2:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ASLI 1320",
    "courseName": "ASL II",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm-3:00pm & 4:00pm-6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm-6:00pm",
      "Thursday": "12:00pm-3:00pm & 4:00pm-6:00pm",
      "Friday": "12:30pm-3:00pm"
    }
  },
  {
    "courseCode": "ASLI 1320",
    "courseName": "ASL II",
    "tutorName": "Ruby Mendieta",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-3:00pm",
      "Wednesday": "4:00pm-8:00pm",
      "Thursday": "9:00am-3:00pm",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "ASLI 1320",
    "courseName": "ASL II",
    "tutorName": "Josue Peralta De Jesus",
    "days": {
      "Monday": "11:00am-12:30pm & 3:30pm-5:00pm",
      "Tuesday": "9:00am-12:00pm & 3:00pm-5:00pm",
      "Wednesday": "11:00am-1:00pm",
      "Thursday": "9:00am-12:00pm & 3:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ASLI 1320",
    "courseName": "ASL II",
    "tutorName": "Mario Salinas",
    "days": {
      "Monday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Tuesday": "9:00am-12:00pm & 2:00pm-5:00pm",
      "Wednesday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Thursday": "9:00am-12:00pm & 2:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ASLI 2310",
    "courseName": "ASL III",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm-3:00pm & 4:00pm-6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm-6:00pm",
      "Thursday": "12:00pm-3:00pm & 4:00pm-6:00pm",
      "Friday": "12:30pm-3:00pm"
    }
  },
  {
    "courseCode": "ASLI 2310",
    "courseName": "ASL III",
    "tutorName": "Ruby Mendieta",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-3:00pm",
      "Wednesday": "4:00pm-8:00pm",
      "Thursday": "9:00am-3:00pm",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "ASLI 2310",
    "courseName": "ASL III",
    "tutorName": "Josue Peralta De Jesus",
    "days": {
      "Monday": "11:00am-12:30pm & 3:30pm-5:00pm",
      "Tuesday": "9:00am-12:00pm & 3:00pm-5:00pm",
      "Wednesday": "11:00am-1:00pm",
      "Thursday": "9:00am-12:00pm & 3:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ASLI 2310",
    "courseName": "ASL III",
    "tutorName": "Mario Salinas",
    "days": {
      "Monday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Tuesday": "9:00am-12:00pm & 2:00pm-5:00pm",
      "Wednesday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Thursday": "9:00am-12:00pm & 2:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ASLI 3310",
    "courseName": "ASL IV",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm-3:00pm & 4:00pm-6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm-6:00pm",
      "Thursday": "12:00pm-3:00pm & 4:00pm-6:00pm",
      "Friday": "12:30pm-3:00pm"
    }
  },
  {
    "courseCode": "ASLI 3310",
    "courseName": "ASL IV",
    "tutorName": "Ruby Mendieta",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-3:00pm",
      "Wednesday": "4:00pm-8:00pm",
      "Thursday": "9:00am-3:00pm",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "ASLI 3310",
    "courseName": "ASL IV",
    "tutorName": "Mario Salinas",
    "days": {
      "Monday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Tuesday": "9:00am-12:00pm & 2:00pm-5:00pm",
      "Wednesday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Thursday": "9:00am-12:00pm & 2:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ASLI 3320",
    "courseName": "ASL V",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm-3:00pm & 4:00pm-6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm-6:00pm",
      "Thursday": "12:00pm-3:00pm & 4:00pm-6:00pm",
      "Friday": "12:30pm-3:00pm"
    }
  },
  {
    "courseCode": "ASLI 3320",
    "courseName": "ASL V",
    "tutorName": "Ruby Mendieta",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-3:00pm",
      "Wednesday": "4:00pm-8:00pm",
      "Thursday": "9:00am-3:00pm",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "ASLI 3320",
    "courseName": "ASL V",
    "tutorName": "Mario Salinas",
    "days": {
      "Monday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Tuesday": "9:00am-12:00pm & 2:00pm-5:00pm",
      "Wednesday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Thursday": "9:00am-12:00pm & 2:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ASLI 3325",
    "courseName": "Interpreting I",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm-3:00pm & 4:00pm-6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm-6:00pm",
      "Thursday": "12:00pm-3:00pm & 4:00pm-6:00pm",
      "Friday": "12:30pm-3:00pm"
    }
  },
  {
    "courseCode": "ASLI 3325",
    "courseName": "Interpreting I",
    "tutorName": "Ruby Mendieta",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-3:00pm",
      "Wednesday": "4:00pm-8:00pm",
      "Thursday": "9:00am-3:00pm",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "ASLI 3340",
    "courseName": "Intro to Classifiers",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm-3:00pm & 4:00pm-6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm-6:00pm",
      "Thursday": "12:00pm-3:00pm & 4:00pm-6:00pm",
      "Friday": "12:30pm-3:00pm"
    }
  },
  {
    "courseCode": "ASLI 3340",
    "courseName": "Intro to Classifiers",
    "tutorName": "Ruby Mendieta",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-3:00pm",
      "Wednesday": "4:00pm-8:00pm",
      "Thursday": "9:00am-3:00pm",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "ASLI 3340",
    "courseName": "Intro to Classifiers",
    "tutorName": "Mario Salinas",
    "days": {
      "Monday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Tuesday": "9:00am-12:00pm & 2:00pm-5:00pm",
      "Wednesday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Thursday": "9:00am-12:00pm & 2:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ASLI 3345",
    "courseName": "Interpreting II",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "12:30pm-3:00pm & 4:00pm-6:00pm",
      "Tuesday": "OFF",
      "Wednesday": "4:00pm-6:00pm",
      "Thursday": "12:00pm-3:00pm & 4:00pm-6:00pm",
      "Friday": "12:30pm-3:00pm"
    }
  },
  {
    "courseCode": "ASLI 3345",
    "courseName": "Interpreting II",
    "tutorName": "Ruby Mendieta",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-3:00pm",
      "Wednesday": "4:00pm-8:00pm",
      "Thursday": "9:00am-3:00pm",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am-1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am-12:45pm",
      "Tuesday": "9:00am-10:45am",
      "Wednesday": "9:00am-10:45am & 7:00pm-8:00pm",
      "Thursday": "9:00am-12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm-4:45pm",
      "Tuesday": "11:00am-1:30pm",
      "Wednesday": "2:45pm-6:45pm",
      "Thursday": "2:45pm-5:00pm",
      "Friday": "9:45am-12:00pm"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am-1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am-12:45pm",
      "Tuesday": "9:00am-10:45am",
      "Wednesday": "9:00am-10:45am & 7:00pm-8:00pm",
      "Thursday": "9:00am-12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm-4:45pm",
      "Tuesday": "11:00am-1:30pm",
      "Wednesday": "2:45pm-6:45pm",
      "Thursday": "2:45pm-5:00pm",
      "Friday": "9:45am-12:00pm"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am-1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am-12:45pm",
      "Tuesday": "9:00am-10:45am",
      "Wednesday": "9:00am-10:45am & 7:00pm-8:00pm",
      "Thursday": "9:00am-12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "tutorName": "Amanda Villa",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-10:30am",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-10:30am",
      "Friday": "9:00am-12:00pm"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm-4:45pm",
      "Tuesday": "11:00am-1:30pm",
      "Wednesday": "2:45pm-6:45pm",
      "Thursday": "2:45pm-5:00pm",
      "Friday": "9:45am-12:00pm"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "tutorName": "Yaeli Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "10:00am-2:00pm",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am-1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "tutorName": "Amanda Villa",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-10:30am",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-10:30am",
      "Friday": "9:00am-12:00pm"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm-4:45pm",
      "Tuesday": "11:00am-1:30pm",
      "Wednesday": "2:45pm-6:45pm",
      "Thursday": "2:45pm-5:00pm",
      "Friday": "9:45am-12:00pm"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "12:00pm-4:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am-1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am-12:45pm",
      "Tuesday": "9:00am-10:45am",
      "Wednesday": "9:00am-10:45am & 7:00pm-8:00pm",
      "Thursday": "9:00am-12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "12:00pm-4:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am-1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am-12:45pm",
      "Tuesday": "9:00am-10:45am",
      "Wednesday": "9:00am-10:45am & 7:00pm-8:00pm",
      "Thursday": "9:00am-12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am-1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2301",
    "courseName": "Integrated Body Systems I",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am-12:45pm",
      "Tuesday": "9:00am-10:45am",
      "Wednesday": "9:00am-10:45am & 7:00pm-8:00pm",
      "Thursday": "9:00am-12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am-1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 2302",
    "courseName": "Integrated Body Systems II",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am-12:45pm",
      "Tuesday": "9:00am-10:45am",
      "Wednesday": "9:00am-10:45am & 7:00pm-8:00pm",
      "Thursday": "9:00am-12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4220",
    "courseName": "Medical Bioinformatics",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4230",
    "courseName": "Medical Genetics & Genomics",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4250",
    "courseName": "Advanced Cell Biology",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4250",
    "courseName": "Advanced Cell Biology",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4250",
    "courseName": "Advanced Cell Biology",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4260",
    "courseName": "Advanced Molecular Biology",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4260",
    "courseName": "Advanced Molecular Biology",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4260",
    "courseName": "Advanced Molecular Biology",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4310",
    "courseName": "Medical Biochemistry",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4310",
    "courseName": "Medical Biochemistry",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4310",
    "courseName": "Medical Biochemistry",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4310",
    "courseName": "Medical Biochemistry",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4380",
    "courseName": "Medical Neuroscience/Neurochemistry",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4380",
    "courseName": "Medical Neuroscience/Neurochemistry",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4380",
    "courseName": "Medical Neuroscience/Neurochemistry",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4380",
    "courseName": "Medical Neuroscience/Neurochemistry",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4440",
    "courseName": "Medical Microbiology",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4440",
    "courseName": "Medical Microbiology",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "BMED 4440",
    "courseName": "Medical Microbiology",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1309/1109",
    "courseName": "Chemistry for Engrs/Lab",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am-12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am-12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "tutorName": "Miranda Villasenor",
    "days": {
      "Monday": "11:30am-12:15pm & 2:30pm-3:15pm",
      "Tuesday": "9:45am-12:45pm",
      "Wednesday": "11:30am-12:15pm & 2:30pm-3:15pm & 5:00pm-6:00pm",
      "Thursday": "10:00am-1:00pm & 3:30pm-4:30pm",
      "Friday": "10:00am-12:00pm"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "12:00pm-4:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "tutorName": "Ilyssa Castillo",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:15am-1:15pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "tutorName": "Brianna Morin",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am-12:45pm",
      "Tuesday": "9:00am-10:45am",
      "Wednesday": "9:00am-10:45am & 7:00pm-8:00pm",
      "Thursday": "9:00am-12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "tutorName": "Amanda Villa",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-10:30am",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-10:30am",
      "Friday": "9:00am-12:00pm"
    }
  },
  {
    "courseCode": "CHEM 1311/1111",
    "courseName": "General Chemistry I/Lab",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm-4:45pm",
      "Tuesday": "11:00am-1:30pm",
      "Wednesday": "2:45pm-6:45pm",
      "Thursday": "2:45pm-5:00pm",
      "Friday": "9:45am-12:00pm"
    }
  },
  {
    "courseCode": "CHEM 1312/1112",
    "courseName": "General Chemistry II/Lab",
    "tutorName": "Miranda Villasenor",
    "days": {
      "Monday": "11:30am-12:15pm & 2:30pm-3:15pm",
      "Tuesday": "9:45am-12:45pm",
      "Wednesday": "11:30am-12:15pm & 2:30pm-3:15pm & 5:00pm-6:00pm",
      "Thursday": "10:00am-1:00pm & 3:30pm-4:30pm",
      "Friday": "10:00am-12:00pm"
    }
  },
  {
    "courseCode": "CHEM 1312/1112",
    "courseName": "General Chemistry II/Lab",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1312/1112",
    "courseName": "General Chemistry II/Lab",
    "tutorName": "Alyssa Guerra",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am-2:00pm",
      "Wednesday": "OFF",
      "Thursday": "11:00am-2:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1312/1112",
    "courseName": "General Chemistry II/Lab",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am-12:45pm",
      "Tuesday": "9:00am-10:45am",
      "Wednesday": "9:00am-10:45am & 7:00pm-8:00pm",
      "Thursday": "9:00am-12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 1312/1112",
    "courseName": "General Chemistry II/Lab",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm-4:45pm",
      "Tuesday": "11:00am-1:30pm",
      "Wednesday": "2:45pm-6:45pm",
      "Thursday": "2:45pm-5:00pm",
      "Friday": "9:45am-12:00pm"
    }
  },
  {
    "courseCode": "CHEM 2323/2123",
    "courseName": "Organic Chemistry I/Lab",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 2323/2123",
    "courseName": "Organic Chemistry I/Lab",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 2323/2123",
    "courseName": "Organic Chemistry I/Lab",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am-12:45pm",
      "Tuesday": "9:00am-10:45am",
      "Wednesday": "9:00am-10:45am & 7:00pm-8:00pm",
      "Thursday": "9:00am-12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 2323/2123",
    "courseName": "Organic Chemistry I/Lab",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm-4:45pm",
      "Tuesday": "11:00am-1:30pm",
      "Wednesday": "2:45pm-6:45pm",
      "Thursday": "2:45pm-5:00pm",
      "Friday": "9:45am-12:00pm"
    }
  },
  {
    "courseCode": "CHEM 2325/2125",
    "courseName": "Organic Chemistry II/Lab",
    "tutorName": "Ryanna Quintero",
    "days": {
      "Monday": "9:30am-11:30am",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 2325/2125",
    "courseName": "Organic Chemistry II/Lab",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 3303",
    "courseName": "Biochemistry I",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 4302",
    "courseName": "Advanced Biochemistry",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CHEM 4320",
    "courseName": "Nutrition & Exercise Biochemistry",
    "tutorName": "Maximiliano Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "OFF",
      "Thursday": "9:00am-12:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CIVE 1101",
    "courseName": "Intro to Civil Engr",
    "tutorName": "Gerardo Castillo",
    "days": {
      "Monday": "9:00am-10:45am",
      "Tuesday": "9:30am-10:45am",
      "Wednesday": "9:00am-10:45am",
      "Thursday": "9:30am-10:45am",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "CIVE 2220",
    "courseName": "Civil Engr Measurements",
    "tutorName": "Gerardo Castillo",
    "days": {
      "Monday": "9:00am-10:45am",
      "Tuesday": "9:30am-10:45am",
      "Wednesday": "9:00am-10:45am",
      "Thursday": "9:30am-10:45am",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "CIVE 2220",
    "courseName": "Civil Engr Measurements",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm",
      "Friday": "9:00am-10:00am"
    }
  },
  {
    "courseCode": "CIVE 2350",
    "courseName": "Numerical Methods",
    "tutorName": "Gerardo Castillo",
    "days": {
      "Monday": "9:00am-10:45am",
      "Tuesday": "9:30am-10:45am",
      "Wednesday": "9:00am-10:45am",
      "Thursday": "9:30am-10:45am",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "CIVE 3315",
    "courseName": "Fluid Mechanics",
    "tutorName": "Gerardo Castillo",
    "days": {
      "Monday": "9:00am-10:45am",
      "Tuesday": "9:30am-10:45am",
      "Wednesday": "9:00am-10:45am",
      "Thursday": "9:30am-10:45am",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "CIVE 3321",
    "courseName": "Mechanics of Materials",
    "tutorName": "Gerardo Castillo",
    "days": {
      "Monday": "9:00am-10:45am",
      "Tuesday": "9:30am-10:45am",
      "Wednesday": "9:00am-10:45am",
      "Thursday": "9:30am-10:45am",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "CIVE 3440",
    "courseName": "CE Materials",
    "tutorName": "Gerardo Castillo",
    "days": {
      "Monday": "9:00am-10:45am",
      "Tuesday": "9:30am-10:45am",
      "Wednesday": "9:00am-10:45am",
      "Thursday": "9:30am-10:45am",
      "Friday": "9:00am-11:00am"
    }
  },
  {
    "courseCode": "CLSC 2429",
    "courseName": "Clinic Micro",
    "tutorName": "Amanda Villa",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-10:30am",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-10:30am",
      "Friday": "9:00am-12:00pm"
    }
  },
  {
    "courseCode": "CSCI 1101",
    "courseName": "Intro to Computer Science",
    "tutorName": "Matthew Chapa",
    "days": {
      "Monday": "1:00pm-5:00pm",
      "Tuesday": "1:00pm-5:00pm",
      "Wednesday": "1:00pm-5:00pm",
      "Thursday": "1:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 1101",
    "courseName": "Intro to Computer Science",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am-1:15pm & 3:30pm-4:30pm",
      "Wednesday": "11:45am-1:45pm",
      "Thursday": "10:15am-1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 1380",
    "courseName": "Intro to Programming Python",
    "tutorName": "Matthew Chapa",
    "days": {
      "Monday": "1:00pm-5:00pm",
      "Tuesday": "1:00pm-5:00pm",
      "Wednesday": "1:00pm-5:00pm",
      "Thursday": "1:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 1380",
    "courseName": "Intro to Programming Python",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 1381",
    "courseName": "Intro to Programming C++",
    "tutorName": "Matthew Chapa",
    "days": {
      "Monday": "1:00pm-5:00pm",
      "Tuesday": "1:00pm-5:00pm",
      "Wednesday": "1:00pm-5:00pm",
      "Thursday": "1:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 1381",
    "courseName": "Intro to Programming C++",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 1390",
    "courseName": "Intro to Programming II",
    "tutorName": "Matthew Chapa",
    "days": {
      "Monday": "1:00pm-5:00pm",
      "Tuesday": "1:00pm-5:00pm",
      "Wednesday": "1:00pm-5:00pm",
      "Thursday": "1:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 1390",
    "courseName": "Intro to Programming II",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 1470",
    "courseName": "Computer Science I",
    "tutorName": "Matthew Chapa",
    "days": {
      "Monday": "1:00pm-5:00pm",
      "Tuesday": "1:00pm-5:00pm",
      "Wednesday": "1:00pm-5:00pm",
      "Thursday": "1:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 1470",
    "courseName": "Computer Science I",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 1470",
    "courseName": "Computer Science I",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am-1:15pm & 3:30pm-4:30pm",
      "Wednesday": "11:45am-1:45pm",
      "Thursday": "10:15am-1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 1470",
    "courseName": "Computer Science I",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:00am-1:30pm",
      "Tuesday": "11:00am-1:45pm",
      "Wednesday": "11:00am-1:30pm",
      "Thursday": "11:00am-12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 2344",
    "courseName": "Programming in Unix/Linux",
    "tutorName": "Matthew Chapa",
    "days": {
      "Monday": "1:00pm-5:00pm",
      "Tuesday": "1:00pm-5:00pm",
      "Wednesday": "1:00pm-5:00pm",
      "Thursday": "1:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 2380",
    "courseName": "Computer Science II",
    "tutorName": "Matthew Chapa",
    "days": {
      "Monday": "1:00pm-5:00pm",
      "Tuesday": "1:00pm-5:00pm",
      "Wednesday": "1:00pm-5:00pm",
      "Thursday": "1:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 2380",
    "courseName": "Computer Science II",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 2380",
    "courseName": "Computer Science II",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am-1:15pm & 3:30pm-4:30pm",
      "Wednesday": "11:45am-1:45pm",
      "Thursday": "10:15am-1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 3329",
    "courseName": "Obj Oriented Prog in Python",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 3333",
    "courseName": "Algorithms & Data Structures",
    "tutorName": "Matthew Chapa",
    "days": {
      "Monday": "1:00pm-5:00pm",
      "Tuesday": "1:00pm-5:00pm",
      "Wednesday": "1:00pm-5:00pm",
      "Thursday": "1:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 3334",
    "courseName": "Systems in Programming",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 3341",
    "courseName": "Software Engineering II",
    "tutorName": "Matthew Chapa",
    "days": {
      "Monday": "1:00pm-5:00pm",
      "Tuesday": "1:00pm-5:00pm",
      "Wednesday": "1:00pm-5:00pm",
      "Thursday": "1:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "CSCI 4325",
    "courseName": "Automata, Formal Languages & Computability",
    "tutorName": "Matthew Chapa",
    "days": {
      "Monday": "1:00pm-5:00pm",
      "Tuesday": "1:00pm-5:00pm",
      "Wednesday": "1:00pm-5:00pm",
      "Thursday": "1:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ECON 2301",
    "courseName": "Principles of Macroeconomics",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "11:00am-2:00pm & 2:30pm-5:00pm",
      "Tuesday": "11:00am-12:15pm",
      "Wednesday": "11:00am-1:45pm & 3:45pm-8:00pm",
      "Thursday": "11:00am-12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "ECON 2302",
    "courseName": "Principles of Microeconomics",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "11:00am-2:00pm & 2:30pm-5:00pm",
      "Tuesday": "11:00am-12:15pm",
      "Wednesday": "11:00am-1:45pm & 3:45pm-8:00pm",
      "Thursday": "11:00am-12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 1101",
    "courseName": "Intro to Elec & Comp Engr",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 2305",
    "courseName": "Electric Circuits I",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am-12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am-12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },
  {
    "courseCode": "EECE 2306/2106",
    "courseName": "Digital Systems Engr I/Lab",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 2306/2106",
    "courseName": "Digital Systems Engr I/Lab",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:45am-1:45pm & 3:30pm-4:15pm",
      "Wednesday": "11:45am-1:45pm & 3:30pm-4:15pm",
      "Thursday": "11:45am-5:00pm & 3:30pm-4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 2306/2106",
    "courseName": "Digital Systems Engr I/Lab",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am-1:15pm & 3:30pm-4:30pm",
      "Wednesday": "11:45am-1:45pm",
      "Thursday": "10:15am-1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 2306/2106",
    "courseName": "Digital Systems Engr I/Lab",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am-12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am-12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },
  {
    "courseCode": "EECE 2317",
    "courseName": "Electronic Systems",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am-1:00pm & 3:30pm-4:45pm",
      "Tuesday": "9:00am-1:00pm & 3:30pm-5:00pm",
      "Wednesday": "11:00am-1:00pm & 3:30pm-8:00pm",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 3331",
    "courseName": "Microcontrol & Embedded Systems",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 3340",
    "courseName": "Probability & Stats (Elec & Comp)",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 3435",
    "courseName": "Microprocessor Systems",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 4303",
    "courseName": "Digital Systems Engr II",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "EECE 4380",
    "courseName": "Computer Architecture",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "INFS 2300",
    "courseName": "Data Modeling Management Tools",
    "tutorName": "Daniela Celaya (Lead Tutor)",
    "days": {
      "Monday": "11:00am-12:00pm",
      "Tuesday": "OFF",
      "Wednesday": "10:15am-1:15pm",
      "Thursday": "10:15am-1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "2:45pm-4:45pm",
      "Tuesday": "11:00am-1:30pm",
      "Wednesday": "2:45pm-6:45pm",
      "Thursday": "2:45pm-5:00pm",
      "Friday": "9:45am-12:00pm"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:45am-1:45pm & 3:30pm-4:15pm",
      "Wednesday": "11:45am-1:45pm & 3:30pm-4:15pm",
      "Thursday": "11:45am-5:00pm & 3:30pm-4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am-1:15pm & 3:30pm-4:30pm",
      "Wednesday": "11:45am-1:45pm",
      "Thursday": "10:15am-1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:00am-1:30pm",
      "Tuesday": "11:00am-1:45pm",
      "Wednesday": "11:00am-1:30pm",
      "Thursday": "11:00am-12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm",
      "Friday": "9:00am-10:00am"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "tutorName": "Paul Diaz (SI Mentor)",
    "days": {
      "Monday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Tuesday": "11:00am-1:45pm & 3:30pm-4:30pm",
      "Wednesday": "Mentor Duties",
      "Thursday": "Mentor Duties",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "tutorName": "Paulina Olvera Leal",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "4:00pm-5:00pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "4:00pm-5:00pm",
      "Friday": "BROWNSVILLE"
    }
  },
  {
    "courseCode": "MATH 1324",
    "courseName": "Math for Business",
    "tutorName": "Sebastian Sanchez Reyes",
    "days": {
      "Monday": "11:00am-12:15pm & 2:00pm-3:30pm",
      "Tuesday": "9:30am-1:00pm & 1:30pm-4:15pm",
      "Wednesday": "11:00am-12:15pm & 2:00pm-3:30pm",
      "Thursday": "9:30am-12:45pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "tutorName": "Fernando Casanova",
    "days": {
      "Monday": "12:00pm-3:45pm",
      "Tuesday": "1:00pm-3:15pm",
      "Wednesday": "12:00pm-3:45pm",
      "Thursday": "1:00pm-3:15pm",
      "Friday": "9:00am-12:00pm"
    }
  },
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "tutorName": "Amanda Villa",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-10:30am",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-10:30am",
      "Friday": "9:00am-12:00pm"
    }
  },
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "tutorName": "Yaeli Benavidez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "10:00am-2:00pm",
      "Thursday": "OFF",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "11:00am-2:00pm & 2:30pm-5:00pm",
      "Tuesday": "11:00am-12:15pm",
      "Wednesday": "11:00am-1:45pm & 3:45pm-8:00pm",
      "Thursday": "11:00am-12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1343",
    "courseName": "Intro to Biostatistics",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "11:00am-2:00pm & 2:30pm-5:00pm",
      "Tuesday": "11:00am-12:15pm",
      "Wednesday": "11:00am-1:45pm & 3:45pm-8:00pm",
      "Thursday": "11:00am-12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 1343",
    "courseName": "Intro to Biostatistics",
    "tutorName": "Amanda Villa",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-10:30am",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-10:30am",
      "Friday": "9:00am-12:00pm"
    }
  },
  {
    "courseCode": "MATH 2318",
    "courseName": "Linear Algebra",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm",
      "Friday": "9:00am-10:00am"
    }
  },
  {
    "courseCode": "MATH 2318",
    "courseName": "Linear Algebra",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2346",
    "courseName": "Math for EE & CE",
    "tutorName": "Fernando Quiroz",
    "days": {
      "Monday": "10:45am-2:30pm",
      "Tuesday": "10:45am-2:30pm",
      "Wednesday": "10:45am-2:30pm",
      "Thursday": "12:15pm-4:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am-1:15pm & 3:30pm-4:30pm",
      "Wednesday": "11:45am-1:45pm",
      "Thursday": "10:15am-1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:00am-1:30pm",
      "Tuesday": "11:00am-1:45pm",
      "Wednesday": "11:00am-1:30pm",
      "Thursday": "11:00am-12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am-12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am-12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "tutorName": "Jacob Villarreal",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:45am-12:15pm",
      "Wednesday": "9:00am-12:30pm",
      "Thursday": "10:45am-12:15pm",
      "Friday": "9:00am-10:30am"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm",
      "Friday": "9:00am-10:00am"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:45am-1:45pm & 3:30pm-4:15pm",
      "Wednesday": "11:45am-1:45pm & 3:30pm-4:15pm",
      "Thursday": "11:45am-5:00pm & 3:30pm-4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am-1:15pm & 3:30pm-4:30pm",
      "Wednesday": "11:45am-1:45pm",
      "Thursday": "10:15am-1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:00am-1:30pm",
      "Tuesday": "11:00am-1:45pm",
      "Wednesday": "11:00am-1:30pm",
      "Thursday": "11:00am-12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am-12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am-12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "tutorName": "Miranda Villasenor",
    "days": {
      "Monday": "11:30am-12:15pm & 2:30pm-3:15pm",
      "Tuesday": "9:45am-12:45pm",
      "Wednesday": "11:30am-12:15pm & 2:30pm-3:15pm & 5:00pm-6:00pm",
      "Thursday": "10:00am-1:00pm & 3:30pm-4:30pm",
      "Friday": "10:00am-12:00pm"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "tutorName": "Valeria Ramirez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:15pm-8:00pm",
      "Thursday": "3:45pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "tutorName": "Jacob Villarreal",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:45am-12:15pm",
      "Wednesday": "9:00am-12:30pm",
      "Thursday": "10:45am-12:15pm",
      "Friday": "9:00am-10:30am"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm",
      "Friday": "9:00am-10:00am"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am-1:00pm & 3:30pm-4:45pm",
      "Tuesday": "9:00am-1:00pm & 3:30pm-5:00pm",
      "Wednesday": "11:00am-1:00pm & 3:30pm-8:00pm",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "tutorName": "Ethan De Leon",
    "days": {
      "Monday": "9:00am-12:15pm",
      "Tuesday": "1:15pm-4:00pm",
      "Wednesday": "9:00am-12:15pm",
      "Thursday": "1:15pm-4:00pm",
      "Friday": "9:00am-10:00am"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "tutorName": "Paul Diaz (SI Mentor)",
    "days": {
      "Monday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Tuesday": "11:00am-1:45pm & 3:30pm-4:30pm",
      "Wednesday": "Mentor Duties",
      "Thursday": "Mentor Duties",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:45am-1:45pm & 3:30pm-4:15pm",
      "Wednesday": "11:45am-1:45pm & 3:30pm-4:15pm",
      "Thursday": "11:45am-5:00pm & 3:30pm-4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "tutorName": "Edgar Bello Gonzalez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:15am-1:15pm & 3:30pm-4:30pm",
      "Wednesday": "11:45am-1:45pm",
      "Thursday": "10:15am-1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:00am-1:30pm",
      "Tuesday": "11:00am-1:45pm",
      "Wednesday": "11:00am-1:30pm",
      "Thursday": "11:00am-12:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am-12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am-12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "tutorName": "Valeria Ramirez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:15pm-8:00pm",
      "Thursday": "3:45pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm",
      "Friday": "9:00am-10:00am"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am-1:00pm & 3:30pm-4:45pm",
      "Tuesday": "9:00am-1:00pm & 3:30pm-5:00pm",
      "Wednesday": "11:00am-1:00pm & 3:30pm-8:00pm",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "tutorName": "Paul Diaz (SI Mentor)",
    "days": {
      "Monday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Tuesday": "11:00am-1:45pm & 3:30pm-4:30pm",
      "Wednesday": "Mentor Duties",
      "Thursday": "Mentor Duties",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2415",
    "courseName": "Calculus III",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am-1:00pm & 3:30pm-4:45pm",
      "Tuesday": "9:00am-1:00pm & 3:30pm-5:00pm",
      "Wednesday": "11:00am-1:00pm & 3:30pm-8:00pm",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 2415",
    "courseName": "Calculus III",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MATH 3341",
    "courseName": "Differential Equations",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 1101",
    "courseName": "Intro to Mechanical Engineering",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:45am-1:45pm & 3:30pm-4:15pm",
      "Wednesday": "11:45am-1:45pm & 3:30pm-4:15pm",
      "Thursday": "11:45am-5:00pm & 3:30pm-4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 2301",
    "courseName": "Statics",
    "tutorName": "Valeria Ramirez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:15pm-8:00pm",
      "Thursday": "3:45pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 2301",
    "courseName": "Statics",
    "tutorName": "Jacob Villarreal",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:45am-12:15pm",
      "Wednesday": "9:00am-12:30pm",
      "Thursday": "10:45am-12:15pm",
      "Friday": "9:00am-10:30am"
    }
  },
  {
    "courseCode": "MECE 2301",
    "courseName": "Statics",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm",
      "Friday": "9:00am-10:00am"
    }
  },
  {
    "courseCode": "MECE 2301",
    "courseName": "Statics",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am-1:00pm & 3:30pm-4:45pm",
      "Tuesday": "9:00am-1:00pm & 3:30pm-5:00pm",
      "Wednesday": "11:00am-1:00pm & 3:30pm-8:00pm",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 2301",
    "courseName": "Statics",
    "tutorName": "Ethan De Leon",
    "days": {
      "Monday": "9:00am-12:15pm",
      "Tuesday": "1:15pm-4:00pm",
      "Wednesday": "9:00am-12:15pm",
      "Thursday": "1:15pm-4:00pm",
      "Friday": "9:00am-10:00am"
    }
  },
  {
    "courseCode": "MECE 2302",
    "courseName": "Dynamics",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am-1:00pm & 3:30pm-4:45pm",
      "Tuesday": "9:00am-1:00pm & 3:30pm-5:00pm",
      "Wednesday": "11:00am-1:00pm & 3:30pm-8:00pm",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 2340/2140",
    "courseName": "Engineering Materials/Lab",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:45am-1:45pm & 3:30pm-4:15pm",
      "Wednesday": "11:45am-1:45pm & 3:30pm-4:15pm",
      "Thursday": "11:45am-5:00pm & 3:30pm-4:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 2340/2140",
    "courseName": "Engineering Materials/Lab",
    "tutorName": "Valeria Ramirez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "5:15pm-8:00pm",
      "Thursday": "3:45pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 2340/2140",
    "courseName": "Engineering Materials/Lab",
    "tutorName": "Jacob Villarreal",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:45am-12:15pm",
      "Wednesday": "9:00am-12:30pm",
      "Thursday": "10:45am-12:15pm",
      "Friday": "9:00am-10:30am"
    }
  },
  {
    "courseCode": "MECE 3304",
    "courseName": "System Dynamics",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am-1:00pm & 3:30pm-4:45pm",
      "Tuesday": "9:00am-1:00pm & 3:30pm-5:00pm",
      "Wednesday": "11:00am-1:00pm & 3:30pm-8:00pm",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 3335",
    "courseName": "Thermodynamics I",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am-1:00pm & 3:30pm-4:45pm",
      "Tuesday": "9:00am-1:00pm & 3:30pm-5:00pm",
      "Wednesday": "11:00am-1:00pm & 3:30pm-8:00pm",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MECE 3440",
    "courseName": "Mechanical Engineering Analysis",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am-1:00pm & 3:30pm-4:45pm",
      "Tuesday": "9:00am-1:00pm & 3:30pm-5:00pm",
      "Wednesday": "11:00am-1:00pm & 3:30pm-8:00pm",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "MUSI 1116",
    "courseName": "ET & SS I",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Wednesday": "6:30pm-8:00pm (EPAC C1.108)",
      "Thursday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Friday": "9:00am-12:00pm (EPAC C1.108)"
    }
  },
  {
    "courseCode": "MUSI 1117",
    "courseName": "ET & SS II",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Wednesday": "6:30pm-8:00pm (EPAC C1.108)",
      "Thursday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Friday": "9:00am-12:00pm (EPAC C1.108)"
    }
  },
  {
    "courseCode": "MUSI 1211",
    "courseName": "Music Theory I",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Wednesday": "6:30pm-8:00pm (EPAC C1.108)",
      "Thursday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Friday": "9:00am-12:00pm (EPAC C1.108)"
    }
  },
  {
    "courseCode": "MUSI 1212",
    "courseName": "Music Theory II",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Wednesday": "6:30pm-8:00pm (EPAC C1.108)",
      "Thursday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Friday": "9:00am-12:00pm (EPAC C1.108)"
    }
  },
  {
    "courseCode": "MUSI 1301",
    "courseName": "Fundamentals of Music",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Wednesday": "6:30pm-8:00pm (EPAC C1.108)",
      "Thursday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Friday": "9:00am-12:00pm (EPAC C1.108)"
    }
  },
  {
    "courseCode": "MUSI 2116",
    "courseName": "ET & SS III",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Wednesday": "6:30pm-8:00pm (EPAC C1.108)",
      "Thursday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Friday": "9:00am-12:00pm (EPAC C1.108)"
    }
  },
  {
    "courseCode": "MUSI 2117",
    "courseName": "ET & SS IV",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Wednesday": "6:30pm-8:00pm (EPAC C1.108)",
      "Thursday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Friday": "9:00am-12:00pm (EPAC C1.108)"
    }
  },
  {
    "courseCode": "MUSI 2211",
    "courseName": "Music Theory III",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Wednesday": "6:30pm-8:00pm (EPAC C1.108)",
      "Thursday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Friday": "9:00am-12:00pm (EPAC C1.108)"
    }
  },
  {
    "courseCode": "MUSI 2212",
    "courseName": "Music Theory IV",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Wednesday": "6:30pm-8:00pm (EPAC C1.108)",
      "Thursday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Friday": "9:00am-12:00pm (EPAC C1.108)"
    }
  },
  {
    "courseCode": "MUSI 3211",
    "courseName": "Musical Form & Analysis",
    "tutorName": "Marisol Mejia",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Wednesday": "6:30pm-8:00pm (EPAC C1.108)",
      "Thursday": "9:00am-12:00pm & 2:45pm-5:00pm (EPAC C1.108)",
      "Friday": "9:00am-12:00pm (EPAC C1.108)"
    }
  },
  {
    "courseCode": "Nursing",
    "courseName": "1st Semester",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "12:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "Nursing",
    "courseName": "1st Semester",
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
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "OFF",
      "Wednesday": "OFF",
      "Thursday": "12:00pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "Nursing",
    "courseName": "2nd Semester",
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
    "courseCode": "PHYS 1401",
    "courseName": "General Physics I",
    "tutorName": "Samuel Marshall",
    "days": {
      "Monday": "10:45am-12:45pm",
      "Tuesday": "9:00am-10:45am",
      "Wednesday": "9:00am-10:45am & 7:00pm-8:00pm",
      "Thursday": "9:00am-12:30pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 1401",
    "courseName": "General Physics I",
    "tutorName": "Paul Diaz (SI Mentor)",
    "days": {
      "Monday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Tuesday": "11:00am-1:45pm & 3:30pm-4:30pm",
      "Wednesday": "Mentor Duties",
      "Thursday": "Mentor Duties",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 1401",
    "courseName": "General Physics I",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 1402",
    "courseName": "General Physics II",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 2425",
    "courseName": "Physics for Sci & Engr I",
    "tutorName": "Kenneth Davis",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "11:00am-12:15pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "11:00am-12:15pm",
      "Friday": "BROWNSVILLE"
    }
  },
  {
    "courseCode": "PHYS 2425",
    "courseName": "Physics for Sci & Engr I",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am-1:00pm & 3:30pm-4:45pm",
      "Tuesday": "9:00am-1:00pm & 3:30pm-5:00pm",
      "Wednesday": "11:00am-1:00pm & 3:30pm-8:00pm",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 2425",
    "courseName": "Physics for Sci & Engr I",
    "tutorName": "Ethan De Leon",
    "days": {
      "Monday": "9:00am-12:15pm",
      "Tuesday": "1:15pm-4:00pm",
      "Wednesday": "9:00am-12:15pm",
      "Thursday": "1:15pm-4:00pm",
      "Friday": "9:00am-10:00am"
    }
  },
  {
    "courseCode": "PHYS 2425",
    "courseName": "Physics for Sci & Engr I",
    "tutorName": "Paul Diaz (SI Mentor)",
    "days": {
      "Monday": "9:00am-10:45am & 3:30pm-5:00pm",
      "Tuesday": "11:00am-1:45pm & 3:30pm-4:30pm",
      "Wednesday": "Mentor Duties",
      "Thursday": "Mentor Duties",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 2425",
    "courseName": "Physics for Sci & Engr I",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 2426",
    "courseName": "Physics for Sci & Engr II",
    "tutorName": "Karel Kishiko",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm",
      "Friday": "9:00am-10:00am"
    }
  },
  {
    "courseCode": "PHYS 2426",
    "courseName": "Physics for Sci & Engr II",
    "tutorName": "Juan Castillo",
    "days": {
      "Monday": "11:00am-1:00pm & 3:30pm-4:45pm",
      "Tuesday": "9:00am-1:00pm & 3:30pm-5:00pm",
      "Wednesday": "11:00am-1:00pm & 3:30pm-8:00pm",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 2426",
    "courseName": "Physics for Sci & Engr II",
    "tutorName": "Ethan De Leon",
    "days": {
      "Monday": "9:00am-12:15pm",
      "Tuesday": "1:15pm-4:00pm",
      "Wednesday": "9:00am-12:15pm",
      "Thursday": "1:15pm-4:00pm",
      "Friday": "9:00am-10:00am"
    }
  },
  {
    "courseCode": "PHYS 2426",
    "courseName": "Physics for Sci & Engr II",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "PHYS 2327",
    "courseName": "Physics for Sci & Engr III",
    "tutorName": "Juan Espinoza",
    "days": {
      "Monday": "9:00am-12:00pm",
      "Tuesday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Wednesday": "9:00am-12:00pm",
      "Thursday": "9:00am-12:00pm & 2:30pm-5:00pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "QUMT 2341",
    "courseName": "Business Statistics I",
    "tutorName": "Cristian Gonzalez (Lead Tutor)",
    "days": {
      "Monday": "2:30pm-5:00pm",
      "Tuesday": "3:30pm-5:00pm",
      "Wednesday": "Brownsville",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "Lead Tutor Duties"
    }
  },
  {
    "courseCode": "QUMT 2341",
    "courseName": "Business Statistics I",
    "tutorName": "Fernando Casanova",
    "days": {
      "Monday": "12:00pm-3:45pm",
      "Tuesday": "1:00pm-3:15pm",
      "Wednesday": "12:00pm-3:45pm",
      "Thursday": "1:00pm-3:15pm",
      "Friday": "9:00am-12:00pm"
    }
  },
  {
    "courseCode": "QUMT 2341",
    "courseName": "Business Statistics I",
    "tutorName": "Daniela Celaya (Lead Tutor)",
    "days": {
      "Monday": "11:00am-12:00pm",
      "Tuesday": "OFF",
      "Wednesday": "10:15am-1:15pm",
      "Thursday": "10:15am-1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "QUMT 2398",
    "courseName": "Decision Analytics",
    "tutorName": "Cristian Gonzalez (Lead Tutor)",
    "days": {
      "Monday": "2:30pm-5:00pm",
      "Tuesday": "3:30pm-5:00pm",
      "Wednesday": "Brownsville",
      "Thursday": "3:30pm-5:00pm",
      "Friday": "Lead Tutor Duties"
    }
  },
  {
    "courseCode": "QUMT 2398",
    "courseName": "Decision Analytics",
    "tutorName": "Daniela Celaya (Lead Tutor)",
    "days": {
      "Monday": "11:00am-12:00pm",
      "Tuesday": "OFF",
      "Wednesday": "10:15am-1:15pm",
      "Thursday": "10:15am-1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "QUMT 3341",
    "courseName": "Business Statistics II",
    "tutorName": "Daniela Celaya (Lead Tutor)",
    "days": {
      "Monday": "11:00am-12:00pm",
      "Tuesday": "OFF",
      "Wednesday": "10:15am-1:15pm",
      "Thursday": "10:15am-1:15pm",
      "Friday": "OFF"
    }
  },
  {
    "courseCode": "SPAN 3313",
    "courseName": "Adv Grammar & Comp Heritage I",
    "tutorName": "Paulina Olvera Leal",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "4:00pm-5:00pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "4:00pm-5:00pm",
      "Friday": "BROWNSVILLE"
    }
  },
  {
    "courseCode": "SPAN 3315",
    "courseName": "Adv Grammar & Comp Heritage II",
    "tutorName": "Paulina Olvera Leal",
    "days": {
      "Monday": "BROWNSVILLE",
      "Tuesday": "4:00pm-5:00pm",
      "Wednesday": "BROWNSVILLE",
      "Thursday": "4:00pm-5:00pm",
      "Friday": "BROWNSVILLE"
    }
  }
];
