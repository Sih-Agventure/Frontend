import React from 'react'
import { useState,useEffect } from 'react'

function About() {

  const [items, setitems ] = useState([]);

  useEffect(()=>{
    cosmetic() 
  },[])

  const cosmetic = async() => {
    const data = await fetch('https://fortnite-api.com/v1/banners')

    const items = await data.json();

    console.log(items);
    setitems(items);
  }

  return (
    <div>About Page</div>
  )
}

export default About