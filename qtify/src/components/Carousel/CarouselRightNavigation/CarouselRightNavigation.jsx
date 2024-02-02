// import React, { useEffect, useState } from "react";
// import { useSwiper } from "swiper/react";
// import { ReactComponent as RightArrow } from "../../../assets/rightIcon.svg";
// import styles from "./CarouselRightNavigation.module.css";

// const CarouselRightNavigation = () => {
//   const swiper = useSwiper();
//   const [isEnd, setIsEnd] = useState(swiper.isEnd);

//   useEffect(() => {
//     swiper.on("slideChange", function () {
//       setIsEnd(swiper.isEnd);
//     });
//   }, [isEnd, swiper, swiper.isEnd]);
//   return (
//     <div className={styles.rightNavigation}>
//       {!isEnd && <RightArrow onClick={() => swiper.slidePrev()} />}
//     </div>
//   );
// };

// export default CarouselRightNavigation;



// import React, { useEffect, useState } from "react";
// import { useSwiper } from "swiper/react";
// import styles from "./CarouselRightNavigation.module.css";
// import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";


// export default function CarouselRightNavigation() {
//     const swiper = useSwiper();
//     const [isEnd, setIsEnd] = useState(swiper.isEnd);

//     useEffect(() => {
//         swiper.on("slideChange", function() {
//             setIsEnd(swiper.isEnd);
//         })
//     }, []);

//     return (
//         <div className={styles.rightNavigation}>
//             {!isEnd && <RightArrow onClick={() => swiper.slidePrev()}/>}
//         </div>
//     )
// }

// -----------------------------------------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);

    // Clean up the event listener when the component unmounts
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}
