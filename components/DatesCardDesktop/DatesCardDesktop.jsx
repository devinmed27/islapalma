import React from "react";
import s from "./DatesCardDesktop.module.scss";
import Image from "next/image";
import leaf from "../../public/static/assets/rbleaft.png";
import formatterPeso from "../../utils/formatterPeso";

const DatesCardDesktop = ({ title, imagePath, description, price1 }) => {
  return (
    <div className={s.container}>
      <div className={s.cardContainer}>
        <Image src={imagePath} alt="banner image"/>
      </div>
      <div className={s.info}>
        <div className={s.iconContainer}>
          <Image src={leaf} alt="leaf image"/>
        </div>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
        <p className={s.amount}>Desde: {formatterPeso(price1)}</p>
      </div>
    </div>
  );
};

export default DatesCardDesktop;
