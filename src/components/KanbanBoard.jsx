import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { DragDropContext } from 'react-beautiful-dnd';
import Stage from './Stage';

const KanbanBoardContainer = styled.div`
  background: #f1f1f1;
  flex: 1;
  display: flex;
  overflow-x: auto;
  padding-bottom: 8px;
`;

class KanbanBoard extends Component {
  onDragEnd = (result) => {
    console.log('result of drag end');
  }

  render() {
    const { data } = this.props;
    const { stageOrder, stages, projects } = data;

    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <KanbanBoardContainer>
          {
            stageOrder.map((stageId) => {
              const stage = stages[stageId];
              const projectsInStage = stage.projectIds.map(projectId => projects[projectId]);
  
              return <Stage key={stage.id} stage={stage} projects={projectsInStage} />
            })
          }
        </KanbanBoardContainer>
      </DragDropContext>
    );
  }
}

KanbanBoard.propTypes = {
  stages: PropTypes.arrayOf(PropTypes.shape({})),
};

KanbanBoard.defaultProps = {
  stages: [],
};

export default KanbanBoard;