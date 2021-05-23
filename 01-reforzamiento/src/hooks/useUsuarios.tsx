import { useRef, useState, useEffect } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';


export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1)

    useEffect(() => {
        // llamando al API
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async() => {
        // reqResApi.get<ReqResListado>('/users')
        // .then(resp => {
        //     // console.log('resp', resp.data.data[0])
        //     setUsuarios(resp.data.data)
        // }).catch(console.log);
        const resp = await reqResApi.get<ReqResListado>('/users',{
            params: {
                page: paginaRef.current
            }
        });

        if(resp.data.data.length > 0){
            setUsuarios(resp.data.data);
            // paginaRef.current ++;
        } else{
            paginaRef.current --;
            alert('No hay mas registros');
        }

        setUsuarios(resp.data.data);
    }

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if(paginaRef.current > 1){
            paginaRef.current --;
            cargarUsuarios();
        }
        cargarUsuarios();
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }

}
