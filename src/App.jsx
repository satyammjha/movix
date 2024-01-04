import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./UTILS/api";
import Navbar from "./Components/Navbar/Navbar";

function App() {


  useEffect(() => {

    apitest();

  }, [])


  const apitest = () => {

    fetchDataFromApi('/movie/popular').then((res) => {

      console.log(res);

    })

  }



  return (

    <>
      {/* <h1>jai shiv</h1> */}


      <Navbar />


    </>


  )


}



export default App;