import React from 'react';
import styled from 'styled-components';

const KanbanBoardContainer = styled.div`
  background: #f1f1f1;
  padding: 12px;
  flex: 1;
  display: flex;
`;

const KanbanBoard = () => (
  <KanbanBoardContainer></KanbanBoardContainer>
);

export default KanbanBoard;