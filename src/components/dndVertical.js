import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { Row } from './styles';

const StyledRow = styled(Row)`
  border: 1px solid black;
  justify-content: left;
`;

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


const Item = ({ item, index, renderer: Renderer }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {provided => (
        <StyledRow
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Renderer data={item.data} />
        </StyledRow>
      )}
    </Draggable>
  );
};

const ItemList = React.memo(function ItemList({ items, renderer }) {
  return items.map((item, index) => (
    <Item item={item} index={index} key={item.id} renderer={renderer} />
  ));
});

export const DnDVertical = ({ initialData, handleDragEnd, renderer }) => {
  const [state, setState] = useState({ items: [] });


  useEffect(() => {
    // when component mounts, retrieve items from the cache
    setState({ items: initialData });
  }, [initialData]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const items = reorder(
      state.items,
      result.source.index,
      result.destination.index
    );

    // fire Redux action
    handleDragEnd(items);

    setState({ items });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <ItemList items={state.items} renderer={renderer} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
