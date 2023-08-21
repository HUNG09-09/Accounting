import axios from "axios";
const employeeApi = {
    /**
     * Lấy dữ liệu nhân viên mới
     * AUTHOR: NSHUNG (09/08/2023)
     */
    getEmployeeCode: async () => {
        const data = await axios.get('/Employees/NewEmployeeCode');
        return data;
    },

     /**
     * Lấy dữ liệu đơn vị
     * AUTHOR: NSHUNG (09/08/2023)
     */
    getDepartmentList: async() => {
        const data = await axios.get('https://cukcuk.manhnv.net/api/v1/Departments');
        return data;
    },

    /**
     * API sửa thông tin nhân viên
     * AUTHOR: NSHUNG (09/082023)
     */
    editEmployee: async(employee, employeeId) => {
        const data = await axios.put(`https://cukcuk.manhnv.net/api/v1/Employees/${employeeId}`, employee);
        return data;
    },
}

export default employeeApi