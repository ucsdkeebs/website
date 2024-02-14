import styles from './style.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.info}>
          <p>
          <strong>Keyboard Club @ UC San Diego</strong> is the largest student-run keyboard club in North America. We’re a diverse and inclusive community of students bound by our love for mechanical keyboards.
          <br/><br/>
          We organize keyboard meets in the Southern California region.
          <br/><br/>
          Interested in learning more? Check out our <a href="https://discord.gg/ucsdkeebs">Discord</a> and <a href="https://www.instagram.com/ucsdkeebs/">Instagram</a>.
          </p>
      </div>
    </div>
  );
};

export default About;
