import styles from "./style.module.css";
import Image from "next/image";
import eventImage from "../../../public/assets/event.png";
import * as React from 'react';


const events = [
  {
    image: "Path",
    name: "Event Name",
    quarter: "Quarter-year"
  },
  {
    image: "Path2",
    name: "Event Name",
    quarter: "Quarter-year"
  },
  {
    image: "Path3",
    name: "Event Name",
    quarter: "Quarter-year"
  }];
  
  const UpcomingEvents: React.FC = () => {
    return (
      <section className="events">
        <div>
          <h1>Events</h1>
        </div>
      </section>
    );
  };
  
  export default UpcomingEvents;