// import React from "react";
// import styles from "./Hero.module.css";
// import { ReactComponent as HeroImage } from "../../assets/Hero.svg";

// function Hero() {
//   return (
//     <>
//       <div className={styles.hero}>
//         <div>
//           <h1>100 Thousand Songs, ad-free</h1>
//           <h1>Over thousands podcast episodes</h1>
//         </div>
//         {/* <div> */}
//         <HeroImage />
//         {/* </div> */}
//       </div>
//     </>
//   );
// }

// export default Hero;
// // export default Hero;




import React from "react";
import styles from "./Hero.module.css";


function Hero() {
return (
    <div className={styles.hero}>
        <div>
            <h1>100 Thousand Songs, ad-free </h1>
            <h1>Over thousand podcast episodes</h1>
        </div>
        <div>
            < img src={require("../../assets/hero_headphones.png")} width={112} alt="headphones" />
        </div>
    </div>
)
}

export default Hero;