import React from "react";
import s from "./DatesCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const DateCard = ({
  title,
  imagePath,
  index
}) => {
  const image = "http:" + imagePath
  return (
    <div className={s.container}>
      <div className={s.card}>
        <div className={s.imgContainer}>
          <Image src={image} alt="image" width={1444} height={963}/>
        </div>
        <div className={s.title}>
          <h3>{title}</h3>
        </div>
        <Link href={`/dates/${index}`}>
          <a>VER MÁS...</a>
        </Link>
      </div>
    </div>
  );
};

export default DateCard;
