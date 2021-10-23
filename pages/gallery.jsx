import React, { useState, useEffect } from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import s from "../styles/pages/Gallery.module.scss";
import GalleryComp from "react-photo-gallery";
import Image from "next/image";
import beach from "../public/static/assets/beach.svg";
import bar from "../public/static/assets/bar.svg";
import flowers from "../public/static/assets/flowers.svg";
import kitchen from "../public/static/assets/kitchen.svg";

// import {photos} from "../utils/texts"

import { createClient } from "contentful";

export const getServerSideProps = async (res) => {
  var client = await createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  try {
    const gallery = await client
      .getEntries({ content_type: "gallery" })
      .then((entries) => entries.items);
    
    return { props: { gallery, statusCode: 200 } };
  } catch (e) {
    res.statusCode = 503;
    return { props: { gallery: {}, statusCode: 503 } };
  }
};

const Gallery = ({gallery}) => {
  console.log(gallery[0].fields.test.fields.file.url)
  // console.log(gallery[0].fields.photos)
  
  const photos = gallery[0].fields.photos
  const [flag, setFlag] = useState([true, false, false, false]);
  const [indexSelected, setIndexSelected] = useState(0);
  

  const handleClick = (index) => {
    const auxArr = [false, false, false, false];
    auxArr[index] = true;
    setFlag(auxArr);
  };

  useEffect(() => {
    const index = flag.indexOf(true);
    setIndexSelected(index);
  }, [flag]);

  return (
    <div className={s.container}>
      <SubHeader text="Galería" />
      <div className={s.tabsContainer}>
        <div
          className={flag[0] ? s.selectedTab : s.tab}
          onClick={() => handleClick(0)}
        >
          <Image src={beach} alt="beach icon"/>
        </div>
        <div
          className={flag[1] ? s.selectedTab : s.tab}
          onClick={() => handleClick(1)}
        >
          <Image src={kitchen} alt="kitchen icon"/>
        </div>
        <div
          className={flag[2] ? s.selectedTab : s.tab}
          onClick={() => handleClick(2)}
        >
          <Image src={bar} alt="bar icon"/>
        </div>
        <div
          className={flag[3] ? s.selectedTab : s.tab}
          onClick={() => handleClick(3)}
        >
          <Image src={flowers} alt="flowers icon"/>
        </div>
      </div>
      <div className={s.photosContainer}>
      <GalleryComp photos={photos[indexSelected]} />
      </div>
    </div>
  );
};

export default Gallery;
