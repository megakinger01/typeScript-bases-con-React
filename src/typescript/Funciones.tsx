

export const Funciones = () => {

    const sumar = ( a:number ,  b:number ):number => {

        return a + b 
    }

    return (
        <>
            <h3>funciones</h3>
            <span>El resultado de la funcion es { sumar(15 , 25)} </span>
        </>
    )
}
