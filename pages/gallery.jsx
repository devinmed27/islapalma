import React, { useState, useEffect } from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import s from "../styles/pages/Gallery.module.scss";
import Gallery from "react-photo-gallery";

const gallery = () => {
  const [flag, setFlag] = useState([true, false, false, false]);
  const [indexSelected, setIndexSelected] = useState(0);
  const photos = [
    [
      {
        src: "http://localhost:3000/static/assets/bannerRoom2.jpg",
        width: 4,
        height: 3,
      },
      {
        src: "http://localhost:3000/static/assets/bannerRoom3.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/bannerRoom4.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/bannerRoom5.jpg",
        width: 4,
        height: 3,
      },
    ],
    [
      {
        src: "http://localhost:3000/static/assets/bannerRoom2.jpg",
        width: 2,
        height: 2,
      },
      {
        src: "http://localhost:3000/static/assets/bannerRoom3.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/bannerRoom4.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/bannerRoom5.jpg",
        width: 4,
        height: 3,
      },
    ],
    [
      {
        src: "http://localhost:3000/static/assets/bannerRoom2.jpg",
        width: 2,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/bannerRoom3.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/bannerRoom4.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/bannerRoom5.jpg",
        width: 4,
        height: 3,
      },
    ],
    [
      {
        src: "http://localhost:3000/static/assets/bannerRoom2.jpg",
        width: 5,
        height: 2,
      },
      {
        src: "http://localhost:3000/static/assets/bannerRoom3.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/bannerRoom4.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/bannerRoom5.jpg",
        width: 4,
        height: 3,
      },
    ],
  ];

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
          
        </div>
        <div
          className={flag[1] ? s.selectedTab : s.tab}
          onClick={() => handleClick(1)}
        >
          cocina
        </div>
        <div
          className={flag[2] ? s.selectedTab : s.tab}
          onClick={() => handleClick(2)}
        >
          bar
        </div>
        <div
          className={flag[3] ? s.selectedTab : s.tab}
          onClick={() => handleClick(3)}
        >
          naturaleza
        </div>
      </div>

      <Gallery photos={photos[indexSelected]} />
    </div>
  );
};

export default gallery;
