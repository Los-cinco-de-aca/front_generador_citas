import React, {Component} from 'react'
import UserService from "../services/UserService";

class CrearUsuarioComponent extends Component{

    constructor(props){
        super(props)
        this.state= {
            nombre: '',
            documento: '',
            apellido:'',
            fechaNacimiento:'',
            contrasena:'',
            genero:'',
            telefono:'',
            direccion:'',
            email:''
        }
        this.changeNombreHandler= this.changeNombreHandler.bind(this);
        this.changeDocumentoHandler= this.changeDocumentoHandler.bind(this);
        this.changeApellidoHandler= this.changeApellidoHandler.bind(this);
        this.changeFechaHandler= this.changeFechaHandler.bind(this);
        this.changeContrasenaHandler= this.changeContrasenaHandler.bind(this);
        this.changeGeneroHandler= this.changeGeneroHandler.bind(this);
        this.changeTelefonoHandler= this.changeTelefonoHandler.bind(this);
        this.changeDireccionHandler= this.changeDireccionHandler.bind(this);
        this.changeEmailHandler= this.changeEmailHandler.bind(this);
        this.crearUsuario= this.crearUsuario.bind(this);
    }

    crearUsuario= (e)=>{
        e.preventDefault();
        let usuario ={
            nombre: this.state.nombre,
            documento: this.state.documento,
            apellido: this.state.apellido,
            fechaNacimiento: this.state.fechaNacimiento,
            contrasena: this.state.contrasena,
            genero: this.state.genero,
            telefono: this.state.telefono,
            direccion: this.state.direccion,
            email: this.state.email};
        console.log('usuario =>'+ JSON.stringify(usuario));

        UserService.crearUsuario(usuario).then(res =>{
            this.props.history.push('/usuarios');
        });

    }

    changeNombreHandler=(event)=>{
        this.setState({nombre: event.target.value});
    }

    changeDocumentoHandler=(event)=>{
        this.setState({documento: event.target.value});
    }

    changeApellidoHandler=(event)=>{
        this.setState({apellido: event.target.value});
    }

    changeFechaHandler=(event)=>{
        this.setState({fechaNacimiento: event.target.value});
    }

    changeContrasenaHandler=(event)=>{
        this.setState({contrasena: event.target.value});
    }

    changeGeneroHandler=(event)=>{
        this.setState({genero: event.target.value});
    }
    changeTelefonoHandler=(event)=>{
        this.setState({telefono: event.target.value});
    }
    changeDireccionHandler=(event)=>{
        this.setState({direccion: event.target.value});
    }
    changeEmailHandler=(event)=>{
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/usuarios');
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">CrearUsuario</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Documento</label>
                                        <input placeholder="Documento" name="documento" className="form-control"
                                               value={this.state.documento} onChange={this.changeDocumentoHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Nombre</label>
                                        <input placeholder="Nombre" name="nombre" className="form-control"
                                        value={this.state.nombre} onChange={this.changeNombreHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Apellido</label>
                                        <input placeholder="Apellido" name="apellido" className="form-control"
                                               value={this.state.apellido} onChange={this.changeApellidoHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Genero</label>
                                        <input placeholder="Genero" name="genero" className="form-control"
                                               value={this.state.genero} onChange={this.changeGeneroHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Fecha</label>
                                        <input placeholder="Fecha" name="fechaNacimiento" className="form-control"
                                               value={this.state.fechaNacimiento} onChange={this.changeFechaHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Telefono</label>
                                        <input placeholder="Telefono" name="telefono" className="form-control"
                                               value={this.state.telefono} onChange={this.changeTelefonoHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Direccion</label>
                                        <input placeholder="Direccion" name="direccion" className="form-control"
                                               value={this.state.direccion} onChange={this.changeDireccionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Email</label>
                                        <input placeholder="Email" name="email" className="form-control"
                                               value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Contraseña</label>
                                        <input placeholder="Contrsena" name="contrasena" className="form-control"
                                               value={this.state.contrasena} onChange={this.changeContrasenaHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.crearUsuario}>Guardar</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                    style={{marginLeft: "10px"}}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CrearUsuarioComponent