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
  const img = "http:" + imagePath
  const icon= "http:" + iconPath
  return (
    <div className={s.container} style={alignItem}>
      <div className={s.info}>
        <div className={s.iconContainer}>
          <Image src={icon} alt="icon image" width={50} height={50}/>
        </div>
        <div className={s.title}>
          <h3>{title}</h3>
        </div>
        <p className={s.text}> {text} </p>
        <p className={s.service}> {service}</p>
      </div>
      <div className={s.image}>
        <div className={s.imgContainer}>
          <Image src={img} alt="image banner" width={1444} height={964}/>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
