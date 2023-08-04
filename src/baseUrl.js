import axios from "axios";


//instance create -- instance s avriable to hold baseUrl
//create() - method from axios used to create instance

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance