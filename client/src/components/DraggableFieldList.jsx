import React from 'react'
import FieldCard from './FieldCard';
import { Droppable, Draggable } from '@hello-pangea/dnd';

const DraggableFieldList = ({ inputs, handleInputChange, deleteInput }) => (
    <Droppable droppableId="formInputs">
        {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col gap-6">
                {inputs.map((input, index) => (
                    <Draggable key={input.id} draggableId={input.id} index={index}>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <FieldCard
                                    input={input}
                                    onChange={handleInputChange}
                                    onDelete={deleteInput}
                                />
                            </div>
                        )}
                    </Draggable>
                ))}
                {provided.placeholder}
            </div>
        )}
    </Droppable>
);

export default DraggableFieldList;
