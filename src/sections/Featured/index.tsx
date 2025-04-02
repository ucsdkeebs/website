import FeaturedCard from "@/components/FeaturedCard";
import styles from "./style.module.css";

const featuredInfo = [
  {
    id: "01",
    image: "/assets/featured/join_us.png",
    title: "1. Join our Discord",
    description:
      "Join our discord to stay updated on our latest events, connect with fellow keyboard enthusiasts, share tips and builds, and participate in exciting group buys.",
  },
  {
    id: "02",
    image: "/assets/featured/updates.png",
    title: "2. Receive updates",
    description:
      "Go to the #roles channel and react to get updates on club events, sponsorships, recruitment, etc! We also have notifications for our club group buys.",
  },
  {
    id: "03",
    image: "/assets/featured/workshop.png",
    title: "3. Attend events",
    description:
      "Each quarter, we host various workshops and socials for the keyboard community. Some workshops include our build your own keyboard series, making your own artisan keycap, and more!",
  },
];

const Featured: React.FC = () => {
  return (
    <div className={styles.container} id="involved">
      <h1>How do I get involved?</h1>
      <div className={styles.cards}>
        {featuredInfo.map((activity) => (
          <FeaturedCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
