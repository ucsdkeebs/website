import FeaturedCard from "@/components/FeaturedCard";
import styles from "./style.module.css";

const featuredInfo = [
  {
    id: "01",
    image: "/assets/featured/join_us.png",
    title: "1. Join our Discord",
    description:
      "Each quarter, we offer a hands-on opportunity for UCSD students to build their own keyboard or parts of a keyboard. This includes wiring the PCB, making the plate, etc",
  },
  {
    id: "02",
    image: "/assets/featured/updates.png",
    title: "2. Receive updates",
    description:
      "Support both our club AND our talented artists by buying our keyboard club @ ucsd exclusive merch! Items are group-buy only and takes about 3 months to ship. Limited in-stock quantities available.",
  },
  {
    id: "03",
    image: "/assets/featured/workshop.png",
    title: "3. Attend events",
    description:
      "For a one-time fee get a membership card that will get you discounts to a variety of local San Diego vendors! Offer open to UCSD students only.",
  },
];

const Featured: React.FC = () => {
  return (
    <div className={styles.container}>
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
