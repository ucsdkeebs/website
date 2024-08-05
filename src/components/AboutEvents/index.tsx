import styles from "./style.module.css";
import Image from "next/image";
import eventImage from "../../../public/assets/event.png";
import TitleHeader from "../TitleHeader";
import React from 'react';

const events = [
    { title: 'Winter GBM', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' },
    { title: 'Love Is In The Keebs', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' },
    { title: 'Studio Keebli', date: '03 Feb 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...' }
  ];

  const AboutEvents = () => {
    return (
        <>
        <Image
            src={eventImage}
            alt="Event Placeholder"
            className={styles.event_image}
            />
        <TitleHeader title="Event title #1 (long name long name long name)" />
        <div className="event-details">
        <h2>Event title #1 (long name long name long name)</h2>
        <div className="event-info">
          <div className="info-item">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="10" fill="#9F9F9F"/>
            <path d="M19.5 20.65H25.3333V26.4H19.5V20.65ZM27.6667 10.3H26.5V8H24.1667V10.3H14.8333V8H12.5V10.3H11.3333C10.05 10.3 9 11.335 9 12.6V28.7C9 29.965 10.05 31 11.3333 31H27.6667C28.95 31 30 29.965 30 28.7V12.6C30 11.335 28.95 10.3 27.6667 10.3ZM27.6667 12.6V14.9H11.3333V12.6H27.6667ZM11.3333 28.7V17.2H27.6667V28.7H11.3333Z" fill="white"/>
            </svg>
            <span> 06 January 2023</span>
            <span> Saturday, 12:00PM – 3:00PM</span>
          </div>
          <div className="info-item">

            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_72_826)">
              <rect width="40" height="40" rx="10" fill="#9F9F9F"/>
              <path d="M19.5 12.2143C18.4661 12.2143 17.4555 12.5181 16.5959 13.0871C15.7363 13.6561 15.0663 14.4649 14.6706 15.4112C14.275 16.3575 14.1715 17.3987 14.3732 18.4033C14.5749 19.4078 15.0727 20.3306 15.8038 21.0548C16.5348 21.7791 17.4662 22.2723 18.4802 22.4721C19.4942 22.6719 20.5452 22.5694 21.5004 22.1774C22.4556 21.7854 23.2719 21.1217 23.8463 20.2701C24.4207 19.4184 24.7273 18.4172 24.7273 17.393C24.7273 16.0195 24.1765 14.7023 23.1962 13.7311C22.2159 12.76 20.8864 12.2143 19.5 12.2143ZM19.5 20.5001C18.8797 20.5001 18.2733 20.3179 17.7575 19.9765C17.2418 19.6351 16.8398 19.1498 16.6024 18.582C16.365 18.0143 16.3029 17.3895 16.4239 16.7868C16.5449 16.1841 16.8436 15.6304 17.2823 15.1959C17.7209 14.7613 18.2797 14.4654 18.8881 14.3455C19.4965 14.2256 20.1271 14.2871 20.7002 14.5223C21.2733 14.7575 21.7632 15.1557 22.1078 15.6667C22.4524 16.1777 22.6364 16.7784 22.6364 17.393C22.6364 18.217 22.3059 19.0074 21.7177 19.5901C21.1296 20.1728 20.3318 20.5001 19.5 20.5001ZM19.5 6C16.4511 6.00343 13.528 7.20485 11.3721 9.34071C9.21617 11.4766 8.00346 14.3724 8 17.393C8 21.4582 9.89619 25.7668 13.4886 29.854C15.1028 31.7009 16.9196 33.364 18.9054 34.8126C19.0812 34.9346 19.2906 35 19.5052 35C19.7198 35 19.9293 34.9346 20.1051 34.8126C22.0872 33.3634 23.9004 31.7004 25.5114 29.854C29.0986 25.7668 31 21.4582 31 17.393C30.9965 14.3724 29.7838 11.4766 27.6279 9.34071C25.472 7.20485 22.5489 6.00343 19.5 6ZM19.5 32.6699C17.3398 30.9869 10.0909 24.8049 10.0909 17.393C10.0909 14.9207 11.0822 12.5498 12.8468 10.8017C14.6113 9.05354 17.0046 8.07145 19.5 8.07145C21.9954 8.07145 24.3887 9.05354 26.1532 10.8017C27.9178 12.5498 28.9091 14.9207 28.9091 17.393C28.9091 24.8023 21.6602 30.9869 19.5 32.6699Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_72_826">
              <rect width="40" height="40" rx="10" fill="white"/>
              </clipPath>
              </defs>
            </svg>

            <span> East Ballroom Price Center,</span>
            <span> 3135 Matthews Ln, La Jolla, CA 92093</span>
          </div>
          <div className="info-item">

          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_72_829)">
            <rect width="40" height="40" rx="10" fill="#9F9F9F"/>
            <path d="M26 12V13M26 17V18M26 22V23M26 27V28M14 21H21M14 24H18M8.5 11C7.672 11 7 11.672 7 12.5V16.5347C7.609 16.8853 8.11483 17.3902 8.46656 17.9986C8.81828 18.607 9.00347 19.2973 9.00347 20C9.00347 20.7027 8.81828 21.393 8.46656 22.0014C8.11483 22.6098 7.609 23.1147 7 23.4653V27.5C7 28.328 7.672 29 8.5 29H31.5C32.328 29 33 28.328 33 27.5V23.4653C32.391 23.1147 31.8852 22.6098 31.5334 22.0014C31.1817 21.393 30.9965 20.7027 30.9965 20C30.9965 19.2973 31.1817 18.607 31.5334 17.9986C31.8852 17.3902 32.391 16.8853 33 16.5347V12.5C33 11.672 32.328 11 31.5 11H8.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_72_829">
            <rect width="40" height="40" rx="10" fill="white"/>
            </clipPath>
            </defs>
          </svg>

        <span> Registration is CLOSED</span>
            <a href="https://eventbrite-link">Click here for Eventbrite link</a>
          </div>
        </div>
      </div>
      
      <div className="about-event">
        <h3>About Event</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" className="see-more">See more...</a>
      </div>
        </>
    );
  };
  
  export default AboutEvents;  