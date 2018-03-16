import axios from 'axios';
var fetch=axios.create({
    baseURL:'http://localhost:8000'
    //baseURL:'http://www.lessaber.com'
})
export default fetch