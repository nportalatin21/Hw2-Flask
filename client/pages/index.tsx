import React from 'react'
import { useEffect, useState } from 'react'

function Index() {
    const [message, setMessage] = useState("Loading")
    const [poeple, setPeople] = useState([])

  useEffect(() => {

    fetch("http://localhost:8080/api/home")
    .then((response) => response.json())
    .then((data) => {
        // message = 'Loading'
        //Once data is retrieved
        //message = data.message

        setMessage(data.message);
        setPeople(data.people);
        console.log(data.people)

    })
},[])

  return (

    <div>
    <div>{message}</div>
    <div>{
      poeple.map((person,index) => (
        <div key={index}>{person}</div>
      ))}
      </div>
    </div>
  )
}

export default Index