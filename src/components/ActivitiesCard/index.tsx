import styles from "./style.module.css";

export type ActivitiesObject = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
};

const ActivitiesCard: React.FC<{ activity: ActivitiesObject }> = ({ activity }) => {
  let formattedDate = `${activity.startTime} - ${activity.endTime}`;
  if (activity.endTime === ""){
    formattedDate = `${activity.startTime}`
  }
  return (
    <div className={styles.activity_slot}>
      <div className={styles.timeline}>
        <div className={styles.circle}>{activity.startTime}</div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.activity_details}>
        <h2 className={styles.activity_title}>{activity.title}</h2>
        <p className={styles.activity_time}>{formattedDate}</p>
      </div>
    </div>
  );
};

export default ActivitiesCard;
