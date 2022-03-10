import axios from "axios";
export const logInFacultyInfo = async (facultyInfo) => {
    const result = await axios({
        method: 'post',
        url: 'http://localhost:8081/logInFacultyInfo',
        headers: {}, 
        data: {
            facultyInfo
        }
    });
    return result.data
}
