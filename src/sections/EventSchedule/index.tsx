import ActivitiesCard from "@/components/ActivitiesCard";
import Image from "next/image";
import activitiesImage from "../../../public/assets/activities.jpeg";
import styles from "./style.module.css";

const activitiesInfo = [
  {
    id: "01",
    title: "Early Bird Check In",
    startTime: "2024-02-03T11:30:00-08:00",
    endTime: "2024-02-03T12:00:00-08:00",
  },
  {
    id: "02",
    title: "Check In",
    startTime: "2024-02-03T12:00:00-08:00",
    endTime: "2024-02-03T13:00:00-08:00",
  },
  {
    id: "03",
    title: "Raffle I",
    startTime: "2024-02-03T13:00:00-08:00",
    endTime: "2024-02-03T13:30:00-08:00",
  },
  {
    id: "04",
    title: "Raffle II",
    startTime: "2024-02-03T14:00:00-08:00",
    endTime: "2024-02-03T14:30:00-08:00",
  },
  {
    id: "05",
    title: "Raffle III",
    startTime: "2024-02-03T15:00:00-08:00",
    endTime: "2024-02-03T15:30:00-08:00",
  },
  {
    id: "06",
    title: "Raffle IV",
    startTime: "2024-02-03T16:00:00-08:00",
    endTime: "2024-02-03T16:30:00-08:00",
  },
  {
    id: "07",
    title: "Special Raffle",
    startTime: "2024-02-03T17:00:00-08:00",
    endTime: "2024-02-03T17:15:00-08:00",
  },
  {
    id: "08",
    title: "Closing",
    startTime: "2024-02-03T18:00:00-08:00",
    endTime: "",
  }
];

const EventSchedule: React.FC = () => {
  return (
    <div className={styles.cards}>
        <div className={styles.schedule}>
            <h2 className={styles.title}>Event Schedule</h2>
            <div className={styles.slot}>
            {activitiesInfo.map((activity) => (
                <ActivitiesCard key={activity.id} activity={activity} />
                ))}
            </div>
        </div>
        <div className={styles.activities}>
            <h2 className={styles.title}>Activities</h2>
            <Image
                src={activitiesImage}
                alt="Activity Image"
                className={styles.activity_image}
                width={200}
                height={200}
                quality={100}
            />
        </div>
    </div>
  );
};

export default EventSchedule;
