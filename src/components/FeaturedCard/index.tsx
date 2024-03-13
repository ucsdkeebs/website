import styles from "./style.module.css";
import Image from "next/image";

export type FeaturedObject = {
  id: string;
  image: string;
  title: string;
  description: string;
};

const FeaturedCard: React.FC<{ activity: FeaturedObject }> = ({ activity }) => {
  return (
    <div className={styles.activity_card}>
      <Image
        src={activity.image}
        alt="Activity Image"
        className={styles.activity_image}
        width={100}
        height={100}
        quality={100}
      />
      <h2 className={styles.activity_title}>{activity.title}</h2>
      <p className={styles.activity_description}>{activity.description}</p>
    </div>
  );
};

export default FeaturedCard;
