import React from 'react';

const ProjectItem = ({ id, name, technologies }) => {
  return (
    <div id={id}>
      <h3>{name}</h3>
      <div>
        {technologies.map((tech, index) => (
          <span key={index} className="technology">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
