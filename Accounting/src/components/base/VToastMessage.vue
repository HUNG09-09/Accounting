<template>
  <div class="toast-block">
    <div class="toast">
      <div class="toast-icon toast-icon--success"></div>
      <div class="toast-text">{{ textNotice }}</div>
      <div class="toast-button toast-icon--close" @click="OnCloseToast"></div>
    </div>
    <!-- <div class="toast">
            <div class="toast-icon toast-icon--error"></div>
            <div class="toast-text">Nội dung của toast thông báo</div>
            <div class="toast-button toast-icon--close"></div>
        </div>
        <div class="toast">
            <div class="toast-icon toast-icon--question"></div>
            <div class="toast-text">Nội dung của toast thông báo</div>
            <div class="toast-button toast-icon--close"></div>
        </div>
        <div class="toast">
            <div class="toast-icon toast-icon--warning"></div>
            <div class="toast-text">Nội dung của toast thông báo</div>
            <div class="toast-button toast-icon--close"></div>
        </div>
        <div class="toast">
            <div class="toast-icon toast-icon--success"></div>
            <div class="toast-text">Nội dung của toast thông báo</div>
            <div class="toast-button toast-icon--close"></div>
        </div> -->
  </div>
</template>

<script>
export default {
  name: "VToastMessage",
  props: ["textNotice"],
  methods: {
    OnCloseToast() {
      this.$emit("CloseToast");
    },
  },
};
</script>

<style scoped>
.toast-block {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 999;
}

.toast + .toast {
  margin-top: 10px;
}

.toast {
  background-color: #fff;
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 16px;
  border-radius: 4px;
  max-width: 450px;
  min-width: 400px;
  box-shadow: 0 0 10px #dedede;
  position: relative;
}

.toast-icon {
  flex: 0 0 24px;
}

.toast-button {
  position: absolute;
  right: 16px;
}
</style>
