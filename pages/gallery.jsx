import React, { useState, useEffect } from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import s from "../styles/pages/Gallery.module.scss";
import Gallery from "react-photo-gallery";
import Image from "next/image";
import beach from "../public/static/assets/beach.svg";
import bar from "../public/static/assets/bar.svg";
import flowers from "../public/static/assets/flowers.svg";
import kitchen from "../public/static/assets/kitchen.svg";

const gallery = () => {
  const [flag, setFlag] = useState([true, false, false, false]);
  const [indexSelected, setIndexSelected] = useState(0);
  const photos = [
    [
      {
        src: "http://localhost:3000/static/assets/img11.jpg",
        width: 4,
        height: 3,
      },
      {
        src: "http://localhost:3000/static/assets/img12.jpg",
        width: 2,
        height: 1,
      },
      {
        src: "http://localhost:3000/static/assets/img13.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/img14.jpg",
        width: 4,
        height: 3,
      },
      {
        src: "http://localhost:3000/static/assets/img15.jpg",
        width: 4,
        height: 3,
      },
      {
        src: "http://localhost:3000/static/assets/img16.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/img17.jpg",
        width: 1,
        height: 1,
      },
      {
        src: "http://localhost:3000/static/assets/img18.jpg",
        width: 4,
        height: 3,
      },
      {
        src: "http://localhost:3000/static/assets/img19.jpg",
        width: 4,
        height: 3,
      },
      {
        src: "http://localhost:3000/static/assets/img111.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/img112.jpg",
        width: 1,
        height: 1,
      },
      {
        src: "http://localhost:3000/static/assets/img113.jpg",
        width: 4,
        height: 3,
      },
    ],
    [
        {
            src: "http://localhost:3000/static/assets/img21.jpg",
            width: 4,
            height: 3,
          },
          {
            src: "http://localhost:3000/static/assets/img24.jpg",
            width: 1,
            height: 1,
          },
          {
            src: "http://localhost:3000/static/assets/img23.jpg",
            width: 3,
            height: 4,
          },
          {
            src: "http://localhost:3000/static/assets/img26.jpg",
            width: 4,
            height: 3,
          },
          {
            src: "http://localhost:3000/static/assets/img25.jpg",
            width: 3,
            height: 4,
          },
          {
            src: "http://localhost:3000/static/assets/img22.jpg",
            width: 1,
            height: 1,
          },
          {
            src: "http://localhost:3000/static/assets/img28.jpg",
            width: 4,
            height: 3,
          },
    ],
    [
      {
        src: "http://localhost:3000/static/assets/img31.jpg",
        width: 1,
        height: 1,
      },
      {
        src: "http://localhost:3000/static/assets/img33.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/img32.jpg",
        width: 1,
        height: 1,
      },
      {
        src: "http://localhost:3000/static/assets/img35.jpg",
        width: 1,
        height: 1,
      },
      {
        src: "http://localhost:3000/static/assets/img36.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/img34.jpg",
        width: 1,
        height: 1,
      },
    ],
    [
      {
        src: "http://localhost:3000/static/assets/img41.jpg",
        width: 1,
        height: 1,
      },
      {
        src: "http://localhost:3000/static/assets/img46.jpg",
        width: 3,
        height: 4,
      },

      {
        src: "http://localhost:3000/static/assets/img42.jpg",
        width: 1,
        height: 1,
      },
      {
        src: "http://localhost:3000/static/assets/img45.jpg",
        width: 1,
        height: 1,
      },
      {
        src: "http://localhost:3000/static/assets/img44.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "http://localhost:3000/static/assets/img43.jpg",
        width: 1,
        height: 1,
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
          <Image src={beach} />
        </div>
        <div
          className={flag[1] ? s.selectedTab : s.tab}
          onClick={() => handleClick(1)}
        >
          <Image src={kitchen} />
        </div>
        <div
          className={flag[2] ? s.selectedTab : s.tab}
          onClick={() => handleClick(2)}
        >
          <Image src={bar} />
        </div>
        <div
          className={flag[3] ? s.selectedTab : s.tab}
          onClick={() => handleClick(3)}
        >
          <Image src={flowers} />
        </div>
      </div>

      <Gallery photos={photos[indexSelected]} />
    </div>
  );
};

export default gallery;
