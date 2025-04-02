import EventHero from '@/sections/EventHero';
import UpcomingEvents from '@/sections/UpcomingEvents';
import styles from './style.module.css';

export default function Home() {
    return (
      <main className={styles.main}>
        <EventHero/>
        <UpcomingEvents/>
      </main>
    );
  }