import ActivitiesCard from "@/components/ActivitiesCard";
import styles from "./style.module.css";

const activitiesInfo = [
  {
    id: "01",
    title: "Early Bird Check In",
    startTime: "11:30 AM",
    endTime: "",
  },
  {
    id: "02",
    title: "Check In",
    startTime: "12:00 PM",
    endTime: "",
  },
  {
    id: "03",
    title: "Raffle I",
    startTime: "1:00 PM",
    endTime: "1:30 PM",
  },
  {
    id: "04",
    title: "Raffle II",
    startTime: "2:00 PM",
    endTime: "2:30 PM",
  },
  {
    id: "05",
    title: "Raffle III",
    startTime: "3:00 PM",
    endTime: "3:30 PM",
  },
  {
    id: "06",
    title: "Raffle IV",
    startTime: "4:00 PM",
    endTime: "4:30 PM",
  },
  {
    id: "07",
    title: "Special Raffle",
    startTime: "5:00 PM",
    endTime: "5:15 PM",
  },
  {
    id: "08",
    title: "Closing",
    startTime: "6:00 PM",
    endTime: "",
  }
];

const EventSchedule: React.FC = () => {
  return (
    <div className={styles.cards}>
    <h2 className={styles.title}>Event Schedule</h2>
    <div className={styles.slot}>
      {activitiesInfo.map((activity) => (
          <ActivitiesCard key={activity.id} activity={activity} />
        ))}
    </div>

    </div>
  );
};

export default EventSchedule;
