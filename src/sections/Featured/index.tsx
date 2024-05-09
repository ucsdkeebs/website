import FeaturedCard from "@/components/FeaturedCard";
import styles from "./style.module.css";

const featuredInfo = [
  {
    id: "01",
    image: "/assets/keyboard.png",
    title: "build your own keeb, from scratch",
    description:
      "Each quarter, we offer a hands-on opportunity for UCSD students to build their own keyboard or parts of a keyboard. This includes wiring the PCB, making the plate, etc",
  },
  {
    id: "02",
    image: "/assets/merch.png",
    title: "keeb club exclusive merch",
    description:
      "Support both our club AND our talented artists by buying our keyboard club @ ucsd exclusive merch! Items are group-buy only and takes about 3 months to ship. Limited in-stock quantities available.",
  },
  {
    id: "03",
    image: "/assets/membership.png",
    title: "membership card",
    description:
      "For a one-time fee get a membership card that will get you discounts to a variety of local San Diego vendors! Offer open to UCSD students only.",
  },
];

const Featured: React.FC = () => {
  return (
    <div className={styles.cards}>
      {featuredInfo.map((activity) => (
        <FeaturedCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default Featured;
