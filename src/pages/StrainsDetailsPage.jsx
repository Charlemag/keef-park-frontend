import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const StrainsDetailsPage  = () => {
      
const { strains } = useParams;
    return(
        <div className= "StrainDetails">
            <h2>Strain Details Page</h2>
            <div key={strains._id}>
                    <h2>Strain:{strains.strains}.</h2>
                    <p>Strain Type: {strains.strainsType}</p>
                    <p>Good Effects:{strains.goodEffects}</p>
                    </div>
        </div>

    )
}

export default StrainsDetailsPage;