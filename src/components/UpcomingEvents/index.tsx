import styles from "./style.module.css";
import Image from "next/image";
import { ArrowIcon } from "./ArrowIcon";
import event from "@/assets/event.png";
import ImageCarousel from "../ImageCarousel";

const eventImages = [
  "/public/assets/event.png",
  "/public/assets/event.png",
  "/public/assets/event.png",
];
  
  const UpcomingEvents: React.FC = () => {
    return (
      <div className={styles.event_page}>
        <div className={styles.events_section}>
          <div className={styles.event_text}>
          <h1 className={styles.events}>Events</h1>
          <p className={styles.events_description}>
            Lorem ipsum dolor sit amet. Et animi consequatur et cumque itaque vel iste neque quo magnam sequi! 
            A iure voluptatem qui rerum itaque ea officiis inventore et aliquam sunt rem impedit itaque a molestiae 
            officia? Aut distinctio voluptas rem quod nulla et nisi magni et officiis architecto non modi praesentium nam dicta 
            voluptatum sit odit quam. Sit vitae dolor eum voluptates repellendus qui quia voluptas ex explicabo eaque qui quia 
            culpa et galisum saepe. Et sunt harum hic voluptatem expedita qui aliquam laboriosam sit pariat
          </p>
          </div>
        <section className={styles.image_section}>
          <div className={styles.buttons}>
            <button className={styles.arrow_left}>
            <ArrowIcon/> 
            </button>
            
            <img src="/assets/event.png" alt="Keebs Images" className={styles.images}/>
            <img src="/assets/event.png" alt="Keebs Images" className={styles.images}/>
            <img src="/assets/event.png" alt="Keebs Images" className={styles.images}/>
            

            <button className={styles.arrow_right}>
              <ArrowIcon/>  
            </button>

          </div>
        </section>
        </div>
      </div>
    
      
    );
  };
  
  export default UpcomingEvents;