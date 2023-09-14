<script>
  import {UserApiService} from "@/services/user-api-service";

  export default{
    name: "User-List",
    data(){
      return{
        start: 1,
        end: 5,
        users: [],
      };
    }, mounted(){
        new UserApiService().getAll(this.start, this.end).then((response) =>{
          this.users = response.data;
        });
    },
  };
</script>

<template>
  <ul v-for="user in users">
    <li> {{ user.id + " - " +user.name }}</li>
  </ul>
</template>

<style scoped>

</style>