import Image from 'next/image';
import raccoon from '../../../public/assets/racoon.svg';
import styles from "./style.module.css";

export interface TitleObject {
    title: string;
  };

const TitleHeader: React.FC<TitleObject>= (props) => {
    return (
        <div className={styles.header_banner}>
            <h2 className={styles.header}>{props.title}</h2>
        </div>
      );
}

export default TitleHeader;