import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stage from './Stage';

const KanbanBoardContainer = styled.div`
  background: #f1f1f1;
  flex: 1;
  display: flex;
  overflow-x: auto;
  padding-bottom: 8px;
`;

const KanbanBoard = (props) => {
  const { data } = props;
  const { stageOrder, stages, projects } = data;

  return (
    <KanbanBoardContainer>
      {
        stageOrder.map((stageId) => {
          const stage = stages[stageId];
          const projectsInStage = stage.projectIds.map(projectId => projects[projectId]);

          return <Stage stage={stage} projects={projectsInStage} />
        })
      }
    </KanbanBoardContainer>
  );
};

KanbanBoard.propTypes = {
  stages: PropTypes.arrayOf(PropTypes.shape({})),
};

KanbanBoard.defaultProps = {
  stages: [],
};

export default KanbanBoard;