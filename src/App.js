import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  state = {
    stages: [
      {
        id: 1,
        name: 'Pitching',
        projects: [],
      },
      {
        id: 2,
        name: 'Ongoing',
        projects: [],
      },
      {
        id: 3,
        name: 'Post Production',
        projects: [],
      },
      {
        id: 4,
        name: 'Completed',
        projects: [],
      }
    ],
  }

  render() {
    const { stages } = this.state;

    return (
      <AppContainer>
        <Header />
        <KanbanBoard stages={stages} />
      </AppContainer>
    );
  }
}

export default App;
