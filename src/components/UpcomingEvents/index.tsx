import styles from "./style.module.css";
import Image from "next/image";
import eventImage from "../../../public/assets/event.png";
import calendarIcon from "../AboutEvents/calendarIcon";

const events = [
    { title: 'Winter GBM', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' },
    { title: 'Love Is In The Keebs', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' },
    { title: 'Studio Keebli', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' }
  ];

  // const events = [
  //   {
  //     id: "01",
  //     title: "Winter Razer UTC Keyboard Meet",
  //     description:
  //       "Join us for the Winter Razer UTC Keyboard Meet on February 18, 2024, at 10:00 AM - an epic in-person gathering for keyboard enthusiasts!",
  //     location: "Razer Store, 4373 La Jolla Village Drive #G2 San Diego, CA 92122",
  //     startTime: "2024-02-18T10:00:00-08:00",
  //     endTime: "2024-02-18T13:00:00-08:00",
  //   },
  //   {
  //     id: "02",
  //     title: "Studio Keebli: The Keyboard Meet of your Dreams",
  //     description:
  //       "Make your dreams come true at Studio Keebli, a Keyboard Meet and Anime-themed convention with Artists, Keyboards, Vendors, and more!",
  //     location: "Price Center, 9500 Gilman Drive San Diego, CA 92093",
  //     startTime: "2024-04-06T11:00:00-08:00",
  //     endTime: "2024-04-06T13:00:00-08:00",
  //   }
  // ];
  
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