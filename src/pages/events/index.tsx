import EventCard from "@/components/EventCard";
import styles from "../../styles/EventPage.module.css";
import TitleHeader from "@/components/TitleHeader";
import Events from "../../sections/Events";
export default function EventPage() {
  return (
    <>
      <main className={styles.Events}>
        <br />
        <h1 className={styles.title}>Upcoming Events</h1>
        <br />
            <div className={styles.cards}>
                <Events />
            </div>
        <br />
        <h1 className={styles.title}>Past Events</h1>
            <div className={styles.cards}>
                    <Events />
            </div>
      </main>
    </>
  );
}