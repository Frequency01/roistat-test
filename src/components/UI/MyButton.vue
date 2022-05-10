<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default{
  name:'my-button'
}
</script>

<style scoped>
.btn {
  align-self: flex-end;
  margin-top: 15px;
  background: none;
  padding: 10px 15px;
  color: #2589ff;
  border: 1px solid #2589ff;
}
</style>
