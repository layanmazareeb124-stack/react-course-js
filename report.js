export default function withStatus(students) {
    return students.map(function (student) {
        return {
            ...student,
            status: student.grade >= 56 ? "pass" : "fail"
        };
    });
}