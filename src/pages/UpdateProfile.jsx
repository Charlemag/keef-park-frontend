import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';



function UpdateProfile () {
    const [state, setState] = useState({
        email: '',
        name: ''
      });
      
      const { logOutUser } = useContext(AuthContext);

      const [id, setId] = useState(null)

      const updateState = e => setState({
        ...state,
        [e.target.name]: e.target.value
      });
    console.log(state)
    
      useEffect(() => {
          axios.get('http://localhost:3001/auth/updateProfile', {
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
        axios.put(`http://localhost:3001/auth/updateProfile`, {
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
        axios.delete(`http://localhost:3001/auth/updateProfile`,
        {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        }
        )
        .then(axiosResponse => {
            console.log(axiosResponse);
            logOutUser()
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
        <button onClick={()=> {deleteUser(id) }
        }
       >Delete</button>
</form>


    )
}

export default UpdateProfile;