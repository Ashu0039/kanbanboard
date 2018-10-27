import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
    <ProjectList>
      {
        projects.map(project => <Project key={project.id} project={project} />)
      }
    </ProjectList>
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
