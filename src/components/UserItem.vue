<template>
  <div class="wrapper">
    <div class="user-data">
      <div>{{ user.name }}</div>
      <div>{{ user.phone }}</div>
    </div>

    <div class="boss" v-if="user.bossId">
      <div class="plus" @click="showBosses">Show Boss</div>
      <div class="boss" v-if="bossesVisible">
        <user-item :user="bossUser" :users="users" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-item",
  data() {
    return {
      bossesVisible: false,
    };
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showBosses() {
      this.bossesVisible = !this.bossesVisible;
    },
  },
  computed: {
    bossUser() {
      return this.users.find(({ id }) => id === this.user.bossId);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
  padding: 15px;
  border: 1px solid #2589ff;
  flex-direction: column;
  background: rgb(155 166 255 / 30%);
}
.boss {
  width: 100%;
}
.user-data {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
</style>
