<script>
export default {
  props: {
    name: String,
    email: String,
    message: String
  },
  name: "Contact"
}
</script>

<template>
  <pv-label class="title">{{$t('contact')}}</pv-label>
  <div class="form-container">
    <div class="control">
      <pv-label class="label" for="name">Name:</pv-label>
      <pv-inputText type="text" id="name" size="small" aria-label="Enter your name"/>
    </div>
    <div class="control">
      <pv-label class="label" for="email" >Email:</pv-label>
      <pv-inputText type="email" id="email" size="small" aria-label="Enter your email"/>
    </div>
    <div class="control">
      <pv-label class="label" for="message">Message:</pv-label>
      <pv-inputText type="text" id="text" size="large" aria-label="Enter your message"/>
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