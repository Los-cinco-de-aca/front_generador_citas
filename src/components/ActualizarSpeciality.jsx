import React, {Component} from 'react';
import SpecialtyService from "../services/SpecialtyService";
import UserService from "../services/UserService";

class ActualizarSpeciality extends React.Component {

    constructor(props){
        super(props)
        console.log("props"+this.props.match.params.id);
        this.state= {
            especialidadId: this.props.match.params.id,
            descripcion: ''
        }
        this.changeDescripcionHandler= this.changeDescripcionHandler.bind(this);
        this.editarSpeciality= this.editarSpeciality.bind(this);
    }

    componentDidMount() {
        SpecialtyService.getSpecialtyById(this.state.especialidadId).then((res)=>{
            let especiality= res.data;
            this.setState({
                descripcion: especiality.descripcion
            });
            console.log('ESPECIALIDAD =>'+ JSON.stringify(especiality))
        });
    }

    editarSpeciality= (e)=>{
        e.preventDefault();
        let speciality ={
            especialidadId: this.state.especialidadId,
            descripcion: this.state.descripcion
        };
        console.log('ESPECIALIDAD =>'+ JSON.stringify(speciality));

        SpecialtyService.editarSpeciality(speciality).then(res =>{
            this.props.history.push('/especialidades');
        });

    }

    changeDescripcionHandler=(event)=>{
        this.setState({descripcion: event.target.value});
    }

    cancel(){
        this.props.history.push('/especialidades');
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Editar Especialidad</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Descripcion</label>
                                        <input placeholder="Descripcion" name="descripcion" className="form-control"
                                               value={this.state.descripcion} onChange={this.changeDescripcionHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.editarSpeciality}>Guardar</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                            style={{marginLeft: "10px"}}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActualizarSpeciality;