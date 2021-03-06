import React, { Component } from 'react';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';

import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import initialData from './initialData';
import AddProject from './components/AddProject';
import AddStage from './components/AddStage';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const randomNumber = () => Math.floor(Math.random() * 100 + 1)

class App extends Component {
  state = {
    ...initialData,
    showToast: false,
    toastMessage: '',
    addProject: false,
    addStage: false,
  }

  updateStage = (stageId, newStage) => {
    console.log('updating stage --> ', newStage);
    const { stages } = this.state;
    const updatedStages = {...stages};
    updatedStages[stageId] = newStage;

    this.setState({ stages: updatedStages });
  }

  addNewStage = ({ stageName }) => {
    if (!stageName) return;

    console.log('add new stage with name --> ', stageName);
    const newId = randomNumber();
    const newStageId = `stage-${newId}`;
    const newStage = {
      id: newStageId,
      title: stageName,
      projectIds: [],
    };

    const { stages, stageOrder } = this.state;
    const copyStages = { ...stages };
    copyStages[newStageId] = newStage;
    const newStageOrder = [...stageOrder, newStageId];
    this.setState({ stages: copyStages, stageOrder: newStageOrder });

    this.closeAddStage();
  }

  addNewProject = ({ projectName, description }) => {
    console.log('add new project --> ', projectName, description);
    if (!projectName) return;

    const projectDescription = description || 'No Description';

    const newId = randomNumber();
    const newProjectId = `project-${newId}`;
    const newProject = {
      id: newProjectId,
      title: projectName,
      description: projectDescription,
    };

    // Add the new project into planning stage
    const { projects, stages } = this.state;
    const copyProjects = { ...projects };
    copyProjects[newProjectId] = newProject;

    const planningStage = stages['planning'];
    const { projectIds: projectsInPlanning } = planningStage;
    const addedNewProjectId = [...projectsInPlanning, newProjectId];
    const updatedPlanningStage = {
      ...planningStage,
      projectIds: addedNewProjectId,
    };

    const copyStages = { ...stages };
    copyStages['planning'] = updatedPlanningStage;

    this.setState({
      stages: copyStages,
      projects: copyProjects,
    });

    this.closeAddProject();
  }

  openAddProject = () =>  this.setState({ addProject: true })

  closeAddProject = () => this.setState({ addProject: false })

  openAddStage = () => this.setState({ addStage: true })

  closeAddStage = () => this.setState({ addStage: false })

  showToastMessage = (message) => {
    this.setState({ showToast: true, toastMessage: message });
  }

  hideToastMessage = () => this.setState({ showToast: false })

  render() {
    const { projects } = this.state;
    const noOfProjects = Object.keys(projects).length;

    return (
      <AppContainer>
        <Header
          openAddProject={this.openAddProject}
          openAddStage={this.openAddStage}
          noOfProjects={noOfProjects}
        />
        <KanbanBoard
          data={this.state}
          updateStage={this.updateStage}
          showToastMessage={this.showToastMessage}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.showToast}
          autoHideDuration={6000}
          message={this.state.toastMessage}
          onClose={this.hideToastMessage}
        />
        <AddProject
          showAddProject={this.state.addProject}
          onCancel={this.closeAddProject}
          onSubmit={this.addNewProject}
        />
        <AddStage
          showAddStage={this.state.addStage}
          onCancel={this.closeAddStage}
          onSubmit={this.addNewStage}
        />
      </AppContainer>
    );
  }
}

export default App;
