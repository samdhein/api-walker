import React, { component, useState } from 'react';
import { useHistory } from 'react-router-dom';

const HeaderForm = () => {
    const [category, setCategory] = useState("person")
    const [id, setId] = useState("null")
    const history = useHistory()

    const submitHandler= (e) => {
        e.preventDefault()
        history.push(`/${category}/${id}`) // forward slash so we start at root instead of appending to existing route
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    Search for:  
                    <select onChange={e=>setCategory(e.target.value)}>
                        <option value="Person">Person</option>
                        <option value="Planet">Planet</option>
                    </select>
                    ID:
                    <input type="number" onChange={e=>setId(e.target.value)}/>
                    <button className="btn btn-primary"> Search </button>

                </p>
            </form>
        </div>
        );
};

export default HeaderForm;
