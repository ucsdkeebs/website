import styles from "../../styles/EventPage.module.css";
import TitleHeader from "@/components/TitleHeader";
import Events from "../../sections/Events";
import Footer from "@/components/Footer";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function EventPage() {
  return (
    <>
      <main className={styles.Events}>
        <UpcomingEvents />
      </main>
    </>
  );
}