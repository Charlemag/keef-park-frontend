import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AddTask from "../components/AddTask";
import UpdateProject from "../components/UpdateProject";

const ProjectDetailsPage = () => {

  const { projectId } = useParams();

  const [project, setProject] = useState(null);

  const getProjectDetails = () => {
    axios.get(`http://localhost:3001/api/projects/${projectId}`)
      .then(axiosResponse => {
        console.log(axiosResponse.data);
        setProject(axiosResponse.data);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getProjectDetails();
  }, [])

  return (
    <div className="ProjectDetails">
      <h1>project details page</h1>
      {project ? (
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ol>
            {project.tasks.map(singleTask => {
              return <li className="TaskCard card" key={singleTask}>{singleTask}</li>
            })}
          </ol>
          <AddTask projectId={project._id} getProjectDetails={getProjectDetails} />
          <UpdateProject
            title={project.title}
            description={project.description}
            projectId={project._id}
            getProjectDetails={getProjectDetails}
          />
        </div>
      ) : <p>loading...</p>}
    </div>
    
  );
};

export default ProjectDetailsPage;