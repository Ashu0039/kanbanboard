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
    this.closeAddProject();
  }

  openAddProject = () =>  this.setState({ addProject: true })

  closeAddProject = () => this.setState({ addProject: false })

  showToastMessage = (message) => {
    this.setState({ showToast: true, toastMessage: message });
  }

  hideToastMessage = () => this.setState({ showToast: false })

  render() {
    return (
      <AppContainer>
        <Header
          openAddProject={this.openAddProject}
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
