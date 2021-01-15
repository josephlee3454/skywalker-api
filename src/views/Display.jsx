import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import WrongDroids from '../componenets/WrongDroids';
import Person from '../componenets/Person'
import Species from '../componenets/Species';
import Starship from '../componenets/Starship'

const Display = (props) => {
    const {category,id} = props;
    const [error, setError] = useState(false)
    const [data, setData] = useState({

    })
    useEffect(()=>{
        console.log("fire")
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response=>{
                setData(response.data)
                setError(false)
                
            })
            .catch(err=>setError(true))
    },[category, id])
    return (
        <div>
            {error ? <WrongDroids /> : category.toLowerCase() == "people" ?  
            <Person person={data}/>: category.toLowerCase() == "species" ?  
            <Species species={data}/>: category.toLowerCase() == "starships" ?  
            <Starship starships={data}/>: category.toLowerCase() == "vehicles" ?  
            <Starship starships={data}/>:''
        }
        </div>
    )
}

export default Display
