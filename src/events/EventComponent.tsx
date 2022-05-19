import React from "react";

const EventComponent: React.FC = () => {
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event);
  }

  function onDragStart(event: React.DragEvent<HTMLDivElement>) {
    console.log(event);
  }
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
