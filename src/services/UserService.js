import axios from 'axios'

const USERS_REST_API_URL='http://localhost:8080/usuariows';

class UserService{
	
	getUsers(){
		return axios.get(USERS_REST_API_URL+"/list");
	}

	crearUsuario(usuario){
		return axios.post(USERS_REST_API_URL+"/create",usuario);
	}
}

export default new UserService();