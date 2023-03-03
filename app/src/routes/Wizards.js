import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
//BUG #17: getData is not imported
import getData from '../utils/data';

export default function Wizards() {
  const ENDPOINT = 'Wizards';
  //BUG #18: wizards is not initialized
  const [wizards, setWizards] = useState([]);
  
  useEffect(() => {
    let data = getLocalStorage(ENDPOINT);
    if (data.length > 0) {
      setWizards(data);
    } else {
      getData(ENDPOINT)
        .then((data) => {
          setWizards(data);
          setLocalStorage(ENDPOINT, data);
        })
    }
  }, []);

  return (
      <main style={{ padding: "1rem 0" }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <h2 className='mb-4'>Wizards</h2>
            <table className="table table-hover" style={{ maxwidth: '600px' }}>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {/*BUG #19: wizard is not passed into Wizard function*/}
                {wizards.map((wizard) => <Wizard key={wizard.id} wizard={wizard} />)}
              </tbody>
            </table>
          </div>
        </div>
      </main>
  );
}

//BUG #20: wizard is not deconstructed from props
const Wizard = ({wizard}) => {
  return (
    <tr>
      <td>{`${wizard.firstName} ${wizard.lastName}`}</td>
      <td>{wizard.firstName}</td>
      <td>{wizard.lastName}</td>
    </tr>
  )
}