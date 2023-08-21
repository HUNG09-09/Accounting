<template>
  <div class="container">
    <router-view></router-view>
  </div>
  <m-dialog
    v-if="showDialog"
    :type="typeNotice"
    :title="noticeTitle"
    :errorsDialog="errors"
    @closeDialog="hideDialog"
  ></m-dialog>

  <m-toast
    v-if="isShowToast"
    :textNotice="textToastDetail"
    @CloseToast="onHideToast"
  ></m-toast>

  <m-loading 
    v-if="isShowLoading">
  </m-loading>
</template>

<script>
// import CustomerList from '../../views/customer/CustomerList.vue'
import VDialog from "../base/VDialog.vue";
import VToastMessage from "../base/VToastMessage.vue";
import VLoading from "../base/VDialog.vue";
export default {
  name: "TheMain",
  components: { VToastMessage, VDialog,VLoading },
  data() {
    return {
      showDialog: false,
      isShowToast: false,
      isShowLoading:false,
      errors: "",
      noticeTitle: "",
      typeNotice: "",
      textToastDetail: "",
    };
  },
  created() {
    this.$_emitter.on("showDialog", this.onShowDialog);
    this.$_emitter.on("showToast", this.onShowToast);
    this.$_emitter.on("hideToast", this.onHideToast);
    this.$_emitter.on("showLoading", this.onShowLoading);
    this.$_emitter.on("hideLoading", this.hideLoading);
  },
  unmounted() {
    this.$_emitter.off("showToast", this.onShowToast);
    this.$_emitter.off("showDialog", this.onShowDialog);
    this.$_emitter.off("showToast", this.onShowToast);
    this.$_emitter.off("hideLoading", this.hideLoading);
    this.$_emitter.off("showLoading", this.onShowLoading);
  },
  methods: {
    /**
     * Thiết lập Dialog
     * AUTHOR: NGUYEN SY HUNG (03/08/2023)
     */
    onShowDialog(title, errorMsg, typeNoticeDialog) {
      this.errors = errorMsg;
      this.noticeTitle = title;
      this.typeNotice = typeNoticeDialog;
      this.showDialog = true;
    },
    /**
     * Thiết lập Toast
     * AUTHOR: NGUYEN SY HUNG (03/08/2023)
     */
    onShowToast(textToastNotice) {
      this.textToastDetail = textToastNotice;
      this.isShowToast = true;
    },

    // Ẩn Dialog
    hideDialog() {
      this.showDialog = false;
    },

    // Ẩn Toast thông báo
    onHideToast() {
      this.isShowToast = false;
    },

    onShowLoading() {
        this.isShowLoading = true;
    },

    hideLoading() {
      this.isShowLoading = false;
    },
  
  },
  
};
</script>

<style scoped>
.container {
  position: relative;
  background-color: #eeeff1;
  padding: 24px;
  /* width: calc(100% - 200px); */
  flex: 1;
  /* height: calc(100vh - 56px); */
}
</style>
