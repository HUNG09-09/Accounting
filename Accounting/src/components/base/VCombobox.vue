<template>
  <div class="m-combobox">
    <div class="combobox-input-control" :class="inputClass">
      <input
        type="text"
        class="combobox-input"
        v-model="value"
        :placeholder="placeholder"
        @input="onInput"
        @click="showCombobox"
      />
      <div class="combobox-icon-down" @click="showCombobox">
        <div class="icon"></div>
      </div>
    </div>
    <div class="combobox-dropdown-list" v-if="isShowResult">
      <div
        class="combobox-dropdown-item"
        v-for="(item,index) in results"
        :key="index"
        @click="selectItem(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["modelValue", "placeholder", "results","dropdownItems ","inputClass"],
  emits: ["update:modelValue"],
  data() {
    return {
      value: this.modelValue,
      isShowResult: false,
      department: [],
    };
  },
  methods: {
    selectItem(item) {
    this.value = item
    this.isShowResult = false;
    this.$emit('update:modelValue', this.value);
  },
    /**
     * Đóng mở combobox
     * AUTHOR: NSHUNG (10/08/2023)
     */
     async showCombobox() {
      this.isShowResult = !this.isShowResult;

    },
 
    /**
     * Bắt sự kiện khi người dùng nhập input
     * AUTHOR: NSHUNG (10/08/2023)
     */
    onInput() {
      if (this.value != "") this.isShowResult = true;
      else this.isShowResult = false;
      this.$emit("update:modelValue", this.value);
    },
  },
};
</script>

<style scoped>
.m-combobox {
  position: relative;
  width: 422px;
}

.combobox-input-control {
  display: flex;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-radius: 4px 4px 0 0;
  padding: 0 12px;
  box-sizing: border-box;

}

.combobox-input-control .combobox-input {
  flex: 1;
  border: none;
  outline: none;
}

.combobox-icon-down .icon {
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -1129px -365px;
  width: 14px;
  height: 8px;
}

.combobox-icon-down {
  width: 24px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.combobox-dropdown-list {
  position: absolute;
  border: 1px solid #e6e6e6;
  text-align: left;
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
  border-top: none;
  width: 100%;
  background-color: #ffffff;
  z-index: 99;
}

.combobox-dropdown-list {
  max-height: 130px;
  overflow-y: scroll;
}

.combobox-dropdown-item {
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #eeeff1;
  }
}
</style>
