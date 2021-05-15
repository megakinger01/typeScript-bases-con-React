import { useEffect, useRef, useState } from "react"
import { reqRespApi } from "../api/reqResp"
import { ReqRespListado, Usuario } from "../interfaces/reqResp"


export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const paginaRef = useRef(1)

    useEffect(() => {
        usuariosRegistrados()
    }, [])


    const usuariosRegistrados = async () => {
        const resp = await reqRespApi.get<ReqRespListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if (resp.data.data.length > 0) {
            setUsuarios( resp.data.data)
            
        } else {
            alert('no hay mas usuarios')
            
        }

    }

    const siguientePagina = ( ) => {
    
        usuariosRegistrados();
        paginaRef.current ++
   }

   const anteriorPagina = ( ) => {
       
    if (paginaRef.current > 1) {
        paginaRef.current --
        usuariosRegistrados()
    }
   }

    return {
        usuarios , siguientePagina , anteriorPagina
    }
}
