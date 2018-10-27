import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Droppable } from 'react-beautiful-dnd';
import Project from './Project';

const StageContainer = styled.div`
  flex: 1;
  border: 2px solid lightgray;
  background: #dedede;
  border-radius: 4px;
  margin: 12px 6px;
  padding: 0 12px;
  width: auto;
  min-width: 240px;

  &:first-child {
    margin-left: 12px;
  }

  &:last-child {
    margin-right: 12px;
  }
`;

const ProjectList = styled.div``;

const StageName = styled.h3`
  margin: 6px 0;
  color: #020202;
`;

const Stage = ({ stage, projects }) => (
  <StageContainer>
    <StageName>{ stage.title }</StageName>
    <Droppable droppableId={stage.id}>
      {
        (provided) => (
          <ProjectList
            ref={provided.innerRef}
            {...provided.droppableProps}
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
