import React from "react";
import s from "./PromotionCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const PromotionCard = ({
  title,
  imagePath,
  index
}) => {
  const img = "http:" + imagePath

  return (
    <div className={s.container}>
      <div className={s.card}>
        <div className={s.imgContainer}>
          <Image src={img} alt="icon image" width={1444} height={1425}/>
        </div>
        <div className={s.title}>
          <h3>{title}</h3>
        </div>
        <Link href={`/promos/${index}`}>
          <a>VER MÁS...</a>
        </Link>
      </div>
    </div>
  );
};

export default PromotionCard;
