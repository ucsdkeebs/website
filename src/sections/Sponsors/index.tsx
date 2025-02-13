import ImageCarousel from "@/components/ImageCarousel";
import styles from "./style.module.css";

const Sponsors: React.FC = () => {
  const images: string[] = [
    "/assets/sponsors/sponsor1.png",
    "/assets/sponsors/sponsor2.png",
    "/assets/sponsors/sponsor3.png",
    "/assets/sponsors/sponsor4.png",
    "/assets/sponsors/sponsor5.png",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.blurb}>
        <h1>Our Sponsors</h1>
        <h2
          className={styles.message}
        >{`UCSD Keebs would not be able to do what we do without the support of our generous sponsors.
        
        From the bottom of our heart, thank you.`}</h2>
        <button className={styles.button}>Want to support?</button>
      </div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default Sponsors;
