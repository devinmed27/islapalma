import React from "react";
import s from "./SubHeader.module.scss";
import Image from "next/image";
import icon from "../../public/static/assets/subheader_icon.png";

const SubHeader = ({ text }) => {
  return (
    <div className={s.container}>
      <p>{text}</p>
      <div className={s.img}>
        <Image src={icon} alt="Plantas" />
      </div>
    </div>
  );
};

export default SubHeader;
