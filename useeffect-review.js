

import React, { useState, useEffect } from "react";

export default function App() {

  //!1. Each time we update state variables the app components re renders
  //!2. You can have as many state vars as you need
  //!3. You must always initialize with a default value
  //!4. useState is a react hook
  const [movieData, setMovieData] = useState({});
  const [movieTitle, setMovieTitle] = useState("star wars");


  //!1. useEffect is a react hook
  //!2. Make your API function call inside of useEffect to prevent loops
  //!3. make sure you set state inside useEffect directly or in a call funtion
  useEffect(() => {
    const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;
    const makeApiCall = async () => {
      const res = await fetch(movieUrl);
      const json = await res.json();
      setMovieData(json);
    };
    makeApiCall();
  }, []);




  return(
    //! ANything above the return that changes the state triggers a rerender of the JSX here
  )



}