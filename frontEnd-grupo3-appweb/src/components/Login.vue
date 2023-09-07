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
  <pv-label class="title">{{$t('login')}}</pv-label>
  <div class="form-container">
    <div class="control">
      <pv-label class="label" for="email">Email:</pv-label>
      <pv-inputText type="email" id="email" size="small" aria-label="Enter your email"/>
    </div>
    <div class="control">
      <pv-label class="label" for="password" >Password:</pv-label>
      <pv-inputText type="password" id="password" size="small" aria-label="Enter your password"/>
    </div>
    <pv-button class="btn">Send</pv-button>
  </div>
</template>

<style scoped>
.title{
  font-style: italic;
  background-color:transparent;
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
.label{
  width: 100px;
  background-color:transparent;
}
.btn{
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>