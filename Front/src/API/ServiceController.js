import axios from "axios";

//Conexão com API do ServiceController no back

const ServiceController = {
    getlistService() {
        return axios.get("http://localhost:4000/api/services");
    },
    getlistServiceGroupBy() {
        return axios.get("http://localhost:4000/api/servicesgroupby");
    },
    getindexService(idService) {
        return axios.get(`http://localhost:4000/api/service/${idService}`);
    },    
    postcreateService(NewService){
        return axios.post("http://localhost:4000/api/service", NewService);
    },
    postupdateService(upService){
        return axios.post("http://localhost:4000/api/service", upService);
    },
    deleteService(idService){
        return axios.post(`http://localhost:4000/api/user/${idService}`);
    }
};

export default ServiceController;