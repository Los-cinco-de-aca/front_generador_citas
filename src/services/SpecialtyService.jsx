import axios from "axios";

const SPECIALTY_REST_API_URL='http://localhost:8080/especialidadws';

class SpecialtyService{

    getSpecialties(){
        return axios.get(SPECIALTY_REST_API_URL+"/list");
    }

    crearSpeciality(specialty){
        return axios.post(SPECIALTY_REST_API_URL+"/create",specialty);
    }

    getSpecialtyById(specialtyId){
        console.log("Especialidad"+specialtyId);
        return axios.get(SPECIALTY_REST_API_URL+"/especialidad/"+specialtyId);
    }

    editarSpeciality(specialty){
        console.log("Usuario"+specialty);
        return axios.put(SPECIALTY_REST_API_URL+"/update",specialty);
    }

    eliminarSpeciality(specialtyId){
        console.log("specialty"+specialtyId);
        return axios.delete(SPECIALTY_REST_API_URL+"/delete",specialtyId);
    }
}

export default new SpecialtyService();