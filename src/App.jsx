import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./UTILS/api";

function App() {

  let style = {

    color: "red",
  }


  useEffect(() => {

    apitest();

  }, [])


  const apitest = () => {

    fetchDataFromApi('/movie/popular').then((res) => {

      console.log(res);

    })

  }



  return <h1 style={style}>Sada shiv sarvada shiv</h1>


}



export default App;