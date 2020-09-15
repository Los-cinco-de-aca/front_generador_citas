import axios from 'axios'

const USERS_REST_API_URL='http://localhost:8080/usuariows';

class UserService{
	
	getUsers(){
		return axios.get(USERS_REST_API_URL+"/list");
	}

	crearUsuario(usuario){
		return axios.post(USERS_REST_API_URL+"/create",usuario);
	}

	getUsuarioById(usuarioId){
		console.log("Usuario"+usuarioId);
		return axios.get(USERS_REST_API_URL+"/usuario/"+usuarioId);
	}

	editarUsuario(usuario){
		console.log("Usuario"+usuario);
		return axios.put(USERS_REST_API_URL+"/update",usuario);
	}

    eliminarUsuario(usuarioId){
        console.log("Usuario"+usuarioId);
        return axios.delete(USERS_REST_API_URL+"/delete",usuarioId);
    }
}

export default new UserService();