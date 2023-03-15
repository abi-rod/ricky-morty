import { useState } from 'react';
import axios from 'axios';

const Buscador = ({setResidentsArray}) => {
    const [searchValue, setSearchValue]= useState("")
    const onSubmit = (e)=>{e.preventDefault()}
    const onClick = () => { 
        axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`)
        .then((resp)=>{setResidentsArray(resp.data)})
        .catch ((error)=>{console.log(error)})
    }

    return (
        
    <form onSubmit={onSubmit} className="search">
      <label className='search_label' htmlFor="search-l"> Buscador: </label>
        <input className='search_input'
        type="text" 
        name="search" 
        id="search-l"
        value={searchValue}
        onChange={(e)=> setSearchValue(e.target.value)}
      />

        <button className='boton' type='submit'
        onClick={onClick}
        > Buscar </button>

    </form>
        
    );
};

export default Buscador;


