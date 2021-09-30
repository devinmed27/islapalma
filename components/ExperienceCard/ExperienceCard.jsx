import React from "react";
import s from "./ExperienceCard.module.scss";
import Image from "next/image";

const ExperienceCard = ({
  imagePath,
  iconPath,
  title,
  text,
  service,
  align,
}) => {
  const alignItem = {
    flexDirection: align,
  };
  return (
    <div className={s.container} style={alignItem}>
      <div className={s.info}>
        <div className={s.iconContainer}>
          <Image src={iconPath} />
        </div>
        <div className={s.title}>
          <h3>{title}</h3>
        </div>
        <p className={s.text}> {text} </p>
        <p className={s.service}> {service} </p>
      </div>
      <div className={s.image}>
        <div className={s.imgContainer}>
          <Image src={imagePath} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
