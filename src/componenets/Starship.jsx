import React from 'react'

const Starship = (props) => {
  
    const {name, cargo_capacity , consumables , cost_in_credits, crew , hyperdrive_rating , length, 
        manufacturer, passengers }= props.starships;


    return (
        <div>
            <h1>Ship : {name}</h1>
            <ul>
                <li>cargo_capacity: {cargo_capacity} kg</li>
                <li>Consumables: {consumables} yrs</li>
                <li>price: {cost_in_credits} credits</li>
                <li>crew members: {crew} memebers</li>
                <li>Hyperdrive rating: {hyperdrive_rating} stars</li>
                <li>Length: {length} Feet</li>
                <li>Manufacturer: {manufacturer} .inc</li>
                <li>Passengers: {passengers} peeps</li>
         
            </ul>
            
        </div>
    )
}

export default Starship

// "cargo_capacity": "1000000000000",
// "consumables": "3 years",
// "cost_in_credits": "1000000000000",
// "created": "2014-12-10T16:36:50.509000Z",
// "crew": "342953",
// "edited": "2014-12-10T16:36:50.509000Z",
// "hyperdrive_rating": "4.0",
// "length": "120000",
// "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
// "max_atmosphering_speed": "n/a",
// "model": "DS-1 Orbital Battle Station",
// "name": "Death Star",
// "passengers": "843342",