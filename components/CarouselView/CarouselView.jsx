import React from "react";
import s from "./CarouselView.module.scss";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../public/static/assets/carr1.jpg";
import img2 from "../../public/static/assets/carr2.jpg";
import img3 from "../../public/static/assets/carr3.jpg";
import img4 from "../../public/static/assets/carr4.jpg";
import img5 from "../../public/static/assets/carr5.jpg";

const CarouselView = () => {
  const data = [img1, img2, img3, img4, img5];

  return (
    <div className={s.container}>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={4000}
        emulateTouch={true}
        useKeyboardArrows={true}
      >
        {data.map((imgPath, index) => {
          return (
            <div className={s.imgContainer}>
            <Image
              key={index}
              priority={true}
              src={imgPath}
              alt={"Carousel image"}
              placeholder="blur"
              blurDataURL={imgPath}
              />
              </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselView;
