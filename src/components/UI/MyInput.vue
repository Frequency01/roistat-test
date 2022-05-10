<template>
  <input :value="modelValue" @input="updateInput" class="input" :type="inputType" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
    inputType: {
      type: String,
      default: () => "text",
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 90%;
  border: 1px solid #2589ff;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
