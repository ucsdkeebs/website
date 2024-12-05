import TextCard from "@/components/TextCard";
import Image from "next/image";
import styles from "./style.module.css";

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blurb}>
        <TextCard
          title="Keyboard Club @ UC San Diego"
          body="Keyboard Club @ UC San Diego is the largest student-run keyboard club
          in North America. We’re a diverse and inclusive community of students
          bound by our love for mechanical keyboards."
          buttonText="Join Us"
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.officerImage}
          src="/assets/keebs_officers.png"
          fill
          style={{ objectFit: "cover" }}
          alt="Keebs Officers"
        />
      </div>
    </div>
  );
};

export default Hero;
