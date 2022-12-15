import axios from "axios";
import { useState } from "react";

const UpdateProject = (props) => {
  
  const [state, setState] = useState({
    title: props.title,
    description: props.description
  });

  const updateState = e => setState({
    ...state,
    [e.target.name]: e.target.value
  });

  const submitFormHandler = e => {
    e.preventDefault();
    console.log('form submit works');
    axios.put(`http://localhost:3001/api/projects/${props.projectId}`, {
      title: state.title,
      description: state.description
    })
      .then(axiosResponse => {
        console.log(axiosResponse.data);
        props.getProjectDetails();
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Update Project Form</h1>
      <form onSubmit={submitFormHandler}>
        <label>Title</label>
        <input onChange={updateState} value={state.title} name="title" />
        <label>Description</label>
        <input onChange={updateState} value={state.description} name="description" />
        <button>Update Project</button>
      </form>
    </div>
  );

};

export default UpdateProject;