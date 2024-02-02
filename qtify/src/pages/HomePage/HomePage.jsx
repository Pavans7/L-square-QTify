// import React from "react";
// import styles from "./HomePage.module.css";
// import {useOutletContext } from "react-router-dom";
// import Hero from "../../components/Hero/Hero";
// import Section from "../../components/Section/Section";
// function HomePage() {
//    const { data} = useOutletContext();
//    const {topAlbums , newAlbums } = data;
//    return(
//       <>
//         <Hero/>
//         <div className={styles.wrapper}>
//          <Section title ="TopAlbums" data ={topAlbums} type="album"  />
//          <Section title ="NewAlbums" data ={newAlbums} type="album"  />
//          <Section title ="Songs" data ={topAlbums} type="album"  />
//         </div>
//       </>
//    )
   


// }
// export default HomePage;



import React from "react";
import styles from "./HomePage.module.css";
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { fetchFilters } from "../../api/api";

function HomePage() {
    const { data } = useOutletContext();
    const {topAlbums, newAlbums, songs } = data;
    return (
        <>
        <Hero/>
        <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album" />
            <Section title="New Albums" data={newAlbums} type="album" />
            <Section 
            title="Songs" 
            data={songs} 
            filterSource={fetchFilters}
            type="song" />
        </div>
     </>
    )

}

export default HomePage;
