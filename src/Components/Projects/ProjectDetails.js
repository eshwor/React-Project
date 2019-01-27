import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return(
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span class="card-Title">Project Title {id}</span>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by the new User</div>
          <div>2nd September, 2019</div>
        </div>
      </div>
    </div>
  );

}


export default ProjectDetails;
