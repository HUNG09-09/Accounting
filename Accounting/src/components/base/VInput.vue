<template>
  <label :class="{ 'form-label--required': required }" for="">{{label}}</label>
  <input
    ref="minput"
    class="form-control"
    :class="inputClass"
    v-model="inputValue"
    @input="onInput"
    :type="type"
    :style="{ width: width }"
    @blur="onBlur"
  />
  <div class="control__text--error">
  </div>
</template>

<script>
export default {
  name: "VInput",
  props: ["required", "label", "modelValue", "type", "width", "inputClass"],

  data() {
    return {
      inputValue: "",
      valid: true,
    };
  },
  watch: {
  modelValue(newValue) {
    this.inputValue = newValue; // Cập nhật giá trị inputValue từ modelValue
  },
},
 
  created() {
    this.inputValue = this.modelValue;
  },
  methods: {
    /**
     * Cập nhật value
     * AUTHOR: NGUYEN SY HUNG (03/08/2023)
     */
    onInput() {
      this.$emit("update:modelValue", this.inputValue);
    },

    /**
     * Focus cho ô input
     * AUTHOR: NGUYEN SY HUNG (03/08/2023)
     */
    onFocus() {
      this.$refs.minput.focus();
    },

    /**
     * Xử lý sự kiện blur ra khỏi ô input
     * AUTHOR: NGUYEN SY HUNG (03/08/2023)
     */
    // onBlur() {
    //   if(!this.inputValue && this.required == true ) {
    //     this.valid = false;
    //   } else {
    //     this.valid = true;
    //   }
    // },
  },
};
</script>
<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
}

input {
  position: relative;
}
label {
  height: 19px;
  margin-bottom: 8px;
  margin-top: 24px;
  font-weight: 600;
  color: #1f1f1f;
}

/* input */
.form-control {
  width: 260px;
  padding-left: 12px;
  outline: none;
  border: 1px solid #e0e0e0;
  height: 36px;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-label--required::after {
  content: " *";
  color: #ff0000;
}
.form-control::placeholder {
  color: #e0e0e0;
}

.form-input-error {
  border: 1px solid #ff0000 !important;
}
.control__text--error{
  position: absolute;
}

/* .form-input-error+.control__text--error {
    display: block !important;
}
.form-input-error {
  
} */

.form-input-focus {
  border-color: #50b83c;
}

.form-control:focus {
  border-color: #50b83c;
}

.w150 {
  width: 150px;
}

.w162 {
  width: 162px;
}
.w220 {
  width: 220px;
}

.gender {
  display: flex;
  align-items: center;
  height: 36px;
}

.gender > div {
  margin-right: 20px;
}
.gender-radio {
  display: flex;
  align-items: center;
  margin-right: 6px;
  width: 20px;
  height: 20px;
}
</style>
