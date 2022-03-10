import axios from "axios";
export const addFacultyInfo = async (facultyInfo) => {
   await axios({
        method: 'post',
        url: 'http://localhost:8081/addSchoolFaculty',
        headers: {}, 
        data: {
           facultyInfo
        }
    });
}
