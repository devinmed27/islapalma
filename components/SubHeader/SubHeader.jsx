import React from "react";
import s from "./SubHeader.module.scss";

const SubHeader = ({ text }) => {
  return (
    <div className={s.container}>
      <p>{text}</p>
      <img
        className={s.img}
        src="/static/assets/subheader_icon.png"
        alt="Plantas"
      />
    </div>
  );
};

export default SubHeader;
