import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Person = () => {
    const [person, setPerson] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=>{
            console.log(response.data)
            setPerson(response.data)
        })
        .catch(err=>{
            setPerson(null)
        })
    },[id])

    return (
        <div>
            {
                person?(
                    <div>
                        <h1>{person.name}</h1>
                        <h2>Height: {person.height} cm</h2>
                        <h2>Mass: {person.mass} kg</h2>
                        <h2>Hair color: {person.hair_color}</h2>
                        <h2>Skin color: {person.skin_color}</h2>
                    </div>):
                    <h2>Loading...</h2>
            }
        </div>
        );
};

export default Person;
