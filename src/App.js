import React, { Component } from 'react';
import styled from 'styled-components';

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
  state = initialData

  render() {
    return (
      <AppContainer>
        <Header />
        <KanbanBoard data={this.state} />
      </AppContainer>
    );
  }
}

export default App;
