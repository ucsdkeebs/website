import React from "react";

interface RaffleSlotProp {
    raffleSlot: string;
    setRaffleSlot: (value: string) => void;
    isDisabled: boolean;
}

const RaffleSlot = ({ raffleSlot, setRaffleSlot, isDisabled }: RaffleSlotProp) => {
  return(
    <div className="rectangleWrapper">
      <div id="titleTag">Now Showing:</div>
      <div className="emptyLine"></div>
      <div className="line"></div> 
      <div className="selectWrapper">
        <select
          value={raffleSlot}
          onChange={(e) => setRaffleSlot(e.target.value)}
          className="select"
          disabled={isDisabled}
        >
          <option value="I">Raffle Slot I</option>
          <option value="II">Raffle Slot II</option>
          <option value="III">Raffle Slot III</option>
          <option value="IV">Raffle Slot IV</option>
          <option value="all">All Sections</option>
        </select>
      </div>
      <div className="line"></div>
      <div className="emptyLine"></div>
    </div>
  );
};


export default RaffleSlot;