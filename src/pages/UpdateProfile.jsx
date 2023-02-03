import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { useNavigate } from "react-router-dom";



function UpdateProfile () {
    const [state, setState] = useState({
        email: '',
        name: ''
      });
      
      const navigate = useNavigate();


      // const { logOutUser } = useContext(AuthContext);

      const { logOutUser, authenticateUser, removeToken } = useContext(AuthContext);

      const [id, setId] = useState(null)

      const updateState = e => setState({
        ...state,
        [e.target.name]: e.target.value
      });
    console.log(state)
    
      useEffect(() => {
          axios.get(`${import.meta.env.VITE_API_URL}/auth/updateProfile`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
      }).then((axiosResponse) => {
        console.log(axiosResponse)
        setId(axiosResponse.data.id)
        setState({ email:axiosResponse.data.email, name:axiosResponse.data.name})
      })
      .catch((err) => console.log(err));
    }, []);


    const submitFormHandler = e => {
        e.preventDefault();
        // console.log('form submit works');
        axios.put(`${import.meta.env.VITE_API_URL}/auth/updateProfile`, {
          name: state.name,
          email: state.email
        },{ 
        headers: {
            authorization: `Bearer ${localStorage.getItem('authToken')}`,
          }},
        )
          .then(axiosResponse => {
            console.log(axiosResponse)
            // console.log('THIS IS THE UPDATED USER', axiosResponse.data);
          })
          .catch(err => console.log(err))
      }

      const deleteUser = (userId) => {
        axios.delete(`${import.meta.env.VITE_API_URL}/auth/updateProfile`,
        {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        }
        )
        .then(axiosResponse => {
            console.log(axiosResponse);
           
        })
        .catch(err => console.log(err));
    }
      

    return(
<form onSubmit={submitFormHandler}>
        <label>Email</label>
        <input value={state.email} name="email" onChange={updateState} />
        <label>Name</label>
        <input value={state.name} name="name" onChange={updateState} />
        <button>Update</button>
        <button
        onClick={() => {
          deleteUser();
          localStorage.clear();

          logOutUser();
          authenticateUser();
          navigate("/");
        }}
      >
        Delete
      </button>
</form>


    )
}

export default UpdateProfile;