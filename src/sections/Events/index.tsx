import EventCard from "@/components/EventCard";
import styles from "./style.module.css";

const eventsInfo = [
  {
    id: "01",
    title: "Winter Razer UTC Keyboard Meet",
    description:
      "Join us for the Winter Razer UTC Keyboard Meet on February 18, 2024, at 10:00 AM - an epic in-person gathering for keyboard enthusiasts!",
    location: "Razer Store, 4373 La Jolla Village Drive #G2 San Diego, CA 92122",
    startTime: "2024-02-18T10:00:00-08:00",
    endTime: "2024-02-18T13:00:00-08:00",
  },
  {
    id: "02",
    title: "Studio Keebli: The Keyboard Meet of your Dreams",
    description:
      "Make your dreams come true at Studio Keebli, a Keyboard Meet and Anime-themed convention with Artists, Keyboards, Vendors, and more!",
    location: "Price Center, 9500 Gilman Drive San Diego, CA 92093",
    startTime: "2024-04-06T10:00:00-08:00",
    endTime: "2024-04-06T13:00:00-08:00",
  }
];

const Events: React.FC = () => {
  return (
    <div className={styles.events}>
      <div className={styles.cards}>
      {eventsInfo.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
