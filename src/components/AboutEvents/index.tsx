import styles from "./style.module.css";
import Image from "next/image";
import eventImage from "../../../public/assets/event.png";
import TitleHeader from "../TitleHeader";

const events = [
    { title: 'Winter GBM', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' },
    { title: 'Love Is In The Keebs', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' },
    { title: 'Studio Keebli', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' }
  ];

  const AboutEvents = () => {
    return (
        <>
        <TitleHeader title="Event title #1 (long name long name long name)" />



        </>
    );
  };
  
  export default AboutEvents;  