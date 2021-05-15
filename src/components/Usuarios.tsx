
import { useUsuarios } from "../hooks/useUsuarios"
import {  Usuario } from "../interfaces/reqResp"


export const Usuarios = () => {

    const { usuarios , siguientePagina , anteriorPagina } = useUsuarios()

    const renderItem = ({ id, first_name, last_name, email, avatar }: Usuario) => {

        return (
            <tr key={id.toString()}>
                <td>
                    <img
                        src={avatar}
                        alt={first_name}
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{first_name}, {last_name}</td>
                <td>{email}</td>
            </tr>
        )

    }


    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>

            <button
                className="btn btn-primary"
                onClick={anteriorPagina}
            >anterior
            </button>

            &nbsp;

            <button
                className="btn btn-primary"
                onClick={siguientePagina}
            >siguiente
            </button>
        </>
    )
}
