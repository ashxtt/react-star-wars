import {useState, useEffect} from 'react';
import Navbar from './components/NavBar';
import StarshipsCard from './components/StarshipsCards';

import './App.css';

function App() {
  const [starshipsData, setStarshipsData] = useState(null);

  const makeApiCall = async () => {
    const starshipsUrl = `https://swapi.dev/api/starships/`;
    const res = await fetch(starshipsUrl);
    const json = await res.json();
    setStarshipsData(json);


  }

  useEffect(() => {
    makeApiCall();
  }, [])
  console.log(starshipsData)

const starships = starshipsData?.results.map((ele, index) =>{
  return(
    <StarshipsCard {...ele} key={index}/>
  )
})


  return(
    <div className='App'>
      <Navbar />
      {starships}
    </div>
   
  )
  
}

export default App;
