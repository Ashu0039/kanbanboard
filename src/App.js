import React, { Component } from 'react';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';

import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import initialData from './initialData';

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
  }

  updateStage = (stageId, newStage) => {
    console.log('updating stage --> ', newStage);
    const { stages } = this.state;
    const updatedStages = {...stages};
    updatedStages[stageId] = newStage;

    this.setState({ stages: updatedStages });
  }

  showToastMessage = (message) => {
    this.setState({ showToast: true, toastMessage: message });
  }

  hideToastMessage = () => this.setState({ showToast: false })

  render() {
    return (
      <AppContainer>
        <Header />
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
      </AppContainer>
    );
  }
}

export default App;
