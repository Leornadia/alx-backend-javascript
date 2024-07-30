const getStudentsByLocation = (studentList, city) => {
    return studentList.filter(student => student.location === city);
};

export default getStudentsByLocation;
