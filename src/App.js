import React, { Component } from 'react';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';

import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import initialData from './initialData';
import AddProject from './components/AddProject';

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
  }

  updateStage = (stageId, newStage) => {
    console.log('updating stage --> ', newStage);
    const { stages } = this.state;
    const updatedStages = {...stages};
    updatedStages[stageId] = newStage;

    this.setState({ stages: updatedStages });
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
      </AppContainer>
    );
  }
}

export default App;
