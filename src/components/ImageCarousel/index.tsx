import Image from "next/image";
import styles from "./style.module.css";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>
        {images.map((image, index) => (
          <div key={index} className={styles.carouselSlide}>
            <Image
              src={image}
              alt={`Sponsor ${index + 1}`}
              fill
              style={{objectFit: "contain"}}
            />
          </div>
        ))}
        {images.map((image, index) => (
          <div key={index} className={styles.carouselSlide}>
            <Image
              src={image}
              alt={`Sponsor ${index + 1}`}
              fill
              style={{objectFit: "contain"}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
