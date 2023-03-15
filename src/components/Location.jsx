import { useState } from "react";

const Location = ({data}) => {

    return (
      <div className="contain">
        <div class="container">Nombre: {data?.name} </div>
        <div class="container">Tipo: {data?.type} </div>
        <div class="container">Dimencion: {data?.dimension}</div>
        <div class="container">Poblacion: {data?.residents?.length} </div>
      </div>
    )
}

export default Location;