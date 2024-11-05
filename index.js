const students = [
  { name: "Alice", chemistry: 80, biology: 90, dob: "10-05-2002" },
  { name: "Bob", chemistry: 85, biology: 85, dob: "15-08-2001" },
  { name: "Charlie", chemistry: 85, biology: 85, dob: "20-01-2002" },
  { name: "David", chemistry: 80, biology: 90, dob: "25-12-2000" },
  // Add more student objects as needed for testing
];

function parseDate(dob) {
  const [day, month, year] = dob.split("-").map(Number);
  return new Date(year, month - 1, day);
}

students.sort((a, b) => {
  const totalMarksA = a.chemistry + a.biology;
  const totalMarksB = b.chemistry + b.biology;

  if (totalMarksA !== totalMarksB) {
    return totalMarksB - totalMarksA; // Sort by total marks (descending)
  } else if (a.biology !== b.biology) {
    return b.biology - a.biology; // Sort by biology marks (descending)
  } else if (a.chemistry !== b.chemistry) {
    return b.chemistry - a.chemistry; // Sort by chemistry marks (descending)
  } else {
    return parseDate(a.dob) - parseDate(b.dob); // Sort by date of birth (oldest first)
  }
});

console.log(students);
