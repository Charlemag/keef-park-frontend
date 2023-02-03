import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const StrainsDetailsPage  = () => {
      
const { strainsId } = useParams();

const [strains, setStrains] = useState(null);


useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/strains/${strainsId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('authToken')}`
          }
        })
          .then(axiosResponse => {
            console.log(axiosResponse.data[0])
            setStrains(axiosResponse.data[0]);
          })
          .catch(err => console.log(err))
}, [strainsId])

    return(
        <div className= "StrainDetailsPage">
            {strains ? (
                <>
                    <h2>Strain Details Page</h2>
                        <div key={strains._id}>
                            <img src={ strains.imgThumb} />
                            <h2>Strain:{strains.strain}.</h2>
                            <p>Strain Type: {strains.strainType}</p>
                            <p>Good Effects:{strains.goodEffects}</p>
                            <p> thc:{strains.thc}</p>
                        </div>
                </>
            ): <p>loading...</p>}
        </div>

    )
}

export default StrainsDetailsPage;