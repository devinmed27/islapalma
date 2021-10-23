import React from "react";
import s from "./CarouselView.module.scss";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselView = ({data}) => {
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
            <div key={index} className={s.imgContainer}>
            <Image
              priority={true}
              src={imgPath}
              alt={"Carousel image"}
              placeholder="blur"
              blurDataURL={imgPath}
              width= {650}
              height={650}
              />
              </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselView;
