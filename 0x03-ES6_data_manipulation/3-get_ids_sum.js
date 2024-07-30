
const getStudentIdsSum = (studentList) => {
    return studentList.reduce((sum, student) => sum + student.id, 0);
};

export default getStudentIdsSum;
