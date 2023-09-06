<script>
export default {
  props: {
    email: String,
    password: String
  },
  name: "Login"
}
</script>

<template>
  <label class="title">{{$t('login')}}</label>
  <div class="form-container">
    <div class="control">
      <label for="mail">Email:</label>
      <input type="email" id="mail" aria-label="Enter your email">
    </div>
    <div class="control">
      <label for="password" >Password:</label>
      <input type="password" id="password" aria-label="Enter your password" >
    </div>
    <button class="btn">Send</button>
  </div>
</template>

<style scoped>
.title{
  font-style: italic;
}

.form-container{
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.control{
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 10px;
}
.form-container label{
  width: 100px;
}
.btn{
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>