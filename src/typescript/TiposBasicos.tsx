

export const TiposBasicos = () => {

    const nombre: string = 'Pedro'
    const edad  : number = 33
    const estaActivo : boolean = true

    const poderes : string[] = ['volar' , 'velocidad', 'respirar bajo el agua'] 

    return (
        <div>
            <h2>TiposBasicos</h2>
            {nombre},{edad} , { (estaActivo) ? 'esta activo' : 'no esta activo'}
            <br />
            {poderes.join(',')}
        </div>
    )
}
