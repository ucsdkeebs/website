import React, { useState, useCallback } from 'react';

// Styling for the boxes
const boxStyle = {
  width: '100px',
  height: '100px',
  margin: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid black',
  cursor: 'pointer',
};

const getBoxStyle = (isActive: boolean) => ({
  ...boxStyle,
  ...(isActive && { backgroundColor: '#4CAF50' }),
});

interface BoxProps {
    num: number;
    isActive: boolean;
    onClick: (num: number) => void;
}

const Box = ({ num, isActive, onClick }: BoxProps) => (
  <div style={getBoxStyle(isActive)} onClick={() => onClick(num)}>
    {num}
  </div>
);


const RaffleGroup = () => {
  const [activeBox, setActiveBox] = useState(1);

  const handleBoxClick = useCallback((boxNumber: number) => {
    setActiveBox(boxNumber);
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      {[1, 2, 3, 4, 5].map((num) => (
        <Box
          key={num}
          num={num}
          isActive={activeBox === num}
          onClick={handleBoxClick}
        />
      ))}
    </div>
  );
};

export default RaffleGroup;