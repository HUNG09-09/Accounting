<template>
  <!-- dialog error form  -->
  <div class="m-dialog-overlay m-dialog--notifi">
    <div class="dialog-body">
      <div class="dialog-header">
        <h3 class="dialog-title">{{ title }}</h3>
        <div class="dialog-btn-close">
          <div class="dialog-icon-btn-close" @click="closeDialog"></div>
        </div>
      </div>
      <div class="dialog-content">
        <div class="dialog-icon--status">
          <div
            :class="{
              'icon--question': type == $_MISAEnum.DialogType.Question,
              'icon--warnning': type == $_MISAEnum.DialogType.Warnning,
              'icon--error': type == $_MISAEnum.DialogType.Error,
            }"
          ></div>
        </div>
        <div class="dialog-content-detail">
          <li
            style="list-style: none"
            v-for="(msg, index) in errorsDialog"
            :key="index"
          >
            - {{ msg }}
          </li>
        </div>
      </div>
      <div class="dialog-button">
        <m-button :buttonText="this.$_resource.operation.cancel" buttonClass="m-btn--secondary" @onclick="hideDialog"></m-button>
        <m-button :buttonText="this.$_resource.operation.accept" @onclick="onClickAccept"></m-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VDialog",
  props: ["title", "errorsDialog", "type"],
  methods: {
    /**
     * Phát ra sự kiện đóng dialog
     * AUTHOR: NSHUNG(03/08/2023)
     */
    closeDialog() {
      this.$emit("closeDialog");
    },

    hideDialog() {
      this.$emit("closeDialog");
      
    },
     /**
     * Phát ra sự kiện đóng dialog từ nút đồng ý
     * AUTHOR: NSHUNG(03/08/2023)
     */
     onClickAccept() {
      // console.log("onClickAccept event triggered");
      this.$emit("clickAccept");
}
  },
};
</script>

<style scoped>
@import url(../../css/components/dialog.css);
</style>
