<template>
  <select v-model="localModelValue" @change="changeOption" class="select">
    <option :value="null" disabled>Выберите Босса</option>
    <option v-for="boss in bosses" :key="boss.id" :value="boss.id">
      {{ boss.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: Number,
      default: () => 0,
    },
    bosses: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue ", event.target.value);
    },
  },
  computed: {
    localModelValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit("update:modelValue", newValue);
      },
    },
  },
};
</script>

<style scoped>
.select {
  width: 90%;
  background: none;
  padding: 10px 15px;
  color: #2589ff;
  border: 1px solid #2589ff;
  margin-top: 15px;
}
</style>
