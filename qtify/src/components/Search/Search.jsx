// import React from "react";
// import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// import styles from "./Search.module.css";
// function Search({ placeholder }) {
//   return (
//     <>
//       <form className={styles.wrapper}>
//         <input className={styles.search} placeholder={placeholder} required />
//         <button className={styles.button} type="submit">
//           <SearchIcon />
//         </button>
//       </form>
//     </>
//   );
// }

// export default Search;


import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function Search({ placeholder }){
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} placeholder={placeholder} required />
                <button className={styles.searchButton} type="submit">
                    <SearchIcon/>
                </button>
        </form>
    )
}

export default Search;