import React from 'react';
import UserService from '../services/UserService';

class UserComponet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.crearUsuario= this.crearUsuario.bind(this);
        this.actualizarUsuario= this.actualizarUsuario.bind(this);
        this.eliminarUsuario= this.eliminarUsuario.bind(this);

    }

    actualizarUsuario(id){
        this.props.history.push(`/actualizar-usuario/${id}`);
    }

    eliminarUsuario(id){
        UserService.eliminarUsuario(id);
        this.props.history.push(`/actualizar-usuario/${id}`);
    }

    crearUsuario(){
        this.props.history.push('/crear-usuario');
    }

    componentDidMount() {
        UserService.getUsers().then((response)=>{
           this.setState({users: response.data})
        });
    }



    render() {
        return (
            <div>
                <h1 className="text-center"> Lista de Usuarios </h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.crearUsuario}>Crear Usuario</button>
                </div>
                <div className="row">
                    <tablet className="table table-striped">
                        <thead>
                        <tr>
                            <td> Id </td>
                            <td> Documento </td>
                            <td> Nombre </td>
                            <td> Apellido </td>
                            <td> Genero </td>
                            <td> fechaNacimiento </td>
                            <td> telefono </td>
                            <td> direccion </td>
                            <td> email </td>
                            <td> Acciones </td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(
                                user=>
                                    <tr key={user.idUsuario}>
                                        <td>{user.idUsuario}</td>
                                        <td>{user.documento}</td>
                                        <td>{user.nombre}</td>
                                        <td>{user.apellido}</td>
                                        <td>{user.genero}</td>
                                        <td>{user.fechaNacimiento}</td>
                                        <td>{user.telefono}</td>
                                        <td>{user.direccion}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button onClick={()=> this.actualizarUsuario(user.idUsuario)} className="btn btn-info" >Actualizar</button>
                                            <button onClick={()=> this.eliminarUsuario(user.idUsuario)} className="btn btn-danger" >Eliminar</button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </tablet>
                </div>
            </div>
        )
    }
}
export default UserComponet