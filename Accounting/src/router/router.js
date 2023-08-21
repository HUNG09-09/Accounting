import {createRouter, createWebHistory} from 'vue-router'
import EmployeeList from "@/views/employee/EmployeeList.vue"
import CustomerList from "@/views/customer/CustomerList.vue"
import ReportList from '@/views/report/ReportList'
import VIndex from '@/views/VIndex.vue'
const routerList = [
    {path:"/employee",name:"EmployeeRouter", component:EmployeeList},
    {path:"/customer",name:"CustomerRouter", component:CustomerList},
    {path:"/report",name:"ReportRouter", component:ReportList},
    {path:"/",name:"ReportRouter", component:VIndex}
]

const router = createRouter({
    history:createWebHistory(), routes:routerList
})

export default router;