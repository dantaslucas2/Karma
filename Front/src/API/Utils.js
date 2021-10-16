const UserSessionManagement = {

  isLoggedIn() { 
    return localStorage.getItem('token') ? true : false
  },

  logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('id_user')
      window.location.reload()
  },

  setSession(token, idUser) {
    localStorage.setItem('token', token)
    localStorage.setItem('id_user', idUser)

  }
}

export default UserSessionManagement;
