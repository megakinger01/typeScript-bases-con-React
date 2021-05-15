import { useCounter } from '../hooks/useCounter';



export const ContadorConHook = () => {

  const {valor , acumular }=useCounter()

    return (
        <>
            <h3>contador <small>{ valor }</small></h3>  

            <button 
                className="btn btn-danger"
                onClick={ () => acumular(1) }
                >+1
            </button>
            &nbsp; 
            <button 
                className="btn btn-danger"
                onClick={ () => acumular(-1) }
                >-1
            </button> 
        </>
    )
}
