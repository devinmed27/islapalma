import React from "react";
import s from "./PromotionCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const PromotionCard = ({
  title,
  imagePath,
  index
}) => {
  return (
    <div className={s.container}>
      <div className={s.card}>
        <div className={s.imgContainer}>
          <Image src={imagePath} alt="icon image"/>
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
