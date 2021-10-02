import axios from "axios";

//Conexão com API do ContractController no back


const ContractController = {
    getlistContract() {
        return axios.get("http://localhost:4000/api/contracts");
    },
    getindexContract(idContract) {
        return axios.get(`http://localhost:4000/api/contract/${idContract}`);
    },    
    postcreateContract(NewContract){
        return axios.post("http://localhost:4000/api/contract", NewContract);
    },
    postupdateContract(upContract){
        return axios.post("http://localhost:4000/api/contract", upContract);
    },
    deleteContract(idContract){
        return axios.delete(`http://localhost:4000/api/user/${idContract}`);
    }
};

export default ContractController;