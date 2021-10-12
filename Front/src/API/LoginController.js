import axios from "axios";

//Conexão com API do ContractController no back


const LoginController = {
    postLoginUser(NewLogin) {
        return axios.post("http://localhost:4000/api/login", NewLogin);
    },
    postVerifyToken(Token) {
        return axios.post("http://localhost:4000/api/login/auth", Token);
    }
};

export default LoginController;