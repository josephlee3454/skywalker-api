import React from 'react'

const Species = (props) => {
  
    const {name, average_height , average_lifespan , classification, designation , eye_colors , hair_colors, 
        homeworld, language }= props.species;


    return (
        <div>
            <h1>Species : {name}</h1>
            <ul>
                <li>Average Height: {average_height} cm</li>
                <li>Average lifespan: {average_lifespan} kg</li>
                <li>Classification: {classification}</li>
                <li>Designation: {designation}</li>
                <li>Eye Colors: {eye_colors}</li>
                <li>Hair colors: {hair_colors}</li>
                <li>Home World: {homeworld}</li>
                <li>Langauge: {language}</li>
         
            </ul>
            
        </div>
    )
}

export default Species



// {
//     "average_height": "2.1",
//     "average_lifespan": "400",
//     "classification": "Mammal",
//     "created": "2014-12-10T16:44:31.486000Z",
//     "designation": "Sentient",
//     "edited": "2014-12-10T16:44:31.486000Z",
//     "eye_colors": "blue, green, yellow, brown, golden, red",
//     "hair_colors": "black, brown",
//     "homeworld": "https://swapi.dev/api/planets/14/",
//     "language": "Shyriiwook",
//     "name": "Wookie",
//     "people": [
//         "https://swapi.dev/api/people/13/"
//     ],