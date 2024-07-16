import styles from "./style.module.css";

export type ActivitiesObject = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
};

const formatTime = (time: string) => {
  const activityTime = new Date(time);
  const ampm = activityTime.getHours() >= 12 ? 'PM' : 'AM';
  const hoursFormatted = activityTime.getHours() % 12;
  const formattedTime = `${hoursFormatted ? hoursFormatted : 12}:${String(activityTime.getMinutes()).padStart(2, '0')} ${ampm}`;
  return formattedTime
}

const isHappening = (startTime: string, endTime: string) => {
  // Test with new Date(2024-02-03T16:15:00-08:00)
  const currentTime = new Date();
  const start = new Date(startTime);
  const end = new Date(endTime);
  return currentTime >= start && currentTime <= end;
}

const ActivitiesCard: React.FC<{ activity: ActivitiesObject }> = ({ activity }) => {

  // Format date strings into hour:min format
  const formattedStart = formatTime(activity.startTime);
  const formattedEnd = formatTime(activity.endTime);
  const formattedDate = activity.endTime === "" ? `${formattedStart}` : `${formattedStart} - ${formattedEnd}`;

  // Check if activity is currently happening
  const isActive = activity.endTime && isHappening(activity.startTime, activity.endTime);
  const circleClassName = isActive ? `${styles.circle} ${styles.active}` : styles.circle;

  return (
    <div className={styles.activity_slot}>
      <div className={styles.timeline}>
        <div className={circleClassName}>{formattedStart}</div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.activity_details}>
        <h2 className={styles.activity_title}>{activity.title}</h2>
        <p className={styles.activity_time}>{formattedDate}</p>
        {isActive && <p className={styles.tag}>Happening Now!</p>}
      </div>
    </div>
  );
};

export default ActivitiesCard;
