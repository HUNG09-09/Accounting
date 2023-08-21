<template>
  <div class="m-table">
    <table id="tbCustomerList">
      <thead>
        <tr>
          <th class="text-align-center" style="width: 30px">
            <input type="checkbox" />
          </th>
          <th class="text-align-left" style="width: 130px">MÃ KHÁCH HÀNG</th>
          <th class="text-align-left">TÊN KHÁCH HÀNG</th>
          <th class="text-align-left" style="width: 70px">GIỚI TÍNH</th>
          <th class="text-align-center" style="width: 90px">NGÀY SINH</th>
          <th class="text-align-left">CHỨC DANH</th>
          <th class="text-align-left">TÊN ĐƠN VỊ</th>
          <th class="text-align-left">SỐ TIỀN NỢ</th>
          <th class="text-align-left">TÊN NGÂN HÀNG</th>
          <th class="text-align-left">CHI NHÁNH NGÂN HÀNG</th>
          <th class="text-align-center">CHỨC NĂNG</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.CustomerId">
          <td class="text-align-center">
            <input type="checkbox" />
          </td>
          <td class="text-align-left">{{ customer.CustomerCode }}</td>
          <td class="text-align-left">{{ customer.FullName }}</td>
          <td class="text-align-left">
            {{ $format.formatGender(customer.Gender) }}
          </td>
          <td class="text-align-center">
            {{ $format.formatDate(customer.DateOfBirth) }}
          </td>
          <td class="text-align-left">Trưởng nhóm</td>
          <td class="text-align-left">
            {{ $format.formatCompanyName(customer.CompanyName) }}
          </td>
          <td class="text-align-right">
            {{ $format.formatMoney(customer.DebitAmount) }}
          </td>
          <td class="text-align-left"></td>
          <td class="text-align-left"></td>
          <td class="text-align-center">
            <div class="table-btn-fix">
              <button class="table-text-fix" @click="editOnClick(customer)">
                Sửa
              </button>
              <button class="table-icon-down icon-24">
                <div class="table-dropdowmfix">
                  <div>Nhân bản</div>
                  <div>Xoá</div>
                  <div>Ngừng sử dụng</div>
                </div>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "VTable",
  components: {},
  created() {
    // Gọi API lấy dữ liệu
    fetch("https://cukcuk.manhnv.net/api/v1/Customers")
      .then((res) => res.json())
      .then((data) => {
        this.customers = data;
      });
  },
  data() {
    return {
      customers: [],
    };
  },
  methods: {},
};
</script>

<style scoped>
@import url(../../css/components/table.css);
</style>
