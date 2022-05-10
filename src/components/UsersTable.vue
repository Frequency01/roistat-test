<template>
  <div class="table-wrapper">
    <div class="category">
      <h1 @click="sortedUsers('name')">Имя</h1>
      <h1 @click="sortedUsers('phone')">Телефон</h1>
    </div>
    <div class="users">
      <transition-group name="user-list">
        <user-item
          v-for="user in users"
          :key="user.id"
          :user="user"
          :users="users"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";
export default {
  components: { UserItem },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    sortedUsers(sortBy) {
      return this.$emit("update:modelValue", sortBy);
    },
  },
};
</script>



<style scoped>
.table-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
.category {
  display: flex;
  justify-content: space-around;
}
.users {
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
  flex-direction: column;
}
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>



