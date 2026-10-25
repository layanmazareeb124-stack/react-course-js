import { students } from "./data.js";
import withStatus from "./report.js";

const studentsWithStatus = withStatus(students);

studentsWithStatus.forEach(function (student) {
    console.log(`${student.name}: ${student.status}`);
});

console.log(students[0].status);