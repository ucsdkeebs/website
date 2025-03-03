import TextCard from "@/components/TextCard";
import Image from "next/image";
import styles from "./style.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.whoSection}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.logoImage}
            src="/assets/logo.png"
            fill
            style={{ objectFit: "contain" }}
            alt="UCSD Keebs Logo"
          />
        </div>
        <div className={styles.blurb}>
          <TextCard
            title="Who we are"
            body="Keyboard Club @ UC San Diego, informally known as UCSD Keebs, is a
          non-profit organization and university-registered social club where
          people can make friends based on their shared interest in keebs.We are
          also a resource for asking keyboard questions and requesting build
          services."
            buttonText="About Us"
            variant="secondary"
          />
        </div>
      </div>
      <div className={styles.whatSection}>
        <div className={styles.blurb}>
          <TextCard
            title="What we do"
            body={`Our main focus is our large-scale events that take place every quarter. We hope to give beginners and custom enthusiasts alike a fun experience where you can try new keyboards,
            talk to others in the community, and learn more about the hobby!

            We also host social events such as GBMs, boba socials, and game room socials. Additionally, we organize group buys for club or keyboard-related merchandise designed by our artists.`}
            buttonText="View Events"
            variant="secondary"
          />
        </div>
        <div
          className={styles.imageContainer}
          style={{ transform: "rotate(15deg)" }}
        >
          <Image
            className={styles.logoImage}
            src="/assets/keyboardlogo.png"
            fill
            style={{ objectFit: "contain" }}
            alt="Keyboard Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
