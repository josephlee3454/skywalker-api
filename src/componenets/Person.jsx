import React from 'react'

const Person = (props) => {
  
    const {name, height, mass, hair_color,skin_color } = props.person;

    return (
        <div>
            <h1>{name}</h1>
            <ul>
                <li>Height: {height} cm</li>
                <li>Mass: {mass} kg</li>
                <li>Hair Color: {hair_color}</li>
                <li>Skin Tone: {skin_color}</li>
         
            </ul>
            
        </div>
    )
}

export default Person
