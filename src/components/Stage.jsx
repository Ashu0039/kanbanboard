import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Droppable } from 'react-beautiful-dnd';
import Project from './Project';

const StageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 2px solid lightgray;
  background: #dedede;
  border-radius: 4px;
  margin: 12px 6px;
  width: auto;
  min-width: 240px;

  &:first-child {
    margin-left: 12px;
  }

  &:last-child {
    margin-right: 12px;
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 200px;
  background: ${props => props.isDraggingOver ? 'lightblue' : 'inherit'};
  transition: background 0.2s ease;
  padding: 12px;
`;

const StageName = styled.h3`
  margin: 6px 0;
  color: #020202;
  padding: 0 12px;
`;

const Stage = ({ stage, projects }) => (
  <StageContainer>
    <StageName>{ stage.title }</StageName>
    <Droppable droppableId={stage.id}>
      {
        (provided, snapshot) => (
          <ProjectList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {
              projects.map((project, index) =>
                <Project key={project.id} project={project} index={index} />)
            }
            { provided.placeholder }
          </ProjectList>
        )
      }
    </Droppable>
  </StageContainer>
);

Stage.propTypes = {
  stage: PropTypes.shape({}).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({})),
};

Stage.defaultProps = {
  projects: [],
};

export default Stage;
