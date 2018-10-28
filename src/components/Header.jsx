import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: white;
  width: 100%;
  height: 120px;
  padding: 24px;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  box-sizing: border-box;
`;

const TitleContainer = styled.div`

`;

const Title = styled.div`
  color: black;
  font-size: 28px;
  margin-bottom: 3px;
`;

const CountStatus = styled.div`
  color: darkgray;
  font-size: 14px;
`;

const AddProjectButton = styled.button`
  height: 42px;
  border-radius: 21px;
  padding: 0 18px;
  font-size: 18px;
  background: orange;
  color: white;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  outline: none;
  border: 1px solid orange;
  margin-left: auto;
  margin-right: 12px;

  &:hover {
    background: white;
    color: orange;
  }
`;

const AddStageButton = styled.button`
  height: 42px;
  border-radius: 21px;
  padding: 0 18px;
  font-size: 18px;
  background: purple;
  color: white;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  outline: none;
  border: 1px solid purple;

  &:hover {
    background: white;
    color: purple;
  }
`;

const Header = ({ openAddProject, openAddStage, noOfProjects }) => (
  <HeaderContainer>
    <TitleContainer>
      <Title>Mission Control</Title>
      <CountStatus>{ `${noOfProjects || 'No'} projects ongoing.` }</CountStatus>
    </TitleContainer>
    <AddProjectButton onClick={() => openAddProject()}>Add Project</AddProjectButton>
    <AddStageButton onClick={() => openAddStage()}>Add Stage</AddStageButton>
  </HeaderContainer>
);

Header.propTypes = {
  openAddProject: PropTypes.func,
  openAddStage: PropTypes.func,
  noOfProjects: PropTypes.number,
};

Header.defaultProps = {
  openAddProject: () => {},
  openAddStage: () => {},
  noOfProjects: 0,
};

export default Header;
