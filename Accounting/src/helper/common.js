import emitter from 'tiny-emitter/instance'
import resource from './resource';

const commonJS = {
  /**
   * Truyền thông tin và Show Dialog
   * AUTHOR: NGUYEN SY HUNG (03/08/2023)
   */
  showDialog(title, noticeMsg, typeDialog) {
    emitter.emit("showDialog", title, noticeMsg, typeDialog)
  },

  /**
   * Truyền thông tin và Show Toast
   * AUTHOR: NGUYEN SY HUNG (03/08/2023)
   */
  showToast(textNotice) {
    emitter.emit("showToast", textNotice)
  },

  /**
  * Ẩn Toast
  * AUTHOR: NGUYEN SY HUNG (03/08/2023)
  */
  hideToast() {
    emitter.emit("hideToast")
  },

  /**
  * Show loading
  * AUTHOR: NGUYEN SY HUNG (08/08/2023)
  */
  showLoading() {
    emitter.emit("showLoading")
  },

  
  /**
  * Ẩn loading
  * AUTHOR: NGUYEN SY HUNG (08/08/2023)
  */
  hideLoading() {
    emitter.emit("hideLoading")
  },



  /**
  * Xử lý lỗi api trả về
  * AUTHOR: NSHUNG (06/08/2023)
  * 
  */
  handleAPIError(res) {
    if (res.response) {
      const statusCode = res.response.status;
      const msg = res.response.data.userMsg;
      switch (statusCode) {
        case 400:
          this.showDialog(resource.notifyDialog.invalidTitle, [msg], 3);
          break;
        case 500:
          this.showDialog(resource.notifyDialog.notifyTitle, [msg], 3);
          this.hideLoading();
          break;
        default:
          break;
      }
    }
  },





  /**
   * Hàm validate cho các trường bắt buộc
   * AUTHOR: NSHUNG (03/08/2023)
   */

  // checkRequiredFields(employee, resource) {
  //   // Tạo mảng chứa lỗi
  //   const errors = [];

  //   // Tạo một đối tượng chứa trạng thái của các biến invalid
  //   const invalidStatus = {
  //     invalidEmployeeCode: !employee.EmployeeCode,
  //     invalidFullName: !employee.FullName,
  //     invalidDepartmentName: !employee.Address,
  //   };

  //   // Kiểm tra các trường bắt buộc phải nhập
  //   // và thêm lỗi vào mảng
  //   if (invalidStatus.invalidEmployeeCode) {
  //     errors.push(resource.formError.employeeCode);
  //   }

  //   if (invalidStatus.invalidFullName) {
  //     errors.push(resource.formError.fullName);
  //   }

  //   if (invalidStatus.invalidDepartmentName) {
  //     errors.push(resource.formError.departmentName);
  //   }

  //   // Trả về mảng lỗi và trạng thái của các biến invalid
  //   return { errors, invalidStatus };
  // }



}

export default commonJS