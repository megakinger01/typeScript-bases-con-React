




interface Persona {
    nombre:string
    edad:number
    direccion: Direccion
}

interface Direccion {  
        pais:string
        casa:number    
}


export const ObjetosLiterales = () => {
    
    const  persona: Persona = {
        nombre : 'Pedro',
        edad:33,
        direccion:{
            pais:'Venezuela',
            casa: 11
        }
    }
    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
            
        </>
    )
}
