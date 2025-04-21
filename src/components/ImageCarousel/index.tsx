import Image from "next/image";
import Link from "next/link";
import { Sponsor } from "@/lib/types/enum";
import styles from "./style.module.css";

interface ImageCarouselProps {
  sponsors: Sponsor[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ sponsors }) => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={index} className={styles.carouselSlide}>
            <Link href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                fill
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
