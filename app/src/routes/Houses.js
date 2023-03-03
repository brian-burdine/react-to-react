import React, { useEffect, useState } from 'react';
// BUG #06: getData is destructured in the import?
import getData from '../utils/data';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function Houses() {
  const ENDPOINT = 'Houses';
  const [houses, setHouses] = useState([]);
  
  useEffect(() => {
    let data = getLocalStorage(ENDPOINT);
    if (data.length > 0) {
      setHouses(data);
    } else {
      getData(ENDPOINT)
        .then((data) => {
          //BUG #12: no data is passed into setHouses and setLocalStorage
          setHouses(data);
          setLocalStorage(ENDPOINT, data);
        })
    }
  }, []);

  let housesList = houses.map((house) => {
    //BUG #13: no key is provided to the generated house cards
    return <House key={house.id} house={house} />;
  });

  return (
    //BUG #11: html elements using reserved word 'class' instead of 'className'
    <main style={{ padding: "1rem 0" }} className="container">
      <div className="row justify-content-center text-center gap-2">
        <h2>Houses</h2>
        {housesList}
      </div>
    </main>
  );
}


const House = ({ house }) => {
  return (
    //BUG #14: reserved word 'class' used instead of 'className'
    <div className='card col-5 p-3'>
      <h2>{house.name}</h2>
      <div>Colors: {house.houseColours}</div>
      <div>Founder: {house.founder}</div>
      <div>Animal: {house.animal}</div>
      <div>Element: {house.element}</div>
      <div>Ghost: {house.ghost}</div>
      <div>Common Room: {house.commonRoom}</div>
    </div>
  )
}