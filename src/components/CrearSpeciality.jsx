import React, {Component} from 'react';
import SpecialtyService from "../services/SpecialtyService";


class CrearSpeciality extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            descripcion: ''
        }
        this.changeDescripcionHandler= this.changeDescripcionHandler.bind(this);
        this.crearSpeciality= this.crearSpeciality.bind(this);
    }

    crearSpeciality= (e)=>{
        e.preventDefault();
        let speciality ={
            descripcion: this.state.descripcion};
        console.log('ESPECIALIDAD =>'+ JSON.stringify(speciality));

        SpecialtyService.crearSpeciality(speciality).then(res =>{
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
                            <h3 className="text-center">CrearUsuario</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Descripcion</label>
                                        <input placeholder="Descripcion" name="descripcion" className="form-control"
                                               value={this.state.descripcion} onChange={this.changeDescripcionHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.crearSpeciality}>Guardar</button>
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
export default CrearSpeciality;