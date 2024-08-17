import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map(project => (
        <ProjectItem
          key={project.id}
          id={project.id}
          name={project.name}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default ProjectList;
