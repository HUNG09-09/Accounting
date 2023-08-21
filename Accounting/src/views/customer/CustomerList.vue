<template>
    <!-- container header -->
    <div class="container__header">
        <div class="container__header-left">
            <div class="container__header-title">{{ this.$_resource.headerPage.pageTitle }}</div>
        </div>
        <div class="container__header-right">
            <m-button @click="btnAddOnClick" :buttonText="this.$_resource.employeePageDetail.addEmployee" />
        </div>
    </div>

    <!-- contauner grid -->
    <div class="container__grid">
        <!-- toolbar -->
        <div class="container__toolbar">
            <div class="toolbar-left"> </div>
            <div class="toolbar-right">
                <div class="m-textfield-icon">
                    <input name="input" class="m-textfield-input form-input-focus " type="text"
                        :placeholder="this.$_resource.employeePageDetail.searchEmployee">
                    <div class="m-textfield-icon-search"></div>
                </div>
                <div class="toolbar-icon-loading"></div>
            </div>
        </div>

        <!-- table -->
        <div class="m-table">
            <table id="tbCustomerList">
                <thead>
                    <tr>
                        <th class="text-align-center" style="width: 30px;">
                            <input type="checkbox">
                        </th>
                        <th class="text-align-left" style="width: 150px;">{{ this.$_resource.tableHeader.employeeCode }}</th>
                        <th class="text-align-left">{{ this.$_resource.tableHeader.fullName}}</th>
                        <th class="text-align-left" style="width: 100px;">{{ this.$_resource.tableHeader.gender}}</th>
                        <th class="text-align-center" style="width: 100px;">{{ this.$_resource.tableHeader.dateOfBirth}}</th>
                        <th class="text-align-left">{{ this.$_resource.tableHeader.department}}</th>
                        <th class="text-align-left">{{ this.$_resource.tableHeader.position}}</th>
                        <th class="text-align-right">{{ this.$_resource.tableHeader.salary}}</th>
                        <th class="text-align-left">{{ this.$_resource.tableHeader.bankName}}</th>
                        <th class="text-align-left">{{ this.$_resource.tableHeader.bankBranch}}</th>
                        <th class="text-align-center">{{ this.$_resource.tableHeader.funciton}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(employee,) in employees" :key="employee.EmployeeId">
                        <td class="text-align-center">
                            <input type="checkbox">
                        </td>
                        <td class="text-align-left">{{ employee.EmployeeCode }}</td>
                        <td class="text-align-left">{{ employee.FullName }}</td>
                        <td class="text-align-left">{{ $format.formatGender(employee.Gender) }}</td>
                        <td class="text-align-center">{{ $format.formatDate(employee.DateOfBirth) }}</td>
                        <td class="text-align-left">{{ $format.formatCompanyName(employee.DepartmentName) }}</td>
                        <td class="text-align-left">{{ employee.PositionName }}</td>
                        <td class="text-align-right">{{ $format.formatMoney(employee.Salary) }}</td>
                        <td class="text-align-left"></td>
                        <td class="text-align-left"></td>
                        <td class="text-align-center">
                            <div class="table-btn-fix">
                                <button class="table-text-fix" @click="editOnClick(employee)">{{ this.$_resource.btnEdit.btnEdit }}</button>
                                <button class="table-icon-down icon-24">
                                    <div class="table-dropdowmfix">
                                        <div>{{ this.$_resource.btnEdit.replication }}</div>
                                        <div @click="deleteOnClick(employee.EmployeeId)">{{ this.$_resource.btnEdit.delete }}</div>
                                        <div>{{ this.$_resource.btnEdit.stopUsing }}</div>
                                    </div>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- table-paging -->
        <div class="m-table-paging">
            <div class="m-table-paging-left">
                {{ this.$_resource.tablePaging.total }}: <span class="paging-total">1035</span> {{ this.$_resource.tablePaging.record }}
            </div>
            <div class="m-table-paging-right">
                <div class="paging-record">{{ this.$_resource.tablePaging.recordPage }}</div>
                <div class="total-record">
                    <div class="record-show">
                        <div class="num--record">10</div>
                        <div class="icon-record-down icon-24"></div>
                    </div>
                    <div class="record-list-up">
                        <div class="num-record"><span>10</span></div>
                        <div class="num-record"><span>20</span></div>
                        <div class="num-record"><span>30</span></div>
                        <div class="num-record"><span>50</span></div>
                        <div class="num-record"><span>100</span></div>
                    </div>
                </div>
                <div class="stt-record">{{ this.$_resource.tablePaging.viewRecord }}</div>
                <div class="paging-btn-record">
                    <div class="btn-pre icon-24"></div>
                    <div class="btn-next icon-24"></div>
                </div>
            </div>
        </div>
    </div>
    <CustomerDetail v-if="isShowModal" @hideForm="hideForm" :employeeSelected="employeeSelected"></CustomerDetail>
   <m-dialog 
   v-if="showDialog"   
    @closeDialog="hideDialog"
    @clickAccept="handleDeleteEmployee">
    </m-dialog>
</template>

<script>
import CustomerDetail from './CustomerDetail.vue';

export default {
    name: "CustomerList",
    components: {
        CustomerDetail
    },
    created() {
        // Gọi API lấy dữ liệu
        this.loadData()
    },
    data() {
        return {
            employees: [],
            isShowModal: false,
            employeeSelected: {},
            employeeIdToDelete: ""
        }
    },

    methods: {

        /**
         * Hàm load lại trang
         * AUTHOR: NGUYEN SY HUNG (03/08/2023)
         */
        loadData() {
            this.$_axios.get("https://cukcuk.manhnv.net/api/v1/Employees")
                .then((res) => {
                    this.employees = res.data
                });
        },

        /**
         * Nút thêm mới khách hàng
         * AUTHOR: NGUYEN SY HUNG (03/08/2023)
         */
        btnAddOnClick() {
            this.isShowModal = true;
            this.employeeSelected = {};
        },

        /**
         * Ẩn form chi tiết và load lại trang
         * AUTHOR: NGUYEN SY HUNG (03/08/2023)
         */
        hideForm() {
            this.isShowModal = false;
            this.loadData()
        },


        /**
         * Nút sửa thông tin
         * AUTHOR: NGUYEN SY HUNG (03/08/2023)
         */
        editOnClick(employee) {
            this.employeeSelected = employee;
            this.isShowModal = true;
        },

        /**
         * Nút xóa nhân viên
         * AUTHOR: NGUYEN SY HUNG (03/08/2023)
         */
         deleteOnClick(employeeId) {
            this.$_commonJS.showLoading();
            this.$_axios.delete(`https://cukcuk.manhnv.net/api/v1/Employees/${employeeId}`)
                .then((res) => {
                    if (res.status === 200) {
                        this.$_commonJS.hideLoading();
                        this.$_commonJS.showToast(this.$_resource.toastMessage.deleteEmployee)
                        setTimeout(() => {
                            this.$_commonJS.hideToast()
                        }, 3000);
                        this.employees = this.employees.filter((employee) => employee.EmployeeId !== employeeId);
                    } else {
                        this.$_commonJS.showDialog(this.$_resource.notifyDialog.invalidDelete, [res.status], 3)
                        console.log(res);
                    }
                })
                .catch((error) => {
                    this.$_commonJS.showDialog(this.$_resource.notifyDialog.invalidDelete, [error], 3)
                });
            },
            handleDeleteEmployee() {
            console.log("ok");
        },
        // deleteOnClick(employeeId) {
        //     this.$_commonJS.showDialog(this.$_resource.notifyDialog.isDelete, [], 2)
        //     this.employeeIdToDelete = employeeId;
        // }
            
    
        //     handleShowDialog(){
        //         this.$_commonJS.showDialog(this.$_resource.notifyDialog.isDelete, "", 2);
        //     },
        // deleteOnClick(employeeId) {
        //     this.handleShowDialog();
        //     this.employeeIdToDelete = employeeId; // Lưu employeeId vào biến employeeIdToDelete
        //         if(this.$_commonJS.handleOk() == 1) this.deleteOnClickOk() 
        //     },


      
    },

}
</script>

<style scoped>
/* container */

.container {
    position: relative;
    background-color: #EEEFF1;
    padding: 24px;
    /* width: calc(100% - 200px); */
    flex: 1;
    /* height: calc(100vh - 56px); */
}


/* container header */

.container__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

}


.container__header-left {
    display: flex;
    align-items: center;
    column-gap: 12px;
}

.container__header-title {
    height: 36px;
    font-weight: 700;
    font-size: 24px;
    color: #1F1F20;
}

.container__header-right .m-btn-text {
    color: #FFFFFF;
    font-weight: 500;
}

/* container grid */

.container__grid {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 0 16px;
    position: absolute;
    top: 80px;
    bottom: 12px;
    right: 12px;
    left: 24px;
    /* height: calc(100% - 136px); */

}

/* container toolbar */
.container__toolbar {
    display: flex;
    align-items: center;
    padding: 12px 16px 12px 16px;
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    justify-content: space-between;
}

.toolbar-right {
    display: flex;
    align-items: center;
}

.toolbar-icon-loading {
    width: 36px;
    height: 36px;
    background: url(../../assets/img/Sprites.64af8f61.svg);
    background-repeat: no-repeat;
    background-position: -416px -192px;
    cursor: pointer;
}
</style>