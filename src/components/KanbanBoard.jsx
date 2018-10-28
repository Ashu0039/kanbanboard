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
    console.log('result of drag end --> ', result);

    const { source, destination, draggableId } = result;

    // Dropped nowhere
    if (!destination) return;

    // Dropped in same place
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    if (source.droppableId === destination.droppableId) {
      this.reArrangeProjectsInSameStage(result);
      return;
    }

    const { data } = this.props;
    const { stages, projects } = data;
    const sourceStage = stages[source.droppableId];
    const destinationStage = stages[destination.droppableId];

    const { projectIds: projectsInSource } = sourceStage;
    const { projectIds: projectsInDestination } = destinationStage;

    // Remove the dragged project from source projects and put in projects of destination stage
    const afterRemovingDraggedProject = [...projectsInSource.slice(0, source.index), ...projectsInSource.slice(source.index + 1)];
    const addingDraggedProject = [...projectsInDestination.slice(0, destination.index), draggableId, ...projectsInDestination.slice(destination.index)];

    const updatedSourceStage = {
      ...sourceStage,
      projectIds: afterRemovingDraggedProject,
    };

    const updatedDestinationStage = {
      ...destinationStage,
      projectIds: addingDraggedProject,
    };

    this.props.updateStage(sourceStage.id, updatedSourceStage);
    this.props.updateStage(destinationStage.id, updatedDestinationStage);

    const projectMoved = projects[draggableId];

    const toastMessage = `${projectMoved.title} moved from ${sourceStage.title} to ${destinationStage.title} stage!`;
    this.props.showToastMessage(toastMessage);
  }

  reArrangeProjectsInSameStage = (result) => {
    const { source, destination, draggableId } = result;

    const { data } = this.props;
    const { stages, projects } = data;

    const sourceStage = stages[source.droppableId];
    const newProjectIds = Array.from(sourceStage.projectIds);
    newProjectIds.splice(source.index, 1);
    newProjectIds.splice(destination.index, 0, draggableId);

    const updatedStage = {
      ...sourceStage,
      projectIds: newProjectIds,
    };

    this.props.updateStage(sourceStage.id, updatedStage);

    const projectMoved = projects[draggableId];

    const toastMessage = `${projectMoved.title} repositioned in ${sourceStage.title} stage.`;
    this.props.showToastMessage(toastMessage);
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
  updateStage: PropTypes.func,
  showToastMessage: PropTypes.func,
};

KanbanBoard.defaultProps = {
  stages: [],
  updateStage: () => {},
  showToastMessage: () => {},
};

export default KanbanBoard;