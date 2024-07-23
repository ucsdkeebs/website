import styles from "./style.module.css";
import Image from "next/image";
import eventImage from "../../../public/assets/event.png";

const events = [
    { title: 'Winter GBM', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' },
    { title: 'Love Is In The Keebs', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' },
    { title: 'Studio Keebli', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' }
  ];
  
  const UpcomingEvents = () => {
    return (
      <div className={styles.event_page}>
        <h2 className={styles.events}>Upcoming Events</h2>

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