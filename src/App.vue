<template>
  <div class="wrapper">
    <div class="app__btns">
      <my-button @click="showDialog">Добавить пользователя</my-button>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <add-new-user-form @save="saveUser" :bosses="users" />
    </my-dialog>
    <users-table
      :users="sortedUsers"
      v-model="selectedSort"
      :sortby="sortBy"
    ></users-table>
  </div>
</template>

<script>
import MyButton from "./components/UI/MyButton.vue";
import MyDialog from "./components/UI/MyDialog.vue";
import AddNewUserForm from "./components/AddNewUserForm.vue";
import UsersTable from "./components/UsersTable.vue";
import { addUser, getUsers as getUsersFromLocalStorage } from "./components/localStorage";

export default {
  name: "App",
  components: {
    MyButton,
    MyDialog,
    AddNewUserForm,
    UsersTable,
  },
  data() {
    return {
      users: [
        { id: 1, name: "Марина", phone: "7(495)018-70-14" },
        { id: 2, name: "Петр", phone: "7(495)152-23-26" },
        { id: 3, name: "Алексей", phone: "7(495)069-26-15", bossId: 4 },
        { id: 4, name: "Иван", phone: "7(495)550-16-44" },
        { id: 5, name: "Борис", phone: "7(495)535-64-93" },
        ...getUsersFromLocalStorage(),
      ],
      dialogVisible: false,
      selectedSort: "",
      sortBy: [{ value: "name" }, { value: "phone" }],
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    saveUser(user) {
      this.users.push(user);
      this.dialogVisible = false;
      addUser(user);
    },
  },
  computed: {
    sortedUsers() {
      return [...this.users].sort((user1, user2) =>
        user1[this.selectedSort]?.localeCompare(user2[this.selectedSort])
      );
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  padding: 20px;
}
.app__btns {
  display: flex;
  justify-content: space-between;
}
</style>
