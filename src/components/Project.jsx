import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const ProjectContainer = styled.div`
  background: ${props => props.isDragging ? 'lightyellow' : 'white'};
  transition: background 0.2s ease;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 6px;
  margin-bottom: 6px;
`;

const ProjectTitle = styled.div`
  color: orange;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ProjectDescription = styled.div`
  font-size: 14px;
  color: black;
`;

const Project = ({ project, index }) => {
  const { title, description } = project;

  return (
    <Draggable draggableId={project.id} index={index}>
      {
        (provided, snapshot) => (
          <ProjectContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
              <ProjectTitle>{ title }</ProjectTitle>
              <ProjectDescription>{ description }</ProjectDescription>
          </ProjectContainer>
        )
      }

    </Draggable>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Project;