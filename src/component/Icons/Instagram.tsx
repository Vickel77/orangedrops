import React from "react";

export default function Instagram({ size = 20, color = "white" }: any) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.5 14.6406C24.1544 14.6406 21.8615 15.3362 19.9113 16.6393C17.961 17.9424 16.441 19.7946 15.5434 21.9616C14.6458 24.1286 14.4109 26.5132 14.8685 28.8136C15.3261 31.1141 16.4556 33.2273 18.1142 34.8858C19.7727 36.5444 21.8859 37.6739 24.1864 38.1315C26.4868 38.5891 28.8714 38.3542 31.0384 37.4566C33.2054 36.559 35.0576 35.039 36.3607 33.0887C37.6638 31.1384 38.3594 28.8456 38.3594 26.5C38.3594 23.3547 37.1099 20.3382 34.8858 18.1142C32.6618 15.8901 29.6453 14.6406 26.5 14.6406ZM26.5 36.2031C24.5809 36.2031 22.7049 35.634 21.1092 34.5679C19.5136 33.5017 18.2699 31.9862 17.5355 30.2132C16.8011 28.4402 16.6089 26.4892 16.9833 24.607C17.3577 22.7248 18.2818 20.9959 19.6389 19.6389C20.9959 18.2818 22.7248 17.3577 24.607 16.9833C26.4892 16.6089 28.4402 16.8011 30.2132 17.5355C31.9862 18.2699 33.5017 19.5136 34.5679 21.1092C35.634 22.7049 36.2031 24.5809 36.2031 26.5C36.2031 29.0734 35.1808 31.5415 33.3611 33.3611C31.5415 35.1808 29.0734 36.2031 26.5 36.2031V36.2031ZM38.3594 0.625H14.6406C10.9235 0.625 7.35852 2.10164 4.73008 4.73008C2.10164 7.35852 0.625 10.9235 0.625 14.6406V38.3594C0.625 40.1999 0.987525 42.0225 1.69188 43.7229C2.39623 45.4234 3.42861 46.9684 4.73008 48.2699C7.35852 50.8984 10.9235 52.375 14.6406 52.375H38.3594C40.1999 52.375 42.0225 52.0125 43.7229 51.3081C45.4234 50.6038 46.9684 49.5714 48.2699 48.2699C49.5714 46.9684 50.6038 45.4234 51.3081 43.7229C52.0125 42.0225 52.375 40.1999 52.375 38.3594V14.6406C52.375 12.8001 52.0125 10.9775 51.3081 9.27708C50.6038 7.57662 49.5714 6.03155 48.2699 4.73008C46.9684 3.42861 45.4234 2.39623 43.7229 1.69188C42.0225 0.987525 40.1999 0.625 38.3594 0.625V0.625ZM50.2188 38.3594C50.2188 41.5047 48.9693 44.5212 46.7452 46.7452C44.5212 48.9693 41.5047 50.2188 38.3594 50.2188H14.6406C11.4953 50.2188 8.47884 48.9693 6.25478 46.7452C4.03072 44.5212 2.78125 41.5047 2.78125 38.3594V14.6406C2.78125 11.4953 4.03072 8.47884 6.25478 6.25478C8.47884 4.03072 11.4953 2.78125 14.6406 2.78125H38.3594C41.5047 2.78125 44.5212 4.03072 46.7452 6.25478C48.9693 8.47884 50.2188 11.4953 50.2188 14.6406V38.3594ZM42.6719 12.4844C42.6719 12.9108 42.5454 13.3277 42.3085 13.6823C42.0716 14.0369 41.7348 14.3133 41.3408 14.4765C40.9468 14.6397 40.5132 14.6824 40.095 14.5992C39.6767 14.516 39.2925 14.3106 38.9909 14.0091C38.6894 13.7075 38.484 13.3233 38.4008 12.905C38.3176 12.4868 38.3603 12.0532 38.5235 11.6592C38.6867 11.2652 38.9631 10.9285 39.3177 10.6915C39.6723 10.4546 40.0892 10.3281 40.5156 10.3281C41.0875 10.3281 41.636 10.5553 42.0403 10.9597C42.4447 11.3641 42.6719 11.9125 42.6719 12.4844Z"
        fill={color}
      />
    </svg>
  );
}