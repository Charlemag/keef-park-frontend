import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = () => {

  const [projectsArray, setProjectsArray] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/projects', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then(axiosResponse => {
        console.log(axiosResponse.data)
        setProjectsArray(axiosResponse.data);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <main className="ProjectListPage">
      <h1>This is the project page</h1>
      {projectsArray.map(singleProject => {
        return (
          <div className="ProjectCard card" key={singleProject._id}>
            <Link to={`/projects/${singleProject._id}`}>
              <h4>{singleProject.title}</h4>
            </Link>
          </div>
        );
      })}
    </main>
    
  );
};

export default ProjectPage;