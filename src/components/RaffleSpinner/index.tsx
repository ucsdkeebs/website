import { useState, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import { sleep } from "@/lib/utils/raffleHelper";
import { TicketTailorAPI } from "@/lib/api";
import { PublicProfile } from "@/lib/types/apiResponses";
import { TicketTailorData } from "@/lib/types/enum";

//importing components
import { Slot } from "@/components/RaffleComponents/slot";
import AnimationRenderer from "@/components/RaffleComponents/animation";
import Winscreen from "@/components/RaffleComponents/winscreen";
import RaffleSlot from "@/components/RaffleComponents/raffleSlot";
import RaffleGroup from "@/components/RaffleComponents/raffleGroup";

interface RaffleSpinnerProps {
    admin: PublicProfile;
}

type RaffleEntry = [string, string, string, number];

export default function RaffleSpinner({ admin }: RaffleSpinnerProps) {
    // array to store raffle data
    const [raffle, setRaffle] = useState<RaffleEntry[]>([]);
    // the values that are displayed on the slot
    const [slotValues, setSlotValues] = useState(['.','.','.','.','.','.','.','.','.','.'])
    // whether or not the modal should be opened
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // the winner of the raffle
    const [winner, setWinner] = useState({} as RaffleEntry);
    // index of the Winner sheet to be added to the list of winners, prob will remove here
    const [currentWinIndex, setCurrentWinIndex] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    // which slot of the raffle is being spun
    const [raffleSlot, setRaffleSlot] = useState("I");
  
    // opens Modal on win by setting state to true
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    // closes Modal after clicking on x or outside of modal
    const closeModal = () => {
      setModalIsOpen(false);
    };

    const parseData = async (data: TicketTailorData[]) => {   
        return data.map(ticket => [
            ticket.full_name,
            ticket.email, 
            ticket.ticketTailorId,
            ticket.raffle_slot
        ] as RaffleEntry);
    };
  
    //calls api to get the tickets from ticket tailor
    const fetchData = async () => {
      console.log('fetching!');
  
      try {
        const response = await TicketTailorAPI.getCheckedInTicketsNoWin();

        const info = await parseData(response);
        console.log(info);
        setRaffle(info); 
        return info;   
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    };

    //updates ticket to be a winner
    const updateData = async (id: string) => {
        console.log('updating data!');

        try {
            const response = await TicketTailorAPI.updateWinner(id);
        } catch (error) {
            console.error('Error updating the data!', error);
        }      
    };
  
    // calls fetch data command just to avoid errors at the start
    useEffect(() => {
      fetchData();
    }, [raffleSlot]);
  
    // sets the state of raffle array
    useEffect(() => {
      console.log('Raffle state updated');
      let slots = raffle.slice(0, 10);
      let parseSlots = []
      for (let i = 0; i < slots.length; i++)
      {
        if (slots[i].length > 1)
        {
          parseSlots.push(slots[i][0]);
        }
      }
      //console.log("CURRENT SLOTS: ", parseSlots);
      setSlotValues(parseSlots);
    }, [raffle]);
  
    useEffect(() => {
      console.log(currentWinIndex);
    }, [currentWinIndex])
  
    const rollNames = async (raffleNames: RaffleEntry[]) => {
      console.log('rolling');
      // picks a random index to start the spin
      var start = Math.floor(Math.random() * raffleNames.length); 
      // the number of times to spin the wheel, with built in spin so that it always looks like it spins 
      var spins = Math.floor(Math.random() * 20) + 53; 
      for (let i = start; i <= start + spins; i++) {
        let delay = 0.05;
        // checks if there is less than 20 spins left, then starts to slow down the spin
        if (i >= start + spins - 20) {
          delay = (0.05 + (0.02 * (i - (start + spins - 20)) / 5)); //slows down the spin by 0.004 seconds.
        }
              
        await new Promise<void> ( resolve => { 
          gsap.to(".slot", { // animates a slide downward
            duration: delay, // Animation duration in seconds
            y: "+=4vw", // Move each element down by one slot
            ease: "power4.out", // Easing function 
            // after roll completed, resets the divs with new values, i.e. slot2 goes back to its original place, but with the value of the old slot3 so the roll is complete
            onComplete: () => {
              const shiftedSlots = [];
              for (let j = slotValues.length; j > 0; j--) {
                //console.log(parsedData[(i + j - (slotValues.length / 2)) % parsedData.length][0]);
                let index = (i + j - (slotValues.length / 2));
                shiftedSlots.push(raffleNames[(index >= 0 ? index : raffleNames.length + index) % raffleNames.length][0]);
              }
              setSlotValues(shiftedSlots);
              gsap.set(".slot", { //set resets the slots to their original place
                y: "-=4vw"
              })
              resolve();
            }
          });
        });
        gsap.killTweensOf('.slot');
      }
  
      // gets winning index and sets the winner to be the string at that index
      let winIndex = (start + spins + 1) % raffleNames.length;
      console.log("win Index: " + winIndex);
      setWinner(raffleNames[winIndex]);
    }

    //creates list for thing
    const numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(i);
    }
  
    const handleAnimationClick = async () => {
      setIsButtonDisabled(true);
      //const protectedId = await addProtectedData();
      const updatedRaffle = await fetchData();
      console.log(updatedRaffle);
      console.log('Updated Raffle:')
      
      await rollNames(updatedRaffle);
      await sleep(1000);
    
      setIsButtonDisabled(false);
      openModal();
      //updateProtectData(protectedId);
    };  
  
    return (
      <div className="raffle">
    
          <div className ="Animation">
            <AnimationRenderer
                onAnimate={handleAnimationClick}
                staticSrc="/assets/raffle/Animation_Frames/kwibs_0000.png"
                gifSrc="/assets/raffle/shortened_kwibs.gif"
                animationDuration={6480} // Example: 5000 milliseconds for a 5-second GIF
                isButtonDisabled={isButtonDisabled}
                setIsButtonDisabled={setIsButtonDisabled}
            />
          </div>
    
          <div className = "frame">
              <Image id="slotframe" src="/assets/raffle/Raffle_Frame.png" alt="Raffle Frame" />
              <div className="raffleBody">
                {numbers.map((num) => (
                  <Slot key={num} value={slotValues[num]} slotNumber={num} />
                ))}
            </div>       
          </div> 
          <div className="raffleSlotSign">
            <RaffleSlot
              raffleSlot={raffleSlot}
              setRaffleSlot={setRaffleSlot}
              isDisabled={isButtonDisabled}
            />
          </div>
          <div className="LowerRaffle">
          </div>
    
          <Winscreen
            isOpen={modalIsOpen}
            closeModal={closeModal}
            modalText={winner[0]}
            remove={() => {
              updateData(winner[2]) // 2 is the index of the tickettailorid
              closeModal()
            }}
          /> 
      </div>
      
    );
}