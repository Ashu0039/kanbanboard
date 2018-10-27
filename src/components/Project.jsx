import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  background: white;
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

const Project = ({ project }) => {
  const { title, description } = project;

  return (
    <ProjectContainer>
      <ProjectTitle>{ title }</ProjectTitle>
      <ProjectDescription>{ description }</ProjectDescription>
    </ProjectContainer>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Project;