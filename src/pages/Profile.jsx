import axios from 'axios';
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth.context';

const Profile = () => {
const{ user,isLoggedIn,logOut } = useContext(AuthContext)
const [ favorites, setFavorites] = useState([])

useEffect(() => {
    axios.get('http://localhost:3001/strains/findFavorites', { 
    headers: {
        authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })

    .then(foundFavorites =>  {
        console.log(foundFavorites.data)
    }) .catch(err  => {
        console.log(err)
    })
},[])



    return (
        <div>
            {
                user&&(
                    <>
                    <h1 style={{textAlign:'center'}}>My Vibes Profile</h1>
                    <h3>Favorite Vibes of : {user.name}</h3>
                    {/* <h3>email:{user.email}</h3> */}
                    </>
                )
            }
            {
                !user&&(
                    <>
                    <h4>loading...</h4>
                    </>
                )
            }
        </div>
    );
}

export default Profile;