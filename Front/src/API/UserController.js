import axios from "axios";

//Conexão com API do UserController no back

const UserController = {
    getlistUser() {
        return axios.get("http://localhost:4000/api/users");
    },
    getindexUser(idUser) {
        console.log("owqeurecebi",idUser)
        return axios.get(`http://localhost:4000/api/user/${idUser}`);
    },      
    getCardsindexUser(idUser) {
        return axios.get(`http://localhost:4000/api/user/${idUser}/cards`);
    },    
    postcreateUser(NewUser){
        return axios.post("http://localhost:4000/api/user", NewUser);
    },
    postupdateUser(upUser){
        return axios.post("http://localhost:4000/api/user", upUser);
    },
    deleteUser(idUser){
        return axios.delete(`http://localhost:4000/api/user/${idUser}`);
    }
};

export default UserController;