import axios from 'axios';
import { useState } from 'react';

function AddTask(props){

  const [state, setState] = useState({
    title: '',
    description: ''
  });

  const updateState = e => setState({
    ...state,
    [e.target.name]: e.target.value
  });

  const formSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/tasks', {
      title: state.title,
      description: state.description,
      projectId: props.projectId
    }, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then(axiosResponse => {
        console.log(axiosResponse.data);
        props.getProjectDetails();
      })
      .catch(err => console.log(err))
  };

  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={formSubmitHandler}>
        <label>Title</label>
        <input onChange={updateState} value={state.title} name="title" />
        <label>Description</label>
        <input onChange={updateState} value={state.description} name="description" />
        <button>Create Task</button>
      </form>
    </div>
  );
}

export default AddTask;