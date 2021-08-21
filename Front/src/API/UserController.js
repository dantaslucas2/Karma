import axios from "axios";

//Conexão com API do UserController no back


const UserController = {
    getUser() {
        return axios.get("http://localhost:4000/api/user");
    },
    postUser(NewUser){
        return axios.post("http://localhost:4000/api/user", NewUser);
    },
};

export default UserController;