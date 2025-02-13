import styles from "./style.module.css";
import Image from "next/image";
import eventImage from "../../../public/assets/event.png";
import * as React from 'react';


const events = [
    { event_name: 'Winter GBM', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    
  ];
  
  const UpcomingEvents = () => {
    return (
      <div className={styles.event_page}>
        <h1 className={styles.eventHeader}>Events</h1>
        <></>
        {events.map((event, index) => (
          <div className={styles.event_card} key={index}>
            <div c1lassName={styles.event_image}>
            <Image
            src={eventImage}
            alt="Event Placeholder"
            className={styles.event_image}
            />
            </div>

            <div className={styles.event_details}>
              <h3>{event.title}</h3>
              <p>{event.description}</p> <br/>
              <span>{event.date}</span>
            </div>
          </div>
        ))}

    <h2 className={styles.events}>Past Events</h2>

    {events.map((event, index) => (
          <div className={styles.event_card} key={index}>
            <div className={styles.event_image}>
            <Image
            src={eventImage}
            alt="Event Placeholder"
            className={styles.event_image}
            />
            </div>

            <div className={styles.event_details}>
              <h3>{event.title}</h3>
              <p>{event.description}</p> <br/>
              <span>{event.date}</span>
            </div>
          </div>
        ))}

        <a href="http://localhost:3000/events" className={styles.more_events}>See More...</a>
      </div>
    );
  };
  
  export default UpcomingEvents;