import axios from "axios";
export class UserApiService{
    getAll(start, end){
        return axios.get("https://jsonplaceholder.typicode.com/users?_start=" + start +"&_limit=" + end,)
    }
}