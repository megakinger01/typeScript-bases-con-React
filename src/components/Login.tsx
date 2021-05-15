import { useEffect, useReducer } from "react"


interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
}


const initialState: AuthState = {

    validando: true,
    token: null,
    username: '',
    nombre: ''
}


type loginPayload = {
    username: string
    nombre  : string
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: loginPayload  }


const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case "logout":
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }

        case "login":
            const { username , nombre } = action.payload
            return {
                validando:false,
                token:'123abc',
                username,
                nombre
            }

        default:
            return state
    }

}


export const Login = () => {

    const [{validando , token , nombre }, dispatch] = useReducer(AuthReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500);
    }, [])

    const login = () => {
        dispatch({
            type:'login',
            payload: {
                nombre: 'PEDRO',
                username:'megakinger'
            }
        })
    }

    const logout = () => {
        dispatch({ type:'logout' })
    }


    if (validando) {
        return(
            <>
                <h3>Login</h3>
            
                <div className="alert alert-info">validando...</div>
            </>
        )
    }

    return (
        <>

        {
            (token) ? <div className="alert alert-success">Autenticado { nombre}</div>
                    : <div className="alert alert-danger">No autenticado</div>

        }
         
        {
            (token) 
                    ? 
                    <button 
                        className="btn btn-danger"
                        onClick={logout}
                        >Logout
                    </button> 
                    : 
                    <button 
                        className="btn btn-primary"
                        onClick={ login }
                        >Login
                    </button>
        }

           
       

            
        </>
    )
}
