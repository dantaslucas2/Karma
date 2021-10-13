import axios from "axios";

//Conexão com API do ContractController no back


const LoginController = {
    postLoginUser(NewLogin) {
        return axios.post("http://localhost:4000/api/login", NewLogin);
    }
};

export default LoginController;