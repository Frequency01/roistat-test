<template>
  <form @submit.prevent>
    <h3>Добавление пользователя</h3>
    <my-input placeholder="Имя" v-model="user.name" inputType="text" />
    <my-input placeholder="Номер" v-model="user.phone" inputType="number" />
    <my-select :bosses="bosses" v-model="user.bossId" />
    <my-button @click="saveUser">Сохранить</my-button>
  </form>
</template>

<script>
export default {
  name: "add-new-user-form",
  props: {
    bosses: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      user: {
        name: "",
        phone: "",
        bossId: null,
      },
    };
  },
  methods: {
    saveUser() {
      this.user.id = Date.now();
      this.$emit("save", this.user);
      this.user = {
        name: "",
        phone: "",
        bossId: null,
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
