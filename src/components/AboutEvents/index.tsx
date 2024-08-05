import styles from "./style.module.css";
import Image from "next/image";
import eventImage from "../../../public/assets/event.png";
import TitleHeader from "../TitleHeader";

const events = [
    { title: 'Winter GBM', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' },
    { title: 'Love Is In The Keebs', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' },
    { title: 'Studio Keebli', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' }
  ];

  const AboutEvents = () => {
    return (
        <>
        <Image
            src={eventImage}
            alt="Event Placeholder"
            className={styles.event_image}
            />
        <TitleHeader title="Event title #1 (long name long name long name)" />
        <div className="event-details">
        <h2>Event title #1 (long name long name long name)</h2>
        <div className="event-info">
          <div className="info-item">
            <img src="calendar-icon.png" alt="Calendar" />
            <span>06 January 2023</span>
            <span>Saturday, 12:00PM – 3:00PM</span>
          </div>
          <div className="info-item">
            <img src="location-icon.png" alt="Location" />
            <span>East Ballroom Price Center</span>
            <span>3135 Matthews Ln, La Jolla, CA 92093</span>
          </div>
          <div className="info-item">
            <img src="ticket-icon.png" alt="Ticket" />
            <span>Registration is CLOSED</span>
            <a href="https://eventbrite-link">Click here for Eventbrite link</a>
          </div>
        </div>
      </div>
      <div className="about-event">
        <h3>About Event</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" className="see-more">See more...</a>
      </div>
        


        </>
    );
  };
  
  export default AboutEvents;  