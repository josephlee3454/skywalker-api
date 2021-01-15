
import React,{useState} from 'react'
import './App.css';
import Search from './componenets/Search';
import {Router, navigate} from '@reach/router';
import Display from './views/Display';


function App() {
const  [searchTerms, setSearchTerms] = useState({
  category: 'people',
  id: '',
}
)

const [data,setData] = useState({})

const changeHandler = e => {
  setSearchTerms({
    ...searchTerms,
    [e.target.name]: e.target.value
  })
}

const submitHandler = e => {
  const {category, id} = searchTerms
  navigate(`/${category}/${id}`);
  console.log(searchTerms)
  e.preventDefault();
  }




// const fetchData = () =>{
//   const {category, id}= serachTerms
//   axios.get(`https://swapi.dev/api/${category}/${}`)
// }


  return (
    <div className="container">

      <Search searchTerms= {searchTerms} submitHandler={submitHandler} changeHandler={changeHandler}/>
      <Router >
        <Display path="/:category/:id"/>
      </Router>
  
    </div>
  );
}

export default App;