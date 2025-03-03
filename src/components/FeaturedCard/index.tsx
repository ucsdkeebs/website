import styles from "./style.module.css";
import Image from "next/image";

interface FeaturedCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

const FeaturedCard: React.FC<{ activity: FeaturedCardProps }> = ({
  activity,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.logoImage}
          src={activity.image}
          fill
          alt="Activity Image"
          style={{objectFit: "contain"}}
        />
      </div>
      <div className={styles.blurb}>
        <h2 className={styles.title}>{activity.title}</h2>
        <p className={styles.body}>{activity.description}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
