import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Planet = () => {
    const [planet, setPlanet] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response=>{
            console.log(response.data)
            setPlanet(response.data)
        })
        .catch(err=>{
            setPlanet(null)
        })
    },[id])

    return (
        <div>
            {
                planet?(
                    <div>
                        <h1>{planet.name}</h1>
                        <h2>Climate: {planet.climate}</h2>
                        <h2>Terrain: {planet.terrain}</h2>
                        <h2>Surface water: {planet.surface_water}</h2>
                        <h2>Population: {planet.population}</h2>
                    </div>):
                    <h2>Loading...</h2>
            }
        </div>
        );
};

export default Planet;