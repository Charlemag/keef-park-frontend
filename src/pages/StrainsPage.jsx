import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heart from '../assets/images/heart1.png'

const StrainsPage = () => {

    const [strainsArray, setStrainsArray] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3001/strains', {
          headers: {
            authorization: `Bearer ${localStorage.getItem('authToken')}`
          }
        })
          .then(axiosResponse => {
            console.log(axiosResponse.data)
            setStrainsArray(axiosResponse.data);
          })
          .catch(err => console.log(err))
      }, []);

    return(
        <main>
            <h1>Strains</h1>
            {strainsArray.map(strains => {
              
              return (
                <>
                <p>{ strains.strain }</p>
                <img src={ strains.imgThumb} />
                <img className='heart' src={ heart } onClick={ () => {
                    axios.post(`http://localhost:3001/user/${strains.id}/add-favorite`, {
                      headers: {
                        authorization: `Bearer ${localStorage.getItem('authToken')}`
          }
                  
        })
              .then(response => {
                console.log(response.data)
              })
              .catch(err => console.log(err))

                }} 
                />
              </>
              )
            })}
            {/* {strainsArray.map(strains  => {
                return <StrainsDetailsPage key={strains._id}></StrainsDetailsPage>
                    
            })} */}
        </main>
    )
}

export default StrainsPage;