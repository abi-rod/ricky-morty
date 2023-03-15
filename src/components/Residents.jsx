import { useState, useEffect } from "react";
import axios, { Axios } from "axios";

const ResidentInfo = ({residentsData}) => {
    const[ info , setInfo ]=useState({})
    useEffect( () => {
        axios.get(residentsData)
        .then((resp) => setInfo(resp.data))
        .catch((error)=>console.log(error))
    },[]
        
    )
    
    return (
        <div className="resident">
            <h2 className="h2_resident">Nombre: <span className="span_resident">{info?.name}</span></h2>
            <img  src={info?.image} />
            <h2 className="h2_resident">Status: <span className="span_resident">{info?.status}</span></h2>
            <h2 className="h2_resident">Lugar de origen: <span className="span_resident">{info?.origin?.name}</span></h2>
            <h2 className="h2_resident">Cantidad de episodios donde aparece: <span className="span_resident">{info?.episode?.length}</span></h2>
        </div>
    );
};

export default ResidentInfo;