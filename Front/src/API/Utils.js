const logg = {

    isLoggeIn(){
        if(localStorage.getItem('token'))
        return true
        else{return false}
    },

    idLoggin(){
        return localStorage.getItem('id_user')
    },

    logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('id_user')
        window.location.reload()
    }
}

export default logg;
