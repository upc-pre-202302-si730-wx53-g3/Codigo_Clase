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
  <label class="title">{{$t('contact')}}</label>
  <div class="form-container">
    <div class="control">
      <label for="name">Name:</label>
      <input type="text" id="name" aria-label="Enter your name">
    </div>
    <div class="control">
      <label for="email" >Email:</label>
      <input type="email" id="email" aria-label="Enter your email" >
    </div>
    <div class="control">
      <label for="message">Message:</label>
      <input type="text" id="text" aria-label="Enter your message">
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