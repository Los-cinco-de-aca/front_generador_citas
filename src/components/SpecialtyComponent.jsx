import React, {Component} from 'react';
import SpecialtyService from '../services/SpecialtyService';


class SpecialtyComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            specialties: []
        }
        this.crearSpeciality= this.crearSpeciality.bind(this);
        this.actualizarSpeciality= this.actualizarSpeciality.bind(this);
        this.eliminarSpeciality= this.eliminarSpeciality.bind(this);

    }

    componentDidMount() {
        SpecialtyService.getSpecialties().then((response)=>{
            this.setState({specialties: response.data})
            console.log("ESPECIALIDADES "+response.data)
        });
    }

    actualizarSpeciality(id){
        this.props.history.push(`/actualizar-especialidad/${id}`);
    }

    eliminarSpeciality(id){
        SpecialtyService.eliminarSpecialty(id);
        this.props.history.push(`/actualizar-especialidad/${id}`);
    }

    crearSpeciality(){
        this.props.history.push('/crear-especialidad');
    }




    render() {
        return (
            <div>
                <h1 className="text-center"> Lista de Especialidades </h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.crearSpeciality}>Crear Especialidad</button>
                </div>
                <div className="row">
                    <tablet className="table table-striped">
                        <thead>
                        <tr>
                            <td> Id </td>
                            <td> Descripcion </td>
                            <td> Acciones </td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.specialties.map(
                                speciality=>
                                    <tr key={speciality.especialidadId}>
                                        <td>{speciality.especialidadId}</td>
                                        <td>{speciality.descripcion}</td>
                                        <td>
                                            <button onClick={()=> this.actualizarSpeciality(speciality.especialidadId)} className="btn btn-info" >Actualizar</button>
                                            <button onClick={()=> this.eliminarSpeciality(speciality.especialidadId)} className="btn btn-danger" >Eliminar</button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </tablet>
                </div>
            </div>
        );
    }
}

export default SpecialtyComponent;