import { useState, useEffect } from 'react';

interface SlotProps {
    value: string;
    slotNumber: number
}

export function Slot({value, slotNumber}: SlotProps){
    const slotID = "slot"+ slotNumber;
    const [val, setVal] = useState(value);
  
    useEffect (() => {
      setVal(value);
    }, [value]);
  
    return (
      <div id={slotID} className="slot">
        {val}
      </div>
    );
}
  