<template>
  <div class="m-dialog-overlay" id="eForm">
    <div class="m-form-body">
      <div class="form-header">
        <div class="header-left">
          <div class="form-title">{{ this.$_resource.formHeader.title }}</div>
          <div class="header-checkbox">
            <input type="checkbox" class="checkbox-left" />
            <label for="checkbox1" class="">{{
              this.$_resource.formHeader.isCustomer
            }}</label>
            <input type="checkbox" class="checkbox-right" />
            <label for="checkbox2" class="">{{
              this.$_resource.formHeader.isSupplier
            }}</label>
          </div>
        </div>

        <div class="header-right">
          <div>
            <div class="icon icon-btn-question"></div>
          </div>
          <div>
            <div class="icon icon-btn-close" @click="btnCloseOnClick"></div>
          </div>
        </div>
      </div>

      <div class="form-content">
        <!-- form-top -->
        <div class="form-content-top">
          <!-- form-topleft -->

          <div class="form-content-topleft">
            <div class="line-first">
              <div class="form-group">
                <m-input :label="this.$_resource.employeeForm.employeeCode" ref="txtEmployeeCode" :width="'154px'"
                  v-model="employee.EmployeeCode" :inputClass="{ 'form-input-error': invalidEmployeeCode }"
                  :required="true"></m-input>
              </div>
              <div class="form-group">
                <m-input :label="this.$_resource.employeeForm.fullName" v-model="employee.FullName" :required="true"
                  :inputClass="{ 'form-input-error': invalidFullName }"></m-input>
              </div>
            </div>

            <div class="line-second">
              <div class="form-group">
                <!-- <m-input :label="this.$_resource.employeeForm.department" v-model="employee.DepartmentName" :required="true"
                  :inputClass="{ 'form-input-error': invalidDepartmentName }"></m-input> -->
                  <label for="Đơn vị" class="form-label">{{this.$_resource.employeeForm.department}} <span>*</span></label>
                      <m-combobox
                      v-model="employee.DepartmentName"
                      :results="setDepartments"
                      :inputClass="{ 'form-input-error': invalidDepartmentName }"
                      />
              </div>
            </div>
            <div class="line-third">
              <div class="form-group">
                <!-- <m-input :label="this.$_resource.employeeForm.position"></m-input> -->
                <label for="Đơn vị" class="form-label">{{this.$_resource.employeeForm.position}}</label>
                      <m-combobox 
                      v-model="employee.PositionName"
                      :results="setPositions"
                      />        
              </div>
            </div>
          </div>

          <!-- form-topright -->
          <div class="form-content-topright">
            <div class="line-first">
              <div class="form-group">
                <m-input :label="this.$_resource.employeeForm.dateOfBirth" type="date" :width="'154px'"
                  v-model="employee.DateOfBirth"></m-input>
              </div>
              <div class="form-group">
                <label class="form-label">{{
                  this.$_resource.employeeForm.gender
                }}</label>
                <div class="gender" id="txtGender">
                  <input type="radio" tabindex="4" v-model="employee.Gender" checked class="input-radio" name="gender"
                    value="0" />
                  <div>{{ this.$_resource.employeeForm.male }}</div>
                  <input type="radio" v-model="employee.Gender" tabindex="5" class="input-radio" name="gender"
                    value="1" />
                  <div>{{ this.$_resource.employeeForm.female }}</div>
                  <input v-model="employee.Gender" tabindex="6" type="radio" class="input-radio" name="gender"
                    value="2" />
                  <div>{{ this.$_resource.employeeForm.orther }}</div>
                </div>
              </div>
            </div>

            <div class="line-second">
              <div class="form-group">
                <m-input label="Số CMND"></m-input>
                <div class="toolTip">
                  {{ this.$_resource.tooltip.isCmndNumber }}
                </div>
              </div>
              <div class="form-group">
                <m-input :label="this.$_resource.employeeForm.dateRange" type="date" :width="'154px'"></m-input>
              </div>
            </div>

            <div class="line-third">
              <div class="form-group">
                <m-input :label="this.$_resource.employeeForm.isPlace"></m-input>
              </div>
            </div>
          </div>
        </div>

        <!-- form-butom -->
        <div class="form-content-buttom">
          <div class="buttom-line-first">
            <div class="form-group">
              <m-input :label="this.$_resource.employeeForm.address"></m-input>
            </div>
          </div>

          <div class="buttom-line-second">
            <div class="form-group">
              <m-input :label="this.$_resource.employeeForm.phoneNumber" v-model="employee.PhoneNumber"
                :width="'220px'"></m-input>
            </div>
            <div class="form-group">
              <m-input :label="this.$_resource.employeeForm.salary" :width="'220px'" v-model="employee.Salary"></m-input>
            </div>
            <div class="form-group">
              <m-input :label="this.$_resource.employeeForm.email" :width="'220px'"></m-input>
            </div>
          </div>

          <div class="buttom-line-third">
            <div class="form-group">
              <m-input :label="this.$_resource.employeeForm.bankAccount" :width="'220px'"></m-input>
            </div>
            <div class="form-group">
              <m-input :label="this.$_resource.employeeForm.bankName" :width="'220px'"></m-input>
            </div>
            <div class="form-group">
              <m-input :label="this.$_resource.employeeForm.bankBranch" :width="'220px'"></m-input>
            </div>
          </div>
        </div>
      </div>
      <div class="form-footer">
        <div class="form-footer-left">
          <m-button buttonClass="m-btn--secondary" :buttonText="this.$_resource.operation.cancel"></m-button>
        </div>
        <div class="form-footer-right">
          <m-button id="btnFormSave" @click="btnSaveOnClick()" :buttonText="this.$_resource.operation.saveAndAdd">
          </m-button>
          <m-button buttonClass="m-btn--secondary" @click="OK()" :buttonText="this.$_resource.operation.save"></m-button>
        </div>
      </div>
    </div>
  </div>

  <!-- <m-dialog v-if="isShowDialog" :title="titleDialog" :textDialogDetail="textDialogDetail"
    @closeDialog="hideDialog"></m-dialog> -->
</template>

<script>
export default {
  name: "CustomerDetail",
  emits: ["hideForm"],
  props: ["employeeSelected", "formMode"],
  data() {
    return {
      invalidEmployeeCode: false,
      invalidDepartmentName: false,
      invalidFullName: false,
      employee: {
        EmployeeCode: "",
        FullName: "",
        DepartmentName:"",
        Gender: "",
        Address: "",
        DateOfBirth: "",
        Email: "",
        PhoneNumber: "",
        Salary: "",
        Address: "",
        DepartmentId:"",
        PositionId:"",
        PositionName:"",
      },
      departments:[],
      positions:[],
    };
  },

  created() {
    
    this.employee = this.employeeSelected;

    /**
     * Hàm thêm mới mã khách hàng
     * AUTHOR: NGUYEN SY HUNG (03/08/2023)
     */
    if (!this.employeeSelected || !this.employeeSelected.EmployeeCode) {
      this.$_axios
        .get("https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode")
        .then((res) => {
          // Cập nhật lại giá trị employee.EmployeeCode sau khi nhận được mã mới từ API
          this.employee.EmployeeCode = res.data;
        });
    }

    this.loadDepartments();
    this.loadPositions();
  },

  
  
  mounted() {
    /**
     * Hàm focus cho ô input đầu tiên
     * AUTHOR: NGUYEN SY HUNG (03/08/2023)
     */
    this.$refs.txtEmployeeCode.onFocus();
  },
  
  computed:{
    /**
     * Lọc lấy tên đơn vị 
     * AUTHOR: NGUYEN SY HUNG (10/08/2023)
     */
    setDepartments() {
              return this.departments.map((item) => item.name);
          },
    setPositions() {
      return this.positions.map((item) => item.name);
    },
      },

   
  methods: {

    /**
     * Lấy dữ liệu đơn vị 
     * AUTHOR: NGUYEN SY HUNG (10/08/2023)
     */
    loadDepartments() {
      try {
        let data = [];
                this.$_axios.get('https://cukcuk.manhnv.net/api/v1/Departments')
                    .then(res => {
                      console.log(res);
                        data = res.data;
                        data.forEach((item) => {
                            this.departments.push({
                                id: item.DepartmentId,
                                name: item.DepartmentName,
                            });
                        });
                    })

      } catch (error) {
        this.$_commonJS.handleAPIError(error);
      }
    },
   
    /**
     * Lấy dữ liệu id đơn vị theo tên
     * AUTHOR: NGUYEN SY HUNG (10/08/2023)
     */
    getDepartmentId() {
    for(const department of this.departments){
      if(department.name == this.employee.DepartmentName){
          this.employee.DepartmentId = department.id
          break;
      }
    }
  },
  loadPositions() {
    try {
        let data = []; 
                this.$_axios.get('https://cukcuk.manhnv.net/api/v1/Positions')
                    .then(res => {
                      console.log(res);
                        data = res.data;                      
                        data.forEach((item) => {
                            this.positions.push({
                                id: item.PositionId,
                                name: item.PositionName,
                            });
                        });
                    })

      } catch (error) {
        this.$_commonJS.handleAPIError(error);
      }
  },

  getPositionId() {
    for(const position of this.positions){
      if(position.name == this.employee.PositionName){
          this.employee.PositionId = position.id
          break;
      }
    }
  },

    /**
     * Hàm validate cho các trường bắt buộc
     * AUTHOR: NSHUNG (03/08/2023)
     */
    checkRequiredFields() {
      // Tạo mảng chứa lỗi
      const errors = [];
      // Kiểm tra các trường bắt buộc phải nhập
      if (!this.employee.EmployeeCode) {
        this.invalidEmployeeCode = true;
        errors.push(this.$_resource.formError.employeeCode);
      } else {
        this.invalidEmployeeCode = false;
      }

      if (!this.employee.FullName) {
        this.invalidFullName = true;
        errors.push(this.$_resource.formError.fullName);
      } else {
        this.invalidFullName = false;
      }

      if (!this.employee.DepartmentName) {
        this.invalidDepartmentName = true;
        errors.push(this.$_resource.formError.departmentName);
      } else {
        this.invalidDepartmentName = false;
      }
      
      return errors;
    },

    /**
     * Hàm thêm mới nhân viên
     * AUTHOR: NSHUNG (02/08/2023)
     */
    addEmployee() {
      // 1. Tạo mảng chứa lỗi
      const errors = this.checkRequiredFields();
      // 2. Lấy thông tin đơn vị
      this.getDepartmentId()
      this.getPositionId();
      //  Kiểm tra thông tin lỗi và gọi API
      if (errors.length == 0) {
        this.$_commonJS.showLoading();
        this.$_axios
          .post("https://cukcuk.manhnv.net/api/v1/Employees", this.employee)
          .then((res) => {
            // 3.1 Ẩn form và load lại trang khi hoàn thành
            this.$emit("hideForm");
            this.$_commonJS.hideLoading();
            console.log(res);
            // 3.2 Hiển thị toast thông báo thành công
            this.$_commonJS.showToast(this.$_resource.toastMessage.addEmployee);
            setTimeout(() => {
              this.$_commonJS.hideToast();
            }, 3000);
          })
          .catch((res) => {
            // 3.3 Xử lý các lỗi và đưa ra thông báo
            this.$_commonJS.handleAPIError(res)
          });
      } else {
        this.$_commonJS.showDialog(this.$_resource.notifyDialog.invalidTitle,errors,3);
      }
    },

    /**
     * Thực hiện sửa thông tin nhân viên
     * AUTHOR: NGUYEN SY HUNG (2/8/2023)
     */
     updateEmployee() {
      const employee = this.employee;
      // 1. Tạo mảng chứa lỗi
      const errors = this.checkRequiredFields();
      // 2. Lấy thông tin Đơn vị
      this.getDepartmentId()
      this.getPositionId();

      // 3. Kiểm tra nếu không có lỗi thì gọi API
      if (errors.length == 0) {
        this.$_commonJS.showLoading();
        this.$_axios.put(`https://cukcuk.manhnv.net/api/v1/Employees/${this.employeeSelected.EmployeeId}`,employee)
          .then((res) => {
            console.log(res);
            // 3.1 Ẩn form khi bấm cất và lưu
            this.$emit("hideForm");
            this.$_commonJS.hideLoading();
            // 3.2 Hiển thị toast thông báo thành công
            this.$_commonJS.showToast(this.$_resource.toastMessage.editEmployee);
            setTimeout(() => {
              this.$_commonJS.hideToast();
            }, 3000);
          })
          .catch((res) => {
            // 3.3 Xử lý các lỗi và đưa ra thông báo
           this.$_commonJS.handleAPIError(res)
          });
      } else {
        this.$_commonJS.showDialog(this.$_resource.notifyDialog.notifyTitle,errors,3);
      }
    },

    /**
     * Phát ra sự kiện "close-form" lên component cha
     * AUTHOR: NSHUNG (29/07/2023)
     */
    btnCloseOnClick() {
      this.$emit("hideForm");

    },

    /**
     * Cắt và lưu và xử lý sự kiện
     * AUTHOR: NSHUNG (29/07/2023)
     */

    btnSaveOnClick() {
      if (this.employeeSelected.EmployeeId) {
        this.updateEmployee();
      } else {
        this.addEmployee();
      }
    },

    

  },
};
</script>

<style scoped>



@import url(../../css/components/employeeForm.css);
@import url(../../css/components/formInput.css);
</style>
