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
      <pv-inputText class="text" type="email" id="email" size="small" aria-label="Enter your email"/>
    </div>
    <div class="control">
      <pv-label class="label" for="password" >Password:</pv-label>
      <pv-inputText class="text" type="password" id="password" size="small" aria-label="Enter your password"/>
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
  margin: 5px;
  justify-content: flex-start;
}
.label{
  display: flex;
  width: 50%;
  background-color:transparent;
  margin: 5px;
  justify-content: flex-start;
}

.btn{
  margin: 15px 0;
}
@media (min-width: 445px) and (max-width: 1023px) {
  .text{
    width: 100vw;
  }
}

@media (min-width: 1023px) {
  .control{
    display: flex;
    flex-direction: column;
    margin: 5px;
    flex-wrap: wrap;
  }
}

@media (max-width: 445px){
  .control{
    display: flex;
    flex-direction: column;
    margin: 5px;
    justify-content: center;
    flex-wrap: wrap;
  }
}

</style>