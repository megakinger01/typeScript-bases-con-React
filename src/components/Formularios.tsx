import { useForm } from "../hooks/useForm"


export const Formularios = () =>  {

    const {email, password, formulario, onChange } =useForm({
        email: 'test@test.com',
        password: '123456'
    })

    return(
        < >
            <h3>Formularios</h3>

            <input 
                type="text" 
                className="form-control"
                placeholder="email"
                value={email}
                onChange={ ({target})=> onChange(target.value, 'email') } 
            />

            <input 
                type="text" 
                className="form-control"
                placeholder="password"
                value={password}
                onChange={ ({target})=> onChange(target.value, 'password') } 
            />

            <code>
                <pre>
                    { JSON.stringify( formulario , null, 2)}
                </pre>
            </code>

        </>
    )
}